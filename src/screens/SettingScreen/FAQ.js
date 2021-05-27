import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView,Modal,TouchableOpacity} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const FAQscreen=({navigation})=>{
    const[show,setShow]=useState(false)
  
    return(
      <ScrollView>
        <View style={{flex:1,}}>
        <View style={{marginTop:height*0.07,marginLeft:width*0.07,flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={assets.btn_back} style={{height:20,width:45,resizeMode:"contain"}}/> 
            </TouchableOpacity>
           
            <View style={{marginLeft:width*0.25}}>
            <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06}}>FAQ</Text>
            </View>
            </View>
           
           <View style={{marginHorizontal:width*0.08,marginTop:height*0.03}}>
             <View style={{height:height*0.13,width:width*0.84,borderWidth:0.7,borderColor:"#f266ae",borderRadius:10}}>
                 <Text style={{marginLeft:width*0.03,marginTop:height*0.01,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>Eos voluptetum non animi commodi</Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>quae. Pariatur enim porro voluptate quos </Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>voloptus Pariatur ut voloptus officiis. </Text>
                 <Image source={assets.dropdown_arrow} style={{height:12,width:12,resizeMode:"contain",alignSelf:"flex-end",marginRight:width*0.03}}/>
             </View>
         </View>

         <View style={{marginHorizontal:width*0.08,marginTop:height*0.03}}>
             <View style={{height:show==false? height*0.13:height*0.26,width:width*0.84,borderWidth:0.7,borderColor:"#f266ae",borderRadius:10}}>
                 <Text style={{marginLeft:width*0.03,marginTop:height*0.01,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>Eos voluptetum non animi commodi</Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>quae. Pariatur enim porro voluptate quos </Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>voloptus Pariatur ut voloptus officiis. </Text>
                 {show==false?
                 <View style={{alignSelf:"flex-end",marginRight:width*0.03}}>
                 <TouchableOpacity onPress={()=>setShow(true)}>
                 <Image source={assets.dropdown_arrow} style={{height:12,width:12,resizeMode:"contain"}}/>
                 </TouchableOpacity>
                 </View>:
                 <View style={{alignSelf:"flex-end",marginRight:width*0.03}}>
                 <TouchableOpacity onPress={()=>setShow(false)}>
                 <Image source={assets.dropdown_up} style={{height:12,width:12,resizeMode:"contain"}}/>
                 </TouchableOpacity>
                 </View>
                 }
                 {show==true &&
                 <View>
                     <View style={{height:0.5,width:width*0.84,backgroundColor:"#a8a8a8",marginVertical:height*0.01}}/>
                     <Text style={{marginLeft:width*0.03,fontSize:width*0.027,fontFamily:'Nunito_Bold'}}>Dolorem doloribus tenetur nemo aut et et vel. Dolor</Text>
                     <Text style={{marginLeft:width*0.03,fontSize:width*0.027,fontFamily:'Nunito_Bold'}}>doorem doloribus tenetur nemo aut et et vel. Dolor</Text>
                     <Text style={{marginLeft:width*0.03,fontSize:width*0.027,fontFamily:'Nunito_Bold'}}>doorem doloribus tenetur nemo aut et et vel. Dolor</Text>
                     <Text style={{marginLeft:width*0.03,fontSize:width*0.027,fontFamily:'Nunito_Bold'}}>doorem doloribus tenetur nemo aut et et vel. Dolor</Text>
                     <Text style={{marginLeft:width*0.03,fontSize:width*0.027,fontFamily:'Nunito_Bold'}}>doorem doloribus tenetur nemo.</Text>
                </View>
               }
             </View>
         </View>

         <View style={{marginHorizontal:width*0.08,marginTop:height*0.03}}>
             <View style={{height:height*0.13,width:width*0.84,borderWidth:0.7,borderColor:"#f266ae",borderRadius:10}}>
                 <Text style={{marginLeft:width*0.03,marginTop:height*0.01,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>Eos voluptetum non animi commodi</Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>quae. Pariatur enim porro voluptate quos </Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>voloptus Pariatur ut voloptus officiis. </Text>
                 <Image source={assets.dropdown_arrow} style={{height:12,width:12,resizeMode:"contain",alignSelf:"flex-end",marginRight:width*0.03}}/>
             </View>
         </View>

         <View style={{marginHorizontal:width*0.08,marginTop:height*0.03}}>
             <View style={{height:height*0.13,width:width*0.84,borderWidth:0.7,borderColor:"#f266ae",borderRadius:10}}>
                 <Text style={{marginLeft:width*0.03,marginTop:height*0.01,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>Eos voluptetum non animi commodi</Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>quae. Pariatur enim porro voluptate quos </Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>voloptus Pariatur ut voloptus officiis. </Text>
                 <Image source={assets.dropdown_arrow} style={{height:12,width:12,resizeMode:"contain",alignSelf:"flex-end",marginRight:width*0.03}}/>
             </View>
         </View>

         <View style={{marginHorizontal:width*0.08,marginTop:height*0.03}}>
             <View style={{height:height*0.13,width:width*0.84,borderWidth:0.7,borderColor:"#f266ae",borderRadius:10}}>
                 <Text style={{marginLeft:width*0.03,marginTop:height*0.01,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>Eos voluptetum non animi commodi</Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>quae. Pariatur enim porro voluptate quos </Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>voloptus Pariatur ut voloptus officiis. </Text>
                 <Image source={assets.dropdown_arrow} style={{height:12,width:12,resizeMode:"contain",alignSelf:"flex-end",marginRight:width*0.03}}/>
             </View>
         </View>
         
         <View style={{marginHorizontal:width*0.08,marginTop:height*0.03}}>
             <View style={{height:height*0.13,width:width*0.84,borderWidth:0.7,borderColor:"#f266ae",borderRadius:10}}>
                 <Text style={{marginLeft:width*0.03,marginTop:height*0.01,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>Eos voluptetum non animi commodi</Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>quae. Pariatur enim porro voluptate quos </Text>
                 <Text style={{marginLeft:width*0.03,marginTop:5,fontSize:width*0.038,fontFamily:'Nunito_Regular'}}>voloptus Pariatur ut voloptus officiis. </Text>
                 <Image source={assets.dropdown_arrow} style={{height:12,width:12,resizeMode:"contain",alignSelf:"flex-end",marginRight:width*0.03}}/>
             </View>
         </View>
        </View>
        
        </ScrollView>
    )
}
export default FAQscreen;