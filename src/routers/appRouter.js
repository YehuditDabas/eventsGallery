import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import EventDetails from '../components/events/eventDetails/eventDetails';
import FooterEventsGallery from '../components/footer/footerEventsGallery';
import AdminEventTitle from '../components/title/adminTitle/adminEventTitle';
import ConfiguratorSettings from '../components/Configurator/ConfiguratorSettings'
import TitleEvents from '../components/title/title/titleEvents';

export default function AppRouter() {
  return (
    <Router>
      <Route exact path="/:userName">
        <TitleEvents style={{ zIndex: 3 }}></TitleEvents>
      </Route>
      <Route exact path="/admin/:userName">
        <ConfiguratorSettings />
        <AdminEventTitle style={{ zIndex: 3 }}></AdminEventTitle>
      </Route>
      <Route path="/:userName/eventDetails/:index">
        <EventDetails /><FooterEventsGallery style={{ marginTop: "5%" }} />
      </Route>
    </Router>
  )
}