import React, { useState } from 'react';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const CustomNavbar = (props) => {
    const history = useHistory();
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
    
    const createNewIssue = () => {
        history.push({
            pathname: "/create",
            search: `?owner=${props.owner}&repo=${props.repo}`,
          })
    }

    const goHome = () => {
        history.push({
            pathname: "/",
            search: `?owner=${props.owner}&repo=${props.repo}`,
          })
    }

    return(
        <Navbar className="Navbar-div" bg="dark" variant="dark">
                <Navbar.Brand onClick={goHome}>GitHub Search</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleQueryChange}/>
                    <Button variant="outline-info" onClick={searchButtonClicked}>Search</Button>
                </Form>
                <div>
                {
                    props.navOwner === "" ? "" : <Button variant="outline-info post-issue" onClick={createNewIssue}>Post New Issue</Button>
                }
                </div>
            </Navbar>
    );
}

export default CustomNavbar;