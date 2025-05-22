import React, { useState } from 'react';
import { Button, Popover, Input, Space, Dropdown, Menu } from 'antd';
import {
    InfoCircleOutlined,
    AppstoreAddOutlined,
    SearchOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';

export default function NorthPane() {
    const [visible, setVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Buscando:', searchTerm);
        setVisible(false);
        setSearchTerm('');
    };

    const searchContent = (
        <Space.Compact style={{ width: 300 }}>
            <Input
                placeholder="Buscar..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onPressEnter={handleSearch}
                autoFocus
            />
            <Button type="primary" onClick={handleSearch}>
                Buscar
            </Button>
        </Space.Compact>
    );

    // Definimos las opciones del mini menú
    const menu = (
        <Menu
            items={[
                { key: '1', label: 'Tienda' },
                { key: '2', label: 'Servicios' },
                { key: '3', label: 'Precio' },
                { key: '4', label: 'Noticias' },
                { key: '5', label: 'Sobre nosotros' },
                { key: '6', label: 'Ayuda' },
                { key: '7', label: 'Contacto' }

            ]}
            onClick={({ key }) => {
                console.log('Seleccionaste:', key);

            }}
        />
    );

    return (
        <div style={{ background: "#1A1423", width: "100%", height: "10vh" }}>
            <div
                style={{
                    marginTop: 0,
                    width: "20%",
                    height: "10vh",
                    marginLeft: "32%",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Button
                    style={{
                        fontSize: '2vh',
                        color: 'white',
                        marginRight: '1vh',
                        backgroundColor: '#1A1423',
                        border: 'none'
                    }}
                >
                    Inicio
                </Button>

                {/* Aquí el Dropdown */}
                <Dropdown overlay={menu} trigger={['click']}>
                    <Button
                        icon={<AppstoreAddOutlined />}
                        style={{
                            fontSize: '2vh',
                            color: 'white',
                            marginRight: '1vh',
                            backgroundColor: '#1A1423',
                            border: 'none'
                        }}
                    />
                </Dropdown>

                <Button
                    type="primary"
                    shape="round"
                    icon={<InfoCircleOutlined />}
                    size="large"
                    style={{
                        marginRight: '1vh',
                        background: "#FAB803",
                        width: '50vh',
                        height: '5vh'
                    }}
                >
                    Contáctenos
                </Button>

                <Popover
                    content={searchContent}
                    trigger="click"
                    open={visible}
                    onOpenChange={setVisible}
                    placement="bottomLeft"
                >
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<SearchOutlined />}
                        style={{ marginLeft: '5vh', background: "rgba(204,197,206,0.21)"}}
                    />
                </Popover>

                <Button
                    type="primary"
                    shape="round"
                    icon={<InfoCircleOutlined />}
                    size="large"
                    style={{
                        marginRight: '0.5vh',
                        background: "rgba(204,197,206,0.21)",
                        width: '50vh',
                        height: '5vh',
                        marginLeft: '2vh'
                    }}
                >
                    Iniciar sesión
                </Button>


                <Button
                    type="primary"
                    shape="circle"
                    icon={<ShoppingCartOutlined />}
                    style={{ marginLeft: '1vh', width: '3vh', height: '4vh', background: "rgba(204,197,206,0.21)"}}
                />

            </div>
        </div>
    );
}
