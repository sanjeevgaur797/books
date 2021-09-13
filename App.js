/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  Dimensions,

  StyleSheet,
  Text,

} from 'react-native';
import Home from './src/component/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SignIn from './src/component/SignIn';
import SignUp from './src/component/SignuUp';

const {width,height}=Dimensions.get("screen")
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }


 render(){
  
  
  return (
    

<NavigationContainer>
<Stack.Navigator screenOptions = {{ headerShown: false}} >
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{title:" Back"}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{title:" Back"}} />
       
      </Stack.Navigator>
</NavigationContainer>
 
  
    
  )
}
}

function HomeDrawer(){
  return(
   <Drawer.Navigator initialRouteName="Home"
    >
   <Drawer.Screen name="Home" component={Home}  options={{headerShown: false}} />
   <Drawer.Screen name="SignIn" component={SignIn} />
   <Drawer.Screen name="SignUp" component={SignUp} />
 </Drawer.Navigator>
  )
}
const styles = StyleSheet.create({
  MainText: {
    
    fontSize:25,
   padding:5,
   
 
   
    color:'white'
  },
  Container:{
    backgroundColor:"#B33771",
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignContent:"center",
  },
  Book:{
   
    backgroundColor:"white",
    padding:10,
    borderColor:"red",
    borderRadius:10,
    margin:5,
    borderWidth:2,
    borderColor:"green"
  },
  SafeAreaView:{
    flex: 1,
    paddingTop: 0,
  }
});

export default App;
