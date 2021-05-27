import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const AudioVideoAccessbility=({navigation})=>{
  
    return(
      <ScrollView>
        <View style={{flex:1,}}>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} style={{marginTop:height*0.07,marginLeft:width*0.07}}/> 
            </TouchableOpacity>
          <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,textAlign:"center",marginTop:height*-0.03}}>Video/Audio/</Text>
          <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,textAlign:"center"}}>Accessibility</Text>

          <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:width*0.07,justifyContent:"space-between",marginTop:height*0.03}}>
               <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Autoplay Videoes</Text>
               <Image source={assets.toggle_active} style={{height:30,width:60,resizeMode:"contain"}}/>
           </View>
           <Text style={{fontSize:width*0.027,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>Play videoes when in view. May use a </Text>
           <Text style={{fontSize:width*0.027,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>lot of data.</Text>
       
           <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center',marginHorizontal:width*0.2,marginTop:height*0.02}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Only on Wifi</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
               <View style={{height:1,width:width*1,marginVertical:height*0.02,backgroundColor:"#bdbbbb"}}/>
                <Text style={{marginLeft:width*0.07,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Text Size</Text>
               <View style={{marginHorizontal:width*0.2,marginTop:height*0.01}}>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.03,color:"#000000"}}>Small</Text>
                   <Image source={assets.radio} style={{height:30,width:30}}/>
               </View>
                 <View style={{height:0.6,width:width*0.7,backgroundColor:"#757474",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#000000"}}>Medium (default)</Text>
                   <Image source={assets.radio_active} style={{height:30,width:30}}/>
               </View>
               <View style={{height:0.6,width:width*0.7,backgroundColor:"#757474",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.05,color:"#000000"}}>Large</Text>
                   <Image source={assets.radio} style={{height:30,width:30}}/>
               </View>
           </View>

           <View style={{height:1,width:width*1,marginVertical:height*0.02,backgroundColor:"#bdbbbb"}}/>

           <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:width*0.07,justifyContent:"space-between"}}>
               <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>High-Contrast Mode</Text>
               <Image source={assets.toggle} style={{height:30,width:60,resizeMode:"contain"}}/>
           </View>

        </View>
    </ScrollView>
    )
}
export default AudioVideoAccessbility;