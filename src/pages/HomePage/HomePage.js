import React, { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import ListIssue from '../../components/ListIssue/ListIssue';
import IssueApis from './../../apis/IssueApis';
import 'bootstrap/dist/css/bootstrap.min.css';

import './HomePage.css'

import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

export default function HomePage(props) {
    let [issueList, setIssueList] = useState([]);

    const getList = async () => {
        let list = await IssueApis.getIssueList("facebook", "react", 0)
        // if (list.length >0) {
        //     console.log("anh Hoan1 " + list[0].title)
        // }
        setIssueList(list)
    }

    const pageClick = async(data) => {
        console.log(data.selected )
        let list = await IssueApis.getIssueList("facebook", "react", data.selected +1) 
        // if (list.length >0) {
        //     console.log("anh Hoan2 " + list[0].title)
        // }
        setIssueList(list)
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className="HomePage-div">
            <Navbar className="Navbar-div" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info" onClick={getList}>Search</Button>
                </Form>
                <Button variant="outline-info post-issue">Post New Issue</Button>
            </Navbar>
            <br />

            <ListIssue issueListFromHomePage={issueList} />
            <Pagination pageCount={10} handlePageClick={pageClick} className="align-right"/>
        </div>
    )
}
