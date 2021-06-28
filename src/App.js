import logo from './logo.svg';
import './App.css';
import MyAllEvents from './components/myAllEvents'
// import Configurator from './components/settings'
import AllEvents from './components/allEvents'
import { Card, Accordion } from 'react-bootstrap';
import ConfiguratorSettings from './Configurator/ConfiguratorSettings'
import Settings from './components/settings';


import {
  BrowserRouter as Router,
  Switch,
  useLocation, Route
} from "react-router-dom";
import EventDetails from './components/eventDetails';
import PreviousEvents from './components/previousEvents';
import FooterEventsGallery from './components/footerEventsGallery';
import TitleEvents from './components/titleEvents';
import AdminEventTitle from './components/adminEventTitle';
function App() {
  return (
    <Router>
      <Route exact path="/:userName">
        <ConfiguratorSettings/>
        <AdminEventTitle style={{ zIndex: 3 }}></AdminEventTitle>
        {/* <TitleEvents style={{ zIndex: 3 }}></TitleEvents> */}

        {/* <FooterEventsGallery /> */}
      </Route>
      <Route path="/:userName/eventDetails/:index">
        <EventDetails /><FooterEventsGallery style={{ marginTop: "5%" }} />
      </Route>
    </Router>
  )
}
export default App;
