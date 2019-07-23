import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';


class RequestIndex extends Component {

    static async getInitialProps(props) {
        const address = props.query.address;
        const campaign = Campaign(address);
        const requestsCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        let i;
        let requests = [];
        for(i = 0; i<requestsCount; i++){
            const request = await campaign.methods.requests(i).call();
            requests[i]=request;
        }
        // const request = await Promise.all(
        //     Array(requestsCount).fill().map((element, index) => {
        //         return campaign.methods.requests(index).call();
        //     })
        // );
        return {address, requests, requestsCount, approversCount};
    }

    renderRows() {
        console.log(this.props.request);
        return this.props.requests.map((request, index) => {
            return <RequestRow
            request={request}
            key={index}
            id={index}
            approversCount={this.props.approversCount}
            address={this.props.address}
            />
        })
    }
    render() {
        const {Header, Row, HeaderCell, Body} = Table;
        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                   <a>
                       <Button primary floated='right' style={{ marginBottom:10}}> Add Request</Button>
                   </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approvals Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
                <div>Found {this.props.requestsCount} requests</div>
            </Layout>
        );
    }
}

export default RequestIndex;