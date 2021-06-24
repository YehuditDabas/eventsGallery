import logo from './logo.svg';
import './App.css';
// import Configurator from './components/settings'
import AllEvents from './components/events/allEvents/allEvents'
import { Card, Accordion } from 'react-bootstrap';
import ConfiguratorSettings from './components/Configurator/ConfiguratorSettings'


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
  return (
    <AppRouter/>
  )
}
export default App;
