import logo from './logo.svg';
import './App.css';
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
import PreviousEvents from './components/previousEvents';
import FooterEventsGallery from './components/footerEventsGallery';
import TitleEvents from './components/titleEvents';
import MyAllEvents from './components/myAllEvents';
function App() {
  return (
    <Router>
      <Route exact path="/:userName">
        <TitleEvents style={{zIndex:3}}></TitleEvents>
        {/* <MyAllEvents></MyAllEvents> */}
        <FooterEventsGallery/>
        {/* <PreviousEvents/> */}
      </Route>
      <Route  path="/:userName/eventDetails/:index">
        <EventDetails />
      </Route>
      <div className="App">
      </div>
    </Router>
  )
}
export default App;
