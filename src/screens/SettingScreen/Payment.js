import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal, TouchableWithoutFeedback} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const Payment=({navigation})=>{
  const[show,setShow]=useState(false)
  const[show1,setShow1]=useState(false)
  const[modalVisible,setModalVisible]=useState(false)
    return(
      <ScrollView>
        <View style={{flex:1,}}>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} style={{marginTop:height*0.07,marginLeft:width*0.07}}/> 
            </TouchableOpacity>
          <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,textAlign:"center",marginTop:height*-0.03}}>Payment</Text>
          <View style={{flexDirection:"row",marginHorizontal:width*0.05,justifyContent:"space-between",marginTop:height*0.04}}>
              <View style={{flexDirection:"row"}}>
              <Image source={assets.selected} style={{height:25,width:25,resizeMode:"contain"}}/>
              <View style={{flexDirection:'column',marginLeft:10}}>
                  <Text style={{fontSize:width*0.05,fontFamily:"Nunito_ExtraBold",color:"#570319"}}>Card</Text>
                  <Text style={{fontSize:width*0.04,fontFamily:"Nunito_ExtraBold"}}>xxxx-xxxx-xxxx-1234</Text>
                  <Text style={{fontSize:width*0.04,fontFamily:"Nunito_SemiBold",color:"#949192"}}>Exp. 11/22</Text>
              </View>
              </View>
              <Image source={assets.trash1} style={{height:30,width:30,resizeMode:"contain"}}/>
          </View>
           
           <View style={{height:1,width:width*1,backgroundColor:"#a8a8a8",marginVertical:height*0.025}}/>

           <View style={{flexDirection:"row",marginHorizontal:width*0.05,justifyContent:"space-between"}}>
              <View style={{flexDirection:"row"}}>
              
              <View style={{flexDirection:'column',marginLeft:width*0.09}}>
                  <Text style={{fontSize:width*0.05,fontFamily:"Nunito_ExtraBold",color:"#570319"}}>Card</Text>
                  <Text style={{fontSize:width*0.04,fontFamily:"Nunito_ExtraBold"}}>xxxx-xxxx-xxxx-1234</Text>
                  <Text style={{fontSize:width*0.04,fontFamily:"Nunito_SemiBold",color:"#949192"}}>Exp. 11/22</Text>
              </View>
              </View>
              <Image source={assets.trash1} style={{height:30,width:30,resizeMode:"contain"}}/>
          </View>
          <View style={{marginTop:height*0.07}}>
                  <TouchableOpacity onPress={()=>setModalVisible(true)}>
                     <View style={{height:height*0.07,width:width*0.45,borderRadius:30,borderWidth:2,borderColor:"#bf6296",justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                       <Text style={{color:"#bf6296",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Add New</Text>
                     </View>
                     </TouchableOpacity>
                     </View>

                     <View>
         <Modal 
               animationType="slide"
               visible={modalVisible}
               onRequestClose={()=>{setModalVisible(modalVisible)}}
               hasBackdrop={true}
               
               onBackdropPress={()=>{setModalVisible(modalVisible)}}
                transparent={true}
                
               >
                 <TouchableWithoutFeedback onPress={()=>setModalVisible(false)}>
                 <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.4)"}}>
                     <View style={{height:height*0.52,width:width*0.9,backgroundColor:"#ffffff",marginTop:height*0.24,marginLeft:width*0.05,borderRadius:15,borderColor:'green',elevation:10}}>
                         <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                      <Image source={assets.close} style={{height:height*0.06,width:width*0.12,alignSelf:"flex-end"}}/>
                      </TouchableOpacity>
                    <Text style={{marginLeft:width*0.05,fontFamily:"Nunito_Black",color:"#75093f",marginTop:height*0.015,fontSize:width*0.04}}>New Payment Method</Text>
                      <View style={{marginHorizontal:width*0.05,marginTop:height*0.03}}>
            <View style={{flexDirection:"row"}}>
               <View style={{height:height*0.07,width:width*0.38,borderWidth:0.6,borderColor:"#bf6296",borderRadius:10,backgroundColor:"white"}}>
                   <TextInput placeholder="First Name" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
               <View style={{height:height*0.07,width:width*0.38,borderWidth:0.6,borderColor:"#bf6296",marginLeft:width*0.04,borderRadius:10,backgroundColor:"white"}}>
                   <TextInput placeholder="Last Name" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
            </View>
            <View style={{height:height*0.07,width:width*0.8,borderWidth:0.6,borderColor:"#bf6296",marginTop:height*0.02,borderRadius:10,backgroundColor:"white"}}>
                   <TextInput placeholder="Card Number" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
               <View style={{flexDirection:"row"}}>
               <View style={{height:height*0.07,width:width*0.18,borderWidth:0.6,borderColor:"#bf6296",marginTop:height*0.02,borderRadius:10,backgroundColor:"white"}}>
                   <TextInput placeholder="MM" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
               <View style={{height:height*0.07,width:width*0.2,borderWidth:0.6,borderColor:"#bf6296",marginTop:height*0.02,borderRadius:10,marginLeft:width*0.02,backgroundColor:"white"}}>
                   <TextInput placeholder="YYYY" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
               <View style={{height:height*0.07,width:width*0.18,borderWidth:0.6,borderColor:"#bf6296",marginTop:height*0.02,borderRadius:10,marginLeft:width*0.22,backgroundColor:"white"}}>
                   <TextInput placeholder="CVV" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
               </View>
          </View>

                <View style={{marginVertical:height*0.03}}>
                     <View style={{height:height*0.07,width:width*0.45,borderRadius:30,backgroundColor:"#bf6296",justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                       <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Save</Text>
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
export default Payment;