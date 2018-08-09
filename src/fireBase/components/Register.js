import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'

import firebaseApp from '../components/FirebaseConfig.js'

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:'center'}} >
                <Text style={{color:'blue', fontSize:40}} >mang hinh Register</Text>
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
                        style={{backgroundColor:'green'}} 
                        onPress={()=>{this.DangKy()}}
                    >
                        <Text>Dong y dang ky</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    DangKy(){
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            Alert.alert(
                'Alert Title',
                'Dang ky thanh cong : ' + this.state.email,
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => this.goToLogin()},
                ],
                { cancelable: false }
              )
            this.setState({
                email:'',
                password:''
            })
        })
        .catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
            Alert.alert('dang ky that bai')
        });
    }

    goToLogin(){
        this.props.navigation.navigate('Login',{})
    }
}