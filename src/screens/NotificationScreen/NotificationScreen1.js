import React,{  } from "react";
import { Text, View ,Dimensions, Image, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as assets from "../../components/assets";
import { useNavigation } from "@react-navigation/native";
const NotificationScreen1=({navigation})=>{
    const{height,width}=Dimensions.get("window")
    // const navigation=useNavigation();
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:"row",marginTop:height*0.05,marginLeft:width*0.07,alignItems:"center"}}>
                <TouchableOpacity onPress={()=>navigation.navigate('drawerNavigator')}>
               <Image source={assets.btn_back}/>
               </TouchableOpacity>
               <Text style={{fontSize:22,marginLeft:width*0.15,fontFamily:"Nunito_Bold"}}>Notifications</Text>
               <Image source={assets.notification} style={{height:23,width:23,marginLeft:width*0.03,resizeMode:"contain",marginTop:5}}/>
            </View>
            <ScrollView>
            <View>
            <View style={{height:height*0.14,backgroundColor:'#e6d7ca',marginTop:height*0.03,borderBottomWidth:1,borderColor:"#d1d1d1"}}>
              <Text style={{marginLeft:width*0.07,fontSize:width*0.044,fontFamily:"Nunito_Black",marginTop:height*0.02,color:"#212121"}}>Lorem quas quia pariatur harum debitis </Text>
              <Text style={{marginLeft:width*0.07,fontSize:width*0.044,fontFamily:"Nunito_Black"}}>non nihil. </Text>
              <Text style={{color:"#de1b8c",marginLeft:width*0.65,fontSize:20}} onPress={()=>navigation.navigate('NotificationScreen2')}>Review This</Text>
            </View>
            <View style={{height:height*0.12,marginTop:height*0.03,borderBottomWidth:1,borderColor:"#d1d1d1"}}>
              <Text style={{marginLeft:width*0.07,fontSize:width*0.044,fontFamily:"Nunito_SemiBold"}}>Lorem quas quia pariatur harum debitis </Text>
              <Text style={{marginLeft:width*0.07,fontSize:width*0.044,fontFamily:"Nunito_SemiBold"}}>non nihil </Text>
              <Text style={{color:"#CB71AE",marginLeft:width*0.65,fontSize:20,fontFamily:"Nunito_SemiBold"}}>Review This</Text>
            </View>
            <View style={{height:height*0.09,marginTop:height*0.03,borderBottomWidth:1,borderColor:"#d1d1d1"}}>
              <Text style={{marginLeft:width*0.07,fontSize:width*0.044,fontFamily:"Nunito_SemiBold",color:"#212121"}}>Lorem quas quia pariatur harum debitis </Text>
              <Text style={{marginLeft:width*0.07,fontSize:width*0.044,fontFamily:"Nunito_SemiBold"}}>non nihil </Text>
            </View>
            <View style={{height:height*0.12,marginTop:height*0.03,borderBottomWidth:1,borderColor:"#d1d1d1",flexDirection:"row"}}>
             <Image source={assets.image3} style={{height:width*0.14,width:width*0.14,borderRadius:width*0.07,marginLeft:width*0.07}}/>
                <Text style={{fontSize:height*0.025,color:"#961F63",marginLeft:width*0.05,marginTop:height*0.01,fontFamily:"Nunito_Bold"}}>Neque </Text>
              <Text style={{fontSize:height*0.025,marginTop:height*0.01,fontFamily:"Nunito_SemiBold"}}>followed you. </Text>
              <Text  style={{fontSize:height*0.026,color:"#CB71AE",marginTop:height*0.05,marginLeft:width*0.03,fontFamily:"Nunito_SemiBold"}}>Follow</Text>
            </View>
            <View style={{height:height*0.06,marginTop:height*0.03,borderBottomWidth:1,borderColor:"#d1d1d1"}}>
              <Text style={{marginLeft:width*0.07,fontSize:width*0.044,fontFamily:"Nunito_SemiBold",color:"#212121"}}>Lorem quas quia pariatur harum debitis </Text>
             
            </View>
            <View style={{height:height*0.06,marginTop:height*0.03,borderBottomWidth:1,borderColor:"#d1d1d1"}}>
              <Text style={{marginLeft:width*0.07,fontSize:width*0.044,fontFamily:"Nunito_SemiBold",color:"#212121"}}>Lorem quas quia pariatur harum debitis </Text>
            
            </View>
            <View style={{height:height*0.06,marginTop:height*0.03,borderBottomWidth:1,borderColor:"#d1d1d1"}}>
              <Text style={{marginLeft:width*0.07,fontSize:width*0.044,fontFamily:"Nunito_SemiBold",color:"#212121"}}>Lorem quas quia pariatur harum debitis </Text>
              </View>
             
            </View>
            </ScrollView>
        </View>
    )
}
export default NotificationScreen1;