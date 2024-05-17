import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Ads } from './pages/Ads/Ads';
import { Ad } from './pages/Ad/Ad';

export const App = () => {
    return (
        <div className='App'>
            <Header />
            <Main />
        </div>
        
    );
};
