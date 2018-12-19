import { createStore } from 'redux'
import takePhoto from './Reducers/photoReducer'

export default createStore(takePhoto)