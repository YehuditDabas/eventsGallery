// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux'
// import { actionsStore } from '../../../../redux/actions'


// function mapStateToProps(state) {
//     return {
//         // events: state.allEvents.events,
//         // mainColor: state.pageSettings.page.eventsPageColor,
//         // eventsButtonColor: state.pageSettings.page.eventsButtonColor,
//         // eventsPageTitle: state.editHeader.header.eventsPageTitle
//     }
// }
// const mapDispatchToProps = (dispatch) => ({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(function EventDetailsMobile(props) {

//     const index = window.location.pathname.split('/')[3]
  
//     let history = useHistory();
//     const responsive = {
//         superLargeDesktop: {
//             // the naming can be any, depends on you.
//             breakpoint: { max: 4000, min: 3000 },
//             items: 4
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 4
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 4
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 3
//         }
//     };
   
   
   
   
//     return (
//         <>
//                 <div className="container-fluid mobileDetailsEvent">
//                     <div className="row mobileEventDetailsHeader mobileCreatEvnt">
//                         <svg onClick={() => history.goBack()} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-left mobilebi-chevron-left" viewBox="0 0 16 16">
//                             <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
//                         </svg>
//                         <span className="mobileEventDetaileName">{eventsPageTitle}</span>
//                     </div>
//                     <div className="row mobileEventImageDiv">
//                         <img className="mobileEventImage" src={events[index].image}></img>
//                     </div>
//                     <div className="row">
//                         <h1 className="mobileEventTitle">{events[index].title}</h1>
//                     </div>
//                     <div className="row">
//                         <div className="mobileEventPriceArea">
//                             <span className="mobileEventPrice">{events[index].price === undefined ? 'Free' : events[index].price}</span>
//                         </div>
//                     </div>
//                     <div className="row rowTimeMobile">
//                         <div className="col-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clock mobileBi-clock" viewBox="0 0 16 16">
//                                 <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
//                                 <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
//                             </svg>
//                         </div>
//                         <div className="col-10">
//                             <span className="mobileEventTime"> {day()} | {month()}</span>
//                             <span className="mobileEventTime"> {hour()}</span>
//                         </div>
//                     </div>
//                     <div className="row rowTimeMobile">
//                         <div className="col-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt mobileBi-geo-alt" viewBox="0 0 16 16">
//                             <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
//                             <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
//                         </svg></div>
//                         <div className="col-10">
//                             <span className="mobileEventTime">{events[index].place}</span>
//                         </div>
//                     </div>
//                     <div className="row rowTimeMobile">
//                         <div className="col-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person mobileBi-person" viewBox="0 0 16 16">
//                             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
//                         </svg></div>
//                         <div className="col-10">
//                             <span className="mobileEventTime">{events[index].participants[0]}Participants</span>
//                         </div>
//                     </div>
//                     <div className="row rowAboutEventMobile">
//                         <h1 className="mobileAboutHeader">About The Event</h1>
//                         <span className="mobileAboutText">{events[index].description}</span>
//                     </div>
//                     <button className="mobileButtonTickets">TICKETS</button>
//                     <div class="mobileMoreEvents">
//                         <h1 className="mobileMoreEventsTitle">more events on {month().slice(3, 15)}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right mobileBi-chevron-right" viewBox="0 0 16 16">
//                             <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
//                         </svg></h1>
//                         <div className="row">
//                             {moreEvents ?
//                                 <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
//                                     {
//                                         moreEvents && moreEvents.map((item, index) => {

//                                             return (
//                                                 <div className="col-11 video" key={index}  >
//                                                     <MiniEventMobile img={item.image} title={item.title} mainColor={mainColor}></MiniEventMobile>
//                                                 </div>
//                                             )
//                                         }
//                                         )
//                                     }
//                                 </Carousel>
//                                 : ""}
//                         </div>
//                     </div>

//                 </div>
          
//         </>
//     )
// })




