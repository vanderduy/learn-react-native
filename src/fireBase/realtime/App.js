import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import firebaseApp from '../components/FirebaseConfig'

export default class Realtime extends Component{
    constructor(props){
        super(props)
        this.itemRef = firebaseApp.database()
    }
    render(){
        return(
            <View>
                <TouchableOpacity
                    onPress={()=>{this.addBySet()}}
                >
                    <Text
                        style={{fontSize:30}}
                    >add item by set</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{this.addByPush()}}
                >
                    <Text
                        style={{fontSize:30}}
                    >add item by push</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{this.show()}}
                >
                    <Text
                        style={{fontSize:30}}
                    >show item</Text>
                </TouchableOpacity>
            </View>
        )
    }

    addBySet(){
        // this.itemRef.ref('Khoa hoc')
        this.itemRef.ref('Khoa hoc').set({
            RN :{
                ngay : '20/3'
            },
            RJ : {
                ngay : '16/09'
            }
        })
    }
    addByPush(){
        this.itemRef.ref('Khoa hoc 2').push({
            RN :{
                ngay : 'sap khai giang'
            },
            RJ : {
                ngay : 'da khia giang'
            }
        })
    }
    show(){
        // this.itemRef.ref('Khoa hoc').child('RN').child('ngay').on('value',function(snp){
        this.itemRef.ref('Khoa hoc').child('RN').child('ngay').once('value',function(snp){    
            alert(snp.val())
        })
    }
}
