import React from 'react'
import { Text, View ,Image, TouchableOpacity, ImageBackground,Dimensions, ScrollView,Modal, TouchableWithoutFeedback } from "react-native";
//import Modal from "react-native-modal";
import * as assets from "../../components/assets";
import { LinearGradient } from "expo-linear-gradient"
import { useState } from 'react';

const  ForgotPassword=({navigation})=>{
    const {height,width}=Dimensions.get('window')
    const[showModal,setShowModal]=useState(false)
    return(
        <View style={{flex:1}}>
            
            <ImageBackground source={assets.gradient} style={{flex:1}}>
           <ScrollView>
               <View style={{marginBottom:20}}>
           <View style={{backgroundColor:'white',borderBottomEndRadius:50,borderBottomLeftRadius:50,height:height*0.53}}>
           <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} style={{marginTop:height*0.07,marginLeft:width*0.07,height:height*0.02,width:width*0.1,resizeMode:"contain"}}/>
            </TouchableOpacity>
            <Text style={{marginLeft:width*0.07,fontSize:height*0.065,color:'#531039',fontFamily:'Kanit_Bold'}}>Forgot</Text>
            <Text style={{marginLeft:width*0.07,fontSize:height*0.065,color:'#531039',fontFamily:'Kanit_Bold'}}>Password?</Text>
            <Text style={{marginLeft:width*0.07,fontSize:width*0.042,marginTop:10,fontFamily:"Nunito_Bold",color:"#232323"}}>Tap "Reset" and we'll send you </Text>
            <Text style={{marginLeft:width*0.07,fontSize:width*0.042,fontFamily:"Nunito_Bold",color:"#232323"}}>instructions to reset your password. </Text>
            <View style={{marginTop:height*0.05,marginHorizontal:'10%'}}>
           <TouchableOpacity onPress={()=>navigation.navigate("OtpVerification")}> 
             <View style={{height:55,width:'100%',backgroundColor:"#a1286a",borderRadius:28,justifyContent:"center",alignItems:'center'}}>
                 <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:20,letterSpacing:1}}>Reset</Text>
             </View>
             </TouchableOpacity>
         </View>
            </View>
            <View style={{justifyContent:'flex-end',height:height*0.47}}>
            </View>
            </View>
           
           </ScrollView>
           {/* <Modal isVisible={showModal}>
               <TouchableWithoutFeedback onPress={()=>setShowModal(false)}>
             <View style={{backgroundColor:"#e6e6e6"}}>
                 <View style={{height:height*0.2,width:width*0.9,marginLeft:width*0.05,marginTop:height*0.65,marginBottom:height*0.1,backgroundColor:"white",elevation:5}}>
                     <Text style={{textAlign:"center",marginTop:height*0.04,fontSize:width*0.05,fontFamily:"Nunito_Bold"}}>Verification code sent</Text>
                     <Text style={{textAlign:"center",fontSize:width*0.05,fontFamily:"Nunito_Bold"}}>successfully.</Text>
                     <View style={{marginTop:height*0.03,alignSelf:'center'}}>
                     <TouchableOpacity onPress={()=>{setShowModal(false),navigation.navigate("OtpVerification")}}>
                     <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"#eb73c7",textDecorationLine:"underline"}}>Dismiss</Text>
                     </TouchableOpacity>
                 </View>
                 </View>
             </View>
             </TouchableWithoutFeedback>
           </Modal> */}
            </ImageBackground>
        </View>
    )
}
export default ForgotPassword;