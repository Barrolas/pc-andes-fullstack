import Carousel from 'react-bootstrap/Carousel';

function BannerPrincipal() {
    const imageUrl1 = "https://assets-v3.pcfactory.cl/uploads/fd278543-6a0b-4ae5-9bd6-1a18e684f85b/original/MODYO_BANNER_PPAL-TRIPLE_1792X490_52785-53847.webp";
    const imageUrl2 = "https://assets-v3.pcfactory.cl/uploads/a7ab125b-7892-47d0-8f60-1b1a92e391ab/original/Modyo-WEB-Banner-Pricipal-1792X490_copia_252924-53461.webp";
    const imageUrl3 = "https://assets-v3.pcfactory.cl/uploads/900f7d3b-c211-4556-a755-fc2e8afe87c2/original/Modyo-WEB-Banner-Principal-1792x490.webp";
    
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageUrl1}
                    alt="Banner PCFactory"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageUrl2}
                    alt="Banner PCFactory"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageUrl3}
                    alt="Banner PCFactory"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerPrincipal;