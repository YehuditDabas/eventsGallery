import logo from './logo.svg';
import './App.css';
import MyAllEvents from './components/myAllEvents'
import {
  BrowserRouter as Router,
  Switch,
  useLocation, Route
} from "react-router-dom";
import EventDetails from './components/eventDetails';
import PreviousEvents from './components/previousEvents';
import FooterEventsGallery from './components/footerEventsGallery';


function App() {
  return (
    <Router>
      <Route exact path="/:userName">
        <MyAllEvents />
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
