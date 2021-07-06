import PageSettings from './pageSettings.config'
import EditHeader from './EditHeader.config'
import CardComponentConfig from './cardcomponentConfig'
import { Card, Accordion } from 'react-bootstrap'
import EditSubscription from './editSubscribtion.config'
import EditFooter from './EditFooter.config'
import {actionsStore} from '../../redux/actions'
import './cardComponentConfig.css';
import { connect } from 'react-redux'
import {useDispatch}from 'react-redux'

function ConfiguratorSettings(props) {
 const dispatch= useDispatch()
  const hundalCreate = () => {
    // e.preventDefault();
    debugger;
    const settings = {

      eventsPageAlignment: props.EditHeader.header.eventsPageAlignment,
      eventsPageImageOrVideo: props.EditHeader.header.eventsPageImageOrVideo,
      eventsPageLogo: props.EditHeader.header.eventsPageLogo,
      eventsPageTitle: props.EditHeader.header.eventsPageTitle,
      eventsPageDescription: props.EditHeader.header.eventsPageDescription,
      displayHeader: props.EditHeader.header.displayHeader,

      eventsPageColor: props.PageSettings.page.eventsPageColor,
      amountEventsInRow: props.PageSettings.page.amountEventsInRow,
      eventsButtonColor: props.PageSettings.page.eventsButtonColor,
      ShowHistoricalEvents: props.PageSettings.page.ShowHistoricalEvents,

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


  return (

    <div className="container-fluid ">
      <div className='row'>
        <div className='col-md-2 configurator'>
          <Accordion
            activeKey={props.currentComponent}
            className="accordion_warps"
          >
            <CardComponentConfig
             className="cardName"  
              eventKey={'Page Settings'}
              component={PageSettings} קומפוננטה אחת
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

            {/* <CardComponentConfig eventKey={1} component={ChannelDetails} nameComponent={'ChannelDetails'} />
                <CardComponentConfig eventKey={2} component={AudioDetails} nameComponent={'AudioDetails'} />  */}
          </Accordion>

          <div className="d-flex justify-content-center">
            <button type="submit" className="buttoncreate btn p-2 m-2 ml-2 mr-2"
              onClick={hundalCreate}
            
            >Update</button></div>
        </div>
      </div>
    </div>

  )
}
const mapStateToProps = (state) => {

  return {
    EditHeader: state.editHeader,
    editSubscription: state.editSubscription,
    editFooter: state.editFooter,
    PageSettings: state.PageSettings,
  }
}
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     OnSubmitupdateOrCreateSettings: (settingsObject) => dispatch(actionsStore.updateOrCreateSettings(settingsObject)),
// }
// }

export default connect(mapStateToProps)(ConfiguratorSettings);

