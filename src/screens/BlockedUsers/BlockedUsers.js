import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const BlockedUsers=({navigation})=>{
  
    return(
      <ScrollView>
        <View style={{flex:1,}}>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} style={{marginTop:height*0.07,marginLeft:width*0.07}}/> 
            </TouchableOpacity>
          <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,textAlign:"center",marginTop:height*-0.03}}>Blocked Users</Text>
        
        <View style={{marginLeft:width*0.07,marginRight:width*0.05,marginTop:height*0.05,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
             <View style={{flexDirection:"row",alignItems:"center"}}>
               <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
               <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",marginLeft:10}}>Vesta.Moore</Text>
           </View>
           <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"#807e7e"}}>Unblock</Text>
        </View>
         <View style={{height:1,width:width*0.9,marginLeft:width*0.05,marginVertical:height*0.02,backgroundColor:"#a6a4a4"}}/>

         <View style={{marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
             <View style={{flexDirection:"row",alignItems:"center"}}>
               <Image source={assets.image3} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
               <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",marginLeft:10}}>Everado.OConne</Text>
           </View>
           <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"#807e7e"}}>Unblock</Text>
        </View>
         <View style={{height:1,width:width*0.9,marginLeft:width*0.05,marginVertical:height*0.02,backgroundColor:"#a6a4a4"}}/>

         <View style={{marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
             <View style={{flexDirection:"row",alignItems:"center"}}>
               <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
               <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",marginLeft:10}}>Stacey8</Text>
           </View>
           <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"#807e7e"}}>Unblock</Text>
        </View>
         <View style={{height:1,width:width*0.9,marginLeft:width*0.05,marginVertical:height*0.02,backgroundColor:"#a6a4a4"}}/>

         <View style={{marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
             <View style={{flexDirection:"row",alignItems:"center"}}>
               <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
               <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",marginLeft:10}}>Anissa.Pacocha</Text>
           </View>
           <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"#807e7e"}}>Unblock</Text>
        </View>
         <View style={{height:1,width:width*0.9,marginLeft:width*0.05,marginVertical:height*0.02,backgroundColor:"#a6a4a4"}}/>

         <View style={{marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
             <View style={{flexDirection:"row",alignItems:"center"}}>
               <Image source={assets.image3} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
               <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",marginLeft:10}}>Zackery78</Text>
           </View>
           <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"#807e7e"}}>Unblock</Text>
        </View>
         <View style={{height:1,width:width*0.9,marginLeft:width*0.05,marginVertical:height*0.02,backgroundColor:"#a6a4a4"}}/>

         <View style={{marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
             <View style={{flexDirection:"row",alignItems:"center"}}>
               <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
               <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",marginLeft:10}}>Vesta.Moore</Text>
           </View>
           <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"#807e7e"}}>Unblock</Text>
        </View>
         <View style={{height:1,width:width*0.9,marginLeft:width*0.05,marginVertical:height*0.02,backgroundColor:"#a6a4a4"}}/>

         <View style={{marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
             <View style={{flexDirection:"row",alignItems:"center"}}>
               <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
               <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",marginLeft:10}}>Anissa.Pacocha</Text>
           </View>
           <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"#807e7e"}}>Unblock</Text>
        </View>
         <View style={{height:1,width:width*0.9,marginLeft:width*0.05,marginVertical:height*0.02,backgroundColor:"#a6a4a4"}}/>
        </View>
    </ScrollView>
    )
}
export default BlockedUsers;