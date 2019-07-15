const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

// beforeEach( async ()=> {
//     accounts = await web3.eth.getAccounts();

//     factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
//     .deploy({ data: compiledFactory.bytecode })
//     .send({ from: accounts[0], gas: '1000000'}); 
     
//     await factory.methods.createCampaign('100').send({
//         from: accounts[0],
//         gas: '1000000'
//     });

//     const addrArray = await factory.methods.getDeployedCampaigns().call();
//     campaignAddress = addrArray[0];

//     campaign = await new web3.eth.Contract(
//         JSON.parse(compiledCampaign.interface),
//         campaignAddress
//         );
//     });

//     describe('Campaigns', ()=> {
        
//         it('deployments', () => {
//             assert.ok(factory.options.address);
//             assert.ok(campaign.options.address);
//         });
//     });

// my code

describe('Campaigns', () => {
    it('deployment test', async ()=> {
        accounts = await web3.eth.getAccounts();

        factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000'});
            const addrArray = await factory.methods.getDeployedCampaigns().call();
            campaignAddress = addrArray[0]; 
        assert.ok(campaignAddress);
    });
});