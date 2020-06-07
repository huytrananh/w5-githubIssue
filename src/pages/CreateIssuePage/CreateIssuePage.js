import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './CreateIssuePage.css';
import IssueApis from './../../apis/IssueApis';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CreateIssuePage = () => {
    const history = useHistory();
    const location = useLocation();
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [owner, setOwner] = useState("")
    const [repo, setRepo] = useState("")

    const onTitleChange = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value)
    }

    const onContentChange = (e) => {
        setContent(e.target.value);
        console.log(e.target.value)
    }
    
    const createNewIssue = async () => {
        let result = await IssueApis.createNewIssue(owner, repo, title, content)
        if (result.status === 201) {
            history.push({
                pathname: "/",
                search: `?owner=${owner}&repo=${repo}`,
              })
        }
    }

    useEffect(() => {
        if (location.search != null) {
            let theOwner = (new URLSearchParams(window.location.search)).get("owner")
            setOwner(theOwner)
            let theRepo = (new URLSearchParams(window.location.search)).get("repo")
            setRepo(theRepo)
        }
    }, [location])

    return (
        <Container className="CreateIssuePage-container">
            <h1>Create a new issue</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={onTitleChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Body</Form.Label>
                    <Form.Control className="CreateIssuePage-content" as="textarea" placeholder="Enter content" onChange={onContentChange} />
                </Form.Group>
                <Button variant="primary" onClick={createNewIssue}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default CreateIssuePage;