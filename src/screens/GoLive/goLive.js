import React,{  } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity } from "react-native";
import * as assets from "../../components/assets";
import { DrawerActions } from "@react-navigation/native";

const GoLive=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    return(
        <View style={{flex:1,backgroundColor:"#EFEFEF"}}>
         
              <ScrollView>
              <View style={{marginBottom:20}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={assets.btn_back} style={{marginTop:height*0.05,marginLeft:width*0.1}}/>
            </TouchableOpacity>
            <Text style={{fontSize:20,fontFamily:"Nunito_Bold",color:"#363434",textAlign:"center",marginTop:-height*0.03}}>Go Live</Text>
            <View style={{flexDirection:"row",height:height*0.07,width:width*0.8,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,marginTop:height*0.04,marginLeft:width*0.1,alignItems:"center",backgroundColor:"#ffffff"}}>
               <TextInput placeholder="Stream title" style={{marginLeft:width*0.05,fontSize:16}}/>
             </View>
             <Text style={{marginLeft:width*0.1,marginTop:height*0.03,fontSize:16,fontFamily:"Nunito_ExtraBold",color:"#707070"}}>Stream Tags</Text>
             <View style={{flexDirection:'row',marginHorizontal:width*0.1,marginTop:15}}>
               <Image source={assets.plus_button} style={{height:50,width:50}}/>
               <View style={{flexDirection:'row',height:height*0.07,width:width*0.3,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:5}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:18}}>Tasting</Text>
           </View>
           <View style={{flexDirection:'row',height:height*0.07,width:width*0.3,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:5}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:18}}>Review</Text>
           </View>
               </View>
               <View style={{flexDirection:'row',marginHorizontal:width*0.1,marginTop:15}}>
               <View style={{flexDirection:'row',height:height*0.07,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:5}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:18}}>Red</Text>
           </View>
               <View style={{flexDirection:'row',height:height*0.07,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:5}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:18}}>Floral</Text>
           </View>
           <View style={{flexDirection:'row',height:height*0.07,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:5}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:18}}>Smooth</Text>
           </View>
               </View>
               <Text style={{marginTop:height*0.08,fontFamily:"Nunito_ExtraBold",color:"#787575",marginLeft:width*0.1}}>Sharing a wine today?  Search or scan  it here.</Text>
               <View style={{flexDirection:"row",height:height*0.07,width:width*0.8,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,marginTop:height*0.025,marginLeft:width*0.1,alignItems:"center",backgroundColor:"#ffffff"}}>
            <Image source={assets.sidebar_search} style={{height:18,width:18,marginLeft:width*0.05}}/>
            <TextInput placeholder="Search" style={{marginLeft:width*0.05,fontSize:18}}/>
            <Image source={assets.scan_camera} style={{height:20,width:24,marginLeft:width*0.38}}/>
            </View>
            <View style={{marginTop:height*0.2}}>
            <TouchableOpacity onPress={()=>navigation.navigate("AllLive")}>
            <View style={{width:width*0.8,height:height*0.07,backgroundColor:"#C45FA5",alignSelf:"center",justifyContent:"center",alignItems:"center",borderRadius:30}}>
                   <Text style={{fontSize:width*0.05,color:"white",fontFamily:"Nunito_Bold",letterSpacing:1}}>Start Stream</Text>
               </View>
               </TouchableOpacity>
            </View>
            
               </View>
               </ScrollView>
         
        </View>
    )
}
export default GoLive;