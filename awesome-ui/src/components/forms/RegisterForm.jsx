import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import Input from '../common/Input';
import { isValidEmail } from '../../utils/misc';
import { signIn } from '../../actions/signin';

class RegisterForm extends Component {
    static propTypes = {
        errorMessages: React.PropTypes.object,
        signIn: React.PropTypes.func.isRequired,
    };

    state = {
        dirty: {},
        fields: {
            name: '',
            password: '',
            password2: '',
            username: '',
        },
    };

    isFieldValid (field) {
        const value = this.state.fields[field];
        switch (field) {
            case 'name':
                return value.length >= 3;
            case 'password':
                return value.length >= 3;
            case 'password2':
                return (
                    this.isFieldValid('password') &&
                    this.state.fields.password === value
                );
            case 'username':
                return isValidEmail(value);
            default:
                return true;
        }
    }

    getValidationState (field) {
        const hasError = this.props.errorMessages[field];
        const isDirty = this.state.dirty[field];
        const isValid = this.isFieldValid(field);

        if (isDirty) {
            return isValid ? 'success' : 'error';
        }

        return hasError ? 'error' : (
            isValid ? 'success' : null
        );

    }

    render () {
        const { errorMessages } = this.props;
        const { fields } = this.state;
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className='row'>
                    <div className='col-md-6'>
                        <Input
                            helpMessage={errorMessages.username && errorMessages.username.join(',')}
                            label='Username'
                            onChange={this.inputChanged.bind(this, 'username')}
                            placeholder='Username'
                            size='lg'
                            type='email'
                            validationState={this.getValidationState('username')}
                            value={fields.username}
                        />
                    </div>
                    <div className='col-md-6'>
                        <Input
                            helpMessage={errorMessages.name &&errorMessages.name.join(',')}
                            label='Name'
                            onChange={this.inputChanged.bind(this, 'name')}
                            placeholder='Name'
                            size='lg'
                            validationState={this.getValidationState('name')}
                            value={fields.name}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <Input
                            helpMessage={errorMessages.password && errorMessages.password.join(',')}
                            label='Password'
                            onChange={this.inputChanged.bind(this, 'password')}
                            placeholder='Password'
                            size='lg'
                            type='password'
                            validationState={this.getValidationState('password')}
                            value={fields.password}
                        />
                    </div>
                    <div className='col-md-6'>
                        <Input
                            label='Repeat Password'
                            onChange={this.inputChanged.bind(this, 'password2')}
                            placeholder='Repeat Password'
                            size='lg'
                            type='password'
                            validationState={this.getValidationState('password2')}
                            value={fields.password2}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <Button bsSize='lg' bsStyle='primary' onClick={this.onSubmit.bind(this)}>Register</Button>
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
        const { name, username, password, password2 } = this.state.fields;
        if (password === password2) {
            this.props.signIn({
                username,
                password,
                name,
            }).then(() => this.setState({ dirty: {} }));
        }
        e.preventDefault();
    }
}

export default connect(({ signin }) => {
    return { errorMessages: signin.errorMessages };
}, { signIn })(RegisterForm);
