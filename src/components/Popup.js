import React from 'react';
import {Modal,Button,Row,Col,Container} from 'react-bootstrap';

const Popup = (props) => {
    
    return (
        <>
            <Modal
                show={props.showModal}
                onHide={props.closeModal}
                backdrop="static"
                keyboard={false}
                centered
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton/>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <img style={{width:"100%"}}src="https://images.unsplash.com/photo-1564419320408-38e24e038739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </Col>
                            <Col md={6}>
                                <h2>Name:Abcd</h2>
                                <h3>Uploaded By: Abcd</h3>
                                <h5>Upload Date: 12/12/2022</h5>
                                <br/>
                                <p>Tag1,Tag2,Tag3,Tag4</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal}>
                        Close
                    </Button>
                    <Button variant="primary">Download</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Popup
