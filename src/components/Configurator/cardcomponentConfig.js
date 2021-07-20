
import { React, useRef } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import { actionsStore } from '../../redux/actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './cardComponentConfig.css';
import footerEventGallary from '../footer/footerEventsGallery'
import scrollToComponent from 'react-scroll-to-component';

function CardComponentConfig(props) {


    //     const myRef = useRef(null)
    //     const executeScroll = () => scrollToRef(myRef)
    //  onClick ={executeScroll}
    // () => scrollToComponent(this.footerEvents, { offset: 0, align: 'button', duration: 1500})
    function ScrollGeneric(idaValue) {
        if (idaValue == '')
            props.changeCurrentComponent('');
        else {
            props.changeCurrentComponent(props.eventKey)
            if (props.eventKey === 'Edit Footer')
                document.getElementById('showFooter').scrollToComponent({ block: "end", behavior: 'smooth' })
            else document.getElementById('showHeader').scrollToComponent({ block: "end", behavior: 'smooth' })
        }
    }
    return (
        <Card className="card">
            <Accordion.Toggle as={Card.Header} eventKey={props.eventKey} style={{ width: "100% !important" }}
                onClick={() => props.currentComponent == props.eventKey ? ScrollGeneric('') : ScrollGeneric((props.eventKey))}

            >

                <div className="d-flex justify-content-between align-items-center" >
                    {/* d-flex flex-row justify-content-between className="col-md-10" className="col-md-2"*/}
                    <div className="cardName"  >
                        {props.eventKey}
                    </div>
                    <div >
                        <FontAwesomeIcon
                            id='angle-right'
                            className={props.eventKey === props.currentComponent ? "rotateArrowIconRight iconGroup" : "rotateArrowIconLeft iconGroup"}
                            icon={['fas', 'angle-right']}
                        ></FontAwesomeIcon>
                    </div>
                </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.eventKey} className="accordion">
                <div className=" WidthCardDiv">
                    <props.component />
                </div>
            </Accordion.Collapse>
        </Card >

    );
}
const mapStateToProps = (state) => {
    return {
        currentComponent: state.site.currentComponent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({


    changeCurrentComponent: (e) => dispatch(actionsStore.setCurrentComponent(e)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CardComponentConfig);


