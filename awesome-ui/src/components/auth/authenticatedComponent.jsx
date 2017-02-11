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
        static propTypes = {
            isAuthenticated: React.PropTypes.bool,
        };

        state = { loadIfNeeded: false };

        componentDidMount () {
            if (localStorage.getItem('access_token')) {
                this.props.fetchUser();
            } else {
                browserHistory.push('/login');
            }
        }

        render() {
            return (
                <div>
                    {
                        this.props.isAuthenticated
                        ? <Component {...this.props} />
                        : null
                    }
                </div>
            );

        }
    }

    return connect(mapStateToProps, { fetchUser })(AuthenticatedComponent);
}
