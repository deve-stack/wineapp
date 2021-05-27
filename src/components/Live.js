import React from "react";
import { View,Text,ScrollView, TouchableOpacity,  Image ,Dimensions,StyleSheet} from "react-native";
import * as assets from './assets'
const {height,width}=Dimensions.get('window')


const Live=({navigation})=>{
    return(
        <View>
           <Text style={styles.know_text}>Live Now</Text>
           <View style={{flexDirection:"row"}}>
           <Image source={assets.image3} style={{height:60,width:60,borderRadius:30,borderWidth:1.5,borderColor:"#de1b8c",marginLeft:width*0.06}}/>
           <Image source={assets.image2} style={{height:60,width:60,borderRadius:30,borderWidth:1.5,borderColor:"#de1b8c",marginLeft:width*0.025}}/>
        </View>

        <TouchableOpacity >
            <View style={{elevation:5,marginTop:20}}>
               <Image source={assets.wine_image3} style={{height:height*0.4,marginHorizontal:width*0.07,width:width*0.86,borderTopLeftRadius:30,borderTopRightRadius:30}}/>
                 <View style={{height:height*0.18,width:width*0.86,marginHorizontal:width*0.07,backgroundColor:"white",borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
                    <Text style={{marginTop:10,fontFamily:"Nunito_Bold",marginLeft:width*0.06,fontSize:width*0.038}}>Enjoying a 1998 vintage Cab with my </Text>
                    <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.06,fontSize:width*0.038}}>good friends! Join us for review!</Text>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                    <Image source={assets.image2} style={{marginTop:10,height:height*0.06,width:height*0.06,borderRadius:height*0.03}}/>
                    <Text style={{fontSize:18,color:"#e6409b",fontFamily:"Nunito_ExtraBold",marginLeft:10}}>Winetime49</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",marginLeft:width*0.1,marginTop:height*-0.53}}>
                    <View style={{height:25,width:60,backgroundColor:"#80094a",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Tasting</Text>
                    </View>
                    <View style={{height:25,width:60,backgroundColor:"#80094a",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Review</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:"center",marginTop:height*0.3,marginLeft:width*0.7}}>
                   <Image source={assets.eye_white} style={{resizeMode:"contain"}}/>
                   <Text style={{color:"white",fontFamily:'Nunito_Bold',marginLeft:3}}>56</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
       <Text style={{color:"#6e6b6b",textAlign:'center',marginTop:5,fontFamily:"Nunito_Italic"}}>Previous Broadcast</Text>

       <TouchableOpacity >
            <View style={{elevation:5,marginTop:20}}>
               <Image source={assets.wine_image3} style={{height:height*0.4,marginHorizontal:width*0.07,width:width*0.86,borderTopLeftRadius:30,borderTopRightRadius:30}}/>
                 <View style={{height:height*0.18,width:width*0.86,marginHorizontal:width*0.07,backgroundColor:"white",borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
                    <Text style={{marginTop:10,fontFamily:"Nunito_Bold",marginLeft:width*0.06,fontSize:width*0.038}}>Enjoying a 1998 vintage Cab with my </Text>
                    <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.06,fontSize:width*0.038}}>good friends! Join us for review!</Text>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                    <Image source={assets.image2} style={{marginTop:10,height:height*0.06,width:height*0.06,borderRadius:height*0.03}}/>
                    <Text style={{fontSize:18,color:"#e6409b",fontFamily:"Nunito_ExtraBold",marginLeft:10}}>Winetime49</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",marginLeft:width*0.1,marginTop:height*-0.53}}>
                    <View style={{height:25,width:60,backgroundColor:"#80094a",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Tasting</Text>
                    </View>
                    <View style={{height:25,width:60,backgroundColor:"#80094a",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Review</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:"center",marginTop:height*0.3,marginLeft:width*0.7}}>
                   <Image source={assets.eye_white} style={{resizeMode:"contain"}}/>
                   <Text style={{color:"white",fontFamily:'Nunito_Bold',marginLeft:3}}>56</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>

        </View>
    )
}
const styles=StyleSheet.create({
    know_text:{
        color:"#470623",
        marginLeft:width*0.07,
        fontFamily:"Nunito_ExtraBold",
        marginTop:height*0.03
    },
    know_text1:{
        color:"#470623",
        marginLeft:width*0.07,
        fontFamily:"Nunito_ExtraBold",
        marginTop:height*0.05
    }
})
export default Live;