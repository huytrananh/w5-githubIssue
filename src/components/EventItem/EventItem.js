import React from 'react'
import Moment from "react-moment";
import { Card, Badge } from 'react-bootstrap';
import "./EventItem.css";


export default function EventItem(props) {
    let name = props.event.actor.login;
    let account = props.event.actor.html_url;
    let avatar = props.event.actor.avatar_url;
    let event = props.event.event;

    let fullDisplayedEvent = "";

    if (event == "closed") {
        fullDisplayedEvent = " closed this issue"
    } else if (event == "mentioned") {
        fullDisplayedEvent = " mentioned this issue"
    }

    return (
        <div className="EventItem-div">
            <Card className="second-card-part col-10">
                <Card.Body>
                    <img src={avatar} className="avatar" />
                    <a href={account}>{name}</a>
                    {
                        event == "labeled" ?
                            <span> added the&nbsp;
                     <Badge style={{ backgroundColor: `#${props.event.label.color}` }}>{props.event.label.name} </Badge> label
                  </span>
                            :
                            <span>{fullDisplayedEvent}</span>
                    }&nbsp;
                <Moment fromNow>{props.event.created_at}</Moment>
                </Card.Body>
            </Card>
        </div>

    )
}
