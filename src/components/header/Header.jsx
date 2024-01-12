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

    return (
            <div className="header">
                <div className="header__logo">
                    <Link to={"/home"}><img src={websiteLogo} alt="logo" /></Link>
                </div>
                <div className="header__appName">
                    <h2>React Images</h2>
                </div>
                <div className="header__userZone">
                    {user ? <AfterLogin/> : <BeforeLogin/>}
                </div>
            </div>
    );
}

export default Header;
