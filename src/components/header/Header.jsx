import { Container, Row, Col } from "react-bootstrap";
import './header.scss';
import websiteLogo from "../../images/logo.svg";
import BeforeLogin from "../beforeLogin/BeforeLogin";
import AfterLogin from "../afterLogin/AfterLogin";


const Header = () => {
    
    return(
        <Container className="header">
            <Row>
                <Col className="header__logo">
                    <img src={websiteLogo} alt="logo" />
                </Col>
                <Col className="header__userZone">
                    <BeforeLogin/>
                    <AfterLogin/>
                </Col>
            </Row>
        </Container>
    )
}

export default Header