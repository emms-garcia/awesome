import React, { Component } from 'react';
import { Button, Jumbotron, Panel } from 'react-bootstrap';

import Navbar from '../Navbar';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';

class LoginPage extends Component {
    render() {
        return (
            <div className='container login-page'>
                <Jumbotron>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>Awesome</h1>
                            <p>This is the description</p>
                            <p><Button bsStyle='primary'>Learn more</Button></p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-7'>
                            <Panel header='Register'>
                                <RegisterForm />
                            </Panel>
                        </div>
                        <div className='col-md-5'>
                            <Panel header='Login'>
                                <LoginForm />
                            </Panel>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default LoginPage;
