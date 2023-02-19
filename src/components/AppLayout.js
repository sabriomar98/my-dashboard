import React from 'react';
import { Layout } from 'antd';
import "./AppLayout.css"
import AppHeader from './Layouts/AppHeader';
import AppFooter from './Layouts/AppFooter';
import AppSider from './Layouts/AppSider';
import AppBreadcrumb from './Layouts/AppBreadcrumb';
import { Link, Outlet } from 'react-router-dom';
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,

} from '@ant-design/icons'
import AppContent from './Layouts/AppContent';



function AppLayout() {
    const items = [
        {
            label: 'Dashboard',
            key: 'dashboard',
            icon: <MailOutlined />,
            path: <Link to="/dashboard">Dashboard</Link>
        },
        {
            label: 'Home',
            key: 'home',
            icon: <AppstoreOutlined />,
            path: <Link to="/">Home</Link>

        },
        {
            label: 'About',
            key: 'about',
            icon: <SettingOutlined />,
            path: <Link to="/about">About</Link>

        },
    ];
    return (
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider items={items} />
                <Layout>
                    <AppBreadcrumb />
                    <AppContent />
                    <AppFooter />
                </Layout>
            </Layout>
        </Layout>

    );
}

export default AppLayout;
