import React,{useEffect, useState} from 'react'
import './CreateComment.css'
import {Form, Button} from 'react-bootstrap'
import IssueApis from '../../apis/IssueApis'

export default function CreateComment() {

    const [comment, setComment] = useState('')

    let postComment = () => {
        IssueApis.createNewComment("huytrananh", "catch-monster", "4", comment)
    }

    const handleChange = (e) => {
        setComment(e.target.value)
        console.log(e.target.value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Add comment</Form.Label>
                    <Form.Control as="textarea" rows="3" name='content' onChange={e => handleChange(e)} />
                </Form.Group>
                <Button onClick={postComment} variant="success" type="submit" >
                    New Comment
                </Button>
            </Form>
        </div>
    )
}
