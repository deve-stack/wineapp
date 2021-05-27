import React from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, FlatList} from 'react-native'
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const CommentScreen=()=>{
    const{height,width}=Dimensions.get('window')
    return(
        <KeyboardAwareScrollView style={{flex:1,backgroundColor:"#e3e3e3"}}>
        <View style={{flex:1,backgroundColor:"#e3e3e3"}}>
           <View style={{flexDirection:'row',marginTop:height*0.04,marginHorizontal:width*0.07,alignItems:'center'}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={assets.btn_back}/>
              </TouchableOpacity>
              </View> 
              <Text style={{fontSize:25,fontFamily:"Nunito_Bold",textAlign:'center',marginTop:height*-0.03}}>8 Replies</Text>
            
            <ScrollView>
            <View style={{height:height*0.75}}>
              <View style={{flexDirection:'row',marginHorizontal:width*0.07,marginTop:height*0.03}}>
            <Image source={assets.image3} style={{height:40,width:40,borderRadius:20,marginTop:10}}/>
            <View style={{flexDirection:"column",marginLeft:10}}>
                <View style={{flexDirection:'row'}}>
                   <Text style={{fontSize:12,fontFamily:"Nunito_Bold"}}>Loremipsum . </Text>
                   <Text style={{fontSize:11,color:"#636060",marginTop:2}}>30 min ago </Text>
                </View>
                <Text style={{fontSize:width*0.029,color:"#636060"}}>Odio quia et aut @quibusdam li quibusdam </Text>
                <Text style={{fontSize:width*0.029,color:"#636060"}}>libero provident eos! Neque quas quia </Text>
                <Text style={{fontSize:width*0.029,color:"#636060"}}>paraitur harum debitis non nihil.</Text>
            </View>
            <View style={{flexDirection:"row",alignSelf:'flex-end',alignItems:'center',marginLeft:width*0.06}}>
            <Image source={assets.like} style={{height:20,width:20}}/>
            <Text style={{color:"#999696",marginLeft:3,fontFamily:"Nunito_Bold",marginTop:5}}>16</Text>
            </View>
         </View>
         <View style={{height:0.8,width:'90%',backgroundColor:"#858585",marginHorizontal:"5%",marginVertical:15}}/>

         <View style={{flexDirection:'row',marginHorizontal:width*0.07}}>
            <Image source={assets.image3} style={{height:40,width:40,borderRadius:20,marginTop:10}}/>
            <View style={{flexDirection:"column",marginLeft:10}}>
                <View style={{flexDirection:'row'}}>
                   <Text style={{fontSize:12,fontFamily:"Nunito_Bold"}}>Loremipsum . </Text>
                   <Text style={{fontSize:11,color:"#636060",marginTop:2}}>30 min ago </Text>
                </View>
                <Text style={{fontSize:width*0.029,color:"#636060"}}>Odio quia et aut @quibusdam li quibusdam </Text>
                <Text style={{fontSize:width*0.029,color:"#636060"}}>libero provident eos! Neque quas quia </Text>
                <Text style={{fontSize:width*0.029,color:"#636060"}}>paraitur harum debitis non nihil.</Text>
            </View>
            <View style={{flexDirection:"row",alignSelf:'flex-end',alignItems:'center',marginLeft:width*0.06}}>
            <Image source={assets.like} style={{height:20,width:20}}/>
            <Text style={{color:"#999696",marginLeft:3,fontFamily:"Nunito_Bold",marginTop:5}}>16</Text>
            </View>
            
         </View>
         <View style={{height:0.8,width:'90%',backgroundColor:"#858585",marginHorizontal:"5%",marginVertical:15}}/>

         </View>
         </ScrollView>

         <View style={{marginHorizontal:width*0.1,flexDirection:'row',backgroundColor:"white",justifyContent:'space-between',borderBottomRightRadius:30,borderTopRightRadius:30,borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
             <View>
            <TextInput placeholder="Leave a Comment" style={{flex:1,width:width*0.5,fontFamily:"Nunito_Bold",paddingLeft:20}}/>
            </View>
            <View style={{height:height*0.07,width:width*0.2,backgroundColor:"#f056bd",borderRadius:30,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:16}}>Post</Text>
            </View>
         </View>
        </View>
        </KeyboardAwareScrollView>
    )
}
export default CommentScreen;