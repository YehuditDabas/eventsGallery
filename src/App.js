import logo from './logo.svg';
import './App.css';
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
import TitleEvents from './components/titleEvents';
function App() {
  return (
    <Router>
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
    </Router>
  )
}
export default App;
