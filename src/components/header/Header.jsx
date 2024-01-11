import { Container, Row, Col } from "react-bootstrap";
import './header.scss';
import { Link } from "react-router-dom";
import websiteLogo from "../../images/logo.svg";
import BeforeLogin from "../beforeLogin/BeforeLogin";
import AfterLogin from "../afterLogin/AfterLogin";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

const Header = () => {
    const [user] = useAuthState(auth);

    return(
        <Container className="header">
            <Row >
                <Col xl={4} sm={4} className="header__logo">
                    <Link to={"/home"}><img src={websiteLogo} alt="logo" /></Link>
                </Col>
                <Col xl={4} sm={4} className="header__appName" >
                    <h2>React Images</h2>
                </Col>
                <Col xl={4} sm={4} className="header__userZone">
                    {user ? <AfterLogin/> : <BeforeLogin/>}
                </Col>
            </Row>
        </Container>
    )
}

export default Header