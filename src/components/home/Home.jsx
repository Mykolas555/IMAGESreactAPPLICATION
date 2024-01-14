import { Container, Row, Col } from "react-bootstrap"
import websiteLogo from '../../images/logo.svg'
import './home.scss'
import { useNavigate } from "react-router-dom"
import { auth } from "../../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import * as userServices from "../../services/UserServices";

const Home = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (loading) return;
        if (user) 
        userServices.getUserData(user, setUserData);
      }, [user, loading]);

    const toLoginPage = () => {
    navigate('/login')
    }

    const toGalleryPage = () => {
        navigate('/gallery')
        }

    return(
        <Container className="home">
            <Row>
                <Col xl={6} sm={12} className="home__content" >
                    <h2>Susikurk Savo Nuotraukų Galerija Internete!</h2>
                </Col>
                <Col xl={6} sm={12} className="home__content">
                    <img src={websiteLogo} alt="logo"/>
                </Col>
                <Col xl={12} sm={12} className="home__content mt-2">
                {user ? (
                        <button type="button" onClick={toGalleryPage} className="btn btn-warning">Jūsų akimirkos čia, {userData.name}!</button>
                    ) : (
                        <button type="button" onClick={toLoginPage} className="btn btn-warning">Prisijunk ir pradėk kurti!</button>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Home