import React from 'react'
import Pagination from '../../components/Pagination/Pagination'
import ListIssue from '../../components/ListIssue/ListIssue';

export default function HomePage(props) {
    return (
        <div>
            
            <ListIssue issueListFromHomePage={props.issueListFromApp} />
            <Pagination pageCount={10} handlePageClick={() => { alert("working") }}/>
        </div>
    )
}
