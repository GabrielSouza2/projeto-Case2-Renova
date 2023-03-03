import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="https://user-images.githubusercontent.com/112557569/222300317-a1ac59e6-8123-4203-b175-61334fe51444.png" alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Dona Marcia</strong>
                <p>
                    "Eu não sabia o que fazer, porque meus filhos não tinham sequer um colchão para dormir, imagina como dói. Um dia você está numa cama confortável e no outro você tenta não passar frio em um pano no chão.<br />
                    Aquilo partia meu coração, ver as crianças no chão. Então minha prima me falou desse site, no começo não levei muita fé, mas consegui o contato da dona Fernanda. Ela me deu a cama que era das filhas dela, dei muita sorte."
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="https://user-images.githubusercontent.com/112557569/222300314-294dd482-e978-443e-9ea0-5c2b8dcc22a0.png" alt="Foto do depoimento 2" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Francisco</strong>
                <p>
                "As pessoas pensam que quando tem um desastre você só precisa reformar a sua casa. Eu vendo sacolé pra fazer um dinheiro extra porque a aposentadoria não da, e perdi minha geladeira na enchente.<br />
                Uma geladeira ta caro. Como vou vender sacolé? Eu estava ficando muito desanimado, sabe? Ai minha neta entrou nesse site. Eu não sei mexer nessas coisas, sabe? E tinha o senhor Robson que conserta geladeiras. 
                Minha neta chamou ele no Zap pra ver uma geladeira, porque ele não tinha espaço. Ele disse que tava meio velha, mas eu falei que não tinha problema, porque eu estava precisando. 
                Se Deus quiser eu vou conseguir comprar uma nova quando terminar de arrumar minha casa que não sobrou nada, mas por enquanto eu agradeço a Deus por ter me ajudado. "
                </p>
            </Col>
        </Row>        
        </>
        
    )
}

export default Depoimentos