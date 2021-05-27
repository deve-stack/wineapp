import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const Privacy=({navigation})=>{
  const[show,setShow]=useState(false)
  const[show1,setShow1]=useState(false)
    return(
      <ScrollView>
        <View style={{flex:1,backgroundColor:"#EFEFEF"}}>
        <View style={{ flexDirection:"row",marginTop:height*0.07,marginLeft:width*0.07,alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} /> 
            </TouchableOpacity>
            <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,marginLeft:width*0.21}}>Privacy</Text>
            </View>
         
          <Text style={{marginLeft:'7%',marginTop:height*0.04,fontSize:16,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Post Privacy</Text>
                     <View style={{flexDirection:'row',marginTop:height*0.015,marginLeft:width*0.13}}>
                     <View style={{flexDirection:'column'}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                           <Text style={{fontWeight:'bold'}}>Public</Text>
                           <Image source={assets.radio_active1} style={{marginLeft:5}}/>
                           </View>
                           <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",marginTop:height*0.01}}>Your posts can</Text>
                           <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold"}}>be seen by</Text>
                           <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold"}}>anyone.</Text>
                         </View>
                         <View style={{flexDirection:'column',marginLeft:'5%'}}>
                           <View style={{flexDirection:"row",alignItems:'center'}}>
                         <Text style={{fontWeight:'bold'}}>Personal</Text>
                         <Image source={assets.radio_button1} style={{marginLeft:5}}/>
                         </View>
                        
                           <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",marginTop:height*0.01}}>Your posts can </Text>
                           <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",}}>only be seen by </Text>
                           <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",}}>people you </Text>
                           <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",}}>follow and</Text>
                           <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",}}>those who</Text>
                           <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",}}>follow you. </Text>
                         </View>
                         <View style={{flexDirection:'column',marginLeft:'5%'}}>
                         <View style={{flexDirection:"row",alignItems:'center'}}>
                         <Text style={{fontWeight:'bold'}}>Private</Text>
                         <Image source={assets.radio_button1} style={{marginLeft:5}}/>
                         </View>
                         <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",marginTop:height*0.01}}>Your posts can</Text>
                         <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",}}>only be seen by</Text>
                         <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",}}>people you</Text>
                         <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",}}>manually </Text>
                         <Text style={{color:"#de1b8c",fontSize:width*0.03,fontFamily:"Nunito_Bold",}}>approve.</Text>
                         </View>
                     </View>
               <View style={{height:2,width:width*1,backgroundColor:"#dbdbdb",marginVertical:height*0.02}}/>
               <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:width*0.07,justifyContent:"space-between"}}>
               <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Protect My Account</Text>
               <Image source={assets.toggle} style={{height:30,width:60,resizeMode:"contain"}}/>
           </View>
           <Text style={{fontSize:width*0.023,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>People have to request to follow you. </Text>
           <Text style={{fontSize:width*0.023,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>Only followers can tag you.</Text>

           <View style={{height:1,width:width*1,marginVertical:height*0.03,backgroundColor:"#bdbbbb"}}/>

           <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:width*0.07,justifyContent:"space-between",marginTop:height*-0.01}}>
               <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Direct Messages</Text>
               <Image source={assets.toggle_active} style={{height:30,width:60,resizeMode:"contain"}}/>
           </View>

           <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.02}}>
               <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"#de1b8c"}}>Only </Text>
               <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold"}}>allow messeges from.</Text>
           </View>
           <View style={{marginHorizontal:width*0.2,marginTop:height*0.01}}>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Sponsors</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
                 <View style={{height:0.6,width:width*0.7,backgroundColor:"#757474",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>Followers</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
               <View style={{height:0.6,width:width*0.7,backgroundColor:"#757474",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.04,color:"#757474"}}>People I Follow</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
           </View>

           <View style={{height:1,width:width*1,marginVertical:height*0.03,backgroundColor:"#bdbbbb"}}/>
           <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:width*0.07,justifyContent:"space-between"}}>
               <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Share Location</Text>
               <Image source={assets.toggle} style={{height:30,width:60,resizeMode:"contain"}}/>
           </View>
           <Text style={{fontSize:width*0.023,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>Allow your Current location to be  </Text>
           <Text style={{fontSize:width*0.023,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>shared with things you post.</Text>

           <View style={{height:1,width:width*1,marginVertical:height*0.03,backgroundColor:"#bdbbbb"}}/>
           <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:width*0.07,justifyContent:"space-between"}}>
               <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Personalized Recommendations</Text>
               <Image source={assets.toggle_active} style={{height:30,width:60,resizeMode:"contain"}}/>
           </View>
           <Text style={{fontSize:width*0.023,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>Get personalized recommendations </Text>
           <Text style={{fontSize:width*0.023,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>based on your rated wines & the tags</Text>
           <Text style={{fontSize:width*0.023,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>you use.</Text>

           <View style={{height:1,width:width*1,marginVertical:height*0.03,backgroundColor:"#bdbbbb"}}/>
           <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:width*0.07,justifyContent:"space-between"}}>
               <Text style={{fontSize:width*0.04,fontFamily:"Nunito_Black",color:"#8a8a8a"}}>Discoverability</Text>
               <Image source={assets.toggle_active} style={{height:30,width:60,resizeMode:"contain"}}/>
           </View>
           <Text style={{fontSize:width*0.023,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>Allow your friends and cantacts to </Text>
           <Text style={{fontSize:width*0.023,fontFamily:"Nunito_Bold",color:"#212121",marginLeft:width*0.07}}>find you on WineZap.</Text>

           <View style={{marginHorizontal:width*0.2,marginTop:height*0.025}}>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.037,color:"#757474"}}>Email Address</Text>
                   <Image source={assets.checkbox_active} style={{height:30,width:30}}/>
               </View>
                 <View style={{height:0.6,width:width*0.7,backgroundColor:"#757474",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.037,color:"#757474"}}>Phone Number/Contacts</Text>
                   <Image source={assets.checkbox} style={{height:30,width:30}}/>
               </View>
               <View style={{height:0.6,width:width*0.7,backgroundColor:"#757474",marginVertical:height*0.02,marginLeft:width*-0.05}}/>
               <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                   <Text style={{fontFamily:"Nunito_SemiBold",fontSize:width*0.037,color:"#757474"}}>Connected Accounts</Text>
                   <Image source={assets.checkbox} style={{height:30,width:30}}/>
               </View>
           </View>

           <View style={{height:1,width:width*1,marginTop:height*0.03,backgroundColor:"#bdbbbb"}}/>
             
             <TouchableOpacity onPress={()=>navigation.navigate("BlockedUsers")}>
           <View style={{height:height*0.07,width:width*0.86,flexDirection:"row",alignItems:"center",marginHorizontal:width*0.07,justifyContent:"space-between"}}>
          <Text style={{fontFamily:"Nunito_ExtraBold",fontSize:width*0.055,color:"#858585"}}>Blocked Users</Text>
          <Image source={assets.arrow_right} style={{height:25,width:25,resizeMode:"contain",marginLeft:width*0.3}}/>
        </View>
        </TouchableOpacity>
        <View style={{height:1,width:width*1,backgroundColor:"#bdbbbb",marginBottom:height*0.1}}/>
        </View>
        
        </ScrollView>
    )
}
export default Privacy;