pragma solidity ^0.4.17;
contract CampaignFactory{
    address[] public deployedCampaigns;
    function createCampaign(uint minimum) public{
        address newCampaign = new Campaign(minimum,msg.sender);
        deployedCampaigns.push(newCampaign);
    } 
    function getDeployedCampaign() public view returns(address[]){
        return deployedCampaigns;
    }
}

contract Campaign{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
        
    }
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    Request[] public requests;
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    function Campaign(uint minimum,address creator) public{
        minimumContribution=minimum;
        manager=creator;
    }
    function contribute() public payable{
        require(!approvers[msg.sender]);
        require(msg.value > minimumContribution);
        approvers[msg.sender]=true;
        approversCount++;
    }
    function createRequest(uint value,string description,address recipient) 
    public restricted{
        Request memory newrequest=Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false,
            approvalCount:0
        });
        requests.push(newrequest);
        
    }
    function approveRequest(uint index) public{
        Request storage req=requests[index];
        require(approvers[msg.sender]);
        require(!req.approvals[msg.sender]);
        req.approvals[msg.sender]=true;
        req.approvalCount++;
        
        
    }
    function finalizeRequest(uint index) public restricted{
        Request storage req=requests[index]; 
        require(!req.complete);
        require(req.approvalCount > (approversCount/2));
        req.recipient.transfer(req.value); 
        req.complete=true;
        
    }
    function getStat() public view returns(uint,uint,uint,uint,address){
        return(
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager


        );
    }
    function getRequestCount() public view returns(uint){
        return(
            requests.length
        );
    }
    
}
