import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList} from "react-native";
import * as assets from '../../components/assets'
import { useNavigation } from "@react-navigation/native";

const {height,width}=Dimensions.get('window')

const data=[
    {
        rating:"8.5/10",
        wine_image:assets.wine_image4,
        share:assets.share_colored,
        text1:"2017 Castello di Amorosa La",
        text2:"Castellana Reserve Super",
        text3:"Tuscan Blend",
        text4:"Kai-Simore Winery",
        flag:assets.flag_hd,
        text5:"2020 . 2019 . 2018 . 2016 . 2014 . 2012 . 2011 . 2010 . 2009 . 2008 . ",
        text6:"4 More",
        button_text1:"More",
        button_text2:"Prices",
    },
    {
        rating:"8.5/10",
        wine_image:assets.wine_image4,
        share:assets.share_colored,
        text1:"2017 Castello di Amorosa La",
        text2:"Castellana Reserve Super",
        text3:"Tuscan Blend",
        text4:"Kai-Simore Winery",
        flag:assets.flag_hd,
        text5:"2020 . 2019 . 2018 . 2016 . 2014 . 2012 . 2011 . 2010 . 2009 . 2008 . ",
        text6:"4 More",
        button_text1:"More",
        button_text2:"Prices",
    }
]

const searchForWine=()=>{
    const navigation=useNavigation();
    return(
        <View style={{flex:1,backgroundColor:"#e8e6e6"}}>
            <View style={{marginLeft:width*0.07,marginRight:width*0.05,marginTop:height*0.06,flexDirection:'row'}}> 
            <TouchableOpacity onPress={()=>navigation.goBack() }>
                  <Image source={assets.btn_back}/> 
                  </TouchableOpacity>
                 <View style={{flexDirection:"row",height:height*0.07,width:width*0.7,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,marginTop:height*0.04,alignItems:"center",backgroundColor:"white",marginLeft:width*0.05,marginTop:height*-0.01}}>
            <Image source={assets.sidebar_search} style={{height:20,width:20,marginLeft:width*0.04}}/>
            <TextInput placeholder="Search" style={{marginLeft:width*0.05,fontSize:width*0.055,flex:1}}/>
            <View style={{marginRight:width*0.04}}>
            <Image source={assets.filter_rounded} style={{height:27,width:27,resizeMode:"contain"}}/>
            </View>
            </View>
             </View>
           
           <View style={{flexDirection:"row",marginLeft:width*0.04,marginVertical:height*0.03,alignItems:"center"}}>
               <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.03,marginLeft:5}}>38 results for</Text>
               <View style={{height:height*0.036,width:width*0.23,backgroundColor:'#7d0c50',justifyContent:"center",alignItems:'center',borderRadius:10,marginHorizontal:10}}> 
                    <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.04}}>Zinfandel</Text>
                 </View>
                 <View style={{height:height*0.036,width:width*0.17,backgroundColor:'#7d0c50',justifyContent:"center",alignItems:'center',borderRadius:10}}> 
                    <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.04}}>France</Text>
                 </View>
                 <View style={{height:height*0.036,width:width*0.08,borderColor:'#7d0c50',justifyContent:"center",alignItems:'center',borderRadius:10,borderWidth:1,marginLeft:10}}> 
                    <Text style={{color:"#7d0c50",fontFamily:"Nunito_ExtraBold"}}>+5</Text>
                 </View>
           </View>
             
           <ScrollView style={{}}>
             <View style={{flexDirection:'column',marginBottom:10}}>
                 {

                     data.map((item)=>(
                         
                         <View style={{}}>
                             <View style={{flexDirection:'row',height:height*0.38,width:width*0.94,marginLeft:width*0.05,marginTop:10}}>
   
                                 <View style={{height:height*0.4,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10,}}>

                                    <Image source={item.wine_image} style={{height:height*0.38,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                    <View style={{height:height*0.03,width:width*0.15,backgroundColor:"white",marginTop:height*-0.36,marginLeft:width*0.02,justifyContent:"center",alignItems:"center",borderRadius:8}}>
                               <Text style={{fontFamily:"Nunito_Black",color:"#f266ae",fontSize:width*0.04}}>{item.rating}</Text>
                                 </View>
                                 </View>
                                 <View style={{height:height*0.38,width:width*0.54,borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:"white",elevation:5}}>
                                     <Image source={item.share} style={{height:15,width:15,resizeMode:"contain",alignSelf:"flex-end",marginRight:10,marginTop:height*0.012}}/>
                                    <Text style={{fontFamily:"Nunito_Black",marginLeft:width*0.04,fontSize:width*0.03}}>{item.text1}</Text>
                                    <Text style={{fontFamily:"Nunito_Black",marginLeft:width*0.04,fontSize:width*0.03,marginTop:2}}>{item.text2}</Text>
                                    <Text style={{fontFamily:"Nunito_Black",marginLeft:width*0.04,fontSize:width*0.03,marginTop:2}}>{item.text3}</Text>
                                    <View style={{flexDirection:"row",marginLeft:width*0.04,alignItems:"center"}}>
                                        <Image source={item.flag} style={{height:20,width:20,resizeMode:"contain"}}/>
                                    <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.035,color:"#808080",marginVertical:5,marginLeft:5}}>{item.text4}</Text>
                                    </View>
                                    <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.04,fontSize:width*0.035,color:"#808080"}}>{item.text5}
                                    <Text style={{fontFamily:"Nunito_Bold",marginLeft:width*0.04,fontSize:width*0.035,color:"#C45FA5"}}>  {item.text6}</Text>
                                     </Text>

                                    <View style={{flexDirection:"row",marginHorizontal:width*0.04,justifyContent:"space-between",marginTop:height*0.04}}>
                                    <TouchableOpacity onPress={()=>navigation.navigate("scannedWines")}>
                                    <View style={{height:height*0.065,width:width*0.2,borderWidth:2,borderColor:"#C45FA5",borderRadius:30,justifyContent:'center',alignItems:"center",alignSelf:"center",marginTop:height*0.02}}>
                                       <Text style={{color:"#C45FA5",fontFamily:"Nunito_Bold",fontSize:width*0.045,letterSpacing:1}}>{item.button_text1}</Text>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>navigation.navigate("ScanError")}>
                                    <View style={{height:height*0.065,width:width*0.23,backgroundColor:"#C45FA5",borderRadius:30,justifyContent:'center',alignItems:"center",alignSelf:"center",marginTop:height*0.02}}>
                                       <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:width*0.045,letterSpacing:1}}>{item.button_text2}</Text>
                                    </View>
                                    </TouchableOpacity>
                                 </View>
                                 </View>
                             </View>
                          
                         </View>
                     ))
                 }
             </View>
             </ScrollView>

        </View>
    )
}
export default searchForWine;