import React, { Component } from 'react';
import { Card,Button,Message } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/layout';
import {Link} from '../routes';
class Campaign extends Component
{
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaign().call(); 
        return {campaigns};
    }
    rendCampaigns(){
        const items=this.props.campaigns.map((item)=>{
            return{
                header:<h3>{item} <div style={{fontWeight:"300",color:"#404040",display:"inline",fontSize:"14px"}}>
                    &nbsp;&nbsp;(Address of Deployed Campaign</div>&nbsp;<i class=" globe icon" style={{color:"#000000",fontSize:"15px"}}></i>)</h3>,
                description:<Link route={`/campaign/${item}`}><a>View The Campaign</a></Link>,
                fluid:true
            }
        })
        return <Card.Group items={items}/>
    }
    render(){
        return(
            <div style={{paddingBottom:"35px"}}>
            <Layout>
                <Message info>
         <p style={{fontSize:"16px",
                 fontWeight:"600",
                 fontFamily:"cursive",
                 textAlign:"center"}}>Launch your own Project or Fundraiser here&nbsp;<i class="big rocket icon" 
                 style={{fontSize:"30px",color:"#1C39BB",}}></i></p>
       </Message>
            <div>
                <h3>Open Campaigns (Open Campaigns needs Contribution)</h3>
                <i class="big archive icon" style={{marginBottom:"15px", fontSize:"30px",color:"#1C39BB"}}></i>
                <Link route="/campaign/new">
                <a>
                <Button
         floated="right"
         content='Create Campaign'
         icon='add circle'
         primary
         />
         </a>
         </Link>
         {this.rendCampaigns()}
         </div>
         <Message info color="red" >
         <p style={{fontSize:"16px",
                 fontWeight:"600",
                 fontFamily:"cursive",
                 textAlign:"center",
                color:"#C41E3A",}}>Even a small Contribution can Help others&nbsp;<i class="big heart icon" 
                 style={{fontSize:"30px",color:"#AA0000",}}></i></p>
       </Message>
         </Layout>
         </div>
        
        )
    }
}
export default Campaign;