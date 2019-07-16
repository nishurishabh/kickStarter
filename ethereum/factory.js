import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1110607c05c921c174b7ca2d7b19aa6c873d9c10'
);

export default instance;


