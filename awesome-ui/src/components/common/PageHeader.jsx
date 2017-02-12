import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';

const PageHeader = ({ buttons, text }) => {
    return (
        <div className='row vertical-align'>
            <div className='col-md-6'>
                <h1>{ text }</h1>
            </div>
            <div className='col-md-6'>
                <ButtonToolbar className='pull-right'>
                    { buttons }
                </ButtonToolbar>
            </div>
        </div>
    );
};

PageHeader.propTypes = {
    buttons: React.PropTypes.arrayOf(React.PropTypes.node),
    text: React.PropTypes.string.isRequired,
};

export { PageHeader };
