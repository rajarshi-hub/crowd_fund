import web3 from './web3dest';
import Campaign from './build/Campaign.json'
const func=function(add){
const instance = new web3.eth.Contract(
    JSON.parse(Campaign.interface),
    add
);
return instance;
}
export default func;

