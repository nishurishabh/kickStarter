pragma solidity >=0.4.22 <0.6.0;

contract CampaignFactory {
    // address[] deployedCampaigns;
    Campaign[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        Campaign newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(Campaign[] memory) {
        return deployedCampaigns;
    }
}

contract Campaign{
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    address public manager;
    uint public minContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    Request[] public requests;
    
    constructor (uint min, address creator) public {
        manager = creator;
        minContribution = min;
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function contribute() public payable {
        require(msg.value > minContribution);
        approvers[msg.sender]=true;
        approversCount++;
    }
    
    function createRequest(string memory des, uint val, address rec) public restricted {
        Request memory newRequest = Request({
            description: des,
            value: val,
            recipient: rec,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    } 
    
    function finalizeRequest(uint index) public restricted{
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }
    
    function getSummary() public view returns (
          uint, uint, uint, uint, address
        ) {
            
            return (
                minContribution,
                address(this).balance,
                requests.length,
                approversCount,
                manager
                );
        }
        
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
        
        
     
    
}