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
        <div className="App">
          {/* <div className="container settingsAndEvents">
            <div className="row">
              <div className="col-3">
                <ConfiguratorSettings />
              </div>
              <div className="col-9"> */}
                <TitleEvents style={{ zIndex: 3 }}></TitleEvents>
                <FooterEventsGallery />

              {/* </div>
            </div>
          </div> */}
        </div>

        {/* <MyAllEvents></MyAllEvents> */}
        {/* <PreviousEvents/> */}
      </Route>
      <Route path="/:userName/eventDetails/:index">
        <EventDetails></EventDetails>
        <FooterEventsGallery />
      </Route>
    </Router>
  )
}
export default App;
