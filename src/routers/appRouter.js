// import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom";
// import EventDetails from '../components/events/eventDetails/eventDetails';
// import FooterEventsGallery from '../components/footer/footerEventsGallery';
// import AdminEventTitle from '../components/title/adminTitle/adminEventTitle';
// import ConfiguratorSettings from '../components/Configurator/ConfiguratorSettings'
// import TitleEvents from '../components/title/title/titleEvents';
// import showSettings from '../assets/show.png';
// import NewEventDetails from '../components/events/eventDetails/newEventDetails'
// import EventTitleMobile from '../components/title/mobile/titleMobile/eventTitleMobile'
// import { useMediaQuery } from 'react-responsive';
// import CreateEventInMobile from '../components/events/mobile/createEventInMobile/createEventInMobile'

// import EventDetailsMobile from '../components/events/mobile/eventDetailsMobile/eventDetailsMobile'

// export default function AppRouter() {
//   const [show, setShow] = useState(false);
//   const isMobile = useMediaQuery({ query: `(max-width: 620px)` });
//   console.log("isMobile  ", isMobile);
//   function showConfig() {
//     show ? document.documentElement.style.setProperty('--float-button', '0%') : document.documentElement.style.setProperty('--float-button', '16.8%')
//   }
//   return (
//     <Router>
//       {/* <Route exact path="/:userName">
//         <TitleEvents style={{ zIndex: 3 }}></TitleEvents>
//       </Route>
//       <Route exact path="/:userName/admin">
//         <ConfiguratorSettings />
//         <AdminEventTitle style={{ zIndex: 3 }}></AdminEventTitle>
//       </Route> */}

//       <Route exact path="/:userName">
//         <button onClick={() => { setShow(!show); showConfig() }} className="showSettingsBtn"><img src={showSettings} height="20vh" width="30vw"></img></button>
//         {show == true ? < ConfiguratorSettings /> : ''}
//         {show == true ?
//           <AdminEventTitle style={{ zIndex: 3 }}></AdminEventTitle> : ''}
//         {show == false ? <TitleEvents style={{ zIndex: 3 }}></TitleEvents> : ''}

//         {/* <FooterEventsGallery /> */}
//       </Route>

//       <Route path="/:userName/newEventDetails/">
//         <NewEventDetails />
//       </Route>
//       <Route path="/:userName/eventDetails/:index">
//         {isMobile == true ?
//           <EventDetailsMobile /> :<EventDetails />}

//       </Route>
//     </Router>
//   )
// }





























import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
 import NewEventDetails from '../components/events/eventDetails/newEventDetails'

import EventDetails from '../components/events/eventDetails/eventDetails';
import FooterEventsGallery from '../components/footer/footerEventsGallery';
import AdminEventTitle from '../components/title/adminTitle/adminEventTitle';
import ConfiguratorSettings from '../components/Configurator/ConfiguratorSettings'
import TitleEvents from '../components/title/title/titleEvents';
import showSettings from '../assets/show.png';
import EventTitleMobile from '../components/title/mobile/titleMobile/eventTitleMobile'
import { useMediaQuery } from 'react-responsive';
import CreateEventInMobile from '../components/events/mobile/createEventInMobile/createEventInMobile'

import EventDetailsMobile from '../components/events/mobile/eventDetailsMobile/eventDetailsMobile'

export default function AppRouter() {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 620px)` });
  console.log("isMobile  ", isMobile);
  function showConfig() {
    show ? document.documentElement.style.setProperty('--float-button', '0%') : document.documentElement.style.setProperty('--float-button', '16.8%')
  }
  return (
    <Router>
      {/* <Route exact path="/:userName">
        <TitleEvents style={{ zIndex: 3 }}></TitleEvents>
      </Route>
      <Route exact path="/:userName/admin">
        <ConfiguratorSettings />
        <AdminEventTitle style={{ zIndex: 3 }}></AdminEventTitle>
      </Route> */}

      <Route exact path="/:userName">
        {isMobile == true ?
          // <EventTitleMobile />
          <CreateEventInMobile />
          : <><button onClick={() => { setShow(!show); showConfig() }} className="showSettingsBtn"><img src={showSettings} height="20vh" width="30vw"></img></button>
            {show == true ? < ConfiguratorSettings /> : ''}
            {show == true ?
              <AdminEventTitle style={{ zIndex: 3 }}></AdminEventTitle> : ''}
            {show == false ? <TitleEvents style={{ zIndex: 3 }}></TitleEvents> : ''}</>}

      </Route>

      <Route path="/:userName/newEventDetails/">
        <NewEventDetails />
      </Route>
      <Route path="/:userName/eventDetails/:index">
        {isMobile == true ?
          <EventDetailsMobile /> : <EventDetails />}

      </Route>
    </Router>
  )
}