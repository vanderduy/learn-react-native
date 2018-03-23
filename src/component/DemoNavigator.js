import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native'
import {Tabbar} from './Router'

export default class DemoNavigator extends Component{
    render(){
        return(
            <Tabbar/>
        );
    }
}
