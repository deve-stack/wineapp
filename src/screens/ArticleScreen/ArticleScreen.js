
import React,{  } from "react";
import { 
    Text,
     View ,
     Dimensions, 
     Image,
     TouchableOpacity,
     ScrollView,
     FlatList
    } from "react-native";
import * as assets from "../../components/assets";


const ArticleScreen=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    return(
        <ScrollView>
        <View style={{flex:1}}>
          <View style={{flexDirection:'row',marginTop:height*0.035,marginLeft:width*0.1,alignItems:'center',marginRight:width*0.05,justifyContent:'space-between'}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={assets.btn_back}/>
              </TouchableOpacity>
              <Text style={{fontSize:25,fontFamily:"Nunito_Bold"}}>Article</Text>
              <Image source={assets.overflow} style={{height:5,width:25,marginTop:height*0.03}}/>
          </View> 
          
          <Text style={{textAlign:"right",marginRight:width*0.05,color:"#919090",marginTop:height*0.02}}>02/10/2020 </Text>
          <Image source={assets.article_image} style={{height:height*0.25,width:width*0.9,marginLeft:width*0.05,borderRadius:30,marginTop:height*0.01}}/>
          <View style={{flexDirection:"row",marginTop:height*0.02}}>
          <Image source={assets.image3} style={{height:40,width:40,borderRadius:20,marginLeft:width*0.05}}/>
          <View style={{flexDirection:"column",marginLeft:width*0.03,marginTop:height*0.01}}>
            <Text style={{fontSize:14,fontFamily:"Nunito_ExtraBold",color:"#474647"}}>Wine Enthusiast</Text>
            <Text style={{fontSize:17,color:"#de1b8c",fontFamily:"Nunito_Bold"}}>Follow</Text>
          </View>
          </View>
          <View style={{alignSelf:'flex-end',flexDirection:"row",marginRight:width*0.05,marginTop:height*-0.05}}>
          <Image source={assets.like} style={{height:20,width:20}}/>
                        <Text style={{marginLeft:width*0.015,color:"#7d7a7c"}}>16</Text>
                        <Image source={assets.comment} style={{height:20,width:20,marginLeft:width*0.07}}/>
                        <Text style={{marginLeft:width*0.015,color:"#7d7a7c"}}>8</Text>
                        </View>
          
          <Text style={{marginTop:height*0.03,marginLeft:width*0.05,fontSize:18,fontFamily:"Nunito_ExtraBold"}}>Distinctio omnis magnam</Text>
          <View style={{marginHorizontal:width*0.05}}>
          <Text style={{fontFamily:"Nunito_Regular"}}>A civil war in Yemen marked by foreign meddling has created an unparalleled humanitarian disaster with no end in sight, even if a truce were agreed upon.</Text>
          <Text style={{marginVertical:height*0.02,fontFamily:"Nunito_Regular"}}>Former President Ali Abdullah Saleh had ruled Yemen for 33 years, managing and exploiting its myriad internal conflicts to stay in power as kleptocrat-in-chief</Text>
          <Text style={{fontFamily:"Nunito_Regular"}}>Gulf Arab dynasties, alarmed by any whiff of democracy, arranged a soft landing for Saleh, inducing him to stand down in 2012 with immunity from prosecution and a continued political role.</Text>
          <Text style={{marginVertical:height*0.02,fontFamily:"Nunito_Regular"}}>They replaced him with his former deputy Abd-Rabbu Mansour Hadi as part of a United Nations-backed political transition dominated by established parties.</Text>
        </View>
        </View>
        
       
        </ScrollView>
    )
}
export default ArticleScreen;