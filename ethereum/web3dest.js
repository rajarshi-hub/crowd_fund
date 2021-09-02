import Web3 from 'web3';
let web3;
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')
{
    // We are in the browser
    web3 = new Web3(window.web3.currentProvider);
}
else{
    // not on browser or not have metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/4cce568d760a494f81f6c1f18fa36462'

    );
    web3 = new Web3(provider);


}
export default web3;