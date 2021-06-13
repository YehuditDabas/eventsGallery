import pageSettings from './pageSettings.config'
import EditHeader from './EditHeader.config'
import CardComponentConfig from './cardcomponentConfig'
import { Card, Accordion } from 'react-bootstrap'
import EditSubscription from './editSubscribtion.config'
import EditFooter from './EditFooter.config'

import './cardComponentConfig.css';
import { connect } from 'react-redux'
function ConfiguratorSettings(props) {
  return (

    <div className="container-fluid ">
      <div className='row'>
        <div className='col-md-2 configurator'>
          <Accordion
            activeKey={props.currentComponent}
            className="accordion_warps"
          >
            <CardComponentConfig
              eventKey={'Page Settings'}
              component={pageSettings} קומפוננטה אחת
            />
            <CardComponentConfig
              eventKey={'Edit Header'}
              component={EditHeader} קומפוננטה שניה
            />
            <CardComponentConfig
              className="PositionA"
              // eventKey={3}
              eventKey={'Edit Subscription'}
              component={EditSubscription} קומפוננטה שלישית
            />
            <CardComponentConfig
          // className="PositionA"      
          eventKey={'Edit Footer'}
          component={EditFooter}קומפוננטה שלישית
        />

            {/* <CardComponentConfig eventKey={1} component={ChannelDetails} nameComponent={'ChannelDetails'} />
                <CardComponentConfig eventKey={2} component={AudioDetails} nameComponent={'AudioDetails'} />  */}
          </Accordion>

          <div className="d-flex justify-content-center">
            <button type="button" className="buttoncreate btn p-2 m-2 ml-2 mr-2">Create</button></div>
        </div>
      </div>

    </div>

  )
}
export default ConfiguratorSettings;

// const mapStateToProps=(state)=>{

// return{
//   EditHeader:state.editHeader,

// }

// }
// const mapStateToProps = (state) => {
//   return {
//       editHeader: state.editHeader
//   }
// }