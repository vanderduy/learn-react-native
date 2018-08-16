import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Button
} from 'react-native'

export default class Acc extends Component{
    constructor(props){
        super(props);
        this.state={
            username1 :'',
            pass1 : '',
            username2 :'',
            pass2:'',
            showKQ1:'',
            showKQ2:''
        }        
    }  

    render(){
        return(
            <View style={sty._1flex}>
                <View style={sty._1flex}>
                    <TextInput placeholder={'Username'} onChangeText={(a)=>{this.ChangeUsername1(a)}} />
                    <TextInput placeholder={'Password'} onChangeText={(a)=>{this.ChangePass1(a)}} />
                    <Button
                        title={'Login'}
                        onPress={()=>{this.Login()}}
                    />
                    <Text style={{fontSize:25,color:'red'}} >ket qua  : {this.state.showKQ1}</Text>
                </View>
                <View style={sty._1flex}>
                    <TextInput placeholder={'Username'} onChangeText={(a)=>{this.ChangeUsername2(a)}}/>
                    <TextInput placeholder={'Password'} onChangeText={(a)=>{this.ChangePass2(a)}}/>
                    <Button
                        title={'Insert'}
                        onPress={()=>{this.Insert()}}
                    />
                    <Text style={{fontSize:25,color:'red'}} >ket qua  : {this.state.showKQ2}</Text>
                </View>
               
            </View>

        );
    }

    Login(){
        fetch('http://192.168.56.1/PostGet2/Login.php',{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'ten1':this.state.username1,
                'mk1':this.state.pass1
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.kq1 == 1){
                this.setState({
                    showKQ1:'Ten dang nhap khong ton tai'
                })
            }
            else if(res.kq1 == 2){
                this.setState({
                    showKQ1:'Mat khau khong dung'
                })
            }
            else{
                this.setState({
                    showKQ1:'dang nhap thanh cong'
                })
            }
        })
        .catch((err)=>{
            // console.log(err)
        })
    }

    Insert(){
        fetch('http://192.168.56.1/PostGet2/Insert.php',{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'ten2':this.state.username2,
                'mk2':this.state.pass2
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.kq2 == 1){
                this.setState({
                    showKQ2:'Insert success'
                })
            }
            else{
                this.setState({
                    showKQ2:'Insert FAILD'
                })
            }
        })
        .catch((err)=>{
            // console.log(err)
        })
       
    }

    ChangeUsername1(a){
        this.setState({
            username1:a
        })
    }

    ChangeUsername2(a){
        this.setState({
            username2:a
        })
    }

    ChangePass1(a){
        this.setState({
            pass1:a
        })
    }

    ChangePass2(a){
        this.setState({
            pass2:a
        })
    }
}


const sty = StyleSheet.create({
    _1flex:{
        flex:1
    }
})