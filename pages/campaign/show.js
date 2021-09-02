import React, { Component } from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
import {Button, Card,Grid,Message} from 'semantic-ui-react';
import web3 from '../../ethereum/web3dest';
import CampaignForm from '../../components/campaignform';
import {Link} from '../../routes'
class Show extends Component{
    static async getInitialProps(props){
       const campaign = Campaign(props.query.address)
       const stat=await campaign.methods.getStat().call();
       return {
           address:props.query.address,
           minimumContribution:stat[0],
           balance:stat[1],
           requestCount:stat[2],
           approverCount:stat[3],
           manager:stat[4]

       };

    }
    renderCard=()=>{
        const items=[
            {
                header:this.props.manager,
                description:'Address of Manager who created the Campaign can add Requests and withdraw the money',
                meta:(<div>Address of Manager &nbsp; &nbsp; <i class="large  user secret icon" style={{marginTop:"2px",color:"#000000"}}></i></div>),
                style:{overflowWrap:"break-word"}
            },
            {
                header:this.props.minimumContribution,
                description:'Minimum Contribution Value required to become contributer of Campaign',
                meta:(<div>Minimum Contribution Value (Wei) &nbsp; &nbsp;<i class="large money bill alternate icon" style={{marginBottom:"4px",color:"#000000"}}></i></div>),
            },
            {
                header:this.props.requestCount,
                description:'A request try to withdraw money from contract,Request can be approved by Approvers only',
                meta:(<div>Number Of Requests  &nbsp; &nbsp;<i class="large download icon" style={{marginBottom:"4px",color:"#000000"}}></i></div>),
                style:{overflowWrap:"break-word"}
            },
            {
                header:this.props.approverCount,
                description:'Number of Contributers/Approvers of this Campaign who have contributed and can approve request',
                meta:(<div>Number Of Approvers &nbsp; &nbsp;<i class="large users icon" style={{marginBottom:"4px",color:"#000000"}}></i></div>),
                style:{overflowWrap:"break-word"}
            },
            {
                header:web3.utils.fromWei(this.props.balance,'ether'),
                description:'Amount of Ethers left in the Camapign to be spent',
                meta:(<div>Camapaign Balance (Ether) &nbsp; &nbsp;<i class="large euro sign icon" style={{marginBottom:"4px",color:"#000000"}}></i></div>),
                style:{overflowWrap:"break-word"}
            },
        ];
        //Minimum Contribution Value (Wei)'
        return <Card.Group items={items}/>

    }
    render(){
        return(
            <Layout>
            <h3>Campaign Details (Details and Facts Associated with Campaign)</h3>
            <i class="big search icon" style={{marginBottom:"12px",color:"#1C39BB"}}></i>
            <Grid>
            <Grid.Column width={10} style={{lineHeight:'22px'}}>
                <Grid.Row>{this.renderCard()}</Grid.Row>
                <br/><br/>
            <Link route={`/campaign/${this.props.address}/request`}>
                <a>
                    <Button primary><i class="eye icon" 
                 style={{fontSize:"15px",color:"#ffffff",}}></i>View Requests
                    </Button>
                </a>
            </Link>
            </Grid.Column>
            <Grid.Column width={6}><CampaignForm address={this.props.address}/>
            <Message info>
         <p>You have to add more ether than the minimum contribution amount to become a contributor of this campaign</p>
       </Message>
            </Grid.Column>
            </Grid>
            </Layout>
        )
    }

}
export default Show;