import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const NewGroup=({navigation})=>{
    
    return(
      <ScrollView style={{marginBottom:10}}>
       <View style={{flex:1}}>
           <View style={{marginTop:height*0.06,marginHorizontal:width*0.07,flexDirection:"row"}}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={assets.btn_back} style={{height:20,width:45,resizeMode:"contain"}}/> 
            </TouchableOpacity>
            <Text style={{fontSize:width*0.055,fontFamily:"Nunito_ExtraBold",marginLeft:width*0.16}}>New Group</Text>
            </View>
      
        <View style={{marginTop:height*0.04,alignSelf:"center"}}>
            <View style={{height:width*0.25,width:width*0.25,backgroundColor:"white",elevation:5,borderRadius:10,margin:5,justifyContent:"center",alignItems:"center"}}>
             <Image source={assets.add_image} style={{height:60,width:60,resizeMode:'contain'}}/>
            </View>
        </View>

        <View style={{flexDirection:"row",height:height*0.07,width:width*0.8,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,marginTop:height*0.04,marginLeft:width*0.1,alignItems:"center",backgroundColor:"#ffffff"}}>
            <Image source={assets.sidebar_search} style={{height:18,width:18,marginLeft:width*0.05}}/>
            <TextInput placeholder="Search People   " 
            placeholderTextColor="#bababa"
            style={{marginLeft:width*0.04,fontSize:width*0.045,fontFamily:"Nunito_SemiBold"}}/>
            </View>
            <View style={{flexDirection:"row",height:height*0.07,width:width*0.8,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,marginTop:height*0.025,marginLeft:width*0.1,alignItems:"center",backgroundColor:"#ffffff"}}>
            <TextInput placeholder="Group Name" placeholderTextColor="#bababa" style={{marginLeft:width*0.045,fontSize:width*0.045,fontFamily:"Nunito_SemiBold"}}/>
            </View>

            <View style={{flexDirection:"row",marginHorizontal:width*0.1,marginTop:height*0.06,justifyContent:"space-between"}}>
              <View style={{flexDirection:"column"}}>
                  <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.045}}>Public Group?</Text>
                  <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.034,color:"#d92996"}}>(Anyone can invite anyone)</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                 <Image source={assets.toggle} style={{height:30,width:45,resizeMode:"contain"}}/>
                 <Text style={{fontFamily:"Nunito_ExtraBold",fontSize:width*0.04,color:"#919191"}}>No</Text>
              </View>
            </View>

            <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.05,textAlign:"center",marginTop:height*0.15,color:"#d92996"}}>Clear</Text>
            <View style={{flexDirection:"row",alignSelf:"center",alignItems:"center"}}>
            <Text style={{fontFamily:"Nunito_Black",fontSize:width*0.038,textAlign:"center",color:"#850d49"}}>Reva.Murazik97</Text>
            <Text style={{fontFamily:"Nunito_Black",fontSize:width*0.038,textAlign:"center",color:"#850d49"}}> . </Text>
            <Text style={{fontFamily:"Nunito_Black",fontSize:width*0.038,textAlign:"center",color:"#850d49"}}>NequeWine35</Text>
            <Text style={{fontFamily:"Nunito_Black",fontSize:width*0.038,textAlign:"center",color:"#850d49"}}> . </Text>
            <Text style={{fontFamily:"Nunito_Black",fontSize:width*0.038,textAlign:"center",color:"#850d49"}}>Anias97</Text>
            <Text style={{fontFamily:"Nunito_Black",fontSize:width*0.038,textAlign:"center",color:"#850d49"}}> . </Text>
          </View>
          <Text style={{fontFamily:"Nunito_Black",fontSize:width*0.038,textAlign:"center",color:"#850d49"}}>Anias97 </Text>
        
        <View style={{marginTop:height*0.025,marginHorizontal:width*0.1}}>
            <View style={{height:height*0.07,width:width*0.8,backgroundColor:"#bd1a6c",borderRadius:30,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"white"}}>Create Group</Text>
            </View>
        </View>
        </View>
        </ScrollView>
    )
}
export default NewGroup;