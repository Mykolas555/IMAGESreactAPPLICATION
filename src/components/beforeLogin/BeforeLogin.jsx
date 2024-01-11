import { Dropdown } from "react-bootstrap";

const BeforeLogin = () => {
    
    return(
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic"> Vartotojo Zona</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item >Prisijungti</Dropdown.Item>
            <Dropdown.Item >Registruotis</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    )
}

export default BeforeLogin