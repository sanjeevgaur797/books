/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';

 import {Dimensions,FlatList,StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 const {width,height}=Dimensions.get("screen")
 
 const DATA = [
   {
     id: '1',
     name: 'React Js ',
     price:"50",
     page:"580",
     author:"Robin Wieruch",
     description:"all chapter content show and both langauge hindi or english"
   },
   {
     id: '2',
     name: 'Angular Js ',
     price:"30",
     page:"540",
     author:"savej Wieruch",
     description:"all chapter content show and both langauge hindi or english"
   },
   {
     id: '3',
     name: 'React Native ',
     price:"150",
     page:"650",
     author:"eikk  Wieruch",
     description:"all chapter content show and both langauge hindi or english"
   },
   {
     id: '4',
     name: 'React Native ',
     price:"150",
     page:"650",
     author:"ekdj  Wieruch",
     description:"all chapter content show and both langauge hindi or english"
   },
   {
     id: '5',
     name: 'React Native ',
     price:"150",
     page:"650",
     author:"thidiff  Wieruch",
     description:"all chapter content show and both langauge hindi or english"
   },
   {
     id: '6',
     name: 'React Native ',
     price:"150",
     page:"650",
     author:"malik  Wieruch",
     description:"all chapter content show and both langauge hindi or english"
   },
   {
     id: '7',
     name: 'React Native ',
     price:"150",
     page:"650",
     author:"ajay  Wieruch",
     description:"all chapter content show and both langauge hindi or english"
   },
 ];
 const Item = ({ title }) => (
   <View style={styles.item}>
     
 
     
   </View>
 );


  
class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }


 render(){
  


    const renderItem = ({ item }) => (
     <View>
     <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SignIn")}} >
       <View style={styles.Book} >
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Text style={{fontSize:20}}>{item.name} </Text>
 <Text style={{fontSize:20}}>Author:<Text style={{fontSize:16,color:'green'}}>{item.author}</Text></Text>
         </View>
 <Text style={{fontSize:20}}>
   Description:
   <Text style={{fontSize:15}}> {item.description}.</Text>
 </Text>
 <Text style={{fontSize:18}}>Total Page:{item.page}</Text>
         </View>
         </TouchableOpacity>
     </View>
   );
   return (
       <View>
      <View style={styles.Container}>
      <Ionicons name="menu-sharp" size={30} onPress={()=>this.props.navigation.openDrawer()} />
       <Text style={styles.MainText}>
       
       Books Available</Text>
       </View>
     <FlatList
         data={DATA}
         renderItem={renderItem}
         keyExtractor={item => item.id}
       />
       <View style={{height:"20%",}}>
  </View>
      </View>
   );
 };
}
 
 const styles = StyleSheet.create({
   MainText: {
     
     fontSize:25,
    paddingLeft:10,
     color:'white'
   },
   Container:{
     backgroundColor:"#B33771",
     flexDirection:'row',
     justifyContent:"flex-start",
    padding:10,
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
 
 export default Home;
 