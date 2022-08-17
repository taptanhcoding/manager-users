import { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { getUser } from '~/services/getuserService';

function UpdateModal({ idUser, ...props }) {
    const [userValue, setUserValue] = useState({});

    useEffect(() => {
        const getUserData = async () => {
            const user = await getUser(idUser);
            setUserValue(user);
        };
        getUserData();
    }, []);

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Update user : {userValue.email}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Job</Form.Label>
                    <Form.Control type="text" placeholder="Enter Job" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={() => {}}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateModal;
