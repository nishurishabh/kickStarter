import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xd2aa15ba852e6404a49fd0b33d0ea068f809739a'
);

export default instance;


