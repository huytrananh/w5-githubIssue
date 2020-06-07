import React, { useState } from 'react';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';

const CustomNavbar = (props) => {
    
    const [query, setQuery] = useState("")

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }
    
    const searchButtonClicked = () => {
        if (query.trim().length > 2 ) {
            console.log(query);
            props.performSearch(query.trim());
        }
    }

    return(
        <Navbar className="Navbar-div" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleQueryChange}/>
                    <Button variant="outline-info" onClick={searchButtonClicked}>Search</Button>
                </Form>
                <Button variant="outline-info post-issue">Post New Issue</Button>
            </Navbar>
    );
}

export default CustomNavbar;