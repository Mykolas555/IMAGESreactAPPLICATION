import './header.scss';
import { Link } from "react-router-dom";
import websiteLogo from "../../images/logo.svg";
import BeforeLogin from "../beforeLogin/BeforeLogin";
import AfterLogin from "../afterLogin/AfterLogin";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <Container>
            <Row className="header">
                <Col  className="header__logo">
                    <Link to={"/home"}><img src={websiteLogo} alt="logo" /></Link>
                </Col>
                <Col className="header__userZone">
                    {user ? <AfterLogin/> : <BeforeLogin/>}
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
