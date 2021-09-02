import React, { Component } from 'react';
import Layout from '../../components/layout';
import {Form,Input,Message,Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3dest';
import {Router,Link} from '../../routes';
 
class Newreq extends Component{
    static async getInitialProps(props){
        return {
            address:props.query.address,
        };
    }
    state={
        desc:'',
        val:'',
        add:'',
        errmsg:'',
        loading:false

    }
    onSubmit=async (event)=>{
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        this.setState({loading:true,errmsg:''})
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(web3.utils.toWei(this.state.val,'ether')
            ,this.state.desc,
            this.state.add)
            .send({
               from:accounts[0],
               gas:0xfa208,
        maxFeePerGas: 0xf2d05e00,
     maxPriorityFeePerGas: 0xf2d05e00,
            })
            Router.replaceRoute(`/campaign/${this.props.address}/request`);

        }catch(err){
            this.setState({errmsg:err.message})
            }
            this.setState({loading:false})

        }
    render(){
        return(
        <Layout>
            <h3>Create A Request For this Campaign (Publish a Request)</h3>
            <i class="big bullhorn icon" style={{marginBottom:"15px",color:"#1C39BB"}}></i>
            <br/>
            <Form onSubmit={this.onSubmit} error={!!this.state.errmsg}>
                <Form.Field >
                    <label>Description</label>
                    <Input
                    style={{border:'1px solid black'}}
                    value={this.state.desc}
                    onChange={(event)=>{this.setState({desc:event.target.value})}}
                    />
                </Form.Field>
                <Form.Field >
                    <label>Value in Ether</label>
                    <Input
                    style={{border:'1px solid black'}}
                    value={this.state.val}
                    onChange={(event)=>{this.setState({val:event.target.value})}}
                    label="ether"
                    labelPosition="right"
                    />
                </Form.Field>
                <Form.Field >
                    <label>Address of Recipient</label>
                    <Input
                    style={{border:'1px solid black'}}
                    value={this.state.add}
                    onChange={(event)=>{this.setState({add:event.target.value})}}
                    />
                </Form.Field>
                <Message error header="Ooops!!" content={this.state.errmsg}/>
                <Button loading={this.state.loading} primary>
                <i class="clone icon" 
                 style={{fontSize:"15px",color:"#ffffff",}}></i>Add Request</Button>
            </Form>
            <Message info>
         <p>Only Manager can add a request for the account balance to be used for the campaign</p>
       </Message>
        </Layout>
        )
    }
}
export default Newreq;