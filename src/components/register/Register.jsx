import { Container, Row, Col } from "react-bootstrap"

const Register = () => {
    
    return(
        <Container>
            <Row>
                <Col xl={12} className="d-flex flex-column align-items-center justify-content-center">
                    <h2>Registruotis</h2>
                </Col>
                <Col xl={12} className="d-flex flex-column align-items-center justify-content-center mt-3">
                    <form className="form" >
                        <div className="mb-3">
                            <input type="text"className="form-control" placeholder="Įveskite vartotojo vardą" id="name" name="name"/>
                        </div>
                        <div className="mb-3">
                            <input type="email"className="form-control" placeholder="Įveskite savo el.paštą" id="email" name="email" />
                        </div>
                        <div className="mb-3">
                            <input type="password"className="form-control" placeholder="Įveskite slaptažodį" id="password" name="password" />
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <button className="btn btn-primary" type="submit">Registruotis</button>
                        </div>
                        <div className="mt-3 d-flex flex-column align-items-center justify-content-center">
                            <p>Turite paskyrą? Prisijunkite</p>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register