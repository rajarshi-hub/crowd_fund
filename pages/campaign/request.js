import React, { Component } from 'react';
import { Button,Table,Message } from 'semantic-ui-react';
import Layout from '../../components/layout';
import {Link} from '../../routes';
import Campaign from '../../ethereum/campaign';
import ReqRow from '../../components/requestrow';
class request extends Component{
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address)
        const appcount = await campaign.methods.approversCount().call();
        const reqcount = parseInt(await campaign.methods.getRequestCount().call());
        const requests=[];
        for(let i=0;i<reqcount;i++)
        {
            requests.push(await campaign.methods.requests(i).call());
        }
        return {
            address:props.query.address,
            requests,
            reqcount,
            appcount
 
        };
    }
    RequestRender=()=>{
        return this.props.requests.map((request,i)=>{
            return(<ReqRow
            key={i}
            id={i}
            request={request}
            address={this.props.address}
            appcount={this.props.appcount}/>
                )
        })
    }
 render(){
     const {Header,HeaderCell,Row,Body} = Table;
     return(
        <Layout>
         <Link route={`/campaign/${this.props.address}/request/new`}>
         <a>
             <Button primary floated="right" style={{marginBottom:"30px",marginTop:"20px"}}>
             <i class="eye dropper icon" 
                 style={{fontSize:"15px",color:"#ffffff",}}></i>Create Request
             </Button>
         </a>
         </Link>
         <h3>Pending Requests (Requests yet to Be Approved and Finalized)</h3>
         <i class="big hourglass half icon" floated="right" style={{color:"#1C39BB"}}></i>
         <Table>
         <Header>
             <Row>
                 <HeaderCell>
                    ID
                 </HeaderCell>
                 <HeaderCell>
                     Description
                 </HeaderCell>
                 <HeaderCell>
                    Amount
                 </HeaderCell>
                 <HeaderCell>
                     Recipient
                 </HeaderCell>
                 <HeaderCell>
                     Approval Count
                 </HeaderCell>
                 <HeaderCell>
                     Approve
                 </HeaderCell>
                 <HeaderCell>
                     Finalize
                 </HeaderCell>
             </Row>
         </Header>
         <Body>
         {this.RequestRender()}
          </Body>
         </Table>
         <h4>Found {this.props.reqcount} requests</h4>
         <Message info>
        <Message.Header><i class="large close icon" style={{color:"#002D62",fontSize:"28px"}}></i></Message.Header>
         <p>Requests can be Approved by the <b>Contributors</b> only</p>
         <p>Requests can be Finalized by the <b>Manager</b> only if <b>more than half</b> approvers have verified the request</p>
       </Message>
         </Layout>
     )
 }
}
export default request;
