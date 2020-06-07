import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import IssueApis from './apis/IssueApis';
import SideDetail from './components/SideDetail/SideDetail';
import CreateComment from './components/CreateCommend/CreateComment'
import { Container } from 'react-bootstrap';
import ListComment from './components/ListComment/ListComment'

function App() {

  const clientId = "eebe3824efbd1d20f8cb";
  const [token, setToken] = useState(null);

  const runNodeJsServer = () => {
    const existingToken = sessionStorage.getItem('token');
    const accessToken = (window.location.search.split("=")[0] === "?access_token") ? window.location.search.split("=")[1].split("&")[0] : null;
  
    if (!accessToken && !existingToken) {
      window.location.replace(`https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`)
    }

    if (accessToken) {
      console.log(`New accessToken: ${accessToken}`);

      sessionStorage.setItem("token", accessToken);
      setToken(accessToken)
      IssueApis.getIssueList("facebook", "react");
    }

    if (existingToken) {
      setToken(existingToken);
    }
  }

  useEffect(() => {
    runNodeJsServer()
  }, [])

  

  return (
    <Container>
      <SideDetail owner='facebook' repo='react' issue_number='19054'/>
      {/* <ListComment owner='facebook' repo='react' issue_number='19054'></ListComment> */}
      <CreateComment owner='huytrananh' repo='catch-monster' issue_number='4'/>
    </Container>
  )
}

export default App;
