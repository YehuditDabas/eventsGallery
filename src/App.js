import AllEvents from './components/allEvents'
import {
  BrowserRouter as Router,
  Switch,
  useLocation, Route
} from "react-router-dom";
import EventDetails from './components/eventDetails';

function App() {
  return (
    <Router>
      <Route exact path="/:userName">
        <AllEvents />
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
