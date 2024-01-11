import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const BeforeLogin = () => {
    return(
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic"> Vartotojo Zona</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/login">Prisijungti</Dropdown.Item>
            <Dropdown.Item as={Link} to="/register">Registruotis</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    )
}

export default BeforeLogin