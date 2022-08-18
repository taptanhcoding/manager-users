import { useEffect, useState, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { getUser } from '~/services/getuserService';
import { HandleUsers } from '~/pages/components/HandleUser/HandleUser';

function UpdateModal({ idUser, ...props }) {
    const [userValue, setUserValue] = useState();
    const hUpdate = useContext(HandleUsers);

    const [nameValue, setName] = useState('');
    const [jobValue, setJob] = useState('');

    useEffect(() => {
        if (idUser) {
            const getUserData = async () => {
                const user = await getUser(idUser);
                setUserValue(user);
                setName(user.first_name);
                setJob(user.last_name);
            };
            getUserData();
        }
    }, [idUser]);

    return (
        userValue && (
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Update user :{userValue.email}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={nameValue}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Job</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Job"
                            value={jobValue}
                            onChange={(e) => {
                                setJob(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
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
                            hUpdate.update.handleUpdate(idUser, nameValue, jobValue, props);
                        }}
                    >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    );
}

export default UpdateModal;
