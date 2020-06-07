import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import ListIssue from '../../components/ListIssue/ListIssue';
import Pagination from '../../components/Pagination/Pagination';
import IssueApis from './../../apis/IssueApis';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";


export default function HomePage(props) {
    const history = useHistory();
    const location = useLocation();
    const [owner, setOwner] = useState("");
    const [repo, setRepo] = useState("")
    const [issueList, setIssueList] = useState([]);
    
    const getList = async (owner, repo, page) => {
        let list = await IssueApis.getIssueList(owner, repo, page)
        setIssueList(list)
    }

    const selectIssue = (number) => {
        history.push({
            pathname: "/detail",
            search: `?owner=${owner}&repo=${repo}&issue_number=${number}`,
          });
    }

    const pageClick = async (data) => {
        let list = await IssueApis.getIssueList(owner, repo, data.selected + 1)
        setIssueList(list)
    }

    useEffect(() => {
        if (location.search != null) {
            let theOwner = (new URLSearchParams(window.location.search)).get("owner")
            console.log("home " + theOwner)
            setOwner(theOwner)
            let theRepo = (new URLSearchParams(window.location.search)).get("repo")
            setRepo(theRepo)
            console.log("home " + theRepo)
            if (theOwner != null && theOwner.length >= 2 && theRepo != null && theRepo.length > 2) {
                props.updateUrlData(theOwner, theRepo);
                getList(theOwner, theRepo, 1);
            }
        }
    }, [location])

    return (
        <div className="HomePage-div">
            <ListIssue issueListFromHomePage={issueList} selectIssue={selectIssue} />
            {
                issueList.length >= 2 
                ? <Pagination pageCount={10} handlePageClick={pageClick} />
                : <div></div>
            }
            
        </div>
    )
}
