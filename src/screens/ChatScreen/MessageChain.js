import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const MessageChain=({navigation})=>{
    
    return(
      <ScrollView style={{}}>
       <View style={{flex:1,backgroundColor:"#f5e4e4"}}>
           <View style={{height:height*0.84,backgroundColor:"white",borderBottomLeftRadius:40,borderBottomRightRadius:40}}> 
           <View style={{marginTop:height*0.06,marginHorizontal:width*0.07,justifyContent:"space-between",flexDirection:"row"}}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={assets.btn_back} style={{height:20,width:45,resizeMode:"contain"}}/> 
            </TouchableOpacity>
            <Text style={{fontSize:width*0.05,fontFamily:"Nunito_ExtraBold"}}>Nequewine35</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("NewMessage")}>
            <Image source={assets.overflow} style={{height:25,width:25,resizeMode:"contain"}}/> 
            </TouchableOpacity>
       </View>
       <Text style={{textAlign:"center",color:"#d1478e",fontFamily:'Nunito_Bold'}}>Online</Text>
       
       <View style={{flexDirection:"row",alignItems:"flex-end",marginTop:height*0.01}}>
         <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06,marginLeft:width*0.03}}/>
       <View style={{height:height*0.16,width:width*0.65,borderRadius:15,backgroundColor:"#edebeb",marginLeft:width*0.03,marginTop:height*0.01}}>
           <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.04,fontFamily:"Nunito_Regular"}}>Vel repudiandae enim</Text>
           <Text style={{marginLeft:width*0.03,fontSize:width*0.04,fontFamily:"Nunito_Regular"}}>perspiciatis maiores quisquam</Text> 
           <View style={{flexDirection:"row",marginLeft:width*0.03}}>
               <Text>Voluptus Voluptus</Text>
               <Text style={{fontFamily:"Nunito_Black",color:"#d1478e"}}>Castello di</Text>
           </View>
           <Text style={{fontFamily:"Nunito_Black",color:"#d1478e",marginLeft:width*0.03}}>Amorosa La Castellana</Text>
           <Text style={{fontFamily:"Nunito_Black",color:"#d1478e",marginLeft:width*0.03}}>Reserve Super Tuscan Blend </Text>
       </View>
       </View>
       
       <View style={{flexDirection:"row",marginTop:height*0.01,backgroundColor:"#f5e4e4",height:height*0.15,width:width*1,alignItems:"center"}}>
          <Image source={assets.wine_image4} style={{height:width*0.23,width:width*0.23,borderRadius:10,marginLeft:width*0.07}}/>
          <View style={{flexDirection:"column",marginLeft:width*0.03}}>
            <Text style={{color:"#4d0d2d",fontFamily:"Nunito_Black",fontSize:width*0.034}}>2017 Castellana di Amorosa La</Text>
            <Text style={{color:"#4d0d2d",fontFamily:"Nunito_Black",fontSize:width*0.034}}>Castellana Reserve Super Tuscan </Text>
            <Text style={{color:"#4d0d2d",fontFamily:"Nunito_Black",fontSize:width*0.034}}>Blend</Text>
            <Text style={{color:"#9c1366",fontFamily:"Nunito_Black",fontSize:width*0.05,marginTop:5}}>8.5/10</Text>
          </View>
        </View>
             
             <View style={{height:height*0.1,width:width*0.6,alignSelf:"flex-end",backgroundColor:"#d955a9",borderRadius:15,marginTop:height*0.04,marginRight:width*0.03}}>
                 <Text style={{marginLeft:width*0.03,color:"white",fontFamily:"Nunito_Regular"}}>et inventore magni et </Text>
                 <View style={{flexDirection:'row'}}>
                 <Text style={{marginLeft:width*0.03,color:"#575757",fontFamily:"Nunito_ExtraBold"}}>voluptatus </Text>
                 <Text style={{color:"white",fontFamily:"Nunito_Regular"}}>et inventore dolor</Text>
                 </View>
                 <Text style={{marginLeft:width*0.03,color:"white",fontFamily:"Nunito_Regular"}}>ipsum sit emet</Text>
             </View>

             <View style={{flexDirection:"row",alignItems:"flex-end",marginTop:height*0.03}}>
         <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06,marginLeft:width*0.03}}/>
       <View style={{height:height*0.11,width:width*0.65,borderRadius:15,backgroundColor:"#edebeb",marginLeft:width*0.03,marginTop:height*0.01}}>
           <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.04,fontFamily:"Nunito_Regular"}}>et inventore magni et</Text>
           <Text style={{marginLeft:width*0.03,fontSize:width*0.04,fontFamily:"Nunito_Regular"}}>voluptatus et inventore dolor</Text> 
           <Text style={{marginLeft:width*0.03,fontSize:width*0.04,fontFamily:"Nunito_Regular"}}>ipsum sit emet</Text> 
      </View>
        </View>
        </View>

        <View style={{height:height*0.16}}>
        <View style={{marginHorizontal:width*0.05,flexDirection:'row',backgroundColor:"white",justifyContent:'space-between',borderBottomRightRadius:30,borderTopRightRadius:30,borderTopLeftRadius:10,borderBottomLeftRadius:10,marginTop:height*0.05}}>
            <Image source={assets.plus_sd} style={{height:20,width:20,resizeMode:"contain",alignSelf:'center',marginLeft:width*0.03}}/>
             <View>
            <TextInput placeholder="Message" style={{flex:1,width:width*0.55,fontFamily:"Nunito_Bold",paddingLeft:10,fontSize:width*0.045}}/>
            </View>
            <View style={{height:height*0.07,width:width*0.25,backgroundColor:"#f056bd",borderRadius:30,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Send</Text>
            </View>
         </View>
        </View>
        
        </View>
        </ScrollView>
    )
}
export default MessageChain;