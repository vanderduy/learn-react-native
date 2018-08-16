import React, { Component} from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

export default class Fetch extends Component{
    constructor(props){
        super(props)
        this.state={
            data : []
        }
    }

    componentWillMount(){
        this.fetchData();
    }

    render(){
        return(
            <View  style={styles.container} >
                <FlatList
                    data ={this.state.data}
                    renderItem={({item})=>{
                        return(<Text style={{fontSize:20}} >{item.name.first} {item.name.last}</Text>)
                    }}
                />
            </View>
        )
    }
    async fetchData(){
        const response = await fetch('https://randomuser.me/api?results=100')
        const json = await response.json()
        console.log('json'+json)
        console.log('data1'+this.state.data)
        this.setState({
            data: json.results
        })
        console.log('data2'+this.state.data)
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    }
});