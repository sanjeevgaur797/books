
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import { NavigationContainer, StackActions } from '@react-navigation/native';
 import Toast from 'react-native-simple-toast';
 import React, { Component } from 'react';
 
 import {
 
   StyleSheet, View, Text, ScrollView,  TouchableOpacity,  Dimensions, TextInput, AsyncStorage, 
 
 } from 'react-native';
 import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../colors';





 const { width, height } = Dimensions.get("screen")
 

 
 
 class SignIn extends Component {
   constructor(props) {
     super(props);
     this.state = {
       item: [],
       password:'',
       phone:'',
       user:{},
       showanimation:false,
        }
   }
//    validation=()=>{
       
//     if(this.state.phone==""){
// Toast.show("Please Enter Phone number")
//     } else{ 
//     if(this.state.phone.length<10){
//         Toast.show("Length should be more than 10 digit")
//     } else if(this.state.password==""){
//         Toast.show("Please Enter Password")
//     }
 
//     else{
    
       
//         }
//      }
//  }


 validation=async()=>{
  try{
    let user =await AsyncStorage.getItem('user');
    let data=JSON.parse(user);
  //   console.log(data.phone)
  
  //  alert(JSON.stringify({user}))
 if(this.state.phone == "" )
  {
    Toast.show("Please Enter number")
  }
  else if(this.state.password == "" )
  {
    Toast.show("Please Enter password")
  }

   else if(this.state.phone == data.phone && this.state.password == data.password)
    {
      alert("login succefully")
      console.log(JSON.stringify(data))
    this.props.navigation.replace("HomeDrawer")
  }
  else{
    alert("invalid number and password")
  }
  }
  catch(error){
    alert(error)
  }
}

   render() {
     return (
        <ScrollView style={{backgroundColor:'#192a56'}}>
        <View >
          <Text style={{fontSize:30,color:colors.white,marginTop:20,fontWeight:"bold",padding:20}}>Welcome</Text>
            
          <View >
          <Text style={{fontSize:30,fontWeight:'bold', textAlign:'center',color:'white',marginTop:50}}>Sign In Here</Text>
         <Ionicons name={this.state.showanimation ? "lock-open-sharp":"lock-closed-sharp"} size={30} style={{fontSize:30,fontWeight:'bold', textAlign:'center',color:'white',marginTop:50}} />
           </View>
          <TextInput
        //style={styles.input}
        onChangeText={(phone)=>{this.setState({phone})}}
        value={this.state.phone}
        placeholder="Enter Phone Number"
        keyboardType="email-address"
        style={{backgroundColor:'white',borderRadius:100,margin:10,textAlign:'center'}}
      />
      <TextInput
        //style={styles.input}
        onChangeText={(password)=>{this.setState({password})}}
        value={this.state.password}
       
        placeholder="Enter Password"
        keyboardType="default"
        secureTextEntry={true}
        style={{backgroundColor:'white',borderRadius:100,margin:10,textAlign:'center',}}
      />
          <View style={{flexDirection:'row',justifyContent:'center',margin:10}}>
              
          <TouchableOpacity style={{backgroundColor:'green',borderRadius:20,width:100,height:30,alignItems:'center',alignContent:'center'}} onPress={()=>{ this.validation() }} > 
               <Text style={{fontSize:20,fontWeight:'bold', textAlign:'center',alignItems:'center',alignItems:'center',alignContent:'center',}}>Login</Text>
           </TouchableOpacity>  
          </View>

<View style={{flexDirection:'row',justifyContent:'space-between',padding:5,}}>
<Text style={{color:colors.white,fontWeight:'bold',fontSize:15}}>Don't Have An Account</Text>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate("SignUp")}}>
<Text style={{color:colors.white,fontWeight:'bold',fontSize:15}}>Register</Text>
</TouchableOpacity>

</View>
                 </View>
                
                 </ScrollView>
     );
   }
 }
 
 const styles = StyleSheet.create({
   linearGradient: {
     padding: 15,
     margin: 8,
     width: 270,
     borderRadius: 10
   }
 });
 
 
 
 export default SignIn;

 
 
 