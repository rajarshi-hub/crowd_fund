import React, { Component } from 'react';
import Layout from '../../components/layout';
import {Button,Form,Input,Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3dest';
import {Router} from '../../routes';
class Camp extends Component{
    state={
        minCont:'',
        isvalid:false,
        error:'',
        errmsg:'',
        loading:false
    }
    onSub = async (event)=>{
        event.preventDefault();
        this.setState({loading:true,errmsg:''})
        if(this.state.isvalid)
        {
            try{
                const accounts = await web3.eth.getAccounts();
         await factory.methods.createCampaign(this.state.minCont).send({
            from:accounts[0],
     gas:0xfa208,
     maxFeePerGas: 0xf2d05e00,
  maxPriorityFeePerGas: 0xf2d05e00,
         })
         Router.pushRoute('/');
        }
            catch(err){
                this.setState({errmsg:err.message})
            }
        }
        this.setState({loading:false})
}
check=()=>{

    if(this.state.minCont !== '' && (this.state.minCont).match(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/))
        {
            this.setState({isvalid:true,error:''})
        }
        else
        {
            this.setState({isvalid:false,error:'Enter  valid amount of wei'})
        }

}

    
        render(){
        return(
            <Layout>
            <h3>Create New Campaign !! (To start your Project or Fundraiser)</h3>
            <i class="big edit icon" style={{marginBottom:"15px",color:"#1C39BB"}}></i>
            <Form onSubmit={this.onSub} error={!!this.state.errmsg}>
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input
                    style={{border:'1px solid black'}}
                    label="wei" 
                    labelPosition="right" 
                    value={this.state.minCont} 
                    onChange={(event)=>{this.setState({minCont:event.target.value})}}
                    onBlur={this.check}
                    />
                </Form.Field>
                <h5 style={{color:"red"}}>{this.state.error}</h5>
                <Message error header="Ooops!!" content={this.state.errmsg}/>
                <Button loading={this.state.loading} primary>Create!</Button>
            </Form>
            <Message info>
         <p>Enter the minimum  amount of wei users need to spend to become contributor of your campaign</p>

       </Message>
            </Layout>
        )
    }

}
export default Camp;