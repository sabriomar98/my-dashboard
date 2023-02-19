import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

function SidebarApp() {
    const location = useLocation();

    return (
        <Sider>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[location.pathname]}
            >
                <Menu.Item key="/" icon={<PieChartOutlined />}>
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="/about" icon={<DesktopOutlined />}>
                    <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="/projects" icon={<ContainerOutlined />}>
                    <Link to="/projects">Projects</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default SidebarApp;
