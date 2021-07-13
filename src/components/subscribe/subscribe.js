import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { actionsStore } from '../../redux/actions'
import './subscribe.css'
function mapStateToProps(state) {

    // red #86F3FF
    document.documentElement.style.setProperty('--Button-color', state.pageSettings.page.eventsButtonColor);
    document.documentElement.style.setProperty('--align-text', state.editHeader.header.eventsPageAlignment);
    return {
        pagesettings: state.pageSettings.page,
        headersettings: state.editHeader.header,
        subscribesettings: state.editSubscription.subscribe,
        message: state.allEvents.message,
    }
}
const mapDispatchToProps = (dispatch) => ({
    subscribe: (obj) => dispatch(actionsStore.createSubscribe(obj)),
    systemWave: (res) => dispatch(actionsStore.createSystemWave(res)),
    setMessage: (res) => dispatch(actionsStore.setMessage(res)),
    changeTitleText: (e) => { dispatch(actionsStore.setTitleText(e)) },
    changeBodyText: (e) => { dispatch(actionsStore.setBodyText(e)) }
    // addAllEvents: (events) => dispatch(actionsStore.addAllEvents(events)),
})
export default connect(mapStateToProps, mapDispatchToProps)(function Subscribe(props) {
    const { pagesettings, headersettings, subscribesettings, message, subscribe, systemWave, setMessage } = props;
    const [showing, setShowing] = useState(false);
    const [errorsForm, setErrorsForm] = useState('')
    const [errorsEmail, setErrorsEmail] = useState('')
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [placeHolderEmail, setPlaceHolderEmail] = useState("email");
    const [placeHolderName, setPlaceHolderName] = useState("name");
    const [placeHolderPhone, setPlaceHolderPhone] = useState("phone");
    const [placeHolderAdress, setPlaceHolderAdress] = useState("adress");
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setMessage('')
    };
    const handleShow = () => setShow(true);
    async function beforeSubscribe() {
        debugger
        setErrorsForm('')
        const obj = {
            email: email,
            name: name,
            phone: phone,
            address: adress
        };
        let valid = true
        // subscribe();
        if (subscribesettings.name && name === '') {
            valid = false;
            setErrorsForm(...errorsForm, 'name')

            console.log(errorsForm)
        }
        if (subscribesettings.email && email === '') {
            valid = false;
            console.log(errorsForm)
            setErrorsForm(...errorsForm, 'email')
        }
        if (subscribesettings.phone && phone === '') {
            valid = false;
            console.log(errorsForm)
            setErrorsForm(...errorsForm, 'phone')

        }
        if (subscribesettings.adress && adress === '') {
            valid = false;
            // formIsValid = false;
            // setErrorsForm("name","Cannot be empty")
            // setErrorsForm({...errorsForm, name: 'email',error:"Cannot be empty"})
            console.log(errorsForm)
            setErrorsForm(...errorsForm, 'adress')

        }

        if (valid === false) {
            setErrorsForm('Fill in all the details')
        }
        else {
            if (errorsEmail !== '') {
                valid = false
            }
            else {
                let resSub = await props.subscribe(obj)
                handleShow()
                setShowing(false)
            }


        }
        setPlaceHolderEmail("email");
        setPlaceHolderName("name");
        setPlaceHolderPhone("phone");
        setPlaceHolderAdress("adress");


        console.log(obj)
    }
    function checkEmailValid(e) {
        setEmail(e.target.value)
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/.test(email)) {
            setErrorsEmail('')
        }
        else {
            setErrorsEmail('email not valid')
        }

    }
    return (
        <>
            <div className="row">
                <div>
                    <div className="subscribeDiv">
                        <form>
                            {subscribesettings.name === true ? <input class="form-control form-control-sm " id="name" type="text" placeholder={placeHolderName} onChange={(e) => setName(e.target.value)} /> : <></>}
                            {subscribesettings.email === true ? <input class="form-control form-control-sm " id="emailField" type="text" placeholder={placeHolderEmail} onKeyDown={(e) => checkEmailValid(e)} onChange={(e) => checkEmailValid(e)} /> : <></>}
                            <span style={{ color: "red" }}>{errorsEmail}</span>
                            {subscribesettings.phone === true ? <input class="form-control form-control-sm " id="PhoneField!" type="text" placeholder={placeHolderPhone} onChange={(e) => setPhone(e.target.value)} /> : <></>}
                            {subscribesettings.address === true ? <input class="form-control form-control-sm " id="emailField!" type="text" placeholder={placeHolderAdress} onChange={(e) => setAdress(e.target.value)} /> : <></>}
                            {/* <input type="button" class="form-control subscribeButton" id="subscribeInside" value="subscribe" onClick={()=>beforeSubscribe}></input> */}
                            {/* <button className="btn subscribeButton" id="subscribeInside" onClick={beforeSubscribe}>subscribe</button> */}
                            <input type="button" class="form-control" id="subscribeInside" value="subscribe" onClick={beforeSubscribe}></input>

                            <span style={{ color: "red" }}>{errorsForm}</span>
                        </form>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                {/* <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
                <Modal.Body>
                    {message}
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button >
                Close
            </Button> */}
                    <Button variant="secondary" onClick={handleClose} >Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
})