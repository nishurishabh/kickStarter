import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/contributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {

    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
            address: props.query.address
        };
    }

    renderCards() {

        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;
        const items = [
            {
                header: manager,
                meta: "Address of the manager",
                description: " The manager created the campaign and can create request to withdraw money",
                style: { overflowWrap: 'break-word' }
            },

            {
                header: minimumContribution,
                meta: "Minimum Contribution (wei)",
                description: "This is the minimum ammount of money you have to contribute in order to become an approver.",
                style: { overflowWrap: 'break-word' }
            },

            {
                header: requestsCount,
                meta: "Number of requests.",
                description: "Request tries to withdraw money from the contracts account. Request must be approved by approvers.",
                style: { overflowWrap: 'break-word' }
            },

            {
                header: approversCount,
                meta: "Number of approvers",
                description: "Number of people who have already donated to the campaign",
                style: { overflowWrap: 'break-word' }
            },

            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: "Campaign Balance (Ether)",
                description: " Balance is the amount of money that is left with the contract.",
                style: { overflowWrap: 'break-word' }
            }
        ]

        return <Card.Group items={items} />;
    }
    render() {
        return (
            <Layout>
                <h3>Campaign Show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                <Button primary> View Requests </Button>
                                </a>
                            </Link>
                            <Link route={`/campaigns/${this.props.address}/requests/new`}>
                                <a>
                                <Button primary> Add Request </Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );

    }
}

export default CampaignShow;
