import React, {useState, useEffect} from 'react'
import IssueApis from './../../apis/IssueApis';
import {Spinner,Button} from 'react-bootstrap'
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
        getSideDetail()
    }, [])



    return (
        <div>
            {sideDetail == null ? <Spinner animation="border" variant="danger"/> : 
            <Row>
                <Col xs={9}></Col>
                <Col xs={3}>
                    <div>
                        <div>Assignees</div>
                        {sideDetail.assignee== null ? <div>No one assigned</div> : sideDetail.assignee}
                    </div><hr/>
                    <div>
                        <div>Labels</div>
                        {sideDetail.labels.length==0 ? 'Loading' : <div><a href="#">{sideDetail.labels[0].name}</a></div>}
                    </div><hr/>
                    <div>
                        <div>Projects</div>
                        <div>None yet</div>
                    </div><hr/>
                    <div>
                        <div>Milestone</div>
                        {sideDetail.milesonte== null ? <div>No milestone</div> : sideDetail.assignee}
                    </div><hr/>
                    <div>
                        <div>Linked pull requests</div>
                        <div>Successfully merging a pull request may close this issue.</div>
                        <div>None yet</div>
                    </div><hr/>
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
                    </div><hr/>
                    <div>
                        <div>3 participants</div>
                        <div>
                            <div>Icon</div>
                        </div>
                    </div>
                </Col>
            </Row>
            }
        </div>
    )
}
