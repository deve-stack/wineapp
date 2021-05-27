import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const Notification=({navigation})=>{
  
    return(
      <ScrollView>
        <View style={{flex:1,}}>
        <View style={{ flexDirection:"row",marginTop:height*0.07,marginLeft:width*0.07,alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} /> 
            </TouchableOpacity>
            <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,marginLeft:width*0.13}}>Notifications</Text>
            </View>
         
          <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:width*0.07,justifyContent:"space-between",marginTop:height*0.03}}>
               <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Push Notifications</Text>
               <Image source={assets.toggle_active} style={{height:30,width:60,resizeMode:"contain"}}/>
           </View>

           <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.02}}>
               <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"black"}}>Send </Text>
               <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"#de1b8c"}}>Push Notifications </Text>
               <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold"}}>for:</Text>
           </View>

           <View style={{marginHorizontal:width*0.2,marginTop:height*0.01}}>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Post Replies</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
                 <View style={{height:2,width:width*0.7,backgroundColor:"#bfbdbd",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Comment Replies</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
               <View style={{height:2,width:width*0.7,backgroundColor:"#bfbdbd",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Mentions</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
           </View>
           <View style={{marginHorizontal:width*0.2,marginTop:height*0.01}}>
                 <View style={{height:2,width:width*0.7,backgroundColor:"#bfbdbd",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Direct Messages</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
               <View style={{height:2,width:width*0.7,backgroundColor:"#bfbdbd",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Groups Messages</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
           </View>

           <View style={{height:2,width:width*1,backgroundColor:"#bfbdbd",marginVertical:height*0.02}}/>

           <View style={{flexDirection:"row",marginLeft:width*0.07}}>
               <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"black"}}>Send </Text>
               <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"#de1b8c"}}>In-App Notifications </Text>
               <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold"}}>for:</Text>
           </View>

           <View style={{marginHorizontal:width*0.2,marginTop:height*0.01}}>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Post Replies</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
                 <View style={{height:2,width:width*0.7,backgroundColor:"#bfbdbd",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Comment Replies</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
               <View style={{height:2,width:width*0.7,backgroundColor:"#bfbdbd",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Mentions</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
           </View>
           <View style={{marginHorizontal:width*0.2,marginTop:height*0.01}}>
                 <View style={{height:2,width:width*0.7,backgroundColor:"#bfbdbd",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Direct Messages</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
               <View style={{height:2,width:width*0.7,backgroundColor:"#bfbdbd",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center',marginBottom:height*0.1}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Groups Messages</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
           </View>
           
        </View>
    </ScrollView>
    )
}
export default Notification;