import './header.scss';
import { useNavigate } from "react-router-dom";
import BeforeLogin from "../beforeLogin/BeforeLogin";
import AfterLogin from "../afterLogin/AfterLogin";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogo = () => {
        navigate('/home')
    }
    
    return (
        <Container>
            <Row className="header mt-2">
                <Col  className="header__logo" onClick={handleLogo}>
                    <h6>Holiday photos</h6>
                </Col>
                <Col className="header__userZone">
                    {user ? <AfterLogin/> : <BeforeLogin/>}
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
