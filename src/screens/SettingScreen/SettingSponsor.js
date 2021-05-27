import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal, TouchableWithoutFeedback} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const SettingSponsor=({navigation})=>{
    const[showModal,setShowModal]=useState(false)
  
    return(
      <ScrollView>
        <View style={{flex:1,}}>
        <View style={{marginTop:height*0.07,marginLeft:width*0.07,flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={assets.btn_back} style={{height:20,width:45,resizeMode:"contain"}}/> 
            </TouchableOpacity>
           
            <View style={{marginLeft:width*0.05}}>
            <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06}}>People You Sponsor</Text>
            </View>
            </View>
         
          <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.03}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Neque</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <View style={{flexDirection:"row"}}>
                         <Text style={{color:"#5c5b5b",marginLeft:5,fontSize:width*0.035,fontFamily:"Nunito_Bold"}}>3 months.</Text>
                         <Text style={{color:"#a8a3a3",marginLeft:5,fontSize:width*0.036}}>Renews 11/08</Text>
                         </View>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#eb8181",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Cancel</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginVertical:height*0.03}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07}}>
                  <Image source={assets.image3} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Isobel.Kozey</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <View style={{flexDirection:"row"}}>
                         <Text style={{color:"#5c5b5b",marginLeft:5,fontSize:width*0.035,fontFamily:"Nunito_Bold"}}>3 months.</Text>
                         <Text style={{color:"#a8a3a3",marginLeft:5,fontSize:width*0.036}}>Renews 11/08</Text>
                         </View>
                     </View>
                    </View>
                 </View>
                 <View style={{marginTop:height*-0.05,alignSelf:"flex-end",marginRight:width*0.05}}>
                     <TouchableOpacity onPress={()=>setShowModal(true)}>
               <Text style={{color:"#eb8181",fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Cancel</Text>
               </TouchableOpacity>
               </View>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginVertical:height*0.03}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07}}>
                  <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Carol47</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <View style={{flexDirection:"row"}}>
                         <Text style={{color:"#5c5b5b",marginLeft:5,fontSize:width*0.035,fontFamily:"Nunito_Bold"}}>3 months.</Text>
                         <Text style={{color:"#a8a3a3",marginLeft:5,fontSize:width*0.036}}>Renews 11/08</Text>
                         </View>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#eb8181",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_SemiBold"}}>Cancel</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginVertical:height*0.03}}/>
               
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
                <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.4)"}}>
                   <View style={{height:height*0.35,width:width*0.76,backgroundColor:"#ffffff",marginLeft:width*0.12,marginTop:height*0.3,borderRadius:15}}>
                       <View style={{marginLeft:width*0.58,marginTop:height*0.01}}>
                       <TouchableOpacity onPress={()=>setShowModal(false)}>
                      <Image source={assets.close} style={{height:35,width:35}}/>
                      </TouchableOpacity>
                      </View>
                      <Text style={{fontSize:width*0.05,textAlign:"center",marginTop:height*0.03,fontFamily:"Nunito_Bold"}}>Cancel Sponsorship of</Text>
                      <View style={{flexDirection:'row',alignItems:"center",alignSelf:"center",marginTop:height*-0.015}}>
                      <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",color:"#d665c3"}}>Isobel.Kozey</Text>
                      <Text style={{fontSize:width*0.05,marginTop:height*0.03,fontFamily:"Nunito_Bold",marginBottom:14}}> ?</Text>
                      </View>

                      <View style={{flexDirection:"row",marginTop:height*0.05,marginHorizontal:width*0.05,justifyContent:"space-around"}}>
                          <View style={{height:height*0.07,width:width*0.2,borderWidth:1,borderColor:"#5e5959",borderRadius:25,justifyContent:"center",alignItems:"center"}}>
                              <Text style={{fontSize:16,color:"#5e5959"}}>Back</Text>
                          </View>
                          <View style={{height:height*0.07,width:width*0.35,backgroundColor:"#ed8a8a",borderRadius:25,justifyContent:"center",alignItems:"center",fontFamily:"Nunito_Bold"}}>
                              <Text style={{fontSize:16,color:"white",fontFamily:"Nunito_Bold"}}>Cancel</Text>
                          </View>
                      </View>
                   </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            </View>

        </View>
        
        </ScrollView>
    )
}
export default SettingSponsor;