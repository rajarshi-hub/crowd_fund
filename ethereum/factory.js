import web3 from './web3dest';
import CampaignFactory from './build/CampaignFactory.json'
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x576f001280a228708E7F27cDc8CBF8371E022513'
);
export default instance;