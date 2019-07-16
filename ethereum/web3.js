import { HttpProvider } from 'web3-providers';

const Web3 = require('web3');

let web3;
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/07e50c52ce8c4b26827310ba457bb268'
    );
    web3 = new Web3(provider);
}

export default web3;