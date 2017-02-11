import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchUser, RECEIVE_USER_SUCCESS } from '../../actions/account';

function mapStateToProps({ account }) {
    return {
        isAuthenticated: account.isAuthenticated,
    };
}

export function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            this.checkAuth();
            this.state = {
                loadIfNeeded: false,
            };
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps);
        }

        checkAuth(props = this.props) {
            if (!props.isAuthenticated) {
                if (!localStorage.getItem('auth_token')) {
                    browserHistory.push('/login');
                } else {
                    props.fetchUser().then(action => {
                        if (action.type === RECEIVE_USER_SUCCESS) {
                            this.setState({ loadIfNeeded: true });
                        } else {
                            browserHistory.push('/login');
                        }
                    });
                }
            } else {
                this.setState({
                    loadIfNeeded: true,
                });
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated && this.state.loadIfNeeded
                        ? <Component {...this.props} />
                        : null
                    }
                </div>
            );

        }
    }

    AuthenticatedComponent.propTypes = {
        isAuthenticated: React.PropTypes.bool,
    };

    return connect(mapStateToProps, { fetchUser })(AuthenticatedComponent);
}
