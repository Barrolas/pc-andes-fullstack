import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ imagen, titulo, descripcion, precio }) => {
    return (
        <div className="col-md-4 col-sm-6 mb-4">
            <Card className="h-100 shadow-sm">
                <Card.Img 
                    variant="top"
                    src={imagen} 
                    alt={titulo}
                    style={{ objectFit: 'contain', height: '250px', padding: '20px' }} 
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text className="text-muted small">
                        {descripcion}
                    </Card.Text>
                    <div className="mt-auto">
                        <h4 className="text-info text-center mb-3">
                            ${precio.toLocaleString('es-CL')}
                        </h4>
                        <button className="btn btn-info w-100 text-white">
                            <i className="fas fa-shopping-cart me-2"></i>
                            Agregar al Carrito
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardComponent;