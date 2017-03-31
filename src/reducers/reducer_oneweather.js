import {ONE_FETCH, FETCH_WEATHER} from '../actions/index';

const INITIAL_STATE = { one: [], forecast: [] };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ONE_FETCH:

            return { ...state, one: action.payload.data }

        case FETCH_WEATHER:
        
            return { ...state, forecast: [action.payload.data, ...state.forecast] }

    }

    return state;
}