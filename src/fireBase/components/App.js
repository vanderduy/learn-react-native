import React, {Component} from 'react'
import {
    View,
    Text,
    StackNavigator
} from 'react-native'
import Login from './Login'
import Register from './Register'
import {StackNavigation} from './route'

export default class AppFirebase extends Component{
    render(){
        return(
           <StackNavigation/> 
        )
    }
}
