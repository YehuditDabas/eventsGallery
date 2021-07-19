import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import './registrationForm.css'

function mapStateToProps(state) {

    return {
        events: state.allEvents.events,
    }
}

export default connect(mapStateToProps)(function RegistrationForm(props) {
    const { events } = props;

    const index = window.location.pathname.split('/')[3]

    const [name, setName] = useState();
    const [mail, setEmail] = useState();
    const [phone, setPhone] = useState();

    return (
        <>
            {/* {events[index].maxParticipants > events[index].maxParticipants.length ? */}
            {events.length != 0 ?
                <>
                    {events[7].maxParticipants > events[7].registrants ?
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    name of event
                                </div>
                                <div class="col">
                                    <div className="row">
                                        <div className="col">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">ENTER EMAIL</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">enter address</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">enter Phone</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="row">
                                        <label for="eventDate">EVENT DATE</label>
                                        <select class="form-select" id="eventDate" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label for="RegistrationFormNumberTickets">NUMBER OF TICKETS</label>
                                            <select class="form-select" id="RegistrationFormNumberTickets" aria-label="Default select example" >
                                                <option selected>1</option>
                                                <option value="1">2</option>
                                                <option value="2">3</option>
                                                <option value="3">4</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <br></br>
                                            <span>PRICE</span>


                                        </div>

                                    </div>
                                    <div className="row">
                                        <br></br>
                                        
                                        <button type="button" class="btn btn-info">payment</button>
                                    </div>
                                </div>
                            </div>
                        </div>

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

                        :
                        <inpu>הכרטיסים אזלו</inpu>



                    }
                </> :
                <></>
            }


        </>
    )
})