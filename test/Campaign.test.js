const assert = require('assert');
const ganache = require('ganache-cli');
const Web3=require('web3');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');
const web3 = new Web3(ganache.provider());

let accounts;
let factory;
let campaign;
let campaignAddress;
beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();
    factory= await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data : compiledFactory.bytecode})
    .send({from : accounts[0] , gas:'1000000'});

    await factory.methods.createCampaign('100').send({
        from:accounts[0],
        gas:'1000000'
    });
    [campaignAddress] = await factory.methods.getDeployedCampaign().call();
    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),campaignAddress);
 
})

describe('Campaigns',()=>{
    it('deploys a factory and campaign',()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    })
    it('it checks for manager',async()=>{
        const manager=await campaign.methods.manager().call();
        assert.strictEqual(accounts[0],manager);
    })
    it('allows people to contribute',async()=>{
        await campaign.methods.contribute().send({
            from:accounts[1],
            value:'200'
        })
        assert(await campaign.methods.approvers(accounts[1]).call());
    })
    it('requires a minimum contribution' ,async()=>{
      try{
        await campaign.methods.contribute().send({
            from:accounts[1],
            value:'5'
        })
        assert(false);
      }catch(err){
          assert(err)
      }
    })
    it('allows a manager to create request',async ()=>{
        await campaign.methods.createRequest(
            '200',
            "Buy a Bot",
            accounts[1]

        ).send({
            from:accounts[0],
            gas:'1000000'
        })
        const req = await campaign.methods.requests(0).call();
        assert.strictEqual(req.description,"Buy a Bot");

    })
    it('complete test',async()=>{
        await campaign.methods.contribute().send({
            value:web3.utils.toWei('10','ether'),
            from:accounts[0]
        })
        await campaign.methods.createRequest(web3.utils.toWei('5','ether'),'Buy',accounts[1]).send({
            from:accounts[0],
            gas:'1000000'
        })
        await campaign.methods.approveRequest(0).send({
            from:accounts[0],
            gas:'1000000'
        })
        await campaign.methods.finalizeRequest(0).send({
            from:accounts[0],
            gas:'1000000'
        })
        let bal = await web3.eth.getBalance(accounts[1]);
        bal = web3.utils.fromWei(bal,'ether');
        bal = parseFloat(bal);
        console.log(bal); 
        assert(bal > 104);
    })

})