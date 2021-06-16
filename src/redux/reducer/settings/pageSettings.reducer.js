import createReducer from '../reducerUtils';
import produce from 'immer';

const initialState = {
    page: {
        eventsPageColor: "",
        eventsButtonColor: "",
        amountEventsInRow: "",
        ShowHistoricalEvents: true
    }

    // Watch previous events:"",
    // eventsPagButton:""
};

const configImage = {
    initialChannelSettingsConfiguration(state, action) {
        //todo: 
        // state.showInPage = action.payload.showInPage;
        // state.mainColor = action.payload.mainColor;
        // state.buttonStyle = action.payload.buttonStyle;

    },
    setShowInPage(state, action) {
        state.page.amountEventsInRow = action.payload;
    },

    setMainColor(state, action) {
        state.page.eventsPageColor = action.payload;
    },
    setButtonStyle(state, action) {
        state.page.eventsButtonColor = action.payload;
    },
    setShowHistoricalEvents(state, action) {
        state.page.ShowHistoricalEvents = action.payload;
    },
    // setShowCounterViews(state, action) {
    //     state.showCounterViews = action.payload;
    // },
    addAllSettings(state, action) {
        debugger
        state.page.amountEventsInRow = action.payload.settings.amountEventsInRow
        state.page.eventsPageColor = action.payload.settings.eventsPageColor
        state.page.eventsButtonColor = action.payload.settings.eventsButtonColor;
        state.page.ShowHistoricalEvents = action.payload.settings.ShowHistoricalEvents;

        console.log(" page settings  "+ state.page.amountEventsInRow)
    }
};

export default produce((state, action) => createReducer(state, action, configImage), initialState);
// ShowHistoricalEvents: false
// address: true
// amountEventsInRow: 4
// displayHeader: true
// email: true
// eventsButtonColor: "#ff62b2"
// eventsPageAlignment: "center"
// eventsPageColor: "#faee3a"
// eventsPageDescription: "kkkkkkkkkkkkkkkkkkkkkk"
// eventsPageImageOrVideo: ""
// eventsPageLogo: "Leader"
// eventsPageTitle: "עעעעעעעעעע"
// facebook: false
// facebookLink: ""
// instagram: false
// name: true
// phone: true
// twitter: false
// twitterLink: ""
// user: "60ab67b52f89053239eb0e7f"
// watchPreviousEvents: true
// youtube: false
// youtubeLink: ""
// __v: 1
// _id: "60b4819ba27f4f855d46109e"