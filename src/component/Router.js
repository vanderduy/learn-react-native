import React, { Component } from 'react';

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation'
import Home from './screens/Home'
import User from './screens/User'
import Acc from './screens/Acc'

export const Demo = StackNavigator({
   Home:{screen:Home,
       navigationOptions:{
       title:'Trang Chu'
       }
   },
    User:{screen:User,
        navigationOptions:{
        title:'nguoi dung'
        }
    }
});

export const Demo2= StackNavigator({
   Account:{
       screen:Acc,
       navigationOptions:{
           title:'tai khoan'
       }
   }
});

export const Tabbar= TabNavigator({
    Tab1:{
        screen:Demo,
        navigationOptions:{
            tabBarLabel:'HOME'
        }
    },
    Tab2:{
        screen:Demo2,
        navigationOptions:{
            tabBarLabel:'ACCOUNT'
        }
    }
},{
    tabBarPosition:'bottom',
    tabBarOptions:{
        style:{
            backgroundColor:'red'
        },
        activeTintColor:'yellow',
        inactiveTintColor:'black'
    }
});
