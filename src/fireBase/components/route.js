import {
    StackNavigator
} from 'react-navigation'

import Login from './Login'
import Register from './Register'
import LoginSuccess from './LoginSuccess'

export const StackNavigation = StackNavigator({
    Login:{
        screen:Login,
        navigationOptions:{
            title : 'Login'
        }
    },
    Register_:{
        screen:Register,
        navigationOptions:{
            title: 'Register'
        }
    },
    LoginSuccess:{
        screen:LoginSuccess,
        navigationOptions:{
            title : 'LoginSuccess' 
        }
    }
})