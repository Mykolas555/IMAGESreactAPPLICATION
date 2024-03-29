import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './register.scss';
import { useEffect, useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices";

const Register = () => {
    
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: "",
        email: "", 
        password: ""
    });

    const [user, loading] = useAuthState(auth);
    
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(formData)
        registerWithEmailAndPassword(formData.name, formData.email, formData.password)
        navigate('/')
        alert(`Sėkmingai užsiregistravote ${formData.name}`);
    }

    useEffect(() => {
        if(loading) return;
        if(user) navigate("/home")
    }, [user, loading])
    
    return(
        <Container className="register">
            <Row>
                <Col xl={12} className="register__article d-flex flex-column align-items-center justify-content-center">
                    <h2>Registruotis</h2>
                </Col>
                <Col xl={12} className="register__form d-flex flex-column align-items-center justify-content-center mt-3">
                    <form className="form" onSubmit={submitHandler} >
                        <div className="mb-3">
                            <input type="text"className="form-control" placeholder="Įveskite vartotojo vardą" id="name" 
                            name="name" required value={formData.name} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <input type="email"className="form-control" placeholder="Įveskite savo el.paštą" id="email" 
                            name="email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <input type="password"className="form-control" placeholder="Įveskite slaptažodį" id="password" 
                            name="password" required value={formData.password} onChange={handleChange}/>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <button className="btn btn-warning" type="submit">Registruotis</button>
                        </div>
                        <div className="registe_questions mt-3 d-flex flex-column align-items-center justify-content-center">
                            <p>Turite paskyrą?</p>
                            <p><Link to={"/login"} className="register__links">Prisijungti</Link></p>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register