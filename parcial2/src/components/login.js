import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import books from "../books.png";
import { useEffect } from "react";

// Login es un fondo gris con una tarjeta en frente con dos columnas, una con una imagen y un texto sobre fondo gris
//  y una con un título, el formulario de ingreso y el botón de
// entrar

function Login() {
    const url = "http://localhost:3000/login";
//  el login es un post a la url http://localhost:3000/login con el email y la contraseña y retorna errores o el tipo de usuario
//  se ejecuta cuando el usuario hace click en el botón de entrar
//  Ejemplo: {"email": "parcial2@hotmail.com","password": "123456"}
//  Ejemplo de respuesta: {"tipo": "admin"}

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const [tipo, setTipo] = useState("");

    const [isLogged, setIsLogged] = useState(false);

    function tryLogin() {
        const body = { email: user.email, password: user.password };
        console.log(body);
        fetch(url, {
            method: "POST",
            body: JSON.stringify(body)
        })

            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.tipo === "admin") {
                    setTipo("admin");
                    setIsLogged(true);
                    setError("");
                } else
                {
                    setTipo("user");
                    setIsLogged(true);
                    setError("");
                }
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            });
    }

    const showErrors = () => {
        if (error !== "") {
            return error;
        } else {
            return "";
        }
    };

    return (
        <Container fluid className="bg-light">
            <Row className="justify-content-center align-items-center vh-100">
                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow">
                        <Card.Body>
                            <Row className="justify-content-center">
                                <Col xs={12} className="text-center">
                                    <img src={books} alt="books" className="img-fluid" />
                                    <h1 className="text-primary">Iniciar sesión</h1>
                                </Col>
                                <Col xs={12}>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Correo electrónico</Form.Label>
                                            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col xs={12}>
                                    <Form>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Contraseña</Form.Label>
                                            <Form.Control type="password" placeholder="Ingresa tu contraseña" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                        </Form.Group>
                                    </Form>
                                </Col>
{/* mensaje de error que se recibe del back y se hace visible si existe */}
                                <Col xs={12} className="text-center">
                                    <p className="text-danger" id="error">{showErrors()}</p>
                                </Col>

                                <Col xs={12} className="text-center">
                                    <Button variant="primary" type="submit" className="w-100" onClick={tryLogin}>
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

export default Login;
