import React from 'react';
import { Container } from 'react-bootstrap';

const Informacion = () => (
    <Container className='container my-5'>
<hr />
        <div className="row my-5 my-md-4 align-items-center">
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
                <img src="/pc-andes-logo.png" alt="logo" width={512} className="img-fluid" />
            </div>
            <div className="col-lg-6 py-3 py-md-4">
                <h1 className='text-center text-info mb-4'>Misión y Visión</h1>
                <p className='text-justify'>
                    PC Andes es una empresa chilena dedicada a la venta y distribución de componentes y accesorios para computadores. Fundada en 2018 en Temuco, comenzó como un emprendimiento universitario orientado a ofrecer asesoría tecnológica y productos de calidad a precios competitivos.
                    ser una empresa líder en la venta y distribución de componentes y accesorios para computadores, brindando soluciones tecnológicas de vanguardia a nuestros clientes.
                </p>
            </div>
        </div>
        <hr />

        <div className="row my-5 my-md-4">
            <div className="col-lg-12">
                <h2 className="text-info mb-4 text-center">Productos Destacados</h2>
                <div className="row justify-content-center">
                    {/* Producto 1 */}
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img 
                                src="https://sipoonline.cl/wp-content/uploads/2022/10/Procesador-AMD-Ryzen-7-5700X-AM4-8-Cores-16-Hilos-3.44.6GHz-Sin-Disipador-1.png" 
                                className="card-img-top" 
                                alt="Procesador AMD Ryzen 7 5800X" 
                                style={{ objectFit: 'contain', height: '250px', padding: '20px' }} 
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Procesador AMD Ryzen 7 5800X</h5>
                                <p className="card-text text-muted small">
                                    Procesador de alto rendimiento con 8 núcleos y 16 hilos
                                </p>
                                <div className="mt-auto">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted small text-decoration-line-through">$450.000</span>
                                        <h4 className="text-info mb-0">$389.990</h4>
                                    </div>
                                    <button className="btn btn-info w-100 text-white">
                                        <i className="fas fa-shopping-cart me-2"></i>
                                        Agregar al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Producto 2 */}
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img 
                                src="https://images-na.ssl-images-amazon.com/images/I/61wCOVcyvFL.jpg" 
                                className="card-img-top" 
                                alt="Memoria RAM Corsair 32GB DDR4" 
                                style={{ objectFit: 'contain', height: '250px', padding: '20px' }} 
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Memoria RAM Corsair 32GB DDR4</h5>
                                <p className="card-text text-muted small">
                                    Kit de 2x16GB 3200MHz RGB para gaming
                                </p>
                                <div className="mt-auto">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted small text-decoration-line-through">$180.000</span>
                                        <h4 className="text-info mb-0">$149.990</h4>
                                    </div>
                                    <button className="btn btn-info w-100 text-white">
                                        <i className="fas fa-shopping-cart me-2"></i>
                                        Agregar al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Producto 3 */}
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img 
                                src="https://tecnosistec.cl/4807-thickbox_default/disco-ssd-samsung-ssd-980-1tb-nvme-m2-mz-v8v1t0bw.jpg" 
                                className="card-img-top" 
                                alt="SSD Samsung 980 PRO 1TB NVMe" 
                                style={{ objectFit: 'contain', height: '250px', padding: '20px' }} 
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">SSD Samsung 980 PRO 1TB NVMe</h5>
                                <p className="card-text text-muted small">
                                    Velocidades de lectura hasta 7000 MB/s
                                </p>
                                <div className="mt-auto">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted small text-decoration-line-through">$220.000</span>
                                        <h4 className="text-info mb-0">$189.990</h4>
                                    </div>
                                    <button className="btn btn-info w-100 text-white">
                                        <i className="fas fa-shopping-cart me-2"></i>
                                        Agregar al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </Container>
);

export default Informacion;