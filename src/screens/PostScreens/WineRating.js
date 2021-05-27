import React,{ useState } from "react";
import { 
    Text,
     View ,
     Dimensions, 
     Image,
     TouchableOpacity,
     ScrollView,
     FlatList,
     Modal,
     TextInput
    } from "react-native";
import * as assets from "../../components/assets";

const WineRating=()=>{
    const{height,width}=Dimensions.get('window')
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:"row" ,marginTop:height*0.05,marginLeft:width*0.1,alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} />
            </TouchableOpacity>
            <Text style={{fontSize:20,fontFamily:"Nunito_Bold",marginLeft:width*0.13,color:"#363434"}}>Rate A Wine</Text>
            </View>
            <View style={{flexDirection:"row",marginHorizontal:width*0.1,alignItems:"center",marginTop:height*0.03,borderWidth:1,borderColor:"pink",height:height*0.07}}>
            <Image source={assets.sidebar_search} style={{height:20,width:20,marginLeft:10}}/>
            <TextInput 
            placeholder="Wine "
            style={{flex:1,paddingLeft:10,fontSize:16}}
            />
            <Image source={assets.scan_camera} style={{height:21,width:25,marginRight:10}}/>
            </View>
              <View style={{flexDirection:"row",marginHorizontal:width*0.1,marginVertical:height*0.03,justifyContent:"space-around"}}>
                  <View style={{height:height*0.15,width:width*0.25,elevation:10,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                  <Image source={assets.add_image} style={{height:40,width:60}}/>
                  </View>
                  <View style={{height:height*0.15,width:width*0.25,elevation:10,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                      <TextInput
                      placeholder="Describe your experience"
                      style={{flex:1}}
                      />
                  </View>
              </View>
        </View>
    )
}
export default WineRating;