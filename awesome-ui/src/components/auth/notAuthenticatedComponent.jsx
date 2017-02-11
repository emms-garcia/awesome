import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchUser } from '../../actions/account';

function mapStateToProps({ account }) {
    return {
        isAuthenticated: account.isAuthenticated,
    };
}

export function requireNoAuthentication(Component) {

    class notAuthenticatedComponent extends React.Component {
        static propTypes = {
            fetchUser: React.PropTypes.func.isRequired,
            isAuthenticated: React.PropTypes.bool,
        };

        state = { loaded: false };

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps);
        }

        checkAuth(props = this.props) {
            if (props.isAuthenticated) {
                browserHistory.push('/dashboard');
            } else {
                props.fetchUser().then(() => {
                    this.setState({ loaded: true });
                });
            }
        }

        render() {
            return (
                <div>
                    {!this.props.isAuthenticated && this.state.loaded
                        ? <Component {...this.props} />
                        : null
                    }
                </div>
            );

        }
    }

    return connect(mapStateToProps, { fetchUser })(notAuthenticatedComponent);
}
