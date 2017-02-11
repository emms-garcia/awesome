import React from 'react';
import { Nav, NavDropdown, Navbar, NavItem, MenuItem } from 'react-bootstrap';
import { browserHistory, Link } from 'react-router';

const navRoutes = [
    { href: '/dashboard', name: 'Dashboard' },
    { href: '/library', name: 'Widget Library' },
];

const nav = () => {
    const logOut = () => {
        localStorage.removeItem('access_token');
        window.location.href = '/login';
    };

    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a onClick={() => browserHistory.push('/dashboard')}>Awesome</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                {
                    navRoutes.map(({ href, name }, idx) => {
                        return (
                            <NavItem
                                active={href === window.location.pathname}
                                eventKey={idx}
                                key={idx}
                                onClick={() => browserHistory.push(href)}> { name }
                            </NavItem>
                        );
                    })
                }
                <NavItem
                    eventKey={navRoutes.length + 1}
                    onClick={logOut}> Log Out
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default nav;
