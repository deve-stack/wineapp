import React from "react";
import { View,Text,ScrollView, TouchableOpacity,  Image ,Dimensions} from "react-native";
import * as assets from './assets'
const {height,width}=Dimensions.get('window')
import { useNavigation } from "@react-navigation/native";

const Wines=({})=>{
 const navigation=useNavigation();
    return(
        <View style={{}}>
           <View style={{flexDirection:"row",marginTop:height*0.02}}>
              <View style={{height:width*0.25,width:width*0.25,backgroundColor:"#531039",borderRadius:15,justifyContent:"center",alignItems:"center",marginLeft:width*0.05}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Style</Text>
              </View>
              <View style={{height:width*0.25,width:width*0.25,borderColor:"#531039",borderRadius:15,justifyContent:"center",alignItems:"center",borderWidth:2,marginLeft:width*0.03}}>
                  <Text style={{color:"#531039",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Taste</Text>
              </View>
              <View style={{height:width*0.25,width:width*0.25,borderColor:"#531039",borderRadius:15,justifyContent:"center",alignItems:"center",borderWidth:2,marginLeft:width*0.03}}>
                  <Text style={{color:"#531039",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Grapes</Text>
              </View>
              <View style={{height:width*0.25,width:width*0.25,borderColor:"#531039",borderRadius:15,justifyContent:"center",alignItems:"center",borderWidth:2,marginLeft:width*0.03}}>
                  <Text style={{color:"#531039",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Taste</Text>
              </View>
           </View>
          
          <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.04}}>
           <View style={{flexDirection:'row',height:height*0.08,width:width*0.32,backgroundColor:"#961F63",justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04}}>
             <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Lorem</Text>
               <Image source={assets.close3x}/>
           </View>
           <View style={{height:height*0.08,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:width*0.03}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>White</Text>
           </View>
           <View style={{height:height*0.08,width:width*0.28,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:width*0.03}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Cabernet</Text>
           </View>
           </View>

           <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.02}}>
           <View style={{height:height*0.08,width:width*0.35,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a"}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Champaigne</Text>
           </View>
           <View style={{flexDirection:'row',height:height*0.08,width:width*0.32,backgroundColor:"#961F63",justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,marginLeft:width*0.03}}>
             <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Lorem</Text>
               <Image source={assets.close3x}/>
           </View>
           <View style={{height:height*0.08,width:width*0.28,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:width*0.03}}>
          <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Cabernet</Text>
           </View>
           <View style={{height:height*0.08,width:width*0.35,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a"}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Champaigne</Text>
           </View>
           </View>

           <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.02}}>
           <View style={{flexDirection:'row',height:height*0.08,width:width*0.32,backgroundColor:"#961F63",justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04}}>
             <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Lorem</Text>
               <Image source={assets.close3x}/>
           </View>
           <View style={{height:height*0.08,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:width*0.03}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>White</Text>
           </View>
           <View style={{height:height*0.08,width:width*0.28,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#a10d6a",marginLeft:width*0.03}}>
             <Text style={{color:'#a10d6a',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Cabernet</Text>
           </View>
           </View>
           <View style={{height:1,width:width*0.92,backgroundColor:"#7d7d7d",marginTop:height*0.07,marginLeft:width*0.04}}/>
           <Text style={{color:"#a10d6a",textAlign:"center",fontFamily:"Nunito_Bold",fontSize:width*0.055,marginTop:height*0.01}}>Clear</Text>
          <View style={{flexDirection:"row",alignItems:"center",alignSelf:'center'}}>
           <Text style={{color:"#531039",textAlign:"center",fontFamily:"Nunito_Black"}}>Zinfandel</Text>
           <Text style={{color:"#531039",textAlign:"center",fontFamily:"Nunito_Black",textAlign:"center",marginBottom:5}}> . </Text>
           <Text style={{color:"#531039",textAlign:"center",fontFamily:"Nunito_Black"}}>Red</Text>
           <Text style={{color:"#531039",textAlign:"center",fontFamily:"Nunito_Black",textAlign:"center",marginBottom:5}}> . </Text>
           <Text style={{color:"#531039",textAlign:"center",fontFamily:"Nunito_Black"}}>France</Text>
           <Text style={{color:"#531039",textAlign:"center",fontFamily:"Nunito_Black",textAlign:"center",marginBottom:5}}> . </Text>
           <Text style={{color:"#531039",textAlign:"center",fontFamily:"Nunito_Black"}}>Pairing-Beef</Text>
          </View>

           <View style={{height:1,width:width*0.92,backgroundColor:"#7d7d7d",marginTop:height*0.02,marginLeft:width*0.04}}/>
           <TouchableOpacity onPress={()=>navigation.navigate('GoToWines')}>
           <View style={{width:width*0.8,height:height*0.07,backgroundColor:"#C45FA5",alignSelf:"center",justifyContent:"center",alignItems:"center",borderRadius:30,marginTop:height*0.05}}>
                   <Text style={{fontSize:18,color:"white",fontFamily:"Nunito_Bold",letterSpacing:1}}>Go</Text>
               </View>
               </TouchableOpacity>
        </View>
    )
}
export default Wines;