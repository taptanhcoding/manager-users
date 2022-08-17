import { useContext, useEffect, useMemo, useState } from 'react';
import { Nav, Button, Form, Table, Pagination, Modal } from 'react-bootstrap';

import classNames from 'classnames/bind';
import styles from './ManagerUsers.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowDown,
    faArrowDownUpAcrossLine,
    faArrowUp,
    faCirclePlus,
    faFileArrowDown,
    faFileExport,
    faFileImport,
} from '@fortawesome/free-solid-svg-icons';
import { wait } from '@testing-library/user-event/dist/utils';
import { getUsers } from '~/services/listusersService';
import AddModal from '~/pages/components/Modal/AddModal ';
import RemoveModal from '~/pages/components/Modal/RemoveModal';
import { HandleUser, HandleUsers } from '~/pages/components/HandleUser/HandleUser';

const cx = classNames.bind(styles);
function ManagerUsers() {
    const handleUser = useContext(HandleUsers);
    const [addModal, setAddModal] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);
    const [idU, setIdU] = useState();
    const [listUser, setListUser] = useState([]);
    const [page, setPage] = useState(1);
    useMemo(() => {
        const getUsers1 = async () => {
            const users = await getUsers(page);
            setListUser(users);
        };
        getUsers1();
    }, [page]);

    useEffect(() => {
        console.log(handleUser.add.newInfo);
        setListUser((prev) => [handleUser.add.newInfo, ...prev]);
    }, [handleUser.add.newInfo]);

    return (
        <>
            <Nav className={cx('justify-content-between', 'align-items-center', 'mb-3', 'mt-3')} activeKey="/home">
                <Nav.Item>
                    <h2 className={cx('title')}>List Users: </h2>
                </Nav.Item>
                <Nav.Item>
                    <Button
                        variant="success"
                        onClick={() => {
                            setAddModal(true);
                        }}
                    >
                        <FontAwesomeIcon icon={faCirclePlus} /> Add new
                    </Button>
                </Nav.Item>
            </Nav>

            <Form.Control
                type="email"
                id="inputPassword5"
                placeholder="Search user by email"
                className={cx('input-search', 'mb-3')}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className={cx('d-flex', 'justify-content-between')}>
                            ID
                            <a>
                                <FontAwesomeIcon icon={faArrowDown} />
                                <FontAwesomeIcon icon={faArrowUp} />
                            </a>
                        </th>
                        <th>Email</th>
                        <th className={cx('d-flex', 'justify-content-between')}>
                            Fisrt name
                            <a>
                                <FontAwesomeIcon icon={faArrowDown} />
                                <FontAwesomeIcon icon={faArrowUp} />
                            </a>
                        </th>
                        <th>Last name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() => {
                                        setIdU(user.id);
                                        // setUpModal(true);
                                    }}
                                >
                                    Edit
                                </Button>{' '}
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        setIdU(user.id);
                                        setRemoveModal(true);
                                    }}
                                >
                                    Delete
                                </Button>{' '}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className={cx('d-flex', 'justify-content-center')}>
                <Pagination>
                    <Pagination.Prev
                        onClick={() => {
                            page > 1 ? setPage((prev) => prev - 1) : alert('bạn đang ở trang đầu');
                        }}
                    >
                        &#60; Previous{' '}
                    </Pagination.Prev>
                    <Pagination.Item
                        active={page == 1}
                        onClick={() => {
                            setPage(1);
                        }}
                    >
                        {1}
                    </Pagination.Item>

                    <Pagination.Item
                        onClick={() => {
                            setPage(2);
                        }}
                        active={page == 2}
                    >
                        {2}
                    </Pagination.Item>
                    <Pagination.Next
                        onClick={() => {
                            page < 2 ? setPage((prev) => prev + 1) : alert('bạn đang ở trang cuối');
                        }}
                    >
                        Next &#62;
                    </Pagination.Next>
                </Pagination>
            </div>
            <AddModal show={addModal} onHide={() => setAddModal(false)} />
            <RemoveModal idUser={idU} show={removeModal} onHide={() => setRemoveModal(false)} />
        </>
    );
}

export default ManagerUsers;
