import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native'


export default class User extends Component{
    ComeBack(){
        this.props.navigation.goBack()
    }
    render(){
        return(
            <View>
                <Text>USER</Text>
                <Text>{this.props.navigation.state.params.thamSo}</Text>
                <Button title={'back'} onPress={()=>{this.ComeBack()}}/>
            </View>
        );
    }
}