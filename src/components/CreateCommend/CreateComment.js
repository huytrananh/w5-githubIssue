import React,{useEffect, useState} from 'react'
import './CreateComment.css'
import {Form, Button, Row, Col, Image} from 'react-bootstrap'
import IssueApis from '../../apis/IssueApis'

export default function CreateComment() {

    const [content, setContent] = useState('')

    let postComment = () => {
        IssueApis.createNewComment("huytrananh", "catch-monster", "4", content)
    }

    const handleChange = (e) => {
        setContent(e.target.value)
        console.log(e.target.value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
         <Row>
            <Col xs={11}>
                <Form onSubmit={handleSubmit} className="comment-box">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write</Form.Label>
                        <Form.Control as="textarea" rows="3" name='content' placeholder="Leave a comment" onChange={e => handleChange(e)} />
                    </Form.Group>
                    <div className="comment-button">
                        <Button onClick={postComment} variant="success" type="submit" >
                            Comment
                        </Button>
                    </div>
                    
                </Form>
            </Col>
        </Row>
    )
}
