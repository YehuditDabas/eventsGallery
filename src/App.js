import logo from './logo.svg';
import './App.css';
import AllEvents from './components/allEvents'
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <AllEvents />
      </div>
    </Router>
  );
}

export default App;
