import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Affix } from 'antd';
import NorthPane from './components/NorthPane.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import {Button} from 'antd'
import {WhatsAppOutlined, NotificationOutlined, BarcodeOutlined} from '@ant-design/icons';
import './App.css';
import {SearchOutlined} from "@ant-design/icons";
import {FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
const { Header, Content ,Footer} = Layout;

export default function App() {
    const [visible, setVisible] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setVisible(currentY >= 180);
            setPrevScrollY(currentY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY]);

    return (
        <Layout>
            <Header
                style={{
                    background: "rgba(242,245,226,0.76)",
                    width: "100%",
                    height: "15vh",
                    padding: 0,
                }}
            >
                <Row style={{ padding: 0 }}>
                    <Col span={24}>
                        <NorthPane />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div style={{backgroundColor:"rgba(242,245,226,0.76)", width: "60%",marginLeft:"25%", height:"5vh"}}>

                            <Button type="primary" style={{background:"rgba(242,245,226,0.76)",position: "absolute",  color:"black", marginTop:"5px", marginLeft:"2%", display:"block"}} icon={<WhatsAppOutlined />}>Devoluciones al vendedor</Button>
                            <Button type="primary" style={{background:"rgba(242,245,226,0.76)", position: "absolute", color:"black", marginTop:"5px", marginLeft:"23%", display:"block"}} icon={<NotificationOutlined />}>Envios a todo veracruz</Button>
                            <Button type="primary" style={{background:"rgba(242,245,226,0.76)", position : "absolute", color:"black",marginTop:"5px", marginLeft:"43%", display:"block"}} icon={<BarcodeOutlined />}>1 mes de garantia</Button>

                        </div>
                    </Col>
                </Row>
            </Header>

            <Content
                style={{
                    padding: 0,
                    paddingTop: visible ? '15vh' : 0,
                    transition: 'padding-top 0.4s ease-out'
                }}
            >
                <Affix offsetTop={0}>
                    <motion.div
                        initial={false}
                        animate={visible
                            ? { y: 0, opacity: 1 }
                            : { y: -180, opacity: 0 }
                        }
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        style={{ position: 'absolute', top: 0, width: '100%' }}
                    >
                        <NorthPane />
                    </motion.div>
                </Affix>


                <Layout key="main-layout">
                    <Content id="content" style={{ width: "100%", height: "170vh" }}>
                        <div style={{padding:"10px", width:"100%", height:"170vh", backgroundColor:"rgba(255,255,255,0.87)"}}>

                            <img src="../public/img.png" style={{position:"absolute", marginLeft:"5%", marginTop:"0%"}}></img>
                            <img src="../public/img_1.png" style={{position:"absolute", marginLeft:"65%", marginTop:"1%", width:"30%", height:"60%"}}></img>

                            <h1 style={{position:"absolute", marginLeft:"40%", marginTop:"5%", fontSize:"90px", fontFamily:"Times New Roman"}}>Confianza</h1>
                            <h1 style={{position:"absolute", marginLeft:"40%", marginTop:"10%", fontSize:"90px", fontFamily:"Times New Roman"}}>y elegancia</h1>

                            <Button shape="round" style={{position:"absolute", width: "20%", height:"5%",marginLeft:"41%", marginTop:"18%", fontSize:"20px", fontFamily:"Arial", backgroundColor:"#FAB803"}}>Descubra nuestros productos</Button>


                            <div style={{position:"absolute", marginLeft:"10%",width:"80%", height:"100vh", marginTop:"30%", display:"grid", gridTemplateColumns:"repeat(6, 4fr)", gridTemplateRows:"1fr 1fr 1fr 1fr 1fr 1fr"}}>


                                <div style={{ gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 3, display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"1fr" , padding:"10px"}}>

                                    <div style={{backgroundColor: "black", marginTop:"10%", marginBottom:"20%", padding:"10px", borderRadius:"50px"}}>

                                        <h3 style={{color:"white", fontSize:"30px", fontFamily:"Times New Roman"}}> Inovaciones</h3>
                                        <p style={{color:"white", fontSize:"20px", fontFamily:"Arial"}}> Descubre el arte de elegir, sin límites, en un espacio donde cada fragancia se convierte en un reflejo de tu esencia.</p>
                                    </div>

                                    <div style={{backgroundColor: "#F5F4F0", marginTop:"10%", marginBottom:"20%", borderRadius:"50px", padding:"10px", marginLeft:"10px"}}>
                                        <h3 style={{color:"black", fontSize:"30px", fontFamily:"Times New Roman"}}> Enfocar</h3>
                                        <p style={{color:"black", fontSize:"20px", fontFamily:"Arial"}}> Construyendo experiencias</p>
                                    </div>

                                </div>

                                <div style={{ gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 3, gridRowEnd: 8, padding:"20px"}}>
                                    <img src="../public/img_3.png" style={{width:"100%", height:"100%", borderRadius:"50px"}}></img>

                                </div>


                                <div style={{ gridColumnStart: 4, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 5, padding:"20px"}}>
                                    <img src="../public/img_4.png" style={{width:"100%", height:"100%", borderRadius:"50px"}}></img>

                                </div>

                                <div style={{ gridColumnStart: 4, gridColumnEnd: 7, gridRowStart: 5, gridRowEnd: 8,display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"1fr" , padding:"10px"}}>

                                    <div style={{backgroundColor: "#F5F4F0", marginTop:"10%", marginBottom:"20%", padding:"10px", borderRadius:"50px"}}>

                                        <h3 style={{color:"black", fontSize:"30px", fontFamily:"Times New Roman"}}> 22%</h3>
                                        <p style={{color:"black", fontSize:"20px", fontFamily:"Arial"}}> Alcanzando nuevas alturas.</p>
                                    </div>

                                    <div style={{backgroundColor: "#FAB803", marginTop:"10%", marginBottom:"20%", borderRadius:"50px", padding:"5x", marginLeft:"10px"}}>
                                        <h3 style={{color:"black", fontSize:"30px", fontFamily:"Times New Roman"}}> Más de 12</h3>
                                        <p style={{color:"black", fontSize:"20px", fontFamily:"Arial"}}> Descubre tu esencia.</p>
                                    </div>

                                </div>

                            </div>


                        </div>


                        <div style={{backgroundColor:"white", width:"40%", height:"140vh", marginLeft:"10%", padding:"15px"}}>

                            <div style={{backgroundColor:"#F5F4F0", width:"100%", height:"130vh"}}>

                                <h1 style={{color:"black", fontSize:"40px", fontFamily:"cursive", marginLeft:"10%"}}>
                                    Nuestra coleccion de gorras
                                </h1>

                                <p style={{color:"black", fontSize:"30px", fontFamily:"-moz-initial", marginLeft:"5%"}}>
                                    Resalte su personalidad con nuestras fragancias de la más alta calidad. Creaciones únicas para cada estilo y momento.

                                </p>

                                <h2 style={{color:"black", fontSize:"30px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    ✽ Colección gorras mexicanas
                                </h2>

                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Gorra de méxico _________________________________ 1.400 MXN
                                </p>
                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Una gorra de mexico es un complemento perfecto para cualquier ocasi&oacute;n, ya sea para salir de fiesta o simplemente para un momento de relax.
                                </p>

                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Gorra de jaguar _________________________________ 2.400 MXN
                                </p>
                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Una gorra de jaguar es un complemento perfecto para cualquier ocasi&oacute;n, ya sea para salir de fiesta o simplemente para un momento de relax.
                                </p>

                                <h2 style={{color:"black", fontSize:"30px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    ✽ Colección gorras premium
                                </h2>

                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Gorra de la industria mexicana _____________________ 5.400 MXN
                                </p>
                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Una gorra de la industria mexicana es un complemento perfecto para cualquier ocasi&oacute;n, ya sea para salir de fiesta o simplemente para un momento de relax.
                                </p>

                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Gorra de la industria de USA ______________________ 1.300 MXN
                                </p>
                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Una gorra de la industria de USA es un complemento perfecto para cualquier ocasi&oacute;n, ya sea para salir de fiesta o simplemente para un momento de relax.
                                </p>

                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Gorra de mazatlan _____________________________ 2.400 MXN
                                </p>
                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Una gorra de mazatlan es un complemento perfecto para cualquier ocasi&oacute;n, ya sea para salir de fiesta o simplemente para un momento de relax.
                                </p>

                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Gorra de la industria Veracruz ____________________ 5.400 MXN
                                </p>
                                <p style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"5%"}}>
                                    Una gorra de la industria Veracruz es un complemento perfecto para cualquier ocasi&oacute;n, ya sea para salir de fiesta o simplemente para un momento de relax.
                                </p>

                            </div>

                        </div>


                        <div style={{marginTop:"0%",backgroundColor:"white", width:"100%", height:"80vh"}}>

                            <img src="../public/img_8.png" style={{marginTop:"1%",width:"80%", height:"90%", borderRadius:"50px", borderBlockColor:"black", marginLeft:"10%"}}>
                            </img>

                        </div>

                        <div style={{marginTop:"0%",backgroundColor:"#2E2714", width:"100%", height:"50vh", padding:"4%", marginBottom:"0%"}}>
                            <div>
                                <h2 style={{color:"white", fontSize:"30px", fontFamily:"cursive", marginLeft:"5%", marginTop:"0%"}}>
                                    Las gorras son un complemento perfecto para cualquier ocasi&oacute;n, ya sea para salir de fiesta o simplemente para un momento de relax.
                                </h2>
                                <p style={{color:"white", fontSize:"20px", fontFamily:"cursive", marginLeft:"46%"}}>Unete al equipo</p>
                                <Button type="primary" size="large" style={{marginLeft:"40%", marginTop:"1%", backgroundColor:"Yellow", color:"black", width:"20%", height:"10vh"}}>
                                    Postular
                                </Button>
                            </div>
                        </div>

                        <div style={{marginTop:"0%",backgroundColor:"white", width:"100%", height:"50vh", padding:"0%"}}>
                            <div style={{marginTop:"0%",backgroundColor:"rgba(10,123,140,0.85)", width:"100%", height:"100%"}}>

                                <h2 style={{color:"white",fontSize:"30px", fontFamily:"cursive", marginLeft:"5%", marginTop:"0%"}}>
                                    ¿Quieres saber m&aacute;s de nosotros?
                                </h2>

                                <h3 style={{color:"white", fontSize:"20px", fontFamily:"Arial", marginLeft:"5%", marginTop:"0%"}}>
                                    Somos un equipo de personas apasionadas cuyo objetivo es mejorar la vida de todos a través de productos disruptivos. Construimos grandes productos para resolver sus problemas de negocio.

                                    Nuestros productos están diseñados para pequeñas y medianas empresas dispuestas a optimizar su rendimiento
                                </h3>

                                <div style={{display:"flex", justifyContent:"center", marginTop:"5%"}}>
                                    <Button shape="circle" icon={<FacebookOutlined />} style={{marginRight:"2%"}}/>
                                    <Button shape="circle" icon={<TwitterOutlined />} style={{marginRight:"2%"}}/>
                                    <Button shape="circle" icon={<InstagramOutlined />} style={{marginRight:"2%"}}/>
                                    <Button shape="circle" icon={<YoutubeOutlined />}  style={{marginRight:"2%"}}/>
                                </div>

                            </div>
                        </div>

                        <Footer style={{ textAlign: 'center' }}>
                            © 2024 Copyright
                            <h2 style={{color:"black", fontSize:"20px", fontFamily:"cursive", marginLeft:"0%", marginTop:"0%"}}> Con tecnologías de ANTD</h2>
                        </Footer>
                        
                    </Content>


                </Layout>


            </Content>


        </Layout>

    );
}
