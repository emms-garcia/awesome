import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import axios from 'axios';

import { Input } from '../common';
import { SNIPPET_TYPES } from './utils';
import WidgetRunner from './WidgetRunner';

const snippetPlaceholders = {};
snippetPlaceholders[SNIPPET_TYPES.BLOG_POST]  = `return {
    data: {
        title: 'Example Widget Name',
        description: 'Example Description...',
        url: 'https://example.com'
    }
};`;

class WidgetSnippet extends Component {
    static propTypes = {
        type: React.PropTypes.oneOf(Object.values(SNIPPET_TYPES)).isRequired,
        snippet: React.PropTypes.string,
        updateCb: React.PropTypes.func,
    };

    onRun () {
        console.log(
            WidgetRunner.runSnippet(this.props.snippet)
        );
    }

    render () {
        const { snippet, type } = this.props;

        return (
            <div className='widget-snippet col-md-12'>
                <Panel
                    header='function getWidgetData(request, configuration) {'
                    footer='}'
                >
                    <Input
                        componentClass='textarea'
                        placeholder={snippetPlaceholders[type]}
                        onChange={this.props.updateCb.bind(this, 'snippet')}
                        value={snippet}
                    />
                    <Button bsSize='lg' bsStyle='primary' block onClick={this.onRun.bind(this)}>
                        Run
                    </Button>
                </Panel>
            </div>
        );
    }
}

export default WidgetSnippet;
