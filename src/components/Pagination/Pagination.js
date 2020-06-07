import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'

export default function Pagination(props) {
 
    return (
        <ReactPaginate
            previousLabel={<i className="fas fa-chevron-left"></i>}
            nextLabel={<i class="fas fa-chevron-right"></i>}
            breakLabel={'...'}
            breakClassName={'break-me'}
            onPageChange={props.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
        />
    )
}
