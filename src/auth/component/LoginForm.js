import React , {Component} from 'react'
import {
    View,
    TextInput
} from 'react-native'

import {Button, Card, CardSection} from './common'

export default class LoginForm extends Component{
    render(){
        return(
            <Card>
                <CardSection>
                    <TextInput style={{width:100, height:40}} />
                </CardSection>
                <CardSection>

                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        )
    }
}