import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

import Button from '../common/Button';
import Page from './Page';

class DashboardPage extends Component {
    static propTypes = {
    };

    componentDidMount () {
    }

    render () {
        const buttons = [
            <Button
                className='btn btn-large red-text white'
                key='0'
                onClick={() => browserHistory.push('/widgets')}
            >
                Add Widget
            </Button>
        ];

        return (
            <Page buttons={buttons} header='Dashboard'>
                <div className='row'>
                    { this.renderWidgetGrid() }
                </div>
            </Page>
        );
    }

    renderWidgetGrid () {
        return (
            <div className='col s12 center-align'>
                <h3>Nothing here yet :(</h3>
                <ul>
                    <li>
                        <h4>
                            Go to the <Link to='/library'>Widget Library</Link> and add some Widgets.
                        </h4>
                    </li>
                    <li>
                        <h4>
                        Create a <Link to='/library/new'> new Widget yourself.</Link>
                        </h4>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({}) => {
    return {};
};

export default connect(mapStateToProps)(DashboardPage);
