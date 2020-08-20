import { combineReducers } from 'redux'
import AnswerReducer from './reducers-answers'
import SourceData from './reducers-source'

export const allReducers = combineReducers({
    answers: AnswerReducer,
    source: SourceData
})