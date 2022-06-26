import React from 'react'
import {BrowserRouter, useRoutes} from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import FullGame from "./pages/FullGame/FullGame";

const Router = () => {
    return useRoutes([
        {
            path: "/", element: <Home/>
        },
        {
            path: "/game/:slug", element: <FullGame/>
        }
    ]);
};

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Router/>
        </BrowserRouter>
    );
}

export default App;
