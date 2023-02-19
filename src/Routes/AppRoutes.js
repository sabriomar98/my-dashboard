import React from 'react';
import {Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import AboutPage from '../pages/AboutPage/AboutPage'

function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/about" element={<AboutPage/>} />
            <Route exact path="/dashboard"  element = {<DashboardPage/>}/>
        </Routes>
    );
}

export default AppRoutes;
