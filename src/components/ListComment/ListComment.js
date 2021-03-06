import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Row, Col, Badge, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueApis from '../../apis/IssueApis';
import Comment from "../Comment/Comment";
import "./ListComment.css";
import EventList from '../EventList/EventList';

export default function ListComment(props) {
    const [issueDetail, setIssueDetail] = useState(null);
    
    const getPostDetail = async () => {
        let postDetail = await IssueApis.getIssueDetail(props.owner, props.repo, props.issue_number);
        setIssueDetail(postDetail);
    }

    useEffect(() => {
        if (props.owner.length > 2 && props.repo.length >2) {
            getPostDetail()
        }   
    }, [props.owner, props.repo, props.issue_number]);
    console.log(issueDetail)

    const Image = (props) => {
        return <img {...props} alt="" style={{ maxWidth: '100%' }} />
    }

    return (
        <div>
            {
                issueDetail === null ? <h1>Loading</h1> :
                    <Row>
                        <Col xs={12}>
                            <div className="ListComment-h1">
                                <h1>
                                    {issueDetail.title}&nbsp;
                                    <span className="text-muted">
                                        #{issueDetail.number}
                                    </span>
                                </h1>
                            </div>
                            <h6>
                                {
                                    issueDetail.state === "closed" ?
                                        <Badge variant="danger">{issueDetail.state}</Badge>
                                        :
                                        <Badge variant="success">{issueDetail.state}</Badge>
                                }&nbsp;
                                <a href={issueDetail.user.html_url} className="text-muted">{issueDetail.user.login}</a>
                                <span className="text-muted"> opened this issue&nbsp;
                                    <Moment fromNow>
                                        {issueDetail.created_at}
                                    </Moment>&nbsp;- {issueDetail.comments} comments
                                </span>
                            </h6>

                            <div className="d-flex">
                                <img className="avatar" alt="" src={issueDetail.user.avatar_url} />
                                <Card className="card-part col-11 no-padding">
                                    <Card.Header>
                                        <a href={issueDetail.user.html_url}>{issueDetail.user.login}</a> commented&nbsp;
                                        <Moment fromNow>
                                            {issueDetail.created_at}
                                        </Moment>
                                    </Card.Header>
                                    <Card.Body>
                                        <ReactMarkdown
                                            source={issueDetail.body}
                                            renderers={{ image: Image }} />
                                    </Card.Body>

                                </Card>
                            </div>
                            <div>
                                <EventList key="event_list" owner={props.owner} repo={props.repo} issue_number={props.issue_number} />
                            </div>
                            <div>
                                <Comment key="event_commend" owner={props.owner} repo={props.repo} issue_number={props.issue_number} shouldRefresh={props.shouldRefresh}/>
                            </div>
                        </Col>
                    </Row>
            }
        </div >
    )
}