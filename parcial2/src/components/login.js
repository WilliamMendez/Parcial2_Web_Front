import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";
import books from "../books.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Login es un fondo gris con una tarjeta en frente con dos columnas, una con una imagen y un texto sobre fondo gris
//  y una con un título, el formulario de ingreso y el botón de
// entrar

function Login({ setIsAdmin, setIsLogged }) {
    // console.log(setIsAdmin);
    const navigate = useNavigate();
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

    function tryLogin() {
        const bodystr = JSON.stringify(user);
        console.log(user);
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: bodystr,
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.statusCode < 200 || res.statusCode > 299) {
                    setError(res.message);
                } else {
                    if (res.rol === "Administrador") {
                        setIsAdmin(true);
                        setIsLogged(true);
                        setError("");
                        navigate("/Libros");
                    } else {
                        setIsAdmin(false);
                        setIsLogged(true);
                        setError("");
                        navigate("/Libros");
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            });
    }

    const showErrors = () => {
        // console.log(error);
        return error;
    };

    return (
        <Container fluid className="bg-secondary bg-gradient min-vh-100 d-flex flex-column justify-content-center">
            <Container className="bg-light bg-gradient rounded-3">
                <Row>
                    <Col className="d-flex justify-content-center align-items-center bg-teal rounded-3">
                        <Row>
                            <Image src={books} fluid />
                            <h3 className="text-center p-2">Encuentra hasta el libro que no estabas buscando</h3>
                        </Row>
                    </Col>
                    <Col className="d-flex flex-column">
                        <h1 className="text-center p-5">Tu Libreria Aliada</h1>
                        <Form className="align-self-center align-content-start justify-content-start">
                            <Container className="d-flex flex-column justify-content-start">
                                <Form.Group className="mb-3 justify-content-start align-self-start" controlId="formBasicEmail">
                                    <Form.Label className="text-start">Usuario o correo</Form.Label>
                                    <Form.Control type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="text-start">Contraseña</Form.Label>
                                    <Form.Control type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                </Form.Group>
                            </Container>
                        </Form>

                        {/* texto de error */}
                        <p className="text-danger" id="error">
                            {showErrors()}
                        </p>

                        <Button variant="secondary" type="button" onClick={tryLogin} className="mb-3">
                            Entrar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Login;
