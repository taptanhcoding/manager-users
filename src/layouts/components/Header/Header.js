import styles from 'bootstrap/dist/css/bootstrap.min.css';
import myStyles from './Header.module.scss';
import { Dropdown, Navbar } from 'react-bootstrap';
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
        <nav className={cx('navbar', 'navbar-expand-lg', 'bg-light')}>
            <div className={cx('container-fluid')}>
                <Link className="navbar-brand" to={config.home}>
                    Chuyen's App
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className={cx('"navbar-toggler-icon"')}></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarText">
                    <ul className={cx('navbar-nav', 'mb-2', 'mb-lg-0')}>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={config.home}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={nameAd ? config.managerusers : config.login}>
                                Manager User
                            </Link>
                        </li>
                    </ul>
                    <ul className={cx('navbar-nav', 'mb-2', 'mb-lg-0')}>
                        {admin && (
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={config.home}>
                                    Wellcome <span>{admin.name}</span>
                                </Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Setting
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {admin ? (
                                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                    ) : (
                                        <Dropdown.Item>
                                            <Link className="link" to={config.login}>
                                                Login
                                            </Link>
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
