import React from 'react'
import { useState } from 'react';
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, FlatList, Modal, TouchableWithoutFeedback} from 'react-native'
import * as assets from "../../components/assets";


const RetailerList=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    const[showModal,setShowModal]=useState(false)
    return(
        <ScrollView>
        <View>
            <View style={{marginTop:height*0.07,marginLeft:width*0.07}}>
        <TouchableOpacity onPress={()=>navigation.goBack() }>
        <Image source={assets.btn_back} style={{}}/> 
        </TouchableOpacity>
        </View>
          <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,textAlign:"center",marginTop:height*-0.03}}>Retailers</Text>
        </View>
       
        <View style={{flexDirection:"row",marginTop:height*0.01,backgroundColor:"#f5e4e4",height:height*0.15,width:width*1,alignItems:"center"}}>
          <Image source={assets.wine_image4} style={{height:width*0.23,width:width*0.23,borderRadius:10,marginLeft:width*0.07}}/>
          <View style={{flexDirection:"column",marginLeft:width*0.03}}>
            <Text style={{color:"#4d0d2d",fontFamily:"Nunito_ExtraBold",fontSize:width*0.035}}>2017 Castellana di Amorosa La</Text>
            <Text style={{color:"#4d0d2d",fontFamily:"Nunito_ExtraBold",fontSize:width*0.035}}>Castellana Reserve Super Tuscan </Text>
            <Text style={{color:"#4d0d2d",fontFamily:"Nunito_ExtraBold",fontSize:width*0.035}}>Blend</Text>
            <Text style={{color:"#9c1366",fontFamily:"Nunito_Black",fontSize:width*0.05,marginTop:5}}>8.5/10</Text>
          </View>
        </View>

        <View style={{flexDirection:'row',marginHorizontal:width*0.05,justifyContent:"space-between",marginTop:height*0.02,alignItems:"center"}}>
            <View style={{flexDirection:"column"}}>
               <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.045}}>2016 (750ml)</Text>
               <Text style={{fontFamily:"Kanit_ExtraBold",fontSize:width*0.11,color:"#9c1366",marginTop:height*-0.01}}>$29.99</Text>
               <Text style={{color:"#4d0d2d",fontFamily:"Nunito_ExtraBold",fontSize:width*0.035,marginTop:height*-0.005}}>Vintage Wines</Text>
               <View style={{flexDirection:"row",marginTop:5}}>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
               </View>
               <View style={{flexDirection:"row",marginTop:5}}>
                   <Image source={assets.flag_hd} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Text> FR: Naples</Text>
               </View>
            </View>
            <View style={{flexDirection:"column",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>setShowModal(true)}>
                   <View style={{height:height*0.07,width:width*0.32,borderWidth:2,borderColor:"#e66ab5",justifyContent:"center",alignItems:"center",borderRadius:30}}>
                       <Text style={{color:"#e66ab5",fontFamily:"Nunito_ExtraBold",fontSize:width*0.043}}>Visit Shop</Text>
                   </View>
                   </TouchableOpacity>
                   <Text style={{fontSize:width*0.03,color:"#787777",marginTop:5}}>Ships in: 1 week</Text>
                   <Text style={{fontSize:width*0.03,color:"#787777",marginTop:3}}>NO Min. Order</Text>
                </View>
          </View>
          <View style={{height:5,width:width*1,backgroundColor:"#e8e8e8",marginVertical:10}}/>

          <View style={{flexDirection:'row',marginHorizontal:width*0.05,justifyContent:"space-between",marginTop:height*0.02,alignItems:"center"}}>
            <View style={{flexDirection:"column"}}>
               <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.045,marginTop:height*-0.01}}>2016 (750ml)</Text>
               <Text style={{fontFamily:"Kanit_ExtraBold",fontSize:width*0.1,color:"#9c1366"}}>$29.99</Text>
               <Text style={{color:"#4d0d2d",fontFamily:"Nunito_ExtraBold",fontSize:width*0.035,marginTop:height*-0.005}}>Vintage Wines</Text>
               <View style={{flexDirection:"row",marginTop:5}}>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
               </View>
               <View style={{flexDirection:"row",marginTop:5}}>
                   <Image source={assets.flag_hd} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Text> FR: Naples</Text>
               </View>
            </View>
            <View style={{flexDirection:"column",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.navigate("TopicInfo2")}>
                   <View style={{height:height*0.07,width:width*0.32,borderWidth:2,borderColor:"#e66ab5",justifyContent:"center",alignItems:"center",borderRadius:30}}>
                       <Text style={{color:"#e66ab5",fontFamily:"Nunito_ExtraBold",fontSize:width*0.043}}>Visit Shop</Text>
                   </View>
                   </TouchableOpacity>
                   <Text style={{fontSize:width*0.03,color:"#787777",marginTop:5}}>Ships in: 1 week</Text>
                   <Text style={{fontSize:width*0.03,color:"#787777",marginTop:3}}>NO Min. Order</Text>
                </View>
          </View>
          <View style={{height:5,width:width*1,backgroundColor:"#e8e8e8",marginVertical:10}}/>

          <View style={{flexDirection:'row',marginHorizontal:width*0.05,justifyContent:"space-between",marginTop:height*0.02,alignItems:"center"}}>
            <View style={{flexDirection:"column"}}>
               <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.045,marginTop:height*-0.01}}>2016 (750ml)</Text>
               <Text style={{fontFamily:"Kanit_ExtraBold",fontSize:width*0.11,color:"#9c1366"}}>$29.99</Text>
               <Text style={{color:"#4d0d2d",fontFamily:"Nunito_ExtraBold",fontSize:width*0.035,marginTop:height*-0.005}}>Vintage Wines</Text>
               <View style={{flexDirection:"row",marginTop:5}}>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Image source={assets.wine_dark} style={{height:20,width:20,resizeMode:"contain"}}/>
               </View>
               <View style={{flexDirection:"row",marginTop:5}}>
                   <Image source={assets.flag_hd} style={{height:20,width:20,resizeMode:"contain"}}/>
                   <Text> FR: Naples</Text>
               </View>
            </View>
            <View style={{flexDirection:"column",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Producer")}>
                   <View style={{height:height*0.07,width:width*0.32,borderWidth:2,borderColor:"#e66ab5",justifyContent:"center",alignItems:"center",borderRadius:30}}>
                       <Text style={{color:"#e66ab5",fontFamily:"Nunito_ExtraBold",fontSize:width*0.043}}>Visit Shop</Text>
                   </View>
                   </TouchableOpacity>
                   <Text style={{fontSize:width*0.03,color:"#787777",marginTop:5}}>Ships in: 1 week</Text>
                   <Text style={{fontSize:width*0.03,color:"#787777",marginTop:3}}>NO Min. Order</Text>
                </View>
          </View>
          <View style={{height:5,width:width*1,backgroundColor:"#e8e8e8",marginVertical:10}}/>

          <View style={{backgroundColor:"#BFC9CA"}}>
            <Modal
            animationType='fade'
            visible={showModal}
            onRequestClose={()=>{setShowModal(!showModal)}}
            hasBackdrop={true}
            onBackdropPress={()=>{setShowModal(!showModal)}}
             transparent={true}
             
            >
                <TouchableWithoutFeedback onPress={()=>setShowModal(false)}>
                <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.4)'}}>
                   <View style={{height:height*0.3,width:width*0.7,backgroundColor:"#ffffff",marginLeft:width*0.15,marginTop:height*0.3,borderRadius:15}}>
                       <View style={{marginTop:height*0.01,marginLeft:width*0.02}}>
                       <TouchableOpacity onPress={()=>setShowModal(false)}>
                      <Image source={assets.close} style={{height:35,width:35}}/>
                      </TouchableOpacity>
                      </View>
                      <Text style={{fontSize:height*0.03,textAlign:"center",marginTop:height*0.03,fontFamily:"Nunito_Bold"}}>Continue to </Text>
                      <Text style={{fontSize:height*0.03,textAlign:"center",fontFamily:"Nunito_Bold"}}>Wine-Searcher.Com?</Text>
                      <View style={{flexDirection:"row",marginTop:height*0.05,marginHorizontal:width*0.05,justifyContent:"space-around"}}>
                          <View style={{height:height*0.06,width:width*0.2,borderWidth:1,borderColor:"#5e5959",borderRadius:25,justifyContent:"center",alignItems:"center"}}>
                              <Text style={{fontSize:16,color:"#5e5959"}}>Back</Text>
                          </View>
                          <TouchableOpacity onPress={()=>navigation.navigate("TopicInfo")}>
                          <View style={{height:height*0.06,width:width*0.33,backgroundColor:"#ed6ddc",borderRadius:25,justifyContent:"center",alignItems:"center",fontFamily:"Nunito_Bold"}}>
                              <Text style={{fontSize:16,color:"white",fontFamily:"Nunito_Bold"}}>Continue</Text>
                          </View>
                          </TouchableOpacity>
                      </View>
                   </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            </View>
        </ScrollView>
    )
}
export default RetailerList;