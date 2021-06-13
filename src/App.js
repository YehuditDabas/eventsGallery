import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
=======
// import Configurator from './components/settings'
import AllEvents from './components/allEvents'
import { Card, Accordion } from 'react-bootstrap';
import ConfiguratorSettings from './Configurator/ConfiguratorSettings'
import Settings from './components/settings'


>>>>>>> yehudit
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
<<<<<<< HEAD
      <Route exact path="/:userName">
        <TitleEvents></TitleEvents>
        <MyAllEvents></MyAllEvents>
        <FooterEventsGallery/>
        {/* <PreviousEvents/> */}
      </Route>
      <Route  path="/:userName/eventDetails/:index">
        <EventDetails />
      </Route>
      <div className="App">
      </div>
=======
       <Route exact path="/:userName">
        <AllEvents />
      </Route>
      <Route  path="/:userName/eventDetails/:index">
        <EventDetails />
      </Route> 

      {/* <Route  path="/"><ConfiguratorSettings/>  </Route> */}
     <div className="App"></div>

   
>>>>>>> yehudit
    </Router>
  )
}
export default App;
