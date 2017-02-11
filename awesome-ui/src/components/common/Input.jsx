import _ from 'lodash';
import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

class Input extends Component {
    static propTypes = {
        helpMessage: React.PropTypes.string,
        label: React.PropTypes.string,
        onChange: React.PropTypes.func,
        placeholder: React.PropTypes.string,
        size: React.PropTypes.oneOf(['lg', 'sm', 'md']),
        type: React.PropTypes.oneOf(['email', 'text', 'password']),
        validationState: React.PropTypes.string,
        value: React.PropTypes.string.isRequired,
    };

    static uniqueID = _.uniqueId('input_');

    defaultProps = { type: 'text', size: 'sm' };

    render () {
        return (
            <FormGroup
                bsSize={this.props.size}
                controlId={this.constructor.uniqueID}
                validationState={this.props.validationState}
            >
                {this.props.label && <ControlLabel>{this.props.label}</ControlLabel>}
                <FormControl
                    onChange={this.onChange.bind(this)}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    value={this.props.value}
                />
                <FormControl.Feedback />
                {
                    this.props.helpMessage &&
                    this.props.validationState !== 'success' &&
                    <HelpBlock>{this.props.helpMessage}</HelpBlock>
                }
            </FormGroup>
        );
    }

    onChange (e) {
        this.props.onChange && this.props.onChange(e.target.value);
    }
}

export { Input };
