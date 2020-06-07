import React from 'react'

import './ListIssue.css'
//import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Moment from 'react-moment';
//import Accordion from 'react-bootstrap/Accordion'

import Filter from './../Filter/Filter'

export default function ListIssue(props) {

  const selectOneIssue = (number) => {
    console.log(`Haha ${number}`)
  }
  console.log("this is issueListFromApp", props.issueListFromApp)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="big-box">


            {props.issueListFromHomePage.map((item, index) => {
              return (

                <div className="issue-item" key={`issue${index}`} >

                  <div className="title">

                    <div className="big-title" onClick={() => selectOneIssue(item.number)} > 
                      <i className="fas fa-info-circle"></i>
                      <h6>{item.title} {item.labels.map(one => {
                        return <span className="issue-type" style={{ backgroundColor: `#${one.color}` }}>{one.name}</span>
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
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
