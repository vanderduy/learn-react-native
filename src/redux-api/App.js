import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import {Provider} from 'react-redux'
import store from './configStore'
import Employee from './components/employee'

export default class ReduxApi extends Component{
    render(){
        return(
            <Provider store={store} >
                <View style={{flex:1}} >
                    <Employee/>
                </View>
            </Provider>
        )
    }
}