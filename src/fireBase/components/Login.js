import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'

import firebaseApp from './FirebaseConfig'

export default class Login extends Component{
    constructor(prop){
        super(prop);
        this.state={
            email:'',
            password:''
        }
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:'center'}} >
                <Text style={{color:'blue', fontSize:40}} >mang hinh Login</Text>
                <TextInput
                    style={{height:40,borderColor:'gray',borderWidth:1}}
                    onChangeText={(email_)=>this.setState({email :email_})}
                    value={this.state.email}
                />
                <TextInput
                    style={{height:40,borderColor:'gray',borderWidth:1}}
                    onChangeText={(pass)=>this.setState({password :pass})}
                    value={this.state.password}
                    secureTextEntry={true}
                />           
                <View style={{flexDirection:'row',justifyContent:'center'}} >
                    <TouchableOpacity 
                        style={{backgroundColor:'yellow'}} 
                        onPress={()=>{this.DangNhap()}}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor:'green'}} 
                        onPress={()=>{this.goToRegister()}}
                    >
                        <Text>Registor</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    goToRegister(){
        this.props.navigation.navigate('Register_',{})
    }

    DangNhap(){
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(
            Alert.alert(
                'Alert Title',
                'Dang nhap thanh cong : ' + this.state.email,
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => this.props.navigation.navigate('LoginSuccess',{})}
                ],
                { cancelable: false }
              )
        )
        .catch(function(error) {
            // Handle Errors here.
            //var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
            Alert.alert('dang nhap that bat')
        })
    }
}