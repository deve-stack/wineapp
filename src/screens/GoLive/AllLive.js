import React from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, FlatList} from 'react-native'
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const AllLive=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    return(
        <View style={{flex:1,backgroundColor:"#EFEFEF"}}>
             <View style={{flexDirection:'row',marginTop:height*0.04,marginHorizontal:width*0.07,alignItems:'center',justifyContent:"space-between"}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={assets.btn_back}/>
              </TouchableOpacity>
              <Text style={{fontSize:25,fontFamily:"Nunito_Bold"}}>All Live</Text>
              <Image source={assets.sidebar_search} style={{height:20,width:20,marginTop:height*0.01}}/>
            </View> 
            <ScrollView>
            <View style={{}}>
                <TouchableOpacity onPress={()=>navigation.navigate("SeeLiveStream")}>
            <View style={{elevation:50,marginTop:20}}>
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
       
                <View style={{elevation:50,marginTop:20}}>
                   <Image source={assets.wine_image3} style={{height:height*0.4,marginHorizontal:width*0.07,width:width*0.86,borderTopLeftRadius:30,borderTopRightRadius:30}}/>
                <View style={{height:height*0.18,width:width*0.86,marginHorizontal:width*0.07,backgroundColor:"white",borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
                    <Text style={{marginTop:10,fontFamily:"Nunito_Bold",marginLeft:width*0.06,fontSize:width*0.038}}>Enjoying a 1998 vintage Cab with my </Text>
                    <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.06,fontSize:width*0.038}}>good friends! Join us for review!</Text>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                    <Image source={assets.image2} style={{marginTop:10,height:height*0.06,width:height*0.06,borderRadius:height*0.03}}/>
                    <Text style={{fontSize:18,color:"#e6409b",fontFamily:"Nunito_Bold",marginLeft:10}}>Winetime49</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",marginLeft:width*0.1,marginTop:height*-0.53}}>
                    <View style={{height:25,width:60,backgroundColor:"#80094a",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white",fontFamily:"Nunito_ExtraBold"}}>Tasting</Text>
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
            </View>
        </ScrollView>
        </View>
    )
}
export default AllLive;