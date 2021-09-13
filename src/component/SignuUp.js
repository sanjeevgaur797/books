
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



 import React, { Component } from 'react';
 
 import {
 
   StyleSheet, View, Text, ScrollView, TouchableOpacity,  Dimensions, TextInput, AsyncStorage, 
 
 } from 'react-native';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import Toast from 'react-native-simple-toast';
 import {colors} from '../../colors';
 const { width, height } = Dimensions.get("screen")
 

 
 
 class SignUp extends Component {
   constructor(props) {
     super(props);
     this.state = {
      user:{},
       password:'',
       phone:'',
       name:'',
        }
   }
  //  [{name:state.name}]
   
 
  validation=async()=>{
   
    let user={
      name:this.state.name,
      phone:this.state.phone,
      password:this.state.password
     }
    //  AsyncStorage.setItem("user",JSON.stringify(user))
    //  this.setState({user})
     
     let users = await AsyncStorage.getItem('user');
    console.log(JSON.stringify({users}))
     var data=JSON.parse(users);
     alert("hello")
       if(this.state.phone == ""  )
     {
       Toast.show("Please Enter number")
     }
     else if(this.state.password == "" )
     {
       Toast.show("Please Enter password")
     }
     else if(this.state.name == "" )
     {
       Toast.show("Please Enter name")
     }
     else if(this.state.phone == data.phone  && this.state.name == data.name)
     {
       Toast.show("You have alredy registered so please login!..")
     }
    else{
      AsyncStorage.setItem("user",JSON.stringify(user))
      this.setState({user})
      console.log(user)
      alert("Register succefully")
      this.props.navigation.replace("SignIn")
    }
    //     AsyncStorage.setItem("user",JSON.stringify(user))
    //    this.setState({user})
       
    //    let users = AsyncStorage.getItem('user');
    //   let data=JSON.parse(users);
    //      console.log(data.phone)
    //     //alert(JSON.stringify({users}))
    //  //   console.log(data.phone)
     
    //  //  alert(JSON.stringify({user}))
    
      
           }

           display=async()=>{
            try{
              let user =await AsyncStorage.getItem('user');
              let data=JSON.parse(user);
            //   console.log(data.phone)
             alert(JSON.stringify({data}))
            alert(data.phone);
            }
          
          catch(error){
            alert(error)
          }
        }

    
 
 
   render() {
     return (
        <ScrollView style={{backgroundColor:'#192a56'}}>
        <View >
{/* <TouchableOpacity onPress={this.display}>
<Text>data</Text>
</TouchableOpacity> */}
          <Text style={{fontSize:30,color:colors.white,marginTop:20,fontWeight:"bold",padding:20}}>Welcome</Text>
            
          <View >
          <Text style={{fontSize:30,fontWeight:'bold', textAlign:'center',color:'white',marginTop:50}}>SignUp Here</Text>
         <Ionicons name={"create"}  style={{fontSize:50,fontWeight:'bold', textAlign:'center',color:'white',marginTop:50}} />
           </View>
           <TextInput
        //style={styles.input}
        onChangeText={(name)=>{this.setState({name})}}
        value={this.state.name}
        placeholder="Enter Name"
        keyboardType="email-address"
        style={{backgroundColor:'white',borderRadius:100,margin:10,textAlign:'center',fontSize:20}}
      />
          <TextInput
        //style={styles.input}
        onChangeText={(phone)=>{this.setState({phone})}}
        value={this.state.phone}
        placeholder="Enter Phone Number"
        keyboardType="email-address"
        style={{backgroundColor:'white',borderRadius:100,margin:10,textAlign:'center',fontSize:20}}
      />
      <TextInput
        //style={styles.input}
        onChangeText={(password)=>{this.setState({password})}}
        value={this.state.password}
       
        placeholder="Enter Password"
        keyboardType="default"
        secureTextEntry={true}
        style={{backgroundColor:'white',borderRadius:100,margin:10,textAlign:'center',fontSize:20}}
      />
          <View style={{flexDirection:'row',justifyContent:'center',margin:10}}>
              
          <TouchableOpacity style={{backgroundColor:'green',borderRadius:20,width:100,height:30,alignItems:'center',alignContent:'center'}} onPress={()=>{ this.validation() }} > 
               <Text style={{fontSize:20,fontWeight:'bold', textAlign:'center',alignItems:'center',alignItems:'center',alignContent:'center',}}>Submit</Text>
           </TouchableOpacity>  
          </View>

<View style={{flexDirection:'row',justifyContent:'space-between',padding:5,}}>
<Text style={{color:colors.white,fontWeight:'bold',fontSize:15}}>You Have An Account</Text>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate("SignIn")}}>
<Text style={{color:colors.white,fontWeight:'bold',fontSize:15}}>Sign In</Text>
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
 
 
 export default SignUp;
 