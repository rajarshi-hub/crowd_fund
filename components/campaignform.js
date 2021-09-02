import React, { Component } from 'react';
import {Form,Input,Message,Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3dest';
import {Router} from '../routes';

class CampForm extends Component{
    state={
        val:'',
        isvalid:false,
        error:'',
        errmsg:'',
        loading:false
    }
    onSubmit= async (event)=>{
      event.preventDefault();
      const campaign = Campaign(this.props.address);
      this.setState({loading:true,errmsg:''})
      if(this.state.isvalid)
        {
            try{
                const accounts = await web3.eth.getAccounts();
         await campaign.methods.contribute().send({
            from:accounts[0],
            value:web3.utils.toWei(this.state.val,'ether'),
            gas:0xfa208,
     maxFeePerGas: 0xf2d05e00,
  maxPriorityFeePerGas: 0xf2d05e00,
         })
         Router.replaceRoute(`/campaign/${this.props.address}`);
        }
            catch(err){
                this.setState({errmsg:err.message})
            }
        }
        this.setState({loading:false})
    }
    check=()=>{

        if(this.state.val !== '' && (this.state.val).match(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/))
            {
                this.setState({isvalid:true,error:''})
            }
            else
            {
                this.setState({isvalid:false,error:'Enter valid amount of Ether '})
            }
    
    }
    
    render(){
        return(
            <Form onSubmit={this.onSubmit} error={!!this.state.errmsg}>
                <Form.Field >
                    <label>Amount to Contribute</label>
                    <Input
                    style={{border:'1px solid black'}}
                    value={this.state.val}
                    onChange={(event)=>{this.setState({val:event.target.value})}}
                    label="ether"
                    labelPosition="right"
                    onBlur={this.check}
                    />
                </Form.Field>
                <h5 style={{color:"red"}}>{this.state.error}</h5>
                <Message error header="Ooops!!" content={this.state.errmsg}/>
                <Button loading={this.state.loading} primary>
                <i class="thumbs up icon" 
                 style={{fontSize:"15px",color:"#ffffff",}}></i>Contribute!! 
                    </Button>
            </Form>
            
        )
    }
}
export default CampForm;