import React, { useState, useEffect } from 'react';
import './App.css';
import IssueApis from './apis/IssueApis';
import HomePage from './pages/HomePage';

import { Container } from 'react-bootstrap';

function App() {

  const clientId = "";
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
      <HomePage />
    </Container>
  )
}

export default App;
