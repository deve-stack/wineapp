import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const AddGroupMember=({navigation})=>{
    
    return(
      <ScrollView style={{marginBottom:10}}>
       <View style={{flex:1}}>
           <View style={{marginTop:height*0.06,marginHorizontal:width*0.07,flexDirection:"row"}}>
           <Image source={assets.btn_back} style={{height:20,width:45,resizeMode:"contain"}}/> 
           <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",marginLeft:width*0.14}}>Add Member</Text>
            </View>
        <Image source={assets.grapes3} style={{height:width*0.3,width:width*0.3,borderRadius:width*0.15,alignSelf:"center",marginTop:height*0.04}}/>
        <Text style={{textAlign:'center',fontFamily:"Nunito_Black",fontSize:width*0.045,marginTop:5}}>Zinthusiasts</Text>

        <View style={{marginHorizontal:width*0.1,marginTop:height*0.02}}>
            <View style={{flexDirection:"row",height:height*0.07,width:width*0.8,borderRadius:10,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,backgroundColor:"white"}}>
                <Image source={assets.sidebar_search} style={{height:18,width:18,resizeMode:"contain",alignSelf:"center",marginLeft:15}}/>
                <TextInput
                placeholder="Search People"
                style={{flex:1,paddingLeft:15,fontSize:width*0.04,fontFamily:"Nunito_Bold"}}
                />
            </View>
        </View> 
        
        <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.02,marginLeft:width*0.2}}>
            <Image source={assets.close} style={{height:45,width:45}}/>
            <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#850d49",marginLeft:width*0.01}}>Reva.Murazik97</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.02,marginLeft:width*0.2}}>
            <Image source={assets.close} style={{height:45,width:45}}/>
            <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#850d49",marginLeft:width*0.01}}>Nequewine35</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.02,marginLeft:width*0.2}}>
            <Image source={assets.close} style={{height:45,width:45}}/>
            <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#850d49",marginLeft:width*0.01}}>Anias97</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.02,marginLeft:width*0.2}}>
            <Image source={assets.close} style={{height:45,width:45}}/>
            <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#850d49",marginLeft:width*0.01}}>Reva.Murazik97</Text>
        </View>

        <View style={{marginVertical:height*0.13,marginHorizontal:width*0.1}}>
            <View style={{height:height*0.07,width:width*0.8,backgroundColor:"#bd1a6c",borderRadius:30,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"white"}}>Save</Text>
            </View>
        </View>

        </View>
        </ScrollView>
    )
}
export default AddGroupMember;