import { combineReducers } from 'redux'
import AnswerReducer from './reducers-answers'
import SourceData from './reducers-source'
import MetaData from './reducers-meta'

export const allReducers = combineReducers({
    answers: AnswerReducer,
    source: SourceData,
    meta: MetaData
})