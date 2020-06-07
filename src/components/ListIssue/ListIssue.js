import React from 'react'
import './ListIssue.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import { Container, Col } from 'react-bootstrap';

const ListIssue = (props) => {
 
  const selectOneIssue = (number) => {
    props.selectIssue(number);
  }

  return (
    <Container>
      <Col>
        <div className="col-md-12">
          <div className="big-box">
            {
              props.issueListFromHomePage.length == 0 ? <img className="ListIssue-img" src="https://img.itch.zone/aW1nLzIxODA2ODgucG5n/original/f3Hb32.png" /> :
              props.issueListFromHomePage.map((item, index) => {
                return (

                  <div className="issue-item" key={`issue${index}`} >

                    <div className="title">

                      <div className="big-title" onClick={() => selectOneIssue(item.number)} >
                        <i className="fas fa-info-circle"></i>
                        <h6>{item.title} {item.labels.map(one => {
                          return <span key={`span${one.name}`} className="issue-type" style={{ backgroundColor: `#${one.color}` }}>{one.name}</span>
                        })}</h6>
                      </div>

                      <div><a href="#0"><i className="far fa-comment-alt comment-in-title"></i> {item.comments}</a></div>

                    </div>
                    <div className="post-detail">
                      <p className="description">#{item.number} <Moment fromNow>{item.created_at}</Moment> by <a className="user" href="#0">{item.user.login}</a>
                      </p>
                      <img className="user-avatar" alt="user-avatar" src={`${item.user.avatar_url}`} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Col>
    </Container>
  )
}

export default ListIssue;