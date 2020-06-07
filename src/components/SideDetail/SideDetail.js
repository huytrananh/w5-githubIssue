import React, { useState, useEffect } from 'react'
import IssueApis from './../../apis/IssueApis';
import { Spinner, Button, Badge } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SideDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default function SideDetail(props) {

    let [sideDetail, setSideDetail] = useState(null)

    const getSideDetail = async () => {
        let data = await IssueApis.getIssueDetail(props.owner, props.repo, props.issue_number)
        setSideDetail(data)
    }

    useEffect(() => {
        if (props.owner.length > 2 &&  props.repo.length > 2 && props.issue_number.length > 0) {
            getSideDetail()
        }
       
    }, [props.owner, props.repo, props.issue_number])

    return (
        <div className="SideDetail-div">
            {sideDetail == null ? <Spinner animation="border" variant="danger" /> :
                <Row>
                    <Col xs={12}>
                        <div>
                            <div>Assignees</div>
                            {sideDetail.assignee == null ? <div>No one assigned</div> : sideDetail.assignee}
                        </div><hr />
                        <div>
                            <div>Labels</div>
                            {sideDetail.labels.length === 0 ? 'No label' :
                                <div>
                                    {sideDetail.labels.map(item => {
                                        return (<Badge key={item.name} className="SideDetail-badge" style={{ backgroundColor: `#${item.color}` }}>{item.name}</Badge>)
                                    })}
                                </div>}

                        </div><hr />
                        <div>
                            <div>Projects</div>
                            <div>None yet</div>
                        </div><hr />
                        <div>
                            <div>Milestone</div>
                            {sideDetail.milesonte == null ? <div>No milestone</div> : sideDetail.assignee}
                        </div><hr />
                        <div>
                            <div>Linked pull requests</div>
                            <div>Successfully merging a pull request may close this issue.</div>
                            <div>None yet</div>
                        </div><hr />
                        <div>
                            <div className="subscribe-section">
                                <span><a href="#">Notification</a></span>
                                <span><a href="#">Customize</a></span>
                            </div>
                            <Button className="subcribe-button" variant="outline-secondary">
                                <FontAwesomeIcon icon={faBell} />
                                <div className="subcribe-button-text">Subscribe</div>
                            </Button>
                            <div>You’re not receiving notifications from this thread.</div>
                        </div><hr />
                        <div>
                            <div>1 participants</div>
                            <div>
                                <div><img width="40" src={sideDetail.user.avatar_url} /></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            }
        </div>
    )
}
