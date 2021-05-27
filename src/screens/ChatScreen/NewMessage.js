import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const NewMessage=({navigation})=>{
    
    return(
      <ScrollView style={{marginBottom:10}}>
       <View style={{flex:1,}}>
           <View style={{height:height*0.84}}> 
           <View style={{marginTop:height*0.06,marginHorizontal:width*0.07,flexDirection:"row"}}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={assets.btn_back} style={{height:20,width:width*0.11,resizeMode:"contain"}}/> 
            </TouchableOpacity>
            <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",marginLeft:width*0.16}}>New Message</Text>
            </View>
            <View style={{marginTop:height*0.04,marginHorizontal:width*0.07}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
             <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.045,color:"#878484"}}>To:</Text>
             <View style={{height:height*0.07,width:width*0.77,marginLeft:width*0.02,borderWidth:0.7,borderColor:'#bf6296',borderRadius:7,justifyContent:"center",backgroundColor:"white"}}>
                 <TextInput placeholder="Recipient" style={{flex:1,fontFamily:"Nunito_Bold",fontSize:width*0.045,marginLeft:width*0.05}}/>
             </View>
             </View>
            </View>

            <Text style={{fontSize:width*0.032,textAlign:"center",fontFamily:"Nunito_Bold",color:"#262626",marginTop:height*0.45}}>Want to chat with more people?</Text>
            <Text style={{textAlign:"center",fontSize:width*0.047,textDecorationLine:"underline",color:"#f056bd",marginTop:height*0.01,fontFamily:"Nunito_Bold"}}>Start A Group</Text>
       </View>
        
       <View style={{height:height*0.16}}>
        <View style={{marginHorizontal:width*0.05,flexDirection:'row',backgroundColor:"white",justifyContent:'space-between',borderBottomRightRadius:30,borderTopRightRadius:30,borderTopLeftRadius:10,borderBottomLeftRadius:10,marginTop:height*0.03}}>
            <Image source={assets.plus_sd} style={{height:20,width:20,resizeMode:"contain",alignSelf:'center',marginLeft:width*0.03}}/>
             <View>
            <TextInput 
            placeholder="Message" 
            multiline={true}
            style={{flex:1,width:width*0.55,fontFamily:"Nunito_Bold",paddingLeft:10,fontSize:width*0.045}}
            />
            </View>
            <View style={{height:height*0.07,width:width*0.22,backgroundColor:"#f056bd",borderRadius:30,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Send</Text>
            </View>
         </View>
        </View>

        </View>
        </ScrollView>
    )
}
export default NewMessage;