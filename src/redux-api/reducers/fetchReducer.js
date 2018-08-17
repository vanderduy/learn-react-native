import {FETCH_OK,FETCH_FAIL,FETCHING} from '../actions/types'

const DEFAULT_STATE ={
    data:[],
    isFetching:false,
    dataFetched:false,
    error:false
}

export default (state = DEFAULT_STATE,action)=>{
    switch (action.type){
        case FETCHING:
            return{
                ...state,
                isFetching:true,
                data:[]
            }
        case FETCH_OK:
            return{
                ...state,
                dataFetched: true,
                data : action.payload,
                isFetching : false
            };
        case FETCH_FAIL:
            return{
                ...state,
                isFetching:false,
                error:true
            }
        default:
            return state
    }
}