import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList} from "react-native";
import * as assets from '../../components/assets'
import axios from "axios";
const {height,width}=Dimensions.get('window')

const Account=({navigation})=>{
  const[show,setShow]=useState(true)
  const[show1,setShow1]=useState(true)
    return(
      <ScrollView>
        <View style={{flex:1,backgroundColor:"#EFEFEF"}}>
        <View style={{ flexDirection:"row",marginTop:height*0.07,marginLeft:width*0.07,alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} /> 
            </TouchableOpacity>
            <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,marginLeft:width*0.2}}>Account</Text>
            </View>
          <Image source={assets.wine_room} style={{height:height*0.2,width:width*1,marginTop:height*0.02}}/>
          <View style={{backgroundColor:"#f0e6e6",height:height*0.23}}>
          <Image source={assets.image4} style={{height:width*0.34,width:width*0.34,borderRadius:width*0.17,alignSelf:"center",marginTop:width*-0.17,borderWidth:1,borderColor:"white"}}/>
          <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.07,marginTop:height*-0.015}}>Username</Text>
          <View style={{height:height*0.07,width:width*0.86,backgroundColor:"white",borderWidth:0.6,borderColor:"#e362a2",marginTop:5,marginLeft:width*0.07,justifyContent:"center"}}>
           <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.05,color:"#858585",fontSize:width*0.045}}>Joshwines</Text>
          </View>
          <Text style={{fontSize:width*0.042,textAlign:'center',color:'#850750',marginTop:height*0.015,fontFamily:"Nunito_Black"}}>Available!</Text>
          </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:width*0.07,marginTop:height*0.02}}>
              <View style={{flexDirection:"column"}}>
              <Text style={{fontFamily:"Nunito_Bold"}}>First Name</Text>
          <View style={{height:height*0.07,width:width*0.4,backgroundColor:"white",borderWidth:0.6,borderColor:"#e362a2",marginTop:5,justifyContent:"center"}}>
           <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.05,color:"#858585",fontSize:width*0.045}}>Joshua</Text>
          </View>
              </View>
              <View style={{flexDirection:"column"}}>
              <Text style={{fontFamily:"Nunito_Bold"}}>Last Name</Text>
          <View style={{height:height*0.07,width:width*0.4,backgroundColor:"white",borderWidth:0.6,borderColor:"#e362a2",marginTop:5,justifyContent:"center"}}>
           <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.05,color:"#858585",fontSize:width*0.045}}>Winkelman</Text>
          </View>
              </View>
            </View>
            <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.07,marginTop:height*0.02}}>Email</Text>
          <View style={{height:height*0.07,width:width*0.86,backgroundColor:"white",borderWidth:0.6,borderColor:"#e362a2",marginTop:5,marginLeft:width*0.07,justifyContent:"center"}}>
           <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.05,color:"#858585",fontSize:width*0.045}}>jwines@gmail.com</Text>
          </View>
          <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.07,marginTop:height*0.02}}>Phone Number</Text>
          <View style={{height:height*0.07,width:width*0.86,backgroundColor:"white",borderWidth:0.6,borderColor:"#e362a2",marginTop:5,marginLeft:width*0.07,justifyContent:"center"}}>
           <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.05,color:"#858585",fontSize:width*0.045}}>(123) 456-7890</Text>
          </View>
          <Text style={{fontSize:width*0.03,textAlign:"center",marginTop:height*0.01,color:"#949292",marginBottom:height*0.04,fontFamily:"Nunito_Bold"}}>Phone Number isn't publicly visible.</Text>
          <View style={{height:2,width:width*1,backgroundColor:"#bdbbbb"}}/>
          <TouchableOpacity onPress={()=>navigation.navigate("PaymentMethod")}>
        <View style={{height:height*0.07,width:width*1,flexDirection:"row",alignItems:"center"}}>
          <Text style={{fontFamily:"Nunito_ExtraBold",fontSize:width*0.055,marginLeft:width*0.05,color:"#858585"}}>Payment Methods</Text>
          <Image source={assets.arrow_right} style={{height:25,width:25,resizeMode:"contain",marginLeft:width*0.3}}/>
        </View>
        </TouchableOpacity>
        <View style={{height:2,width:width*1,backgroundColor:"#bdbbbb"}}/>
        <TouchableOpacity onPress={()=>navigation.navigate("AccountRecovery")}>
        <View style={{height:height*0.07,width:width*1,flexDirection:"row",alignItems:"center"}}>
          <Text style={{fontFamily:"Nunito_ExtraBold",fontSize:width*0.055,marginLeft:width*0.05,color:"#858585"}}>Account Recovery</Text>
          <Image source={assets.arrow_right} style={{height:25,width:25,resizeMode:"contain",marginLeft:width*0.3}}/>
        </View>
        </TouchableOpacity>
        <View style={{height:2,width:width*1,backgroundColor:"#bdbbbb"}}/>
        <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.07,marginTop:height*0.04}}>Change Password</Text>

        <View style={{height:height*0.07,width:width*0.86,backgroundColor:'white',borderWidth:0.6,borderColor:"#bf6296",marginTop:height*0.01,borderRadius:5,flexDirection:"row",alignItems:'center',marginLeft:width*0.07}}>
                         <TextInput placeholder="New Password"
                         secureTextEntry={show}
                         placeholderTextColor="#bdbdbd"
                         style={{flex:1,paddingLeft:20,fontFamily:"Nunito_Bold",fontSize:width*0.045}}
                         />
                         {show==true?
                         <TouchableOpacity onPress={()=>setShow(false)}>
                         <Image source={assets.eye_off1} style={{height:22,width:25,marginRight:15,resizeMode:"contain"}}/>
                         </TouchableOpacity>:
                         <TouchableOpacity onPress={()=>setShow(true)}>
                         <Image source={assets.eye1} style={{height:22,width:25,marginRight:15,resizeMode:"contain"}}/>
                         </TouchableOpacity>}
                     </View>
                     <Text style={{textAlign:"center",color:"#1b9410",fontFamily:"Nunito_Bold",marginTop:height*0.01}}>Strong</Text>
                     <View style={{height:height*0.07,width:width*0.86,backgroundColor:'white',borderWidth:0.6,borderColor:"#bf6296",marginTop:height*0.03,borderRadius:5,flexDirection:"row",alignItems:'center',marginLeft:width*0.07}}>
                         <TextInput placeholder="Confirm New Password"
                         secureTextEntry={show1}
                         placeholderTextColor="#bdbdbd"
                         style={{flex:1,paddingLeft:20,fontFamily:"Nunito_Bold",fontSize:width*0.045}}
                         />
                         {show1==true?
                         <TouchableOpacity onPress={()=>setShow1(false)}>
                         <Image source={assets.eye_off} style={{height:22,width:25,marginRight:15,resizeMode:"contain"}}/>
                         </TouchableOpacity>:
                         <TouchableOpacity onPress={()=>setShow1(true)}>
                         <Image source={assets.eye1} style={{height:22,width:25,marginRight:15,resizeMode:"contain"}}/>
                         </TouchableOpacity>}
                     </View>
                     <View style={{marginVertical:height*0.03}}>
                     <View style={{height:height*0.07,width:width*0.45,borderRadius:30,borderWidth:2,borderColor:"#bf6296",justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                       <Text style={{color:"#bf6296",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Save</Text>
                     </View>
                     </View>
                     <View style={{height:height*0.2,backgroundColor:'#d4d4d4'}}>
                       <View style={{marginTop:height*0.05}}/>
                       <Text style={{textAlign:"center",textDecorationLine:"underline",color:"#e37676",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Delete Account</Text>
                     </View>

        </View>
        
        </ScrollView>
    )
}
export default Account;