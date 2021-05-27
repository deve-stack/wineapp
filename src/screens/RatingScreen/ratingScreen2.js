import React,{  } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView } from "react-native";
import * as assets from "../../components/assets";
import { DrawerActions } from "@react-navigation/native";

const ratingScreen2=()=>{
    const{height,width}=Dimensions.get('window')
    
    return(
        
        <View style={{flex:1,backgroundColor:"#e3e3e3"}}>
            <ScrollView style={{flex:1,marginBottom:20}}>
            <View style={{flex:1}}>
           <View style={{flexDirection:"row" ,marginTop:height*0.05,marginLeft:width*0.1,alignItems:"center"}}>
           <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} />
            </TouchableOpacity>
            <Text style={{fontSize:20,fontFamily:"Nunito_Bold",marginLeft:width*0.13,color:"#363434"}}>Rate A Wine</Text>
            </View>
           <Text style={{fontSize:14,fontFamily:"Nunito_Black",textAlign:'center',marginTop:height*0.05}}>Castello di Amorosa La Castellana</Text>
           <Text style={{fontSize:14,fontFamily:"Nunito_Black",textAlign:'center'}}>Reserve Super Tuscan Blend</Text>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.03,marginLeft:width*0.1}}>
            <View style={{height:height*0.15,width:width*0.25,elevation:5,justifyContent:"center",alignItems:"center",borderRadius:10,backgroundColor:"#ffffff"}}>
                   <Image source={assets.add_image} style={{height:40,width:60}}/>
               </View>
               <View style={{height:height*0.17,width:width*0.52,borderWidth:0.7,borderColor:"#f266ae",borderRadius:10,marginLeft:width*0.03,backgroundColor:"#ffffff"}}>
                   <TextInput placeholder="Describe your experience" 
                   multiline={true}
                   style={{flex:1,paddingBottom:90,fontSize:12,paddingLeft:15}}/>
               </View>
               </View>
               <Text style={{marginLeft:width*0.1,marginTop:height*0.03,fontSize:16,fontFamily:"Nunito_Bold",color:"#6b696b"}}>Rating</Text>
               <View style={{flexDirection:'row',alignItems:"center",marginHorizontal:width*0.1}}>
                  <Text style={{color:'#800042',fontFamily:'Nunito_Bold',fontSize:18}}>0</Text>
                  <Image source={assets.rating_scale} style={{height:17,width:170,marginLeft:10}}/>
                  <Text style={{color:'#800042',fontFamily:'Nunito_Bold',fontSize:18,marginLeft:10}}>10</Text>
                  <View style={{height:35,width:45,borderWidth:0.8,borderColor:"#f266ae",justifyContent:"center",alignItems:"center",marginLeft:18,borderRadius:5,backgroundColor:"#ffffff"}}>
                  <Text style={{color:'#f266ae',fontFamily:'Nunito_Bold',fontSize:18}}>5.5</Text>
                  </View>
               </View>
               <Text style={{marginLeft:width*0.1,marginTop:height*0.03,fontSize:16,fontFamily:"Nunito_Bold",color:"#6b696b"}}>What do you taste?</Text>
               <View style={{flexDirection:'row',marginHorizontal:width*0.1,marginTop:15}}>
               <Image source={assets.plus_button} style={{height:50,width:50}}/>
               <View style={{flexDirection:'row',height:height*0.07,width:width*0.3,backgroundColor:"#a10d6a",justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,marginLeft:5}}>
             <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:18}}>Lorem</Text>
               <Image source={assets.close3x}/>
           </View>
           <View style={{flexDirection:'row',height:height*0.07,width:width*0.3,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:5}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:18}}>Cabernet</Text>
           </View>
               </View>
               <View style={{flexDirection:'row',marginHorizontal:width*0.1,marginTop:15}}>
               <View style={{flexDirection:'row',height:height*0.07,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:5}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:18}}>Tannic</Text>
           </View>
               <View style={{flexDirection:'row',height:height*0.07,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:5}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:18}}>Floral</Text>
           </View>
           <View style={{flexDirection:'row',height:height*0.07,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:5}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:18}}>Smooth</Text>
           </View>
               </View>
               <View style={{width:width*0.8,height:height*0.07,backgroundColor:"#f576cb",marginTop:height*0.08,alignSelf:"center",justifyContent:"center",alignItems:"center",borderRadius:30}}>
                   <Text style={{fontSize:18,color:"white",fontFamily:"Nunito_Bold"}}>Publish</Text>
               </View>
               </View>
               </ScrollView>
        </View>
        
    )
}
export default ratingScreen2;