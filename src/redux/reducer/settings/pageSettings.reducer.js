import createReducer from '../reducerUtils';
import produce from 'immer';
import EventPageSetings from '../../../models/eventsPageSettngs'

const initialState = {
    page: EventPageSetings
    // Watch previous events:"",
    
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
      
        state.page.amountEventsInRow = action.payload.settings.amountEventsInRow
        state.page.eventsPageColor = action.payload.settings.eventsPageColor
        state.page.eventsButtonColor = action.payload.settings.eventsButtonColor;
        state.page.ShowHistoricalEvents = action.payload.settings.ShowHistoricalEvents;

        console.log(" page settings  "+ state.page.amountEventsInRow)
    }
};

export default produce((state, action) => createReducer(state, action, configImage), initialState);
