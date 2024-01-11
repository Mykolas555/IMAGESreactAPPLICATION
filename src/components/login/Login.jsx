import { Container, Row, Col } from "react-bootstrap";
import './login.scss';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword } from "../../services/AuthServices";

const Login = () => {
    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setCredentials({
            ...credentials,
            [e.target.name]:value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(credentials.email, credentials.password);
            navigate("/home");// pakeisti veliau
            
        }catch (error) {
            console.error("Error signing in:", error.message);
        }
    }

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/home");// pakeisti veliau
    }, [user, loading]);

    return(
        <Container className="login">
            <Row>
                <Col xl={12} className="login__article d-flex flex-column align-items-center justify-content-center">
                    <h2>Prisijungti</h2>
                </Col>
                <Col xl={12} className="login__form d-flex flex-column align-items-center justify-content-center mt-3">
                    <form className="form" onSubmit={submitHandler} >
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Įveskite vartotojo el.paštą" id="email" 
                            name="email" value={credentials.email} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="Įveskite vartotojo slaptažodį" id="password" 
                            name="password" value={credentials.password} onChange={handleChange}/>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <button className="btn btn-warning" type="submit">Prisijungti</button>
                        </div>
                        <div className="login__questions mt-3 d-flex flex-column align-items-center justify-content-center">
                            <p>Neturite paskyros?</p>
                            <p><Link to={"/register"} className="login__links">Registruotis</Link></p>
                            <p>Nepavyksta prisijungti?</p>
                            <p><Link to={"/reset"} className="login__links">Atstatyti slaptažodį</Link></p>
                        </div>
                    </form>
                </Col>
             </Row>
        </Container>
    )
}

export default Login