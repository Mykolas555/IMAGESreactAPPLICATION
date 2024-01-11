import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
    
    return(
        <Container className="">
            <Row>
                <Col xl={12} className="d-flex flex-column align-items-center justify-content-center">
                    <h2>Prisijungti</h2>
                </Col>
                <Col xl={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
                    <form className="form" >
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Įveskite vartotojo el.paštą" id="email" 
                        name="email"  />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Įveskite vartotojo slaptažodį" id="password" 
                        name="password"  />
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <button className="btn btn-primary" type="submit">Prisijungti</button>
                    </div>
                    <div className="mt-3 d-flex flex-column align-items-center justify-content-center">
                        <p>Neturite paskyros? Registruotis</p>
                        <p>Nepavyksta prisijungti? Atstatyti slaptažodį</p>
                    </div>
                    </form>
                </Col>
             </Row>
        </Container>
    )
}

export default Login