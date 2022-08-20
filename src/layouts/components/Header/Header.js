import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from 'bootstrap/dist/css/bootstrap.min.css';
import myStyles from './Header.module.scss';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import config from '~/config';
import { useState } from 'react';

const cx = classNames.bind(myStyles || styles);
function Header() {
    const admin = JSON.parse(localStorage.getItem('admin')) || false;
    const [nameAd, setNameAd] = useState(admin);
    const handleLogout = () => {
        console.log('log out');
        localStorage.removeItem('admin');
        setNameAd('');
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to={config.home}> Chuyen's App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-between " id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link className="nav-link active" aria-current="page" to={config.home}>
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={nameAd ? config.managerusers : config.login}>
                                Manager User
                            </Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        {admin && (
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={config.home}>
                                    Wellcome <span>{admin.name}</span>
                                </Link>
                            </li>
                        )}
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            {admin ? (
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            ) : (
                                <NavDropdown.Item>
                                    <Link className="link" to={config.login}>
                                        Login
                                    </Link>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
