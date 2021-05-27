import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const ScanError=()=>{
    return(
        <View style={{flex:1,}}>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} style={{marginTop:height*0.07,marginLeft:width*0.07}}/> 
            </TouchableOpacity>
          <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,textAlign:"center",marginTop:height*-0.03}}>Scan Error</Text>
          <Image source={assets.scan_error} style={{height:40,width:40,resizeMode:"contain",alignSelf:"center",marginTop:height*0.2 }}/>
          <Text style={{fontSize:width*0.07,marginLeft:width*0.22,color:"#4d4d4d",marginTop:5}}>Couldn't read the</Text>
          <Text style={{fontSize:width*0.07,marginLeft:width*0.22,color:"#4d4d4d"}}>label or barcode.</Text>
          <View style={{height:height*0.07,width:width*0.65,backgroundColor:"#f266ae",flexDirection:"row",alignItems:"center",alignSelf:"center",borderRadius:30,marginTop:height*0.05}}>
          <Image source={assets.camera_white} style={{height:25,width:25,resizeMode:'contain',marginLeft:width*0.15}}/> 
          <Text style={{color:"white",fontSize:width*0.05,fontFamily:"Nunito_Bold",marginLeft:width*0.04}}>Try Again</Text>
          </View>
          <Text style={{textAlign:"center",marginVertical:height*0.02,fontSize:width*0.04}}>or</Text>
          <Text style={{color:"#c73487",textAlign:"center",textDecorationLine:"underline",fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Search By Keywords</Text>
        </View>
    )
}
export default ScanError;