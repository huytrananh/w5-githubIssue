import React, { useState, useEffect } from 'react';
import './App.css';
import DetailPage from './pages/DetailPage/DetailPage';
import CreateIssuePage from './pages/CreateIssuePage/CreateIssuePage';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import HomePage from './pages/HomePage/HomePage';
import {Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";


function App() {
  const history = useHistory();
  const clientId = "e4ee4f36a986c8b89542";
  const [token, setToken] = useState(null);
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [issueNumber, setIssueNumber] = useState("");

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
    }

    if (existingToken) {
      setToken(existingToken);
    }
  }

  const performSearch = (aQuery) => {
    let split = aQuery.split("/")
    console.log(split);
    setOwner(split[0])
    setRepo(split[1])
    history.push({
      pathname: "/",
      search: `?owner=${split[0]}&repo=${split[1]}`,
    })
  }

  useEffect(() => {
    runNodeJsServer()
  }, [])

  return (
    <div>
      <CustomNavbar performSearch={performSearch}/>
      <div>
        <Route exact={true} path="/" component={() => <HomePage />} />
        <Route exact={true} path="/detail" component={() => <DetailPage />} />
        <Route exact={true} path="/create" component={() => <CreateIssuePage />} />
      </div>
    </div>
  )
}

export default App;
