import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./scss/index.scss";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import NewDish from "./routes/NewDish";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                    <Route path="/admin/add-dish" element={<NewDish />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
