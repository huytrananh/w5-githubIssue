import React, { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import ListIssue from '../../components/ListIssue/ListIssue';
import IssueApis from './../../apis/IssueApis';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function HomePage(props) {
    let [issueList, setIssueList] = useState([]);

    const getList = async () => {
        let list = await IssueApis.getIssueList("facebook", "react")
        setIssueList(list)
    }

    useEffect(() => {
        getList();
    }, [])

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <br />

            <button onClick={getList}>Get</button>
            {/* <button onClick={() => IssueApis.postNewIssue()}>Post</button> */}
            <ListIssue issueListFromHomePage={issueList} />
            <Pagination pageCount={10} handlePageClick={() => { alert("working") }} />
        </div>
    )
}
