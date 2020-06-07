import React, { useState } from 'react'
import './CreateComment.css'
import {Form, Button, Row, Col } from 'react-bootstrap'
import CommentApis from '../../apis/CommentApis'
 
export default function CreateComment(props) {

    const [content, setContent] = useState('')

    let postComment = async () => {
        let result = await CommentApis.createNewComment(props.owner, props.repo, props.issue_number, content)
        console.log(result);
        if (result != null && result.status === 201) {
            props.createCommendSuccess();
        }
        setContent('')
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
             <Col xs={1}></Col>
            <Col xs={11}>
                <Form onSubmit={handleSubmit} className="comment-box">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write</Form.Label>
                        <Form.Control as="textarea" rows="3" value={content} name='content' placeholder="Leave a comment" onChange={e => handleChange(e)} />
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
