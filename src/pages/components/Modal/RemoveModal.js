import { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { deleteUser } from '~/services/deleteService';
import { getUser } from '~/services/getuserService';

function RemoveModal({ idUser, ...props }) {
    const [userValue, setUserValue] = useState();

    useEffect(() => {
        if (idUser) {
            const getUserData = async () => {
                const user = await getUser(idUser);
                setUserValue(user);
            };
            getUserData();
        }
    }, []);

    const handleDelete = () => {
        const deleteData = async () => {
            await deleteUser(idUser);
            props.onHide();
        };
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Do you want to delete this user ?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email :</Form.Label>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleDelete}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RemoveModal;
