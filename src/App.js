import logo from './logo.svg';
import './App.css';
// import Configurator from './components/settings'
import AllEvents from './components/allEvents'
import { Card, Accordion } from 'react-bootstrap';
import ConfiguratorSettings from './Configurator/ConfiguratorSettings'
import Settings from './components/settings'


import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
         <ConfiguratorSettings/>    
       
        {/* <AllEvents />
        <Settings/> */}
      </div>
    </Router>
  )
}

export default App;
