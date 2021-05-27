import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const SettingLegal=({navigation})=>{
    
  
    return(
      <ScrollView>
        <View style={{flex:1,}}>
        <View style={{marginTop:height*0.07,marginLeft:width*0.07,flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={assets.btn_back} style={{height:20,width:45,resizeMode:"contain"}}/> 
            </TouchableOpacity>
           
            <View style={{marginLeft:width*0.23}}>
            <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06}}>Legal</Text>
            </View>
            </View>
         
         <View style={{marginTop:height*0.07,alignSelf:"center"}}>
             <Text style={{fontFamily:"Nunito_Bold",textDecorationLine:"underline",color:"#bd377a",fontSize:width*0.055}}>Terms of Use</Text>
         </View>
         <View style={{marginTop:height*0.07,alignSelf:"center"}}>
             <Text style={{fontFamily:"Nunito_Bold",textDecorationLine:"underline",color:"#bd377a",fontSize:width*0.055}}>Privacy Policy</Text>
         </View>
         <View style={{marginTop:height*0.07,alignSelf:"center"}}>
             <Text style={{fontFamily:"Nunito_Bold",textDecorationLine:"underline",color:"#bd377a",fontSize:width*0.055}}>Media Policy</Text>
         </View>
        </View>
        
        </ScrollView>
    )
}
export default SettingLegal;