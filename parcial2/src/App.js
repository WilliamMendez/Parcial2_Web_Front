import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import MainPage from "./components/mainPage";
import { useState } from "react";
import { IntlProvider } from "react-intl";
import LocaleEsMessages from "./locales/es";
import LocaleEnMessages from "./locales/en";

function App() {
// variable de estado para saber si se está logueado como admin, como usuario o no se está logueado
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    return (
        <div className="App align-items-center">
            <IntlProvider locale="en" messages={LocaleEnMessages}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} />} />
                        <Route path="/login" element={<MainPage setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} />} />
                        <Route path="/Libros" element= {<MainPage isAdmin={isAdmin} isLogged={isLogged} />} />
                    </Routes>
                </BrowserRouter>
            </IntlProvider>
        </div>
    );
}

export default App;
