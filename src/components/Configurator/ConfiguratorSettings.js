import React from 'react'

import pageSettings from './pageSettings.config'
import EditHeader from './EditHeader.config'
import CardComponentConfig from './cardcomponentConfig'
import { Card, Accordion } from 'react-bootstrap'
import EditSubscription from './editSubscribtion.config'
import EditFooter from './EditFooter.config'
import CreateNewEvent from './CreateNewEvent.config'
import {actionsStore} from '../../redux/actions'
import './cardComponentConfig.css';
import { connect } from 'react-redux'
import {useDispatch}from 'react-redux'
import displayEvent from '../events/displayEvent/displayEvent'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {

  return {
    currentComponent:state.site.currentComponent,
    EditHeader: state.editHeader,
    editSubscription: state.editSubscription,
    editFooter: state.editFooter,
    pageSettings: state.pageSettings,
    events: state.allEvents.events,   
    eventsPageColor: state.pageSettings.page.eventsPageColor,
    userName: state.allEvents.userName,
    devJwt: state.allEvents.devJwt
  }
}


function ConfiguratorSettings(props) {
 const dispatch= useDispatch()
  const hundalCreate = () => {
    
    // e.preventDefault();
    const settings = {

      eventsPageAlignment: props.EditHeader.header.eventsPageAlignment,
      eventsPageImageOrVideo: props.EditHeader.header.eventsPageImageOrVideo,
      eventsPageLogo: props.EditHeader.header.eventsPageLogo,
      eventsPageTitle: props.EditHeader.header.eventsPageTitle,
      eventsPageDescription: props.EditHeader.header.eventsPageDescription,
      displayHeader: props.EditHeader.header.displayHeader,

      eventsPageColor: props.pageSettings.page.eventsPageColor,
      amountEventsInRow: props.pageSettings.page.amountEventsInRow,
      eventsButtonColor: props.pageSettings.page.eventsButtonColor,
      ShowHistoricalEvents: props.pageSettings.page.ShowHistoricalEvents,

      name: props.editSubscription.subscribe.name,
      email: props.editSubscription.subscribe.email,
      phone: props.editSubscription.subscribe.phone,
      address: props.editSubscription.subscribe.address,

      facebook:props. editFooter.footer.facebook,
      facebookLink: props. editFooter.footer.facebookLink,
      twitter: props. editFooter.footer.twitter,
      twitterLink:props. editFooter.footer.twitterLink,
      instagram:props. editFooter.footer.instagram,
      instagramLink: props. editFooter.footer.instagramLink,
      youtube: props. editFooter.footer.youtube,
      youtubeLink:props. editFooter.footer.youtubeLink,

    }
    dispatch(actionsStore.updateOrCreateSettings(settings))
    // props.OnSubmitupdateOrCreateSettings(settings)
    console.log("from handlecreate  "+ settings.eventsPageAlignment)
  }
 
function onbtnClick(){
  debugger

  props.history.push({ pathname: `/${window.location.pathname.split('/')[1]}/newEventDetails/`})
}


  return (

    <div className="container-fluid ">
      <button type="submit" className="saveSettings" onClick={hundalCreate}>save</button>
      <div className='row'>

        <div className='col-md-2 configurator'>
        <button onClick={onbtnClick} className=' p-2 m-2 ml-2 mr-2 btnCreateEvent'>+Create Event</button>
          <Accordion
            activeKey={props.currentComponent}
            className="accordion_warps "
          >
            <CardComponentConfig
             className="cardOne"  
              eventKey={'Page Settings'}
              component={pageSettings} קומפוננטה אחת
            />
            <CardComponentConfig
             className="cardName"  
              eventKey={'Edit Header'}
              component={EditHeader} קומפוננטה שניה
            />
            <CardComponentConfig
               className="cardName"  
              // eventKey={3}
              eventKey={'Edit Subscription'}
              component={EditSubscription} קומפוננטה שלישית
            />
            <CardComponentConfig
             className="cardName"      
              eventKey={'Edit Footer'}
              component={EditFooter} קומפוננטה רביעית
            />
            {/* <CardComponentConfig
             className="cardName"      
              eventKey={'Create Event'}
              component={CreateNewEvent}קומפוננטה חמישית
            /> */}

            {/* <CardComponentConfig eventKey={1} component={ChannelDetails} nameComponent={'ChannelDetails'} />
                <CardComponentConfig eventKey={2} component={AudioDetails} nameComponent={'AudioDetails'} />  */}
          </Accordion>

          <div className="d-flex justify-content-center updateConfigurator">
            <button type="submit" className="buttoncreate btn p-2 m-2 ml-2 mr-2"
              onClick={hundalCreate}
            
            >Update</button>
            </div> 
           
        </div>
      </div>
    </div>

  )
}


// const mapDispatchToProps=(dispatch)=>{
//   return{
//     OnSubmitupdateOrCreateSettings: (settingsObject) => dispatch(actionsStore.updateOrCreateSettings(settingsObject)),
// }
// }

export default withRouter (connect(mapStateToProps)(ConfiguratorSettings));

