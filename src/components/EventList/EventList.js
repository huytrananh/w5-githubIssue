import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueApis from '../../apis/IssueApis';
import EventItem from "../EventItem/EventItem";
import "./EventList.css";


export default function EventList(props) {

    const [issueEvents, setIssueEvents] = useState(null);

    const getEventList = async () => {
        let evenList = await IssueApis.getIssueEventList(props.owner, props.repo, props.issue_number);
        setIssueEvents(evenList);
    }

    useEffect(() => {
        if (props.owner.length > 2 &&  props.repo.length > 2 && props.issue_number.length >2) {
            getEventList()
        }
        
    }, [props.owner, props.repo, props.issue_number]);
    console.log(issueEvents)

    return (
        <div>
            {
                issueEvents === null ? "" :
                    issueEvents.map(event => <EventItem key={`${Math.random()}`} event={event}/>)
                       
            }
        </div>
    )
}
