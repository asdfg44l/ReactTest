import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Router>
      <Layout
        Topbar ={
          (
            <div className="d-flex justify-content-center">
              <Link className="link" to="/">Home</Link>
              <NavLink className="link" activeClassName="woof" to="/Lobo">Lobo</NavLink>
              <NavLink className="link" to="/Topics">Topics</NavLink>
            </div>
          )
        }
        Content ={
          (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Topics">
                <Topics />
              </Route>
              <Route path="/Lobo">
                <Lobo />
              </Route>
            </Switch>
          )
        }
        
      />
    </Router>
  )
}

function Lobo() {
  return ( <p>Lobo</p> )
}

function Home() {
  return ( <p>Home</p> )
}

function Topics() {
  let match = useRouteMatch()
  return ( 
    <div className="">
      <p>Topic Page</p>

      <ul>
        <li>
          <Link to={`${match.url}/Hello`}>Hello</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicID`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let { topicID } = useParams()
  return ( <h3>Current TopicID is : {topicID}</h3>)
}

export default App;
