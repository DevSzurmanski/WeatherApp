import {combineReducers} from 'redux';
import OneDayRed from './reducer_oneweather';

const rootReducer = combineReducers({onedayres: OneDayRed});

export default rootReducer;
