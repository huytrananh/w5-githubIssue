import ListComment from "./../../components/ListComment/ListComment";
import SideDetail from './../../components/SideDetail/SideDetail';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CreateCommend from "../../components/CreateCommend/CreateComment";

export default function DetailPage() {
    return (
        <Container className="DetailPage-div">
            <Row>
                <Col xs={9}>
                    <ListComment owner="facebook" repo="react" issue_number="19073" />
                    <CreateCommend />
                </Col>
                <Col xs={3}>
                    <SideDetail owner="facebook" repo="react" issue_number="19073" />
                </Col>
            </Row>
        </Container>
    )
}
