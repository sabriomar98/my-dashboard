import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'

const AppSider = ({ items }) => {
    const [current, setCurrent] = useState('');

    const onClickHandler = (e) => {
        setCurrent(e.key);
    }
    return (
        <Sider
            width={200}
            height="100px"
            style={{
                background: "aqua",
            }}
        >
            <Menu
                theme="dark"
                mode="inline"
                style={{
                    height: '100%',
                    borderRight: 0,
                }}
                onClick={onClickHandler}
                items={items}
                selectedKeys={[current]}
            />

        </Sider>
    );
};

export default AppSider
