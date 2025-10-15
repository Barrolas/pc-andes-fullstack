import Carousel from 'react-bootstrap/Carousel';

function BannerPrincipal() {
    const imageUrl = "https://assets-v3.pcfactory.cl/uploads/fd278543-6a0b-4ae5-9bd6-1a18e684f85b/original/MODYO_BANNER_PPAL-TRIPLE_1792X490_52785-53847.webp";
    
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="Banner PCFactory"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="Banner PCFactory"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="Banner PCFactory"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerPrincipal;