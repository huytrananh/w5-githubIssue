import React,{useState} from 'react'
import './CreateComment.css'
import {Form, Button, Col, Card} from 'react-bootstrap'
import CommentApis from '../../apis/CommentApis'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeading, faBold, faItalic, faIndent, faAngleLeft, faAngleRight, faLink, faListUl, faListOl, faCheckSquare, faAt, faCommentAlt, faReply } from '@fortawesome/free-solid-svg-icons'

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
        <Col xs={12} className="comment-body">
            <Card>
                <Card.Header className="comment-header">
                    <div>Write</div>
                    <div className="comment-header-box">
                        <div className="box">
                            <FontAwesomeIcon className="icon" icon={faHeading} />
                            <FontAwesomeIcon className="icon" icon={faBold} />
                            <FontAwesomeIcon className="icon" icon={faItalic} />
                        </div>
                        <div className="box">
                            <FontAwesomeIcon className="icon" icon={faIndent} />
                            <span><FontAwesomeIcon className="icon-arrow" icon={faAngleLeft} /></span>
                            <span><FontAwesomeIcon className="icon-arrow" icon={faAngleRight} /></span>
                            <FontAwesomeIcon className="icon" icon={faLink} />
                        </div>
                        <div className="box">
                            <FontAwesomeIcon className="icon" icon={faAt} />
                            <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                            <FontAwesomeIcon className="icon" icon={faReply} />
                        </div>
                    </div>
                </Card.Header>
                    
                
                <Card.Body onSubmit={handleSubmit} className="comment-box">
                    <Form.Control className="text-area" as="textarea" rows="3" name='content' placeholder="Leave a comment" onChange={e =>handleChange(e)} />
                    <div className="custom-file ">
                        <input
                            type="file"
                            className="custom-file-input attach-file-button"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                        />
                        <label className="custom-file-label attach-file-button" htmlFor="inputGroupFile01">Attach files by dragging & dropping, selecting or pasting them.</label>
                    </div>
                    <div className="comment-button"><Button onClick={postComment} variant="success" type="submit">Comment</Button></div>
                    </Card.Body>
            </Card>
        </Col>      
    )
}