import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import * as assets from '../../components/assets'

const data=[
    {
        rating:"8.5/10",
        wine_image:assets.wine_image4,
        share:assets.share_colored,
        text1:"2017 Castello di",
        text2:"Amorosa La",
        text3:"Castellana",
        text4:"Reserve Super",
        text5:"Tuscan Blend",
        button_text:"More",
        text6:"15",
        text7:"People talking about this"
    },
    {
        rating:"7.5/10",
        wine_image:assets.wine_image4,
        share:assets.share_colored,
        text1:"2017 Castello di",
        text2:"Amorosa La",
        text3:"Castellana",
        text4:"Reserve Super",
        text5:"Tuscan Blend",
        button_text:"More",
        text6:"38",
        text7:"People talking about this"
    }
]

const GoToWines=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    return(
        <ScrollView>
        <View style={{flex:1}}>
          <View style={{marginHorizontal:width*0.05,flexDirection:"row",justifyContent:"space-between",marginTop:height*0.064}}>
          <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image source={assets.sidebar} style={{height:22,width:22,resizeMode:"contain"}}/>
          </TouchableOpacity>
              <Text style={{color:"black",fontSize:width*0.06,fontFamily:"Nunito_Bold"}}>Wines</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("searchForWine")}>
              <Image source={assets.sidebar_search} style={{height:20,width:20,resizeMode:"contain"}}/>
              </TouchableOpacity>
          </View>

       
          <View>
          <Text style={{fontFamily:"Nunito_ExtraBold",color:"#6e0a3b",marginTop:height*0.04,marginLeft:width*0.07,marginBottom:height*0.015}}>Recommended For You</Text>

          <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
             <View style={{flexDirection:"row",elevation:5,marginHorizontal:10}}>
                 {
                     data.map((item)=>(
                         
                        <View style={{}}>
                             <View style={{flexDirection:'row',height:height*0.27,width:width*0.7,marginLeft:7,elevation:5,backgroundColor:"white",borderRadius:10}}>
                                 <View style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:"pink"}}>

                                    <Image source={item.wine_image} style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                    <View style={{height:height*0.03,width:width*0.15,backgroundColor:"white",marginTop:height*-0.26,marginLeft:width*0.02,justifyContent:"center",alignItems:"center",borderRadius:10,elevation:2}}>
                               <Text style={{fontFamily:"Nunito_ExtraBold",color:"#f266ae"}}>{item.rating}</Text>
                                 </View>
                                 </View>
                                 <View style={{height:height*0.27,width:width*0.35,borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:"white"}}>
                                     <Image source={item.share} style={{height:15,width:15,resizeMode:"contain",alignSelf:"flex-end",marginRight:10,marginTop:height*0.012}}/>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text1}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text2}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text3}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text4}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text5}</Text>
                                    <View style={{height:height*0.07,width:width*0.22,borderWidth:2,borderColor:"#f266ae",borderRadius:30,justifyContent:'center',alignItems:"center",alignSelf:"center",marginTop:height*0.02}}>
                                       <Text style={{color:"#f266ae",fontFamily:"Nunito_Bold",fontSize:16}}>More</Text>
                                    </View>
                                 </View>
                                 
                             </View>
                          
                             <View style={{flexDirection:'row',alignSelf:"center",marginTop:5,}}>
                             <Text style={{fontFamily:"Nunito_Bold"}}>{item.text6} </Text>
                             <Text style={{fontFamily:"Nunito_Bold",color:"#5c5a5a"}}>{item.text7}</Text>
                             
                             </View>
                             
                         </View>
                     ))
                 }
             </View>
             </ScrollView>
               
             <Text style={{fontFamily:"Nunito_ExtraBold",color:"#630a3f",marginTop:height*0.04,marginLeft:width*0.07,marginBottom:height*0.015}}>This week people are talking about</Text>

          <ScrollView horizontal={true} 
          showsHorizontalScrollIndicator={false}
          >
             <View style={{flexDirection:"row",elevation:5,marginHorizontal:10}}>
                 {
                     data.map((item)=>(
                         
                        <View style={{}}>
                        <View style={{flexDirection:'row',height:height*0.27,width:width*0.7,marginLeft:7,elevation:5,backgroundColor:"white",borderRadius:10}}>
                            <View style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:"pink"}}>

                               <Image source={item.wine_image} style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                               <View style={{height:height*0.03,width:width*0.15,backgroundColor:"white",marginTop:height*-0.26,marginLeft:width*0.02,justifyContent:"center",alignItems:"center",borderRadius:10,elevation:2}}>
                          <Text style={{fontFamily:"Nunito_ExtraBold",color:"#f266ae"}}>{item.rating}</Text>
                            </View>
                            </View>
                            <View style={{height:height*0.27,width:width*0.35,borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:"white"}}>
                                <Image source={item.share} style={{height:15,width:15,resizeMode:"contain",alignSelf:"flex-end",marginRight:10,marginTop:height*0.012}}/>
                               <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text1}</Text>
                               <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text2}</Text>
                               <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text3}</Text>
                               <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text4}</Text>
                               <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text5}</Text>
                               <View style={{height:height*0.07,width:width*0.22,borderWidth:2,borderColor:"#f266ae",borderRadius:30,justifyContent:'center',alignItems:"center",alignSelf:"center",marginTop:height*0.02}}>
                                  <Text style={{color:"#f266ae",fontFamily:"Nunito_Bold",fontSize:16}}>More</Text>
                               </View>
                            </View>
                            
                        </View>
                     
                        <View style={{flexDirection:'row',alignSelf:"center",marginTop:5,}}>
                        <Text style={{fontFamily:"Nunito_Bold"}}>{item.text6} </Text>
                        <Text style={{fontFamily:"Nunito_Bold",color:"#5c5a5a"}}>{item.text7}</Text>
                        
                        </View>
                        
                    </View>
                     ))
                 }
             </View>
             </ScrollView>

             <Text style={{fontFamily:"Nunito_ExtraBold",color:"#630a3f",marginTop:height*0.04,marginLeft:width*0.07,marginBottom:height*0.015}}>Highly Rated</Text>


             <ScrollView horizontal={true} 
             showsHorizontalScrollIndicator={false}
             >
             <View style={{flexDirection:"row",elevation:5,marginHorizontal:10}}>
                 {
                     data.map((item)=>(
                         
                        <View style={{}}>
                             <View style={{flexDirection:'row',height:height*0.27,width:width*0.7,marginLeft:7,elevation:5,backgroundColor:"white",borderRadius:10}}>
                                 <View style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:"pink"}}>

                                    <Image source={item.wine_image} style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                    <View style={{height:height*0.03,width:width*0.15,backgroundColor:"white",marginTop:height*-0.26,marginLeft:width*0.02,justifyContent:"center",alignItems:"center",borderRadius:10,elevation:2}}>
                               <Text style={{fontFamily:"Nunito_ExtraBold",color:"#f266ae"}}>{item.rating}</Text>
                                 </View>
                                 </View>
                                 <View style={{height:height*0.27,width:width*0.35,borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:"#f2f2f2white"}}>
                                     <Image source={item.share} style={{height:15,width:15,resizeMode:"contain",alignSelf:"flex-end",marginRight:10,marginTop:height*0.012}}/>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text1}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text2}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text3}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text4}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text5}</Text>
                                    <View style={{height:height*0.07,width:width*0.22,borderWidth:2,borderColor:"#f266ae",borderRadius:30,justifyContent:'center',alignItems:"center",alignSelf:"center",marginTop:height*0.02}}>
                                       <Text style={{color:"#f266ae",fontFamily:"Nunito_Bold",fontSize:16}}>More</Text>
                                    </View>
                                 </View>
                                 
                             </View>
                          
                             <View style={{flexDirection:'row',alignSelf:"center",marginTop:5,}}>
                             <Text style={{fontFamily:"Nunito_Bold"}}>{item.text6} </Text>
                             <Text style={{fontFamily:"Nunito_Bold",color:"#5c5a5a"}}>{item.text7}</Text>
                             
                             </View>
                             
                         </View>
                     ))
                 }
             </View>
             </ScrollView>
             <Text style={{fontFamily:"Nunito_ExtraBold",color:"#630a3f",marginTop:height*0.04,marginLeft:width*0.09,marginBottom:height*0.015}}>Recently Searched</Text>
              
              <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:5}}>
              <View style={{height:height*0.07,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#961F63"}}>
             <Text style={{color:'#961F63',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Lorem</Text>
           </View>
           <View style={{height:height*0.07,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#961F63",marginLeft:width*0.03}}>
             <Text style={{color:'#961F63',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>White</Text>
           </View>
           <View style={{height:height*0.07,width:width*0.3,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#961F63",marginLeft:width*0.03}}>
             <Text style={{color:'#961F63',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Cabernet</Text>
           </View>
           </View>

           <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.02}}>
               <View style={{height:height*0.07,width:width*0.35,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#961F63"}}>
             <Text style={{color:'#961F63',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Champagne</Text>
           </View>
           <View style={{height:height*0.07,width:width*0.35,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#961F63",marginLeft:width*0.03}}>
             <Text style={{color:'#961F63',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Chardonnay</Text>
             </View>
        </View>

        <View style={{flexDirection:"row",marginLeft:width*0.07,marginVertical:height*0.02}}>
               <View style={{height:height*0.07,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#961F63"}}>
             <Text style={{color:'#961F63',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>White</Text>
           </View>
           <View style={{height:height*0.07,width:width*0.25,justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,borderWidth:2,borderColor:"#961F63",marginLeft:width*0.03}}>
             <Text style={{color:'#961F63',fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Red</Text>
             </View>
        </View>
             

             </View>
            

        </View>
        </ScrollView>
    )
}
export default GoToWines;