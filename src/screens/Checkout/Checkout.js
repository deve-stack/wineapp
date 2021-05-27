import React,{ useState } from "react";
import { 
    Text,
     View ,
     Dimensions, 
     Image,
     TouchableOpacity,
     ScrollView,
     FlatList,
     Modal,
     TextInput,
     TouchableWithoutFeedback,
     StatusBar
    } from "react-native";
import * as assets from "../../components/assets";
const{height,width}=Dimensions.get('window')

const Checkout=({navigation})=>{
    const[modalVisible,setModalVisible]=useState(false)
    return(
        
        <View style={{flex:1,backgroundColor:"#EFEFEF"}}>
            <View style={{flexDirection:'row',marginTop:height*0.045,marginLeft:width*0.07}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={assets.btn_back}/>
              </TouchableOpacity>
              </View>
              <Text style={{fontSize:width*0.07,fontFamily:"Nunito_Bold",textAlign:"center",marginTop:height*-0.04,}}>Checkout</Text>
              <View style={{marginHorizontal:width*0.07,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:height*0.02}}>
              <View>
                 <Image source={assets.image3} style={{height:width*0.34,width:width*0.34,borderRadius:width*0.17}}/>
              </View>
              <View style={{height:90,width:width*0.48,borderRadius:20,backgroundColor:"white",borderWidth:2,borderColor:"#C45FA5",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                  <Text style={{fontSize:25,color:"#C45FA5",fontFamily:"Nunito_Bold"}}>$3.99</Text>
                  <Text style={{color:"#C45FA5",fontFamily:"Nunito_Bold",marginTop:5}}> month</Text>
              </View>
           </View>
          <View style={{marginHorizontal:width*0.07,marginTop:height*0.03}}>
            <View style={{flexDirection:"row"}}>
               <View style={{height:height*0.07,width:width*0.41,borderWidth:1,borderColor:"#C45FA5",borderRadius:10,backgroundColor:"white"}}>
                   <TextInput placeholder="First Name" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
               <View style={{height:height*0.07,width:width*0.41,borderWidth:1,borderColor:"#C45FA5",marginLeft:width*0.04,borderRadius:10,backgroundColor:"white"}}>
                   <TextInput placeholder="Last Name" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
            </View>
            <View style={{height:height*0.07,width:width*0.86,borderWidth:1,borderColor:"#C45FA5",marginTop:height*0.02,borderRadius:10,backgroundColor:"white"}}>
                   <TextInput placeholder="Card Number" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
               <View style={{flexDirection:"row"}}>
               <View style={{height:height*0.07,width:width*0.2,borderWidth:1,borderColor:"#C45FA5",marginTop:height*0.02,borderRadius:10,backgroundColor:"white"}}>
                   <TextInput placeholder="MM" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
               <View style={{height:height*0.07,width:width*0.22,borderWidth:1,borderColor:"#C45FA5",marginTop:height*0.02,borderRadius:10,marginLeft:width*0.02,backgroundColor:"white"}}>
                   <TextInput placeholder="YYYY" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
               <View style={{height:height*0.07,width:width*0.2,borderWidth:1,borderColor:"#C45FA5",marginTop:height*0.02,borderRadius:10,marginLeft:width*0.22,backgroundColor:"white"}}>
                   <TextInput placeholder="CVV" style={{color:"#6b6b6b",fontFamily:'Nunito_Bold',flex:1,marginLeft:width*0.04,fontSize:width*0.045}}/>
               </View>
               </View>
          </View>

          <View style={{marginTop:height*0.03,marginHorizontal:width*0.3}}>
          <TouchableOpacity onPress={()=>setModalVisible(true)}>
             <View style={{backgroundColor:"#C45FA5",height:height*0.07,width:width*0.4,justifyContent:"center",alignItems:"center",borderRadius:30}}>
                 <Text style={{fontFamily:"Nunito_Bold",color:"white",fontSize:width*0.05,letterSpacing:1}}>Pay</Text>
             </View>
             </TouchableOpacity>
          </View>
          <Text style={{marginTop:height*0.04,textAlign:"center",fontFamily:"Nunito_Bold",fontSize:width*0.05,color:"#424141"}}>Or continue with PayPal</Text>
          <View style={{marginTop:height*0.02,marginHorizontal:width*0.44}}>
            <View style={{height:height*0.074,width:height*0.074,borderRadius:height*0.037,borderWidth:2,borderColor:"#f576cb",justifyContent:'center',alignItems:"center"}}>
                <Image source={assets.paypal} style={{resizeMode:"contain",height:30,width:30}}/>
            </View>
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
                 <View style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                     <View style={{height:height*0.3,width:width*0.7,backgroundColor:"white",marginVertical:height*0.3,borderRadius:20,borderColor:'green',elevation:10,marginLeft:width*0.15}}>
                         <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                      <Image source={assets.close} style={{height:height*0.07,width:width*0.14,alignSelf:"flex-end"}}/>
                      </TouchableOpacity>
                     <Text style={{textAlign:"center",marginTop:height*0.01,fontSize:width*0.048,fontFamily:"Nunito_Bold"}}>Store Payment Information?</Text>
                     <Text style={{textAlign:"center",marginTop:height*0.01,fontSize:width*0.036,fontFamily:"Nunito_Bold",color:"#918d8d"}}>Speed up checkout next time.</Text>
                     <View style={{marginTop:height*0.06,marginLeft:width*0.1,flexDirection:"row"}}>
                         <View style={{height:height*0.07,width:height*0.08,borderRadius:28,borderWidth:2,borderColor:"#6e6b6b",justifyContent:"center",alignItems:"center"}}>
                             <Text style={{fontFamily:"Nunito_Bold",fontSize:18,color:"#6e6b6b"}}>No</Text>
                         </View>
                         <TouchableOpacity onPress={()=>navigation.navigate("SearchScreen")}>
                         <View style={{height:height*0.07,width:width*0.35,borderRadius:30,justifyContent:"center",alignItems:"center",backgroundColor:"#C45FA5",marginLeft:width*0.03}}>
                             <Text style={{fontFamily:"Nunito_Bold",fontSize:18,color:"white"}}>Yes</Text>
                         </View>
                         </TouchableOpacity>
                     </View>
                   </View>
                 </View>
                 </TouchableWithoutFeedback>
                 
             </Modal>

         </View>
        
        </View>
       
    )
}
export default Checkout;