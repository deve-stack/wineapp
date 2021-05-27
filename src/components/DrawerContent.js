import React,{  } from "react";
import { Image, Text, View,Dimensions ,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as assets from '../components/assets'

const DrawerContent=({})=>{
    const{height,width}=Dimensions.get('window')
    const navigation=useNavigation();
    return(
        <View style={{flex:1}}>
            <Image source={assets.WineZap_small} style={{alignSelf:"center",marginTop:height*0.03}}/>
            <View style={{flexDirection:'row',alignItems:"center",marginTop:height*0.02}}>
            <Image source={assets.image3} style={{height:50,width:50,borderRadius:25,marginLeft:width*0.05}}/>
            <Text style={{fontFamily:"Nunito_Black",marginLeft:width*0.02,fontSize:16}}>Joshwines</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('NotificationScreen1')}>
            <Image source={assets.notification_unread} style={{height:25,width:25,marginLeft:width*0.15}}/>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:height*0.05}}/>
            <TouchableOpacity onPress={()=>navigation.navigate("AllLive")}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <Image source={assets.sidebar_video} style={{height:20,width:30,marginLeft:width*0.08,resizeMode:"contain"}}/>
              <Text style={{fontSize:20,fontFamily:"Nunito_Bold",marginLeft:width*0.06}}>Live</Text>
            </View>
            </TouchableOpacity>
            <View style={{height:1,width:width*0.6,backgroundColor:"#b2b4b8",marginTop:height*0.02}}/>
            <TouchableOpacity onPress={()=>navigation.navigate("SearchScreen")}>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.02}}>
              <Image source={assets.sidebar_search} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
              <Text style={{fontSize:20,fontFamily:"Nunito_Bold",marginLeft:width*0.06}}>Search</Text>
            </View>
            </TouchableOpacity>
            <View style={{height:1,width:width*0.6,backgroundColor:"#b2b4b8",marginTop:height*0.02}}/>
            <TouchableOpacity onPress={()=>navigation.navigate("UserProfile")}>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.02}}>
              <Image source={assets.sidebar_rating} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
              <Text style={{fontSize:20,fontFamily:"Nunito_Bold",marginLeft:width*0.06}}>My Ratings</Text>
            </View>
            </TouchableOpacity>
            <View style={{height:1,width:width*0.6,backgroundColor:"#b2b4b8",marginTop:height*0.02}}/>
            <TouchableOpacity onPress={()=>navigation.navigate("ChatScreen",{screen:"button2"})}>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.02}}>
              <Image source={assets.sidebar_group} style={{height:22,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
              <Text style={{fontSize:20,fontFamily:"Nunito_Bold",marginLeft:width*0.06}}>Groups</Text>
            </View>
            </TouchableOpacity>
            <View style={{height:1,width:width*0.6,backgroundColor:"#b2b4b8",marginTop:height*0.02}}/>
            <TouchableOpacity onPress={()=>navigation.navigate("ChatScreen",{screen:"button2"})}>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.02}}>
              <Image source={assets.sidebar_mentions} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
              <Text style={{fontSize:20,fontFamily:"Nunito_Bold",marginLeft:width*0.06}}>Mentions</Text>
            </View>
            </TouchableOpacity>
            <View style={{height:1,width:width*0.6,backgroundColor:"#b2b4b8",marginTop:height*0.02}}/>
            <TouchableOpacity onPress={()=>navigation.navigate('SettingScreen')}>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.02}}>
              <Image source={assets.sidebar_setting} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
              <Text style={{fontSize:20,fontFamily:"Nunito_Bold",marginLeft:width*0.06}}>Settings</Text>
            </View>
            </TouchableOpacity>
            <View style={{height:1,width:width*0.6,backgroundColor:"#b2b4b8",marginTop:height*0.02}}/>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.02}}>
              <Image source={assets.signout1} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
              <Text style={{fontSize:20,fontFamily:"Nunito_Bold",marginLeft:width*0.06}}>Sign Out</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}
export default DrawerContent;