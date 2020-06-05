import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import IssueApis from './apis/IssueApis';
import SideDetail from './components/SideDetail/SideDetail';

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
    <div className="App">
      <SideDetail owner='facebook' repo='react' issue_number='19060'/>
    </div>
  );
}

export default App;
