import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyAllEvents from './components/myAllEvents'
// import Configurator from './components/settings'
import AllEvents from './components/allEvents'
import { Card, Accordion } from 'react-bootstrap';
import ConfiguratorSettings from './Configurator/ConfiguratorSettings'
import Settings from './components/settings';
import showSettings from './assets/show.png';


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
  const [show, setShow] = useState(false);

  function showConfig() {
    show ? document.documentElement.style.setProperty('--float-button', '0%') : document.documentElement.style.setProperty('--float-button', '16.8%')
  }
  return (

    <Router>
        <Route exact path="/:userName">
          <button onClick={() => { setShow(!show); showConfig() }} className="showSettingsBtn"><img src={showSettings} height="20vh" width="30vw"></img></button>
          {show == true ? < ConfiguratorSettings /> : ''}
          {show == true ?
            <AdminEventTitle style={{ zIndex: 3 }}></AdminEventTitle> : ''}
          {show == false ? <TitleEvents style={{ zIndex: 3 }}></TitleEvents> : ''}

          {/* <FooterEventsGallery /> */}
        </Route>
        <Route path="/:userName/eventDetails/:index">
          <EventDetails /><FooterEventsGallery style={{ marginTop: "5%" }} />
        </Route>
    </Router>
      )
}
      export default App;
