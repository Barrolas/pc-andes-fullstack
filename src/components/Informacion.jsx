import React from 'react';
import { Container } from 'react-bootstrap';

const Informacion = () => (
    <Container className='container my-5'>

        <div className="row my-5">
            <div className="col-lg-6">
                <img src="/pc-andes-logo.png" alt="logo" width={512} />
            </div>
            <div className="col-lg-6">
                <h1 className='text-start text-info'>Misión y Visión</h1>
                <p className='text-start'>
                    PC Andes es una empresa chilena dedicada a la venta y distribución de componentes y accesorios para computadores. Fundada en 2018 en Temuco, comenzó como un emprendimiento universitario orientado a ofrecer asesoría tecnológica y productos de calidad a precios competitivos.
                    ser una empresa líder en la venta y distribución de componentes y accesorios para computadores, brindando soluciones tecnológicas de vanguardia a nuestros clientes.
                </p>
            </div>
        </div>

        <div className="row my-5">
            <div className="col-lg-12">
                <h2 className="text-info mb-4 text-start">Principales Productos</h2>
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <img src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" className="card-img-top p-4" alt="Procesadores" style={{ height: '200px', objectFit: 'contain' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-info">Procesadores</h5>
                                <p className="card-text text-center">
                                    Amplia selección de procesadores modernos para potenciar el rendimiento de tu computador, ideales para gaming, diseño o trabajo profesional.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <img src="https://cdn-icons-png.flaticon.com/512/2345/2345336.png" className="card-img-top p-4" alt="Memorias RAM" style={{ height: '200px', objectFit: 'contain' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-info">Memorias RAM</h5>
                                <p className="card-text text-center">
                                    Memorias RAM de diversas capacidades y velocidades para optimizar el rendimiento multitarea y la rapidez de tu equipo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <img src="https://cdn-icons-png.flaticon.com/512/1278/1278604.png" className="card-img-top p-4" alt="SSD NVMe" style={{ height: '200px', objectFit: 'contain' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-info">Discos SSD NVMe</h5>
                                <p className="card-text text-center">
                                    Discos de almacenamiento SSD NVMe, ultrarrápidos y confiables, que elevan la velocidad de carga y transferencia de tus datos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Container>
);

export default Informacion;