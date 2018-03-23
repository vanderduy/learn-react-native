import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native'

var a=3

export default class Home extends Component{
    GoToUser(){
        this.props.navigation.navigate('User',{thamSo:a})
    }



    render(){
        return(
            <View style={{flex:1}}>
                <Text>HOME</Text>
                <Button title='go to user' onPress={()=>{this.GoToUser()}}/>
            </View>
        );
    }
}