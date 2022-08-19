import Toast from 'react-bootstrap/Toast';
import classNames from 'classnames/bind';
import styles from './Toast.module.scss';

const cx = classNames.bind(styles);
function ToastComp({ value, show, onClose, autohide, delay, className, styleToast }) {
    return (
        <Toast
            bg={styleToast.toLowerCase()}
            className={cx(className)}
            show={show}
            onClose={onClose}
            delay={delay}
            autohide={autohide}
        >
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Nofication</strong>
            </Toast.Header>
            <Toast.Body>{value}</Toast.Body>
        </Toast>
    );
}

export default ToastComp;
//
