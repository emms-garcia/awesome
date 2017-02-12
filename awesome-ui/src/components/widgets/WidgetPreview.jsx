import React, { Component } from 'react';
import { Image, Panel } from 'react-bootstrap';

class WidgetPreview extends Component {
    static propTypes = {
        name: React.PropTypes.string,
        title: React.PropTypes.string,
        description: React.PropTypes.string,
        url: React.PropTypes.string,
    };

    render () {
        const { description, name, title, url } = this.props;
        return (
            <div className='col-md-4 col-centered'>
                <Panel header={name || 'Example Widget Name'}>
                    <h3>{ title || 'Example Title' }</h3>
                    <Image
                        className='centered'
                        src='http://placehold.it/250x100'
                        responsive
                    />
                    <p>{ description || 'Example Description...' }</p>
                    <a
                        className='btn btn-block btn-primary'
                        href={url}
                        target='_blank'>{ url || 'https://example.com' }
                    </a>
                </Panel>
            </div>
        );
    }
}

export default WidgetPreview;
