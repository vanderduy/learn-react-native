import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native'
import {sty} from './stylesheet'

export default class Tong extends Component{
    constructor(props){
        super(props);
        this.state={
            so1:"",
            so2:"",
            sum:""
        }
    }

    render(){
        return(
            <View>
                <View>
                    <TextInput placeholder='So thu nhat' onChangeText={(a)=>{this.So1(a)}} ></TextInput>
                    <TextInput placeholder='So thu hai' onChangeText={(a)=>{this.So2(a)}}></TextInput>
                    <Button color='blue'
                        title='Tong'
                        onPress={()=>{this.Sum()}} 
                    />
                </View>
                <View style={sty.view} >
                    <Text  style={sty.showKQ}> Tổng là : {this.state.sum}</Text>
                </View>
            </View>
        );
    }

    Sum(){
        fetch('http://192.168.56.1/PostGet/TinhTong.php',{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'SoThuNhat':this.state.so1,
                'SoThuHai':this.state.so2
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                sum:res.kq
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    So1(a){
        this.setState({
            so1: parseInt(a)
        })
    }
    So2(a){
        this.setState({
            so2: a
        })
    }
}