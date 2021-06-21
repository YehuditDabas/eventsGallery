import createReducer from '../reducerUtils';
import produce from 'immer';

const initialState = {
    page: {
        eventsPageColor: "",
        eventsButtonColor: "",
        amountEventsInRow: "",
        eventsButtonColor: "",
        WatchPreviousEvents: "",
        eventsPagButton: ""
    }


};

const configImage = {
    initialChannelSettingsConfiguration(state, action) {
        //todo: 
        state.editGrid = action.payload.editGrid;
        state.showInPage = action.payload.showInPage;
        state.columns = action.payload.columns;
        state.mainColor = action.payload.mainColor;
        state.buttonStyle = action.payload.buttonStyle;


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
    addAllSettings(state, action) {
        state.page.amountEventsInRow = action.payload.settings.amountEventsInRow
        state.page.eventsPageColor = action.payload.settings.eventsPageColor
        state.page.eventsButtonColor = action.payload.settings.eventsButtonColor
        state.page.WatchPreviousEvents=action.payload.settings.watchPreviousEvents

        console.log(" page settings  "+ state.page.amountEventsInRow)
    }
};

export default produce((state, action) => createReducer(state, action, configImage), initialState);
