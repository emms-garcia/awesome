import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Input from '../common/Input';
import { logIn } from '../../actions/login';
import { isValidEmail } from '../../utils/misc';

class LogInForm extends Component {
    static propTypes = {
        logIn: React.PropTypes.func.isRequired,
        errorMessages: React.PropTypes.array,
    };

    state = {
        dirty: {},
        fields: { username: '', password: ''},
    };

    isFieldValid (field) {
        const value = this.state.fields[field];
        switch (field) {
            case 'password':
                return value.length >= 3;
            case 'username':
                return isValidEmail(value);
            default:
                return true;
        }
    }

    getValidationState (field) {
        const isDirty = this.state.dirty[field];
        const isValid = this.isFieldValid(field);

        return isDirty ? (
            isValid ? 'success' : 'error'
        ) : null;
    }

    render () {
        const { errorMessages } = this.props;
        const { fields } = this.state;

        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                {
                    errorMessages && errorMessages.map((error, idx) => {
                        return (
                            <Alert bsStyle='danger' key={idx}>{error}</Alert>
                        );
                    })
                }
                <Input
                    label='Username'
                    onChange={this.inputChanged.bind(this, 'username')}
                    placeholder='Username'
                    size='lg'
                    type='email'
                    validationState={this.getValidationState('username')}
                    value={fields.username}
                />

                <Input
                    label='Password'
                    onChange={this.inputChanged.bind(this, 'password')}
                    placeholder='Password'
                    size='lg'
                    type='password'
                    validationState={this.getValidationState('password')}
                    value={fields.password}
                />

                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <Button bsSize='lg' bsStyle='primary' type='submit'>Log In</Button>
                    </div>
                </div>
            </form>
        );
    }

    inputChanged (field, value) {
        if (!this.state.dirty[field]) {
            this.setState({
                dirty: { ...this.state.dirty, [field]: true },
                fields: { ...this.state.fields, [field]: value },
            });
        } else {
            this.setState({
                fields: { ...this.state.fields, [field]: value },
            });
        }
    }

    onSubmit (e) {
        const { username, password } = this.state.fields;
        this.props.logIn(username, password);
        e.preventDefault();
    }
}

export default connect(({ login }) => {
    return { errorMessages: login.errorMessages };
}, { logIn })(LogInForm);
