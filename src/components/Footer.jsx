import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const whatsappMessage = "Me contacto via web y necesito ayuda";
    const whatsappNumber = "+56912345678";
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <footer className="bg-dark text-white py-5 mt-5">
            <Container>
                <Row>
                    {/* Sedes de la empresa */}
                    <Col lg={4} className="mb-4">
                        <h5 className="text-info mb-3">Nuestras Sedes</h5>
                        <div className="mb-3">
                            <h6 className="text-warning">Sede Central - Santiago</h6>
                            <p className="mb-1">
                                <i className="fas fa-map-marker-alt me-2"></i>
                                Av. Providencia 1234, Providencia, Santiago
                            </p>
                        </div>
                        <div className="mb-3">
                            <h6 className="text-warning">Sede Norte - Antofagasta</h6>
                            <p className="mb-1">
                                <i className="fas fa-map-marker-alt me-2"></i>
                                Av. Argentina 567, Antofagasta
                            </p>
                        </div>
                        <div className="mb-3">
                            <h6 className="text-warning">Sede Sur - Concepción</h6>
                            <p className="mb-1">
                                <i className="fas fa-map-marker-alt me-2"></i>
                                Av. O'Higgins 890, Concepción
                            </p>
                        </div>
                    </Col>

                    {/* Contacto WhatsApp */}
                    <Col lg={4} className="mb-4">
                        <h5 className="text-info mb-3">Contacto Directo</h5>
                        <div className="text-center">
                            <a 
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success btn-lg mb-3"
                            >
                                <i className="fab fa-whatsapp me-2"></i>
                                Contactar por WhatsApp
                            </a>
                            <p className="small text-muted">
                                Haz clic para abrir WhatsApp con mensaje preconfigurado
                            </p>
                        </div>
                    </Col>

                    {/* Redes Sociales */}
                    <Col lg={4} className="mb-4">
                        <h5 className="text-info mb-3">Síguenos en Redes Sociales</h5>
                        <div className="d-flex justify-content-center gap-3">
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white fs-3"
                                title="Síguenos en X (Twitter)"
                            >
                                <i className="fab fa-x-twitter"></i>
                            </a>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white fs-3"
                                title="Síguenos en YouTube"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white fs-3"
                                title="Síguenos en Facebook"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white fs-3"
                                title="Síguenos en Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="my-4" />

                {/* Copyright */}
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">
                            &copy; 2025 PC ANDES. Todos los derechos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;  