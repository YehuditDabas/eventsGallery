import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Configurator from './components/settings'
import AllEvents from './components/events/allEvents/allEvents'
import { Card, Accordion } from 'react-bootstrap';
import ConfiguratorSettings from './components/Configurator/ConfiguratorSettings'
import showSettings from './assets/show.png';


import {
  BrowserRouter as Router,
  Switch,
  useLocation, Route
} from "react-router-dom";
import EventDetails from './components/events/eventDetails/eventDetails';
import PreviousEvents from './components/events/previousEvents/previousEvents';
import FooterEventsGallery from './components/footer/footerEventsGallery';
// import TitleEvents from './components/titleEvents';
import AdminEventTitle from './components/title/adminTitle/adminEventTitle';
import AppRouter from './routers/appRouter'
function App() {
  const [show, setShow] = useState(false);

  function showConfig() {
    show ? document.documentElement.style.setProperty('--float-button', '0%') : document.documentElement.style.setProperty('--float-button', '16.8%')
  }
  return (
    <AppRouter/>
  )
}
      export default App;
