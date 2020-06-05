// import CommentApis from './apis/CommentApis';
import React, { useState, useEffect } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueApis from '../../apis/IssueApis';

export default function ListComment() {

    const [issueDetail, setIssueDetail] = useState([]);

    useEffect (() => {
        IssueApis.getIssueDetail();
    })

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            <div>
                {
                    
                }
            </div>
        </div>
    )
}
