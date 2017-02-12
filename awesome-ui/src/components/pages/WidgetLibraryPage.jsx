import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { Page, PageHeader } from '../common';

class WidgetLibraryPage extends Component {
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
                Create Widget
            </Button>
        ];

        const header = (
            <PageHeader buttons={buttons} text='Widget Library'/>
        );

        return (
            <Page header={header}>
                <div className='row'>
                    { this.renderWidgetLibrary() }
                </div>
            </Page>
        );
    }

    renderWidgetLibrary () {
        return (
            <div className='col-md-12'>
                <div className='row text-center'>
                    <h1>Nothing here yet :(</h1>
                </div>
            </div>
        );
    }
}

export default connect(() => {
    return {};
})(WidgetLibraryPage);
