import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'
import {fetchData} from '../actions/fetchAction'

class Employee extends Component{
    render(){
        {console.log(this.props)}
        return(
            <View style={styles.container} >
                <TouchableOpacity 
                    onPress={()=>this.props.fetchData()}
                    style={styles.button} 
                >
                    <Text>
                        Click me !!!
                    </Text>
                </TouchableOpacity>
                <View style={styles.content} >
                    {this.props.data.isFetching===true && <Text>Loading...</Text> }
                    {
                        // if (true){}else{}
                        this.props.data.data.length? (
                            this.props.data.data.map((item,i)=>{
                                return (
                                    <View key = {i} >
                                        <Text>
                                            name : {item.name} - {item.edu}
                                        </Text>
                                    </View>
                                )
                            })
                        ): null
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    },
    button :{
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
        margin: 30,
        backgroundColor : 'aqua',
        borderRadius : 10
    },
    content:{

    }
})

const mapStateToProps = (state)=>{
    return{
        data : state.fetch
    }
}

export default connect(mapStateToProps,{fetchData})(Employee)