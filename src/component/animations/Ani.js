import React, { Component } from 'react';
import {
    Text,
    View,

    StyleSheet,

    Animated,
    Easing
} from 'react-native'

export default class Ani extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move1: new Animated.Value(-700),
            move2: new Animated.Value(-700),
            color1: new Animated.Value(0),
            trans: new Animated.Value(0),
        }
    }

    componentDidMount() {
        const ani1 = Animated.timing(
            this.state.move1,
            {
                toValue: 0,
                duration: 2000,
                easing: Easing.bounce
            }
        );
        const ani2 = Animated.timing(
            this.state.move2,
            {
                toValue: 0,
                duration: 2000,
                easing: Easing.bounce
            }
        );
        const aniColor1 = Animated.timing(
            this.state.color1,
            {
                toValue: 1,
                duration: 2000,
            }
        );
        const aniColor2 = Animated.timing(
            this.state.color1,
            {
                toValue: 0,
                duration: 2000,
            }
        );
        const trans1 = Animated.timing(
            this.state.trans,
            {
                toValue: 1,
                duration: 2000,
            }
        );
        const trans2 = Animated.timing(
            this.state.trans,
            {
                toValue: 0,
                duration: 2000,
            }
        );
        Animated.stagger(200, [ani1, ani2]).start();
        Animated.loop(Animated.sequence([aniColor1, aniColor2])).start();
        Animated.loop(Animated.sequence([trans1, trans2])).start();
    }

    render() {
        //const opacity = this.state.move;
        
        const marginLeft1 = this.state.move1;
        const marginLeft2 = this.state.move2;
        const backgroundColor = this.state.color1.interpolate({
            inputRange: [0, 1],
            outputRange: ['blue', 'yellow']
        });
        const trans = this.state.trans.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['15deg', '0deg', '-15deg']
        })

        return (
            <View style={sty.container}>
                <Animated.View style={{
                    width: 100,
                    height: 100,
                    backgroundColor,
                    //opacity
                    marginLeft: marginLeft1,
                    marginBottom: 20,
                    transform: [
                        { rotate: trans },
                    ],

                    // ...this.props.style
                }} >
                    <Text style={sty.text}>good</Text>
                </Animated.View>

                <Animated.View style={{
                    width: 100,
                    height: 100,
                    backgroundColor,
                    //opacity
                    marginLeft: marginLeft2,
                    transform: [
                        { rotate: trans },
                    ],

                    // ...this.props.style
                }} >

                    <Text style={sty.text}>luck</Text>


                </Animated.View>
            </View>
        );
    }
}

const sty = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightyellow'
    },
    ani: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        //opacity: opacity
    },
    text: {
        fontSize: 30,
        color: 'red',
        marginTop: 23,
        marginLeft: 20,
    },
})