import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import './registrationForm.css'
import { useHistory } from 'react-router-dom'

function mapStateToProps(state) {

    return {
        events: state.allEvents.events,
    }
}

export default connect(mapStateToProps)(function RegistrationForm(props) {
    const {
        // history,
        events
    } = props;

    const index = window.location.pathname.split('/')[3]
    const history = useHistory();
    const [name, setName] = useState();
    const [mail, setEmail] = useState();
    const [phone, setPhone] = useState();
    function buyTicket() {

        // הפונקציה תיקח את הנתונים של המשתמש ותרשון אותו קקונקט ותויף את מספר המשתתפים לאוותו ארוע
        // דבר שני הפונקציה תוציא למשתמש ברקוד שזה כרטיס כניסה לארוע\
        // הדפסת הברקוד
        history.push("/QR_code")
    }

    return (
        <>
            {/* {events[index].maxParticipants > events[index].maxParticipants.length ? */}
            {events.length != 0 ?
                <>
                    {events[7].maxParticipants > events[7].registrants ?
                    <div className="bodyRegistration">
                        <br></br>
                        <div class="container allPageRegistration">
                            <div className="row">
                                <div className="col-4">
                                    name of event
                                </div>
                                <div className="col-4"> 
                                    <div className="row">
                                        <div className="col">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" className="registrationText">NAME</label>
                                                <input type="email" class="form-control form-controlRegistration" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" className="registrationText">PHONE</label>
                                                <input type="email" class="form-control form-controlRegistration" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1 " className="registrationText">EMAIL</label>
                                                <input type="email" class="form-control form-controlRegistration" id="exampleInputEmail1" placeholder="Enter email" />
                         
                         
                         
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col">
                                    name of event
                                </div> */}

                             <div className="col-4">
                                    <div className="row">
                                        <div className="col">
                                        <label for="eventDate" className="registrationText">EVENT DATE</label>
                                        <select class="form-select  form-controlRegistration" id="eventDate" aria-label="Default select example">
                                            <option selected >Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col-5">
                                            <label for="RegistrationFormNumberTickets"  className="registrationText">NUMBER OF TICKETS</label>
                                            <select class="form-select"  aria-label="Default select example" id="RegistrationFormNumberTickets" >
                                                <option selected>1</option>
                                                <option value="1">2</option>
                                                <option value="2">3</option>
                                                <option value="3">4</option>
                                            </select>
                                        </div>
                                        <div className="col-5">
                                            <br></br>
                                            <p>    Total:</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="form-group">
                                            <br></br>
                                            <button type="button" class="btn btn-secondary btn-lg registrationPaymentButtom" onClick={buyTicket}>payment</button>
                                        </div>

                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                          :
                          <inpu>הכרטיסים אזלו</inpu>

                        // <div>

                        //     <label>
                        //         Name:
                        //         <input type="text" name="name" onChange={(e) => setName(e.target.name)} />
                        //     </label>
                        //     <label>
                        //         phone:
                        //         <input type="password" name="name" onChange={(e) => setPhone(e.target.phone)} />
                        //     </label>
                        //     <label>
                        //         email:
                        //         <input type="text" name="name" onChange={(e) => setEmail(e.target.email)} />
                        //     </label>
                        // </div>

                      



                    }
                </> :
                <></>
            }


        </>
    )
})