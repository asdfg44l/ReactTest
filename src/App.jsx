import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
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
              <NavLink className="link" to="/About" >About</NavLink>
              <NavLink className="link" to="/Story" >Story</NavLink>
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
              <Route path="/Lobo" children={ props => (<div>children Lobo</div>)} />
              <Route path="/About" component={About} />
              <Redirect from={"/About"} to={{
                pathname: '/Lobo', 
                search: "?Bark=false",
                state: { name: 'Lobo'}
              }} />
              <Route component={NoPages} ></Route> 
            </Switch>
          )
        }
      />
    </Router>
  )
}

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    main: () => <div className="">home</div>
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Lobo',
    name: 'Lobo',
    component: Lobo,
  },
  {
    path: '/Topics',
    component: Topics,
    children: [
      {
        path: ":topicID",
        component: Topic,
      }
    ]
  }
]


function CustomLink({ label, to, activeOnlyWhenExact}) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  })
  return (
    <div className={match ? 'active' : ''}>
      { match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  )
}

function Lobo() {
  return ( <p>Lobo</p> )
}

function Home() {
  return ( <p>Home</p> )
}

function About() {
  return <p>About</p>
}

function Topics() {
  let match = useRouteMatch()
  return ( 
    <div className="">
      <p>Topic Page</p>
      <ul>
        <li>
          <CustomLink to={`${match.url}/Hello`} label="Hello" />
          <CustomLink to={`${match.url}/World`} label="World" />
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

  return ( <h3>Current TopicID is : {topicID}</h3> )
}

function NoPages() {
  return ( <div>頁面維修中...</div> )
}

export default App;
