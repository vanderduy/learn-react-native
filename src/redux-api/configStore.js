import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk' 

const store = createStore(
    //reducers
    reducers,
    //preloadState
    {},
    //middleWare
    applyMiddleware(thunk)
)

export default store