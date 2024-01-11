import { Container, Row, Col } from "react-bootstrap"

const Reset = () => {
    return(
        <Container xl={12} className="d-flex flex-column align-items-center justify-content-center">
            <Row>
                <Col>
                <h2 className="mt-3">Slaptažodžio atstatymas</h2>
                <form className="form">
                    <div className="mb-3">
                        <input 
                            type="email" id="email" name="email" required
                            className="form-control" placeholder="Jūsų el. paštas"/>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">Siųsti</button>
                    </div>
                </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Reset