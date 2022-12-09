import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { RxEnter, RxHeart} from "react-icons/rx";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function Personaje({personaje}){
    const [show, setShow] = useState(false);
    const [button, setButton] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleFavorite = () => setButton(!button);
    return(
        <>
        <Card>
            <Card.Img variant="top" src={personaje.image} alt={personaje.name} />
            <Card.Body>
                <Card.Title>{personaje.name}</Card.Title>
            </Card.Body>
            <Button variant="success" size='lg' onClick={handleShow}>Ver personaje <RxEnter /></Button>
        </Card>
        <Modal 
            dialogClassName="modal-90w" 
            show={show} 
            onHide={handleClose}
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header>
                <Modal.Title id="example-custom-modal-styling-title">{personaje.name}</Modal.Title>
                <Button variant={button === true ? "danger" : "outline-danger"} onClick={handleFavorite}> <RxHeart /> </Button>
            </Modal.Header>
            <Modal.Body>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Card.Img variant="top" src={personaje.image} alt={personaje.name} />
                    </Col>
                    <Col xs={12} md={8}>
                        <span><b>Estado:</b> {personaje.status}</span><br/>
                        <span><b>Epecie:</b> {personaje.species}</span><br/>
                        <span><b>Género:</b> {personaje.gender}</span><br/>
                        <span><b>Origen:</b> {personaje.origin.name}</span><br/>
                        <span><b>localización:</b> {personaje.location.name}</span><br/>
                        <span><b>Episodio debut:</b> {personaje.episode[0]}</span><br/>
                        <span><b>Creado:</b> {personaje.created}</span><br/>
                    </Col>
                </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Personaje;