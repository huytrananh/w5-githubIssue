import React, { useState, useEffect } from 'react';
import './App.css';
import IssueApis from './apis/IssueApis';
import DetailPage from "./pages/DetailPage/DetailPage";
import ListComment from './components/ListComment/ListComment';

const clientId = process.env.REACT_APP_CLIENT_ID;

function App() {

  const [token, setToken] = useState(null);

  const getToken = () => {
    const existingToken = localStorage.getItem('token');
    const accessToken = (window.location.search.split("=")[0] === "?access_token") ?
      window.location.search.split("=")[1].split("&")[0]
      : null;

    if (!accessToken && !existingToken) {
      window.location.replace(`https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`)
    }

    if (accessToken) {
      console.log(`New accessToken: ${accessToken}`);

      sessionStorage.setItem("token", accessToken);
      setToken(accessToken)
    }

    if (existingToken) {
      setToken(existingToken);
    }
  }

  useEffect(() => {
    getToken()
  }, [])



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
