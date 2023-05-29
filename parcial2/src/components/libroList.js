import LibroCard from "./libroCard";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function libroList({ libros, getLibroDetail, setSelectedLibro }) {
    return (
        <Container className="px-0 mx-0">
            <Row className="mx-0 px-0 justify-content-start">
                {libros.map((libro) => (
                    <Col key={libro.id} className="mx-0 px-0">
                        <LibroCard
                            libro={libro}
                            getLibroDetail={getLibroDetail}
                            setSelectedLibro={setSelectedLibro}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default libroList;
