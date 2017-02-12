import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import { Input } from '../common';
import WidgetSnippet from './WidgetSnippet';
import WidgetPreview from './WidgetPreview';

class WidgetEditor extends Component {
    static propTypes = {
        updateCb: React.PropTypes.func,
        widget: React.PropTypes.object.isRequired,
    };

    render () {
        const { widget } = this.props;

        return (
            <div className='widget-editor'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Panel header='Widget Preview'>
                            <WidgetPreview {...widget} />
                        </Panel>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Panel header='Widget Info'>
                            <form>
                                <Input
                                    label='Widget Name'
                                    placeholder='My Widget'
                                    onChange={this.props.updateCb.bind(this, 'name')}
                                    value={widget.name}
                                />
                                <Input
                                    label='Widget Description'
                                    placeholder='A very cool widget...'
                                    componentClass='textarea'
                                    onChange={this.props.updateCb.bind(this, 'description')}
                                    value={widget.description}
                                />
                                <Input
                                    label='Widget Config'
                                    placeholder='{}'
                                    componentClass='textarea'
                                    onChange={this.props.updateCb.bind(this, 'config')}
                                    value={widget.config}
                                />
                            </form>
                        </Panel>
                    </div>
                    <div className='col-md-8'>
                        <Panel header='Widget Code'>
                            <WidgetSnippet
                                snippet={widget.snippet}
                                type={widget.type}
                                updateCb={this.props.updateCb}
                            />
                        </Panel>
                    </div>
                </div>
            </div>
        );
    }
}

export default WidgetEditor;
