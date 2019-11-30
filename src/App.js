import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Events from "./MainContent/Events/Events";
import Footer from "./Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <MainContent/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
