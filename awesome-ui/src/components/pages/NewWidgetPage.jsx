import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { updateWidgetEditor } from '../../actions/widgets';
import { Page, PageHeader } from '../common';
import WidgetEditor from '../widgets/WidgetEditor';

class NewWidgetPage extends Component {
    static propTypes = {
        updateWidgetEditor: React.PropTypes.func.isRequired,
        widgetEditor: React.PropTypes.object.isRequired,
    };

    componentDidMount () {
    }

    render () {
        const buttons = [
            <Button
                bsStyle='primary'
                bsSize='lg'
                key='1'> Save
            </Button>,
        ];

        const header = (
            <PageHeader buttons={buttons} text='New Widget'/>
        );

        return (
            <Page header={header}>
                <WidgetEditor
                    updateCb={this.props.updateWidgetEditor}
                    widget={this.props.widgetEditor}
                />
            </Page>
        );
    }
}

export default connect(({ widgets }) => {
    return {
        widgetEditor: widgets.widgetEditor,
    };
}, { updateWidgetEditor })(NewWidgetPage);
