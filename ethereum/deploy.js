const HDWalletProvider= require('@truffle/hdwallet-provider')
const Web3=require('web3')
const compiledFactory = require('./build/CampaignFactory.json');

const provider= new HDWalletProvider(
'excess aerobic typical series bracket clay still always column february poem invest',
'https://rinkeby.infura.io/v3/00e70e2fac684d0d9ba76300b7364933'
);
let accounts
const web3=new Web3(provider)
const deploy= async ()=>{
accounts=await web3.eth.getAccounts();
console.log('Transac from Account',accounts[0])
const result =await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
.deploy({data:compiledFactory.bytecode})
.send({from:accounts[0],gas:'100000000'})
console.log('k')
console.log('Deployed at',result.options.address)
}
deploy();
