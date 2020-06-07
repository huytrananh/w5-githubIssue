import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import ListIssue from '../../components/ListIssue/ListIssue';
import Pagination from '../../components/Pagination/Pagination';
import IssueApis from './../../apis/IssueApis';
import {useParams} from 'react-router-dom';

export default function HomePage(props) {
    const [issueList, setIssueList] = useState([]);
    const [owner, setOwner] = useState("");
    const [repo, setRepo] = useState("");
    let { id } = useParams();

    const getList = async (owner, repo, page) => {
        let list = await IssueApis.getIssueList(owner, repo, page)
        setIssueList(list)
    }

    const pageClick = async (data) => {
        let list = await IssueApis.getIssueList(owner, repo, data.selected + 1)
        setIssueList(list)
    }

    useEffect(() => {
        if (props.query.length >= 2) {
            let split = props.query.split("/")
            let owner = split[0]
            let repo = split[1]
            setOwner(owner);
            setRepo(repo);
            getList(owner, repo, 1);
        }
        console.log(`id ${id}`);
    }, [props.query])

    return (
        <div className="HomePage-div">
            <ListIssue issueListFromHomePage={issueList} />
            {
                issueList.length >= 2 
                ? <Pagination pageCount={10} handlePageClick={pageClick} />
                : <div></div>
            }
            
        </div>
    )
}
