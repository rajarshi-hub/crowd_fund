import Recat, { Component } from 'react';
import {Table,Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3dest';
import Campaign from '../ethereum/campaign';
import {Router} from '../routes'
class RequestRow extends Component{
    approve=async ()=>{
       const camapaign = Campaign(this.props.address);
       const accounts = await web3.eth.getAccounts();
       try{
       await camapaign.methods.approveRequest(this.props.id).send(
           {
             from:accounts[0],
             gas:0xfa208,
             maxFeePerGas: 0xf2d05e00,
          maxPriorityFeePerGas: 0xf2d05e00,
           }
       )
       Router.replaceRoute(`/campaign/${this.props.address}/request`);
        }catch(err){

        }
      
    }
    finalize=async ()=>{
        const camapaign = Campaign(this.props.address);
        try{
        const accounts = await web3.eth.getAccounts();
        await camapaign.methods.finalizeRequest(this.props.id).send(
            {
              from:accounts[0],
              gas:0xfa208,
              maxFeePerGas: 0xf2d05e00,
           maxPriorityFeePerGas: 0xf2d05e00,
            }
        )
        Router.replaceRoute(`/campaign/${this.props.address}/request`);
        }catch(err){
        }

     }
    render(){
        const ready = this.props.request.approvalCount > (this.props.appcount/2);
        const {Row,Cell} = Table;
        return(
            <Row disabled={this.props.request.complete}>
                <Cell>{this.props.id}</Cell>
                <Cell>{this.props.request.description}</Cell>
                <Cell>{web3.utils.fromWei(this.props.request.value,'ether')}</Cell>
                <Cell>{this.props.request.recipient}</Cell>
                <Cell>{`${this.props.request.approvalCount}/${this.props.appcount}`}</Cell>
                {
                    !this.props.request.complete?
                (<Cell><Button color="green" basic
                onClick={this.approve}
                >Approve !</Button></Cell>):
                null
                }
                {
                    !this.props.request.complete?
                (<Cell><Button color="red" basic
                onClick={this.finalize}
                >Finalize !</Button></Cell>):
                null
                }
            </Row>
        )
    }
}
export default RequestRow;