import React from 'react';
import { Container } from 'react-bootstrap';
import CardComponent from './Card';

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
                    <CardComponent 
                        imagen="https://sipoonline.cl/wp-content/uploads/2022/10/Procesador-AMD-Ryzen-7-5700X-AM4-8-Cores-16-Hilos-3.44.6GHz-Sin-Disipador-1.png"
                        titulo="Procesador AMD Ryzen 7 5800X"
                        descripcion="Procesador de alto rendimiento con 8 núcleos y 16 hilos"
                        precio={389990}
                    />

                    <CardComponent 
                        imagen="https://images-na.ssl-images-amazon.com/images/I/61wCOVcyvFL.jpg"
                        titulo="Memoria RAM Corsair 32GB DDR4"
                        descripcion="Kit de 2x16GB 3200MHz RGB para gaming"
                        precio={149990}
                    />

                    <CardComponent 
                        imagen="https://tecnosistec.cl/4807-thickbox_default/disco-ssd-samsung-ssd-980-1tb-nvme-m2-mz-v8v1t0bw.jpg"
                        titulo="SSD Samsung 980 PRO 1TB NVMe"
                        descripcion="Velocidades de lectura hasta 7000 MB/s"
                        precio={189990}
                    />
                </div>
            </div>
        </div>
        <hr />
    </Container>
);

export default Informacion;