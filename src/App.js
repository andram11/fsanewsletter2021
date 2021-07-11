
import './App.css';
import React from 'react';

/*Components*/
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ViewArticle from './components/Article/ViewArticle';
import Heading from './components/Heading/Heading';
import IdeaBoxForm from './components/IdeaBox/IdeaBoxForm';
import ListResources from './components/Resources/ListResources';
import ManageArticle from './components/Admin/ManageArticle';


/*Login & auth*/
import Login from './components/Login/Login'

/*Routing*/
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {HashRouter} from 'react-router-dom';


/*Tokens*/
import useToken from './useToken'

/* 
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken.accessToken));
  
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
 */


function App() {
  //const [token, setToken] = useState();
  //const token = getToken();
  const { token, setToken } = useToken();

 /*  if(!token) {
    return <Login setToken={setToken} />
  }  */
  return (
    <React.Fragment>
      <Router>
        <div className="container-fluid">
        <NavBar></NavBar>
        <Heading></Heading>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/articles/:id" component={ViewArticle}></Route>
          <Route path="/ideabox" component={IdeaBoxForm}></Route>
          {/* <Route path="/contact" component={ContactForm}></Route> */}
          <Route path="/resources" component={ListResources}></Route>
          <Route path="/admin" component={
            ()=> {
              if(!token) {
                return <Login setToken={setToken} />
              } return <ManageArticle/>
            }
          }></Route>
          <Route path="/signin" component={
            ()=> {
              if(token){
                return <Redirect to="/"/>
              } return <Login setToken={setToken}/>
            }
          }></Route>
        </Switch>
     <Footer></Footer>
        </div>
     </Router>
    </React.Fragment>
    
      
  );
}

export default App;
