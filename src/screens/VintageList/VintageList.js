import React from 'react'
import { useState } from 'react';
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, FlatList, Modal} from 'react-native'
import * as assets from "../../components/assets";


const VintageList=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    const[showModal,setShowModal]=useState(false)
    return(
        <ScrollView>
        <View>
        <TouchableOpacity onPress={()=>navigation.goBack() }>
        <Image source={assets.btn_back} style={{marginTop:height*0.07,marginLeft:width*0.07}}/>
        </TouchableOpacity> 
          <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,textAlign:"center",marginTop:height*-0.03}}>Vintages</Text>
          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",marginTop:height*0.03,alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2021</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2020</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2019</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2018</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2017</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2016</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2015</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2014</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2013</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2012</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2011</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>

          <View style={{flexDirection:'row',marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center"}}>
              <View>
                  <Text style={{fontSize:width*0.05}}>2010</Text>
              </View>
              <View style={{flexDirection:"column",alignItems:"center"}}>
                  <Text style={{color:"#f266ae",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>8.5/10</Text>
                  <Text style={{color:"#aba7a7",fontSize:width*0.03}}>145 Ratings</Text>
              </View>
          </View>
          <View style={{height:0.8,width:width*0.9,backgroundColor:"#aba7a7",marginLeft:width*0.05,marginVertical:height*0.01}}/>
        </View>
        </ScrollView>
    )
}
export default VintageList;