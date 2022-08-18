import { useEffect, useState, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { deleteUser } from '~/services/deleteService';
import { getUser } from '~/services/getuserService';
import { HandleUsers } from '~/pages/components/HandleUser/HandleUser';

function RemoveModal({ idUser, ...props }) {
    const [userValue, setUserValue] = useState();
    const handleRemove = useContext(HandleUsers);

    useEffect(() => {
        if (idUser) {
            const getUserData = async () => {
                const user = await getUser(idUser);
                setUserValue(user);
            };
            getUserData();
        }
    }, [idUser]);
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Do you want to delete this user ?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email : {userValue && userValue.email}</Form.Label>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={() => {
                        handleRemove.remove.handleDelete(idUser, props);
                    }}
                >
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RemoveModal;
