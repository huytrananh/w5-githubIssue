import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Navbar, Nav, Row, Col, Badge, Card } from 'react-bootstrap';
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
        getPostDetail()
    }, []);
    console.log(issueDetail)

    Image = (props) => {
        return <img {...props} style={{ maxWidth: '100%' }} />
    }

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
            {
                issueDetail === null ? <h1>Loading</h1> :
                    <Row>
                        <Col xs={9}>
                            <div>
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
                                <img className="avatar" src={issueDetail.user.avatar_url} />
                                <Card className="card-part">
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
                                <EventList owner="facebook" repo="react" issue_number="19073" />
                            </div>
                            <div>
                                <Comment owner="facebook" repo="react" issue_number="19073" />
                            </div>
                        </Col>
                    </Row>
            }
        </div >
    )
}