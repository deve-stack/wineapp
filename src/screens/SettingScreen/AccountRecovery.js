import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const AccountRecovery=({navigation})=>{
  const[show,setShow]=useState(false)
  const[show1,setShow1]=useState(false)
    return(
      <ScrollView>
        <View style={{flex:1,}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={assets.btn_back} style={{marginTop:height*0.07,marginLeft:width*0.07}}/> 
            </TouchableOpacity>
          <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,textAlign:"center",marginTop:height*-0.03}}>Account Recovery</Text>
           <Text style={{marginLeft:width*0.07,marginTop:height*0.04,fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Send Recovery Messages to:</Text>

           <View style={{marginHorizontal:width*0.2,marginTop:height*0.03}}>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Phone (SMS)</Text>
                   <Image source={assets.radio_active} style={{height:30,width:30}}/>
               </View>
                 <View style={{height:0.6,width:width*0.7,backgroundColor:"#757474",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Email</Text>
                   <Image source={assets.radio} style={{height:30,width:30}}/>
               </View>
           </View>
           <View style={{height:0.6,width:width*1,backgroundColor:"#757474",marginVertical:height*0.025}}/>
           <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:width*0.07,justifyContent:"space-between"}}>
               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Lock my account for 24 hours after 3</Text>
               <Image source={assets.toggle_active} style={{height:30,width:60,resizeMode:"contain"}}/>
           </View>
           <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Black",color:"#8a8a8a",marginLeft:width*0.07}}>unsuccessful login attempts</Text>
           <Text style={{fontSize:width*0.026,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>Provides extra security (make sure to </Text>
           <Text style={{fontSize:width*0.026,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>remember your password.)</Text>

        </View>
        
        </ScrollView>
    )
}
export default AccountRecovery;