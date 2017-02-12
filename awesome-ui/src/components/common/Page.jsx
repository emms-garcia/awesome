import React from 'react';
import { Panel } from 'react-bootstrap';

import Navbar from '../Navbar';

const Page = ({ children, header }) => {
    return (
        <div>
            <Navbar />
            <Panel header={header}>
                <div className='col-md-12'>{ children }</div>
            </Panel>
        </div>
    );
};

Page.propTypes = {
    header: React.PropTypes.node,
};

export { Page };
