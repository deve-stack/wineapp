import React,{  } from "react";
import { Text, View ,Dimensions, Image, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as assets from "../../components/assets";
import { useNavigation } from "@react-navigation/native";

const NotificationScreen2=({navigation})=>{
    const{height,width}=Dimensions.get("window")
    // const navigation=useNavigation();
    return(
        <View style={{flex:1}}>
            
          <View style={{flexDirection:"row",marginTop:height*0.05,marginLeft:width*0.07,alignItems:"center"}}>
                <TouchableOpacity onPress={()=>navigation.navigate('NotificationScreen1')}>
               <Image source={assets.btn_back}/>
               </TouchableOpacity>
               <Text style={{fontSize:22,marginLeft:width*0.15,fontFamily:"Nunito_Bold"}}>Notifications</Text>
               <Image source={assets.notification} style={{height:25,width:25,marginLeft:width*0.03}}/>
            </View>
            <ScrollView>
            <View style={{flex:1,marginBottom:20}}>
            <Text style={{marginLeft:width*0.07,fontSize:17,marginTop:height*0.05,color:"#C666A9",fontFamily:"Nunito_ExtraBold"}}>Welcome to WineZap!</Text>
            <Text style={{marginLeft:width*0.07,fontSize:width*0.04,marginTop:5,fontFamily:"Nunito_SemiBold",color:"#212121"}}>Your notifications will appear here, and will</Text>
            <Text style={{marginLeft:width*0.07,fontSize:width*0.04,fontFamily:"Nunito_SemiBold",color:"#212121"}}>also be pushed to your device. You can</Text>
            <Text style={{marginLeft:width*0.07,fontSize:width*0.04,fontFamily:"Nunito_SemiBold",color:"#212121"}}>adjust this in the settings menu.</Text>
        </View>
        </ScrollView>
        </View>
    )
}
export default NotificationScreen2;