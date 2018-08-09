import React, { Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import {createStore , combineReducers, applyMiddleware} from 'redux'

//state
let appState={
    number:  1,
    errMsg:''
} 

//action
const add = {
    type:'ADD',
    value : 1
}

const sub ={
    type: 'SUB',
    value : -1
}

//reducer
const numberReducer = (state_ = appState, action_)=>{
    switch (action_.type){
        case 'ADD':
        //immutable state
            state_ = {
                ...state_,
                number : state_.number + action_.value
            }
            break
        case 'SUB':
            state_ = {
                ...state_,
                number : state_.number - action_.value
            }
            break
    }

    return state_
}

const errReducer = (state =appState ,action)=>{
    switch(action.type){
        case 'LESS_THAN_0' :
            state = {
                ...state,
                errMsg:'number can not be less than zero'
            }
            break
        case 'MORE_THAN_10' :
            state ={
                ...state,
                //number : state.number,
                errMSG:'number can not be more than 10'
            }
            break
    }
    return state
}

//middleware
const checkIsMoreThan10 = store => next => action=>{
    if(action.type === 'ADD'){
        if(action.value + store.getState().number.number > 10) next({type:'MORE_THAN_10'})
        else next(action)
    } else next(action)
}

const checkIsLessThan0 = store => next=> action=>{
    //console.log('check: ' , store.getState().number)
    if(action.type === 'SUB'){
        if(action.value > store.getState().number.number) next({type:'LESS_THAN_0'})
        else next(action)
    } else next(action)
}

//store
//const store = createStore(numberReducer,appState)
const store = createStore(
    combineReducers({
        number: numberReducer,
        err: errReducer
    }),
    applyMiddleware(checkIsMoreThan10,checkIsLessThan0)
)



//test
store.subscribe(()=>{
    console.log('state update : ' , store.getState())
})
// store.dispatch(add)
// store.dispatch({
//     type : 'ADD',
//     value:2
// })

const addNumber = (num)=>{
    return {
        type:'ADD',
        value : num
    }
}

const subNumber = (num)=>{
    return{
        type:'SUB',
        value:num
    }
}

store.dispatch(addNumber(18))
store.dispatch(addNumber(5))
store.dispatch(subNumber(2))

store.subscribe(()=>{
    console.log('state update : ' , store.getState())
})


export default class Test1 extends Component{
   render(){
       return(
           <View>
               <Text> test redux </Text>
           </View>
       )
   }
}