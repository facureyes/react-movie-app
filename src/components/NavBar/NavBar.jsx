import {React, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo192.png'

const CustomNavBar = props => {

    const [input, setInput] = useState("");

    const handleInput = event => {
        const inp = event.target.value;
        setInput(inp);
        props.search(inp);
        event.preventDefault();
    }

    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Navbar.Brand>
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Brand Logo"
                />
                Movies App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" />
                <Form inline onSubmit={e => e.preventDefault()}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleInput} value={input} autoFocus="true"/>
                    {/* <Button variant="outline-success" onClick={()=>{return props.search(input);}}>Search</Button> */}
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavBar;
