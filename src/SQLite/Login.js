import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Button
} from 'react-native'
let SQLite = require('react-native-sqlite-storage')
let db = SQLite.openDatabase({name:'test1.db' ,createFromLocation:'~data.db'},this.openCB, this.errorCB)

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username1 :'',
            pass1 : '',
            username2 :'',
            pass2:'',
        }
        
    }  

    render(){
        return(
            <View style={sty._1flex}>
                <View style={sty._1flex}>
                    <TextInput placeholder={'Username'} onChangeText={(a)=>{this.ChangeUsername1(a)}} />
                    <TextInput placeholder={'Password'} onChangeText={(a)=>{this.ChangePass1(a)}} />
                    <Button
                        title={'Submit'}
                        onPress={()=>{this.Submit()}}
                    />
                </View>
                <View style={sty._1flex}>
                    <TextInput placeholder={'Username'} onChangeText={(a)=>{this.ChangeUsername2(a)}}/>
                    <TextInput placeholder={'Password'} onChangeText={(a)=>{this.ChangePass2(a)}}/>
                    <Button
                        title={'Insert'}
                        onPress={()=>{this.Insert()}}
                    />
                </View>
            </View>

        );
    }
    errorCB(err) {
        // console.log("SQL Error: " + err);
    }
    openCB() {
        // console.log("Database OPENED");
    }

    Submit(){
        db.transaction((tx)=>{
            var sql = 'SELECT * FROM acc WHERE username=\'' +this.state.username1 + '\''
            tx.executeSql(sql,[],(tx,results)=>{
                var len = results.rows.length
                if(len== 0 ){
                   // ToastAndroid.show('tai khoan ko ton tai',ToastAndroid.SHORT) 
                   alert('tai khoan khong ton tai')
                }
                else{
                   // ToastAndroid.show('tai khoan ko ton tai',ToastAndroid.SHORT) 
                    var pass = results.rows.item(0)
                    if(pass.Field2 == this.state.pass1){
                        alert('login success')
                    }
                    else {
                        alert('pass is not found')
                    }
                }
            })
        })
        // console.log("Query completed");
        
    }

    Insert(){
        
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