import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react'

const AppHeader = () => {

    const items1 = ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
    }));
    return (
        <div>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
        </div>
    )
}

export default AppHeader
