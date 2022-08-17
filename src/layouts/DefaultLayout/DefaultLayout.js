import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header/Header';
import styles from './DefaultLayout.module.scss';
import stylesBoostrap from 'bootstrap/dist/css/bootstrap.min.css';
import { HandleUser } from '~/pages/components/HandleUser/HandleUser';

const cx = classNames.bind(styles || stylesBoostrap);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper', 'container')}>
            <header>{<Header />}</header>
            <HandleUser>{children}</HandleUser>
        </div>
    );
}

export default DefaultLayout;
