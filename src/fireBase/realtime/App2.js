import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'

import firebaseApp from '../components/FirebaseConfig'

export default class ShowData extends Component{
    constructor(props){
        super(props)
        this.itemRef = firebaseApp.database()
        this.item_ =[] ;
        this.state = {
            src : [],
        }
        // console.log(this.state.src)
    }
    render(){
        return(
            <View>
                <View>
                    <Text>Hello</Text>
                </View>
                <View>
                    <FlatList
                        data={this.state.src}
                        renderItem={({item})=>
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        )
    }
    async listenItem(){
        var items = []
        await this.itemRef.ref('ngay').on('child_added',function(dataSnp){
            items.push({
                name: dataSnp.val(),
                key : dataSnp.key
            })
            this.item_ = items
            console.log('in ref')
        })
        console.log('out ref')
    }
    componentDidMount(){
        this.listenItem();
    }
}