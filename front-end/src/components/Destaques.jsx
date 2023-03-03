import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://user-images.githubusercontent.com/112557569/222452280-c3b2f8d9-b6bd-4e6b-ad01-9ad09fa3a452.png" />
                    <Card.Body>
                        <Card.Title> Confiável </Card.Title>
                        <Card.Text>
                            Garantimos que sua doação chegue a quem precisa. 
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://user-images.githubusercontent.com/112557569/222452287-e1808be3-b86d-44fe-9d30-9d7e5c037ba3.png" />
                    <Card.Body>
                        <Card.Title>Sustentavel</Card.Title>
                        <Card.Text>
                            Ao fazer uma doação menos objetos são descartados no meio ambiente. Você ajuda alguém e o planeta agradece!
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://user-images.githubusercontent.com/112557569/222452290-0815693a-0257-4df7-8c25-43c1fbbb875f.png" />
                    <Card.Body>
                        <Card.Title>Fácil de usar</Card.Title>
                        <Card.Text>
                            Você se cadastra e nós divulgamos sua doação. Faça chegar a quem precisa! 
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;