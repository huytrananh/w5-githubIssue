import React, { useState, useEffect } from 'react';
import './App.css';
import IssueApis from './apis/IssueApis';
<<<<<<< HEAD
import SideDetail from './components/SideDetail/SideDetail';
import CreateComment from './components/CreateCommend/CreateComment'
import { Container } from 'react-bootstrap';
import ListComment from './components/ListComment/ListComment'

function App() {

  const clientId = "eebe3824efbd1d20f8cb";
=======
import DetailPage from "./pages/DetailPage/DetailPage";
import ListComment from './components/ListComment/ListComment';

const clientId = process.env.REACT_APP_CLIENT_ID;

function App() {

>>>>>>> linlin
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
<<<<<<< HEAD
    <Container>
      <SideDetail owner='facebook' repo='react' issue_number='19002'/>
      {/* <ListComment owner='facebook' repo='react' issue_number='19054'></ListComment> */}
      <CreateComment owner='huytrananh' repo='catch-monster' issue_number='4'/>
    </Container>
  )
=======
    <div className="App">
      
    </div>
  );
>>>>>>> linlin
}

export default App;
