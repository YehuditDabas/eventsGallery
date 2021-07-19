import React, { useState, useEffect } from 'react'
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
    const [numFileds, setNumFileds] = useState(1)
    const [widthFiled, setWidthFiled] = useState()
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
            let emptyField = document.getElementById('nameField')
            emptyField.classList.add('errorBorder')
            console.log(errorsForm)
        }
        if (subscribesettings.email && email === '') {
            valid = false;
            let emptyField = document.getElementById('emailField')
            emptyField.classList.add('errorBorder')
            setErrorsForm(...errorsForm, 'email')
        }
        if (subscribesettings.phone && phone === '') {
            valid = false;
            let emptyField = document.getElementById('PhoneField')
            emptyField.classList.add('errorBorder')
            setErrorsForm(...errorsForm, 'phone')

        }
        if (subscribesettings.address && adress === '') {
            valid = false;
            let emptyField = document.getElementById('addressField')
            emptyField.classList.add('errorBorder')
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
                // document.documentElement.style.setProperty('--border-color', 'red');
            }
            else {

                let resSub = await props.subscribe(obj)
                handleShow()
                setShowing(false)
                document.getElementById("formSub").reset();
                
            }


        }



        console.log(obj)
    }
    function checkEmailValid(e) {
        debugger
        setEmail(e.target.value)
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/.test(email)) {
            setErrorsEmail('')
            // document.documentElement.style.setProperty('--border-color', '#ACAFBB');
            e.target.classList.remove("errorBorder");

        }
        else {
            setErrorsEmail('email not valid')
            // document.documentElement.style.setProperty('--border-color', 'red'); 
            e.target.classList.add("errorBorder");
        }

    }
    function changeWidth(e) {
        let num = numFileds
        num = 90 / num - 2
        document.documentElement.style.setProperty('--filed-width-Min', `${num}%`);
        num = 100 / num - 2 + 10
        document.documentElement.style.setProperty('--filed-width-Max', `${num}%`);
    }
    function changeName(e) {
        setName(e.target.value)
        e.target.classList.remove('errorBorder')
    }
    function changePhone(e) {
        setPhone(e.target.value)
        e.target.classList.remove('errorBorder')
    }
    function changeAddress(e) {
        setAdress(e.target.value)
        e.target.classList.remove('errorBorder')
    }
    useEffect(() => {
        if (pagesettings.user !== '') {
            debugger
            let num = 1
            if (subscribesettings.name === true) {
                num++
                console.log("kkkk", numFileds)
            }
            if (subscribesettings.email) {
                num++
            }
            if (subscribesettings.phone) {
                num++
            }
            if (subscribesettings.address) {
                num++
            }
            let width = (100 / num) - 2
            document.documentElement.style.setProperty('--filed-width', `${width}%`);
            setNumFileds(num)
            setWidthFiled(width)

        }
    }, [subscribesettings])
    return (
        <>
            <div className="row">
                <form id="formSub">
                    {subscribesettings.name === true ? <input className="form-control form-control-sm form-controlSub" id="nameField" type="text" placeholder={placeHolderName} onChange={(e) => changeName(e)} onFocus={(e) => changeWidth(e)} /> : <></>}
                    {subscribesettings.email === true ? <input className="form-control form-control-sm form-controlSub" id="emailField" type="text" placeholder={placeHolderEmail} onKeyDown={(e) => checkEmailValid(e)} onChange={(e) => checkEmailValid(e)} onFocus={changeWidth} /> : <></>}
                    {/* <span style={{ color: "red" }}>{errorsEmail}</span> */}
                    {subscribesettings.phone === true ? <input className="form-control form-control-sm form-controlSub" id="PhoneField" type="text" placeholder={placeHolderPhone} onChange={(e) => changePhone(e)} onFocus={changeWidth} /> : <></>}
                    {subscribesettings.address === true ? <input className="form-control form-control-sm form-controlSub" id="addressField" type="text" placeholder={placeHolderAdress} onChange={(e) => changeAddress(e)} onFocus={changeWidth} /> : <></>}
                    <input type="button" className="form-control form-controlSub" id="subscribeInside" value="subscribe" onClick={beforeSubscribe}></input>
                    {/* <span style={{ color: "red" }}>{errorsForm}</span> */}
                </form>
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