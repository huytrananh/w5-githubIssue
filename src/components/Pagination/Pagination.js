import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'

export default function Pagination(props) {
    const click = () => {
        props.handlePageClick(); 
    }
    return (
        <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={5}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={click}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    )
}
