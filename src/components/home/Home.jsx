import { Container, Row, Col } from "react-bootstrap"
import websiteLogo from '../../images/logo.svg'
import './home.scss'


const Home = () => {
   

    return(
        <Container className="home">
            <Row>
                <Col xl={6} sm={12} className="home__content" >
                    <h2>Make Your Own Images Gallery On Web</h2>
                </Col>
                <Col xl={6} sm={12} className="home__content">
                    <img src={websiteLogo} alt="logo"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home