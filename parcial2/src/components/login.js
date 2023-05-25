import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import books from "../../public/books.png";

// Login es un fondo gris con una tarjeta en frente con dos columnas, una con una imagen y un texto sobre fondo gris
//  y una con un título, el formulario de ingreso y el botón de
// entrar

function Login() {
    return (
        <Container fluid className="bg-light">
            <Row className="justify-content-center align-items-center vh-100">
                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow">
                        <Card.Body>
                            <Row className="justify-content-center">
                                <Col xs={12} className="text-center">
                                    <img

                                        src={books}
                                        alt="books"
                                        className="img-fluid"
                                    />
                                    <h1 className="text-primary">
                                        Iniciar sesión
                                    </h1>
                                </Col>
                                <Col xs={12}>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>
                                                Correo electrónico
                                            </Form.Label>
                                            <Form.Control

                                                type="email"
                                                placeholder="Ingresa tu correo electrónico"
                                            />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col xs={12}>
                                    <Form>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Contraseña</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Ingresa tu contraseña"
                                            />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col xs={12} className="text-center">
                                    <Button

                                        variant="primary"
                                        type="submit"
                                        className="w-100"
                                    >
                                        Entrar
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
