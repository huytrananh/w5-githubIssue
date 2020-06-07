import CommentApis from '../../apis/CommentApis';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Comment.css";

export default function Comment(props) {

    const [comment, setComment] = useState(null);

    const getCommentDetail = async () => {
        let commentDetail = await CommentApis.getCommentList(props.owner, props.repo, props.issue_number);
        setComment(commentDetail);
    }

    useEffect(() => {
        getCommentDetail()
    }, [])
    console.log(comment)

    return (
        <div className="Comment-div">
            {
                comment === null ? <h1>Loading</h1> :

                    <Col className="no-padding">
                        {
                            comment.map(item => {
                                return (
                                    <div className="d-flex padding-top-bottom">
                                        <img className="avatar" src={item.user.avatar_url} />
                                        <Card className="no-padding col-11">
                                            <Card.Header>
                                                <a href={item.user.html_url}>{item.user.login}</a> commented&nbsp;
                                                    <Moment fromNow>
                                                    {item.created_at}
                                                </Moment>
                                            </Card.Header>
                                            <Card.Body>
                                                <ReactMarkdown
                                                    source={item.body} />
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }

                    </Col>
            }
        </div>
    )
}
