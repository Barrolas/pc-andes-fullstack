import React, { useState } from 'react';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import ButtonComponent from './Button';

const Cotizador = () => {
    const [precioCPU, setPrecioCPU]             = useState(0);
    const [precioGPU, setPrecioGPU]             = useState(0);
    const [cantidadModulos, setCantidadModulos] = useState(0);
    const [garantia, setGarantia]               = useState(0);
    const [descuento, setDescuento]             = useState(0);

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

    // Cálculos correctos (redondeados)
    const precioGarantiaSeleccionada    = getPrecioGarantia(garantia);
    const subtotal                      = Math.round(precioCPU + (precioGPU * cantidadModulos) + precioGarantiaSeleccionada);
    const iva                           = Math.round(subtotal * 0.19);
    const totalConIva                   = Math.round(subtotal + iva);
    const total                         = Math.round(totalConIva - descuento);

    return (
        <Container className='container my-5'>
        {/* Encabezado DEMO */}
        <div className="bg-info text-white p-3 text-center mb-4 rounded-3" id="cotizador">
            <h2 className="mb-0">
                <span className="fw-bold">DEMO:</span> Cotizador de Componentes
            </h2>
        </div>

        <Row>
            {/* Sección de entrada de datos (izquierda) */}
            <Col lg={6}>
                <Form className='w-50 mx-auto'>
                    <Form.Group className="mb-3">
                        <Form.Label className='text-start'>Precio CPU</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="0"
                            value={precioCPU}
                            onChange={(e) => setPrecioCPU(Number(e.target.value))}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='text-start'>Precio GPU (por módulo)</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="0"
                            value={precioGPU}
                            onChange={(e) => setPrecioGPU(Number(e.target.value))}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='text-start'>Cantidad módulos RAM</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="0"
                            value={cantidadModulos}
                            onChange={(e) => setCantidadModulos(Number(e.target.value))}
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
                            onChange={(e) => setDescuento(Number(e.target.value))}
                        />
                    </Form.Group>
                </Form>
                <div className='text-center'>
                    <ButtonComponent text="Limpiar" onClick={() => {
                        setPrecioCPU(0);
                        setPrecioGPU(0);
                        setCantidadModulos(0);
                        setGarantia(0);
                        setDescuento(0);
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
                            <td className="text-end">-${descuento.toLocaleString('es-CL')}</td>
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
        </Container>
    );
};

export default Cotizador;