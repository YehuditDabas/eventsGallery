import createReducer from '../reducerUtils';
import produce from 'immer';

const initialState = {
    page: {
        eventsPageColor: "",
        amountEventsInRow: "",
        eventsButtonColor:""
    }

    // Watch previous events:"",
    // eventsPagButton:""
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
        state.showInPage = action.payload;
    },

    setMainColor(state, action) {
        state.mainColor = action.payload;
    },
    setButtonStyle(state, action) {
        state.buttonStyle = action.payload;
    },
    setShowCounterViews(state, action) {
        state.showCounterViews = action.payload;
    },
    addAllSettings(state, action) {
        state.page.amountEventsInRow = action.payload.settings.amountEventsInRow
        state.page.eventsPageColor = action.payload.settings.eventsPageColor
        state.page.eventsButtonColor = action.payload.settings.eventsButtonColor

    }
};

export default produce((state, action) => createReducer(state, action, configImage), initialState);