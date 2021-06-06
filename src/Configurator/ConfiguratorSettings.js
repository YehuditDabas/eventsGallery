import ChannelSettings from './channlSettings.config'
import EditHeader from './EditHeader.config'
import CardComponentConfig from './cardcomponentConfig'
import {Card ,Accordion}from 'react-bootstrap'
import EditSubscription from './editSubscribtion.config'
function ConfiguratorSettings (props){
return(


<Accordion
        activeKey={props.currentComponent}
        className="text-left"
      >
        <CardComponentConfig
          eventKey={'Channel Settings'}
          component={ChannelSettings}קומפוננטה אחת
        />
        <CardComponentConfig
          eventKey={'Edit Header'}
          component={EditHeader}קומפוננטה שניה 
        />
        <CardComponentConfig
          className="PositionA"
          // eventKey={3}
          // <CardComponentConfig
          eventKey={'Edit Subscription'}
          component={EditSubscription}קומפוננטה שלישית
        /> 

         {/* <CardComponentConfig eventKey={1} component={ChannelDetails} nameComponent={'ChannelDetails'} />
                <CardComponentConfig eventKey={2} component={AudioDetails} nameComponent={'AudioDetails'} />  */}
      </Accordion> 

)
}
export default ConfiguratorSettings;