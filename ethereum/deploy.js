const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const CampaignFactory = require("./build/CampaignFactory.json");


const provider = new HDWalletProvider(
    'rubber square happy spirit twist bullet call tennis strong emerge pulse afraid',
    'https://rinkeby.infura.io/v3/07e50c52ce8c4b26827310ba457bb268'
    );
    
    const web3 = new Web3(provider);
    
    const deploy = async ()=> {
        const accounts = await web3.eth.getAccounts();
        console.log('Attempting to deploy from account', accounts[0]);
        const result = await new web3.eth.Contract(JSON.parse(CampaignFactory.interface))
        .deploy({
            data: CampaignFactory.bytecode
        })
        .send({
            gas: '3000000',
            from: accounts[0]
        });
        console.log('Contract deployed to', result.options.address)
    };
    deploy();
    