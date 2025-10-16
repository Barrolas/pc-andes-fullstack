import React, { useState } from 'react';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import ButtonComponent from './Button';

const Cotizador = () => {
    
    const [precioCPU,       setPrecioCPU]       = useState('');
    const [precioGPU,       setPrecioGPU]       = useState('');
    const [precioRAM,       setPrecioRAM]       = useState('');
    const [cantidadModulos, setCantidadModulos] = useState('');
    const [garantia,        setGarantia]        = useState(0);
    const [descuento,       setDescuento]       = useState('');

    // Precios de garantía por año
    const preciosGarantia = {
        0: 0,      // Sin garantía
        1: 50000,  // 1 año
        2: 80000,  // 2 años
        3: 100000  // 3 años
    };

    // Función para obtener el precio de garantía según los años seleccionados
    const getPrecioGarantia = (años) => {
        return preciosGarantia[años] || 0;
    };

    // Cálculos correctos (redondeados) - manejo de strings vacíos
    const precioGarantiaSeleccionada    = getPrecioGarantia(garantia);
    const precioCPUNum                  = Number(precioCPU) || 0;
    const precioGPUNum                  = Number(precioGPU) || 0;
    const precioRAMNum                  = Number(precioRAM) || 0;
    const cantidadModulosNum            = Number(cantidadModulos) || 0;
    const descuentoNum                  = Number(descuento) || 0;
    
    const subtotal                      = Math.round(precioCPUNum + precioGPUNum + (precioRAMNum * cantidadModulosNum) + precioGarantiaSeleccionada);
    const iva                           = Math.round(subtotal * 0.19);
    const totalConIva                   = Math.round(subtotal + iva);
    const total                         = Math.round(totalConIva - descuentoNum);

    return (
        <Container className='container'>
        {/* Encabezado DEMO */}
        <div className="bg-info text-white p-3 text-center mb-4 rounded-3" id="cotizador">
            <h2 className="mb-0">
                <span className="fw-bold">DEMO:</span> Cotizador de Componentes
            </h2>
        </div>

        <Row className='my-5'>
            {/* Sección de entrada de datos (izquierda) */}
            <Col lg={6}>
                <Form className='w-50 mx-auto'>
                    <Form.Group className="mb-3">
                        <Form.Label className='text-start'>Precio CPU</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="0"
                            value={precioCPU}
                            onChange={(e) => setPrecioCPU(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='text-start'>Precio GPU</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="0"
                            value={precioGPU}
                            onChange={(e) => setPrecioGPU(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='text-start'>Precio RAM (por módulo)</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="0"
                            value={precioRAM}
                            onChange={(e) => setPrecioRAM(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='text-start'>Cantidad módulos RAM</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="0"
                            value={cantidadModulos}
                            onChange={(e) => setCantidadModulos(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='text-start'>Garantía</Form.Label>
                        <Form.Select value={garantia} onChange={(e) => setGarantia(Number(e.target.value))}>
                            <option value="0">Sin garantía</option>
                            <option value="1">1 año - $50.000</option>
                            <option value="2">2 años - $80.000</option>
                            <option value="3">3 años - $100.000</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='text-start'>Descuento</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="0"
                            value={descuento}
                            onChange={(e) => setDescuento(e.target.value)}
                        />
                    </Form.Group>
                </Form>
                <div className='text-center'>
                    <ButtonComponent text="Limpiar" onClick={() => {
                        setPrecioCPU('');
                        setPrecioGPU('');
                        setPrecioRAM('');
                        setCantidadModulos('');
                        setGarantia(0);
                        setDescuento('');
                    }}/>
                </div>
            </Col>

            {/* Sección de resultados (derecha) */}
            <Col lg={6}>
                <h4 className="text-start fw-bold mb-3 text-info">Resultados</h4>
                <Table bordered striped hover>
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th>Concepto</th>
                            <th className="text-end">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td>Subtotal</td>
                            <td className="text-end">${subtotal.toLocaleString('es-CL')}</td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td>IVA (19%)</td>
                            <td className="text-end">${iva.toLocaleString('es-CL')}</td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td>Descuento</td>
                            <td className="text-end">-${descuentoNum.toLocaleString('es-CL')}</td>
                        </tr>
                        <tr className="fw-bold">
                            <td className="text-center">4</td>
                            <td>Total</td>
                            <td className="text-end">${total.toLocaleString('es-CL')}</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
        <hr />
        </Container>
    );
};

export default Cotizador;