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
import UpdateModal from '../components/Modal/UpdateModal';

const cx = classNames.bind(styles);
function ManagerUsers() {
    const [listUser, setListUser] = useState([]);
    const handleUser = useContext(HandleUsers);
    const [addModal, setAddModal] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [idU, setIdU] = useState();
    const [page, setPage] = useState(1);
    useEffect(() => {
        const getUsers1 = async () => {
            const users = await getUsers(page);
            setListUser(users);
        };
        getUsers1();
    }, [page]);

    useMemo(() => {
        if (handleUser.add.newInfo) {
            setListUser((prev) => [handleUser.add.newInfo, ...prev]);
        }
    }, [handleUser.add.newInfo]);
    useMemo(() => {
        if (handleUser.remove.idDelete) {
            setListUser((prevs) => prevs.filter((prev) => prev.id !== handleUser.remove.idDelete));
        }
    }, [handleUser.remove.idDelete]);

    const updateFunction = (prevs) => {
        const upUserInfo = prevs.find((prev) => prev.id == handleUser.update.idUp);
        upUserInfo.first_name = handleUser.update.upInfo.first_name;
        upUserInfo.last_name = handleUser.update.upInfo.last_name;
    };

    useMemo(() => {
        if (handleUser.update.idUp) {
            setListUser((prevs) => {
                updateFunction(prevs);
                return [...prevs];
            });
        }
    }, [handleUser.update.idUp]);

    const handleDescendingId = () => {
        setListUser((prevs) => [...prevs.sort((a, b) => b.id - a.id)]);
    };

    const handleAscendingId = () => {
        setListUser((prevs) => [...prevs.sort((a, b) => a.id - b.id)]);
    };

    const handleDescendingName = () => {
        setListUser((prevs) => [
            ...prevs.sort((a, b) => parseInt(b.first_name.charCodeAt(0)) - parseInt(a.first_name.charCodeAt(0))),
        ]);
    };

    const handleAscendingName = () => {
        setListUser((prevs) => [
            ...prevs.sort((a, b) => parseInt(a.first_name.charCodeAt(0)) - parseInt(b.first_name.charCodeAt(0))),
        ]);
    };
    console.log(listUser);
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
                            <span>
                                <span onClick={handleDescendingId}>
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </span>
                                <span onClick={handleAscendingId}>
                                    {' '}
                                    <FontAwesomeIcon icon={faArrowUp} />
                                </span>
                            </span>
                        </th>
                        <th>Email</th>
                        <th className={cx('d-flex', 'justify-content-between')}>
                            Fisrt name
                            <span>
                                <span onClick={handleDescendingName}>
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </span>
                                <span onClick={handleAscendingName}>
                                    <FontAwesomeIcon icon={faArrowUp} />
                                </span>
                            </span>
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
                                        setEditModal(true);
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
            <UpdateModal idUser={idU} show={editModal} onHide={() => setEditModal(false)} />
        </>
    );
}

export default ManagerUsers;
