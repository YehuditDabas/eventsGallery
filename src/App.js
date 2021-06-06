<<<<<<< HEAD
import AllEvents from './components/allEvents'
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> f5e95be5cd846759c0a59b92e2a326e3f8c6f191
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
      <div className="App">
         <ConfiguratorSettings/>    
       
      <Route exact path="/:userName">
        <AllEvents />
        <FooterEventsGallery/>
        {/* <PreviousEvents/> */}

      </Route>
      <Route  path="/:userName/eventDetails/:index">
        <EventDetails />
      </Route>
     </div>
    </Router>
  )
}
export default App;
