import { Container, Row, Col } from "react-bootstrap";
import './reset.scss';
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { sendPaswordReset } from "../../services/AuthServices";

const Reset = () => {

    const [email, setEmail] = useState("");

    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault();
        sendPaswordReset(email);
        navigate("/home")
        alert('Operacija sekminga. Pasitikrinkite savo el. paštą');
    }

    return(
        <Container xl={12} className="reset d-flex flex-column align-items-center justify-content-center">
            <Row>
                <Col className="reset__content">
                <h2 className="mt-3">Slaptažodžio atstatymas</h2>
                <form className="form" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <input onChange={(e)=>setEmail(e.target.value)} value={email}
                            type="email" id="email" name="email" required
                            className="form-control" placeholder="Jūsų el. paštas"/>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-warning" type="submit">Siųsti</button>
                    </div>
                </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Reset