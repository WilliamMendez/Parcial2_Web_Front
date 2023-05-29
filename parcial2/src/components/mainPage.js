import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LibroDetail from "./libroDetail";
import LibroList from "./libroList";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function MainPage({ isAdmin, isLogged }) {
    const navigate = useNavigate();
    if (!isLogged) {
        navigate("/");
    }

    // libro completo {"id":1,"name":"Cien Años de Soledad",
    //                  "image":"http://dummyimage.com/200x200.png/cc0000/ffffff",
    //                  "isbn":"302491056-5"}

    // libro detail {"id":1,"name":"Cien Años de Soledad",
    //              "isbn":"302491056-5",
    //              "author":"Gabriel García Márquez",
    //              "publisher":"Planeta",
    //              "gender":"Novela",
    //              "year":2003,
    //              "available_online":true,
    //              "price":40000,
    //              "summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque diam in neque interdum, in tristique magna bibendum. Phasellus id vestibulum leo. Maecenas nisl felis, dignissim ac est in, elementum sagittis mi. Etiam suscipit massa ligula, sed malesuada ligula fermentum vel. Proin at lectus eu massa vestibulum mollis tempor nec nisi."}

    const [error, setError] = useState("");
    const [libros, setLibros] = useState([]);
    const [libroDetail, setLibroDetail] = useState({});
    const [selectedLibro, setSelectedLibro] = useState("");

    const url = "http://localhost:3000/books";
    var libro = {};

    fetch(url)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res);
            if (res.statusCode < 200 || res.statusCode > 299) {
                setError(res.message);
            } else {
                setLibros(res);
            }
        })
        .catch((err) => {
            console.log(err);
            setError(err.message);
        });

    useEffect(() => {
        // console.log(isLogged);
        if (!isLogged) {
            console.log("no logueado, redirigiendo a login");
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        // console.log("selectedLibro: " + selectedLibro);
        if (selectedLibro !== "") {
            getLibroDetail();
            // console.log("selectedLibro: " + libroDetail.name);
        } else {
            setLibroDetail({});
        }
    }, [selectedLibro]);

    function getLibroDetail() {
        const urlDetail = url + "/" + selectedLibro;
        // console.log(selectedLibro);
        fetch(urlDetail)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res);
                if (res.statusCode < 200 || res.statusCode > 299) {
                    setError(res.message);
                } else {
                    if (libroDetail.id !== res.id) {
                        console.log("seteando libroDetail");
                        setLibroDetail(res);
                        libro = res;
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

    const showLibroDetail = () => {
        // console.log("showLibroDetail");
        // console.log(libroDetail);
        // getLibroDetail();
        return <LibroDetail libro={libroDetail} isAdmin={isAdmin} />;
    };

    return (
        <Container className="justify-self-center px-0">
            <Row className="mx-0 px-0 mt-5">
                <p className="text-danger">{showErrors()}</p>
                <Col style={{ margin: "0px", padding: "0px" }} className="mx-0 px-0 col-8">
                    <LibroList libros={libros} getLibroDetail={getLibroDetail} setSelectedLibro={setSelectedLibro} />
                </Col>
                <Col style={{ margin: "0px", padding: "0px" }} className="mx-0 px-0 col-4">
                    {showLibroDetail()}
                </Col>
            </Row>
        </Container>
    );
}

export default MainPage;
