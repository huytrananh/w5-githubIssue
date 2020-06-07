import React, { useState, useEffect } from 'react';
import './App.css';
import IssueApis from './apis/IssueApis';
import DetailPage from './pages/DetailPage/DetailPage';

import { Container } from 'react-bootstrap';

function App() {

  const clientId = "e4ee4f36a986c8b89542";
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
      <DetailPage />
    </Container>
  )
}

export default App;
