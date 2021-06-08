import logo from './logo.svg';
import './App.css';
// import Configurator from './components/settings'
import AllEvents from './components/allEvents'
import { Card, Accordion } from 'react-bootstrap';
import ConfiguratorSettings from './Configurator/ConfiguratorSettings'
import Settings from './components/settings'


import {
  BrowserRouter as Router,
  Switch,
  useLocation, Route
} from "react-router-dom";
import EventDetails from './components/eventDetails';


function App() {
  return (
    <Router>
      <Route exact path="/:userName">
        <AllEvents />
      </Route>
      <Route  path="/:userName/eventDetails/:index">
        <EventDetails />
      </Route>

      <div className="App"></div>
         <ConfiguratorSettings/>    
   
    </Router>
  )
}

export default App;
