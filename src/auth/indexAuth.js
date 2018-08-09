import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import firebase from 'firebase'

import {Header } from './component/common'
import LoginForm from './component/LoginForm'

export default class indexAuth extends Component{
    componentWillMount(){
        firebase.initializeApp(
            {     
                apiKey : 'AIzaSyAVaOE22pD5ILN3FUwTeS6Dlx_d2FRCRtE' ,     
                authDomain : ' authfirebase-5691d.firebaseapp.com ' ,     
                databaseURL : ' https://authfirebase-5691d.firebaseio.com ' ,     
                projectId : ' authfirebase-5691d ' ,     
                storageBucket : ' authfirebase-5691d.appspot.com ' ,     
                messagingSenderId :'343464549248' 
            }
        )
    }

    render(){
        return(
            <View>
                <Header headerText='abc' />
                <LoginForm/>
            </View>
        )
    }
}