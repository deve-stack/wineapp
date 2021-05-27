import React from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, FlatList} from 'react-native'
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const{height,width}=Dimensions.get('window')

const Sponsor=({navigation})=>{
    return(
        <View style={{backgroundColor:"#EFEFEF",flex:1}}>
           <View style={{marginLeft:width*0.07,marginRight:width*0.05,marginTop:height*0.05}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                 <Image source={assets.close} style={{height:height*0.06,width:height*0.06,resizeMode:"contain"}}/>
                 <Text style={{fontFamily:"Nunito_ExtraBold",fontSize:width*0.055}}>Sponsor Joshwines</Text>
                 <Text style={{fontFamily:"Nunito_Bold",color:"#C45FA5",fontSize:width*0.05}}>Follow</Text>
              </View>
           </View>
           <View style={{marginHorizontal:width*0.07,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:height*0.02}}>
              <View>
                 <Image source={assets.image3} style={{height:120,width:120,borderRadius:60}}/>
              </View>
              <View style={{height:90,width:170,borderRadius:20,backgroundColor:"white",borderWidth:2,borderColor:"#C45FA5",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                  <Text style={{fontSize:25,color:"#C45FA5",fontFamily:"Nunito_Bold"}}>$3.99</Text>
                  <Text style={{color:"#C45FA5",fontFamily:"Nunito_ExtraBold",marginTop:5}}> month</Text>
              </View>
           </View>
           <View style={{marginHorizontal:width*0.07,marginTop:height*0.03}}>
               <TouchableOpacity onPress={()=>navigation.navigate("Checkout")}>
               <View style={{height:height*0.07,backgroundColor:"#961F63",justifyContent:'center',alignItems:"center",borderRadius:30}}>
                   <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:width*0.06}}>Continue to Checkout</Text>
               </View>
               </TouchableOpacity>
           </View>
           <View style={{marginLeft:width*0.07,marginTop:height*0.25}}>
               <View style={{flexDirection:"row"}}>
               <Text style={{fontSize:width*0.042,fontFamily:"Nunito_ExtraBold",color:"#302f30"}}>Odio quia </Text>
               <Text style={{color:"#545254",fontFamily:"Nunito_Bold",fontSize:width*0.04}}>et aut quibusdam li quibusdam</Text>
               </View>
               <Text style={{color:"#545254",fontFamily:"Nunito_Bold",fontSize:width*0.04}}>libero provident eos! Neque quas quia</Text>
               <Text style={{color:"#545254",fontFamily:"Nunito_Bold",fontSize:width*0.04}}>pariatur harum debitis non nihil.</Text>

               <Text style={{color:"#545254",fontFamily:"Nunito_Bold",marginTop:height*0.02,fontSize:width*0.04}}>Et aut quibusdam li quibusdam libero</Text>
               <Text style={{color:"#545254",fontFamily:"Nunito_Bold",fontSize:width*0.04}}>provident eos! Neque quas quia pariatur</Text>
               <Text style={{color:"#545254",fontFamily:"Nunito_Bold",fontSize:width*0.04}}>harum debitis non nihil.</Text>
           </View>
           <View style={{marginHorizontal:width*0.15,justifyContent:"space-between",flexDirection:"row",marginTop:height*0.03}}>
               <Text style={{fontSize:width*0.055,textDecorationLine:"underline",color:"#80084c",fontFamily:"Nunito_Bold"}}>Refund Policy.</Text>
               <Text style={{fontSize:width*0.055,textDecorationLine:"underline",color:"#80084c",fontFamily:"Nunito_Bold"}}>Terms</Text>
           </View>
        </View>
    )
}
export default Sponsor;