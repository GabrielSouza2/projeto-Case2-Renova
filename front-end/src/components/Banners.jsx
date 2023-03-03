import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://user-images.githubusercontent.com/112557569/222298142-46677792-536e-48fb-b2e9-5d934f007138.png"
                        alt="Slide incrível"
                    />
                    <Carousel.Caption>
                        <h5></h5>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://user-images.githubusercontent.com/112557569/222444272-defcdcff-7096-4bd7-8c2f-cc3430c9da62.png"
                        alt="Outro slide incrível"
                    />
                    <Carousel.Caption>
                        <h5></h5>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://user-images.githubusercontent.com/112557569/222444274-8bc84d34-2180-477a-933b-7e205291e525.png"
                        alt="Último slide"
                    />
                    <Carousel.Caption>
                        <h5></h5>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners