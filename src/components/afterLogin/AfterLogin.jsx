import { Dropdown } from "react-bootstrap";

const AfterLogin = () => {
    
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">Vartotojo vardas</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Vartotojo email</Dropdown.Item>
                <Dropdown.Item>Prideti nuotrauka</Dropdown.Item>
                <Dropdown.Item>Atsijungti</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AfterLogin