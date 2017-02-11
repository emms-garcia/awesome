import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

import Page from './Page';
import PageHeader from './PageHeader';

class DashboardPage extends Component {
    static propTypes = {
    };

    componentDidMount () {
    }

    render () {
        const buttons = [
            <Button
                bsStyle='primary'
                bsSize='lg'
                key='0'
                onClick={() => browserHistory.push('/library/new')}
            >
                Add Widget
            </Button>,
            <Button
                bsStyle='primary'
                bsSize='lg'
                key='1'
                onClick={() => browserHistory.push('/library')}
            >
                Import Widget
            </Button>,
        ];

        const header = (
            <PageHeader buttons={buttons} text='Dashboard'/>
        );

        return (
            <Page header={header}>
                <div className='row'>
                    { this.renderWidgetGrid() }
                </div>
            </Page>
        );
    }

    renderWidgetGrid () {
        return (
            <div className='col-md-12'>
                <div className='row text-center'>
                    <h1>Nothing here yet :(</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({}) => {
    return {};
};

export default connect(mapStateToProps)(DashboardPage);
