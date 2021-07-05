import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import * as firebase from 'firebase/app'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoadingScreen from './screens/LoadingScreen';
import { Ionicons } from '@expo/vector-icons'
import MessageScreen from './screens/MessageScreen'
import PostScreen from './screens/PostScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'

const AppContainer=createStackNavigator(
  {
  default:createBottomTabNavigator(
    {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="ios-home" size={40} color={tintColor}/>
      }
    },
    Post:{
      screen:PostScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons 
        name="ios-add-circle" 
        size={50}
        color="#4a4a4a"
        style={{
          shadowColor:"#E9446A",
          shadowOffset:{width:0,height:0},
          shadowRadius:10,
          shadowOpacity:0.3
        }}
        />
      }
    },
   Profile:{
      screen:ProfileScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="ios-person" size={40} color={tintColor}/>
      }
    }
  
  },{
    defaultNavigationOptions:{
      tabBarOnPress:({navigation,defaultHandler})=>{
        if(navigation.state.key==='Post'){
          navigation.navigate('postModal')
        }
        else{
          defaultHandler()
        }
      }

    },
    tabBarOptions:{
      activeTintColor:'black',
      inactiveTintColor:'#4a4a4a',
      inactiveBackgroundColor:'#bdbdbd',
      activeBackgroundColor:'#bdbdbd',
      showLabel:false
      
    }
  }),
  postModal:{
    screen:PostScreen
  }
},{
  mode:'modal',
  headerMode:'none'
}
)





const AuthStack=createStackNavigator({
  Login:LoginScreen,
  Register:RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading:LoadingScreen,
      App:AppContainer,
      Auth:AuthStack
    },{
      initialRouteName:"Loading"
    }
  )
)