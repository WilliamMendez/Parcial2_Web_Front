import { Card } from "react-bootstrap";

function libroCard({ libro, getLibroDetail, setSelectedLibro }) {
    // card de bootstrap con titulo, autor, editorial y año
    // al hacer click en la card se llama a getLibroDetail con el id del libro y se setea el libro seleccionado
    return (
        <Card style={{ width: "12rem" }} className="mb-2 me-0" onClick={() => { setSelectedLibro("");setSelectedLibro(libro.id); getLibroDetail(); }}>
            <Card.Body>
                <Card.Img variant="top" src={libro.image} />
                <Card.Title className="text-start">{libro.name}</Card.Title>
                <Card.Subtitle className="mb-1 text-muted text-start">ISBN: {libro.isbn}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default libroCard;
