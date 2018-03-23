import React, { Component } from 'react';
import {
    Animated,
    View,
    Easing
} from 'react-native'
import smile from '../../picture/smile.png'

export default class DemoGesture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getX: null,
            getY: null,
            left: new Animated.Value(0),
            top: new Animated.Value(0),
        }
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: 'lightblue' }}
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}

                onResponderGrant={this.onTouch.bind(this)}
                onResponderMove={this.onMove.bind(this)}
                onResponderRelease={this.onRelease.bind(this)}
            >
                <Animated.Image
                    source={smile}
                    style={{
                        width: 50, height: 50,
                        marginLeft: this.state.left,
                        marginTop: this.state.top,
                    }}
                />
            </View>
        );
    }

    onTouch(event) {
        const { locationX, locationY } = event.nativeEvent
        this.setState({
            getX: locationX,
            getY: locationY
        })
        // console.log(locationXs + ' ' + locationY)
    }

    onMove(event) {
        //console.log('I am moving')
        const { locationX, locationY } = event.nativeEvent
        this.setState({
            left: new Animated.Value(locationX - this.state.getX),
            top: new Animated.Value(locationY - this.state.getY)
        })
    }

    onRelease(event) {
        // console.log('stop moving')
        const ani1 = Animated.timing(
            this.state.left,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.bounce
            }
        );
        const ani2 = Animated.timing(
            this.state.top,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.bounce
            }
        );
        Animated.parallel([ani1, ani2]).start();
    }
}