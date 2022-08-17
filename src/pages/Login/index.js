import { Link, Navigate } from 'react-router-dom';
import { Form, Button, Toast } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import config from '~/config';
import { login } from '~/services/loginService';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Login() {
    const [emailValue, setEmailValue] = useState('');
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const handleRedirect = () => {
        window.location = '/';
    };

    useEffect(() => {
        if (email) {
            const loginAPI = async () => {
                setIsloading(true);
                const data = await login(email);
                if (data == 'QpwL5tke4Pnpja7X4') {
                    setIsloading(false);
                    localStorage.setItem('admin', JSON.stringify({ name: email }));
                    setSuccess(true);
                    setShow((prev) => !prev);
                    setTimeout(handleRedirect, 1200);
                } else {
                    setIsloading(false);
                    setSuccess(false);
                    setShow((prev) => !prev);
                }
            };

            loginAPI();
        }
        return () => {
            clearTimeout(handleRedirect, 1200);
        };
    }, [email]);
    function toggleShow() {
        setShow((prev) => !prev);
    }

    const handleToast = () => {
        return (
            <Toast
                show={show}
                onClose={toggleShow}
                className={cx('toast', 'position-absolute')}
                bg={isSuccess ? 'Success'.toLowerCase() : 'Danger'.toLowerCase()}
                delay={1300}
                autohide={true}
            >
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body className={cx('Secondary')}>{isSuccess ? 'Login success !' : 'Login failed'}</Toast.Body>
            </Toast>
        );
    };

    return (
        <>
            {/* {redirect && <Navigate to={config.home} />} */}
            <div className={cx('position-relative')}>
                <center>
                    <h3>Login</h3>
                </center>
                {email && handleToast()}
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Text name="email" className="text-muted">
                    Email or username (eve.holt@reqres.in)
                </Form.Text>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => setEmail(emailValue)}>
                Submit {isLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            </Button>
            <div className={cx('d-grid', 'gap-2', 'mt-2')}>
                <Button variant="light" size="lg">
                    <Link className="link" to={config.home}>
                        &#60;&#60; Go Back
                    </Link>
                </Button>
            </div>
        </>
    );
}

export default Login;
