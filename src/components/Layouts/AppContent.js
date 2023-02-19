import { Content } from 'antd/es/layout/layout'
import React from 'react'
import {Route, Routes } from 'react-router-dom'
import DashboardPage from '../../pages/DashboardPage/DashboardPage'
import HomePage from '../../pages/HomePage/HomePage'
import AboutPage from '../../pages/AboutPage/AboutPage'

const AppContent = () => {
    return (
        <div>
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: "white",
                }}
            >
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/contact" element={<DashboardPage/>} />
                </Routes>
            </Content>
        </div>
    )
}

export default AppContent
