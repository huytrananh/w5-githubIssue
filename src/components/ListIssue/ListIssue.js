import React from 'react'
// import ReactPaginate from 'react-paginate';
import './ListIssue.css'

export default function ListIssue(props) {
    console.log("this is issueListFromApp", props.issueListFromApp)
    return (
        <div>{props.issueListFromHomePage.map((item, index) => {
            return (
    
                <div key={`issue${index}`}>
                <div className="title">
                  <i className="fas fa-info-circle"></i>
                  <h3>{item.title}</h3>
                </div>
                <div class="post-detail">
                  <p className="description">#{item.number} {item.created_at} by <a className="user" href="#0">{item.user.login}</a>  </p>
                   <img className="user-avatar" alt="user-avatar" src={`${item.user.avatar_url}`}/>
                  <p className="description"><a href="#0"><i class="far fa-comment-alt"></i> {item.comments}</a></p>
                </div>
                
              
              </div>
    
            )
          })}</div>
    )
}
