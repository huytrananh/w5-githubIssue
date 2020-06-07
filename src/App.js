import React, { useState, useEffect } from 'react';
import './App.css';
import IssueApis from './apis/IssueApis';
import DetailPage from './pages/DetailPage/DetailPage';
import CreateIssuePage from './pages/CreateIssuePage/CreateIssuePage';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import HomePage from './pages/HomePage/HomePage';
import {Route} from 'react-router-dom';
import { withRouter } from 'react-router-dom';


function App({history}) {

  const clientId = "e4ee4f36a986c8b89542";
  const [token, setToken] = useState(null);
  const [query, setQuery] = useState("");

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
    history.push("/")
  }

  const performSearch = (aQuery) => {
    setQuery(aQuery)
    history.push(aQuery)
  }

  useEffect(() => {
    runNodeJsServer()
  }, [])

  return (
    <div>
      <CustomNavbar performSearch={performSearch}/>
      <div>
        <Route path="/" component={() => <HomePage query={query} />} />
        <Route exact={true} path="/detail" component={() => <DetailPage />} />
        <Route exact={true} path="/create" component={() => <CreateIssuePage />} />
      </div>
    </div>
  )
}

export default withRouter(App);
