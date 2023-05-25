
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

// Libro es un container que contiene los detalles del libro

function Libro(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>{props.libro.titulo}</h1>
                </Col>
            </Row>
            <Row>
                {/* tabla con isbn, author, publisher, genre, year, available online, price y summary de forma vertical */}
                <Col>

                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>ISBN</td>
                                <td>{props.libro.isbn}</td>
                            </tr>
                            <tr>
                                <td>Author</td>
                                <td>{props.libro.author}</td>
                            </tr>
                            <tr>
                                <td>Publisher</td>
                                <td>{props.libro.publisher}</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>{props.libro.genre}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{props.libro.year}</td>
                            </tr>
                            <tr>
                                <td>Available Online</td>
                                <td>{props.libro.availableOnline}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{props.libro.price}</td>
                            </tr>
                            <tr>
                                <td>Summary</td>
                                <td>{props.libro.summary}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Libro;
