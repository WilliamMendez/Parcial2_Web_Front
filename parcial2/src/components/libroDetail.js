import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";

// Libro es un container que contiene los detalles del libro

function LibroDetail(props) {
    const url = "http://localhost:3000/books";
    const [libroNuevo, setLibroNuevo] = useState(props.libro);

    function handleInputChange(e) {
        console.log(libroNuevo.available_online);
        // console.log(e.target.name);
        // e.preventDefault();
        if (e.target.name !== "available_online") {
            setLibroNuevo({
                ...libroNuevo,
                [e.target.name]: e.target.value,
            });
        } else {
            setLibroNuevo({
                ...libroNuevo,
                [e.target.name]: !libroNuevo.available_online,
            });
        }
        console.log(libroNuevo);
    }

    function handleSubmit() {
        console.log(libroNuevo);
        const urlDetail = url;
        fetch(urlDetail, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(libroNuevo),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.statusCode < 200 || res.statusCode > 299) {
                    console.log("error");
                } else {
                    console.log("libro actualizado");
                }
            });
    }

    useEffect(() => {
        console.log("props.libro");
        console.log(props.libro);
        setLibroNuevo(props.libro);
    }, [props.libro]);

    // // useEffect(() => {
    // //     console.log("libroAnterior");
    // //     // console.log(libroAnterior);
    // // }, [libroAnterior]);

    // useEffect(() => {
    //     console.log("libro");
    //     // console.log(renderizado);
    // }, [libro]);

    if (props.libro.name !== undefined) {
        if (props.isAdmin) {
            return (
                <Container className="justify-items-start">
                    <Row>
                        <Col>
                            <h2 className="text-start">{props.libro.name}</h2>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">ISBN:</p>
                            </Col>
                            <Col>
                                <p className="text-start">{props.libro.isbn}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Autor:</p>
                            </Col>
                            <Col>
                                <p className="text-start">{props.libro.author}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Editorial:</p>
                            </Col>
                            <Col>
                                <p className="text-start">{props.libro.publisher}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Género:</p>
                            </Col>
                            <Col>
                                <p className="text-start">{props.libro.gender}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Año:</p>
                            </Col>
                            <Col>
                                <p className="text-start">{props.libro.year}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Disponible Online:</p>
                            </Col>
                            <Col>
                                <p className="text-start">{props.libro.availableOnline ? "Sí" : "No"}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Precio:</p>
                            </Col>
                            <Col>
                                <p className="text-start">{props.libro.price}</p>
                            </Col>
                        </Row>
                        <Row>
                            <p className="text-start fw-bold">Resumen:</p>
                            <p className="text-start">{props.libro.summary}</p>
                        </Row>
                    </Row>
                </Container>
            );
        } else {
            // para los admins se cambian los <p> por <input> para poder editar los campos
            return (
                <Container className="justify-items-start">
                    <Row>
                        <Col>
                            <input
                                className="form-control text-start"
                                type="text"
                                id="name"
                                name="name"
                                value={libroNuevo.name || ""}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">ISBN:</p>
                            </Col>
                            <Col>
                                <input
                                    className="form-control text-start"
                                    type="text"
                                    id="isbn"
                                    name="isbn"
                                    value={libroNuevo.isbn || ""}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Autor:</p>
                            </Col>
                            <Col>
                                <input
                                    className="form-control text-start"
                                    type="text"
                                    id="author"
                                    name="author"
                                    value={libroNuevo.author || ""}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Editorial:</p>
                            </Col>
                            <Col>
                                <input
                                    className="form-control text-start"
                                    type="text"
                                    id="publisher"
                                    name="publisher"
                                    value={libroNuevo.publisher || ""}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Género:</p>
                            </Col>
                            <Col>
                                <input
                                    className="form-control text-start"
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    value={libroNuevo.gender || ""}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Año:</p>
                            </Col>
                            <Col>
                                <input
                                    className="form-control text-start"
                                    type="text"
                                    id="year"
                                    name="year"
                                    value={libroNuevo.year || ""}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Disponible Online:</p>
                            </Col>
                            <Col className="text-start">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="available_online"
                                    name="available_online"
                                    checked={libroNuevo.available_online || false}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text-start fw-bold">Precio:</p>
                            </Col>
                            <Col>
                                <input
                                    className="form-control text-start"
                                    type="text"
                                    id="price"
                                    name="price"
                                    value={libroNuevo.price || ""}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <p className="text-start fw-bold">Resumen:</p>
                            <textarea
                                className="form-control"
                                wrap="soft"
                                type="text"
                                id="summary"
                                name="summary"
                                value={libroNuevo.summary || ""}
                                onChange={handleInputChange}
                            />
                        </Row>
                        <Row className="justify-content-end mt-3">
                            <Button variant="secondary" className="p-2" onClick={handleSubmit}>
                                Modificar
                            </Button>
                        </Row>
                    </Row>
                </Container>
            );
        }
    } else {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Libro no Seleccionado</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LibroDetail;
