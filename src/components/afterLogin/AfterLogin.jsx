import { Dropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../services/AuthServices";
import * as userServices from "../../services/UserServices";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AfterLogin = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [user, loading] = useAuthState(auth);
  
    useEffect(() => {
      if (loading) return;
      if (user) 
      userServices.getUserData(user, setUserData);
      navigate("/gallery");
    }, [user, loading]);

    return(
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">{userData.name}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>{userData.email}</Dropdown.Item>
                <Dropdown.Item as={Link} to="/addImage">Prideti nuotrauka</Dropdown.Item>
                <Dropdown.Item as={Link} to="/gallery">Galerija</Dropdown.Item>
                <Dropdown.Item onClick={logout} as={Link} to="/login">Atsijungti</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AfterLogin