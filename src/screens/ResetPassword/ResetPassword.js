import React from 'react'
import { useState } from 'react';
import { ImageBackground, ScrollView, Text, View,TextInput, Image, TouchableOpacity,Dimensions } from "react-native";
import * as assets from "../../components/assets";

const  ResetPassword=({navigation})=>{
    const[show,setShow]=useState(true)
    const[show1,setShow1]=useState(true)
    const {height,width}=Dimensions.get('window')
    return(
        <View style={{flex:1}}>
            <ImageBackground source={assets.gradient} style={{flex:1}}>
              <ScrollView>
                  <View style={{marginBottom:20,flex:1}}>
                  <View style={{backgroundColor:'white',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
                  <Text style={{marginLeft:width*0.11,marginTop:height*0.04,fontSize:width*0.11,fontFamily:'Kanit_Bold',color:'#531039'}}>Reset Password</Text>
                  <Text style={{marginLeft:width*0.11,marginTop:height*0.02,fontFamily:"Nunito_SemiBold",fontSize:width*0.04}}>Enter a new password. It can't be the same </Text>
                  <Text style={{marginLeft:width*0.11,fontFamily:"Nunito_SemiBold",fontSize:width*0.04}}>as any of your 3 previous passwords. </Text>
                  <View style={{marginTop:height*0.06,marginHorizontal:'10%'}}>
         <View style={{height:height*0.07,width:'100%',borderRadius:10,borderWidth:0.6,borderColor:'#8f2979',backgroundColor:'white',flexDirection:'row'}}>
             <TextInput
             placeholder="New Password"
             style={{flex:1,paddingLeft:15}}
             secureTextEntry={show}
             />
             {show===true?
                 <TouchableOpacity onPress={()=>setShow(false)}>
             <Image source={assets.eye_off} style={{height:22,width:30,alignSelf:'flex-end',marginRight:10,marginTop:10}}/>
             </TouchableOpacity>:
             <TouchableOpacity onPress={()=>setShow(true)}>
             <Image source={assets.eye} style={{height:22,width:30,alignSelf:'flex-end',marginRight:10,marginTop:10}}/>
             </TouchableOpacity>
             }
         </View>
         
         </View>
         <Text style={{marginLeft:width*0.77,color:"#09CF2A",fontFamily:"Nunito_Bold"}}>Strong</Text>
         <View style={{marginTop:height*0.02,marginHorizontal:'10%'}}>
         <View style={{height:height*0.07,width:'100%',borderRadius:10,borderWidth:0.6,borderColor:'#8f2979',backgroundColor:'white',flexDirection:'row'}}>
             <TextInput
             placeholder="Confirm New Password"
             style={{flex:1,paddingLeft:15}}
             secureTextEntry={show1}
             />
              {show1===true?
                 <TouchableOpacity onPress={()=>setShow1(false)}>
             <Image source={assets.eye_off} style={{height:22,width:30,alignSelf:'flex-end',marginRight:10,marginTop:10}}/>
             </TouchableOpacity>:
             <TouchableOpacity onPress={()=>setShow1(true)}>
             <Image source={assets.eye} style={{height:22,width:30,alignSelf:'flex-end',marginRight:10,marginTop:10}}/>
             </TouchableOpacity>
             }
         </View>
         </View>
         <View style={{marginTop:height*0.06,marginHorizontal:'10%',marginBottom:height*0.04}}>
              <TouchableOpacity onPress={()=>navigation.navigate("onboardingScreen1")}>
             <View style={{height:55,width:'100%',backgroundColor:"#961F63",borderRadius:28,justifyContent:"center",alignItems:'center'}}>
                 <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:20}}>Save</Text>
             </View>
             </TouchableOpacity>
            </View>
            
                  </View>
                  <View style={{marginTop:height*0.34}}> 
                  </View>
                  </View>
              </ScrollView>
            </ImageBackground>
        </View>
    )
}
export default ResetPassword;