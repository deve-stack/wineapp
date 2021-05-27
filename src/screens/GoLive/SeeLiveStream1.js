import React,{useState} from 'react'
import { View ,Text,ImageBackground,Image,Dimensions, ScrollView,StyleSheet,TextInput,Modal,TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
var{height,width}=Dimensions.get('window')

const SeeLiveStream1=({navigation})=>{
    const[modalVisible,setModalVisible]=useState(false)
     return(
        <View style={{flex:1}}>
           <ImageBackground 
           style={{flex:1}}
           source={assets.wine_image2}>
               <KeyboardAwareScrollView>
               <View>
             <View style={{flexDirection:"row",marginTop:height*0.05,}}>
             <TouchableOpacity onPress={()=>navigation.goBack() }>
                <Image source={assets.btn_back_white} style={styles.back_btn}/>
                </TouchableOpacity>
                <View style={{flexDirection:'column',marginLeft:width*0.32,alignSelf:"center",alignItems:"center"}}> 
                    <Text style={{color:"#a6a4a5",fontFamily:"Nunito_Bold",fontSize:16}}>Johnwines</Text>
                    <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:20}}>Following</Text>
                </View>
                <Image source={assets.image3} style={styles.John_image}/>
             </View>
             <View style={styles.stream_View}>
              <Image source={assets.prev_stream} style={styles.stream}/>
              <Image source={assets.next_stream} style={styles.stream}/>
              </View>

              <View style={{flexDirection:"row",marginTop:height*0.15,alignItems:"center"}}>
                <View style={{flexDirection:"column",marginLeft:width*0.05}}>
                    <View style={{flexDirection:"row"}}>
                    <Image source={assets.image2} style={{height:height*0.04,width:height*0.04,borderRadius:height*0.02}}/>
                    <View style={{backgroundColor:"#787575",opacity:0.4,alignSelf:"center",height:25,width:width*0.6,marginLeft:10}}>
                        <Text style={{color:"white"}}>@Hannah123 just sponsered!</Text>
                    </View>
                    </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                    <Image source={assets.image3} style={{height:height*0.04,width:height*0.04,borderRadius:height*0.02}}/>
                    <View style={{backgroundColor:"white",alignSelf:"center",height:25,width:width*0.6,marginLeft:10}}>
                        <Text style={{color:"#d63a9f"}}>lorem ipsum dolor sit @joshwines</Text>
                    </View>
                    </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                    <Image source={assets.image2} style={{height:height*0.04,width:height*0.04,borderRadius:height*0.02}}/>
                    <View style={{backgroundColor:"#787575",opacity:0.4,alignSelf:"center",height:25,width:width*0.6,marginLeft:10}}>
                        <Text style={{color:"white"}}>@Hannah123 just sponsered!</Text>
                    </View>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>setModalVisible(true)}>
                <View style={{height:50,width:50,borderRadius:25,backgroundColor:"#a81976",justifyContent:"center",alignItems:"center",marginLeft:12,marginTop:20}}>
                    <Image source={assets.stream_like} style={{height:40,width:40,resizeMode:"contain"}}/>
                </View>
                </TouchableOpacity>
              </View>
              <View style={styles.TextInput_View}>
                  <Image source={assets.save} style={{height:20,width:20,resizeMode:"contain",alignSelf:"center",marginHorizontal:15}}/>
             <View>
            <TextInput placeholder="Message" style={styles.textInput_style}/>
            </View>
            <View style={styles.send_view}>
                <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:16}}>Send</Text>
            </View>
         </View>
         </View>
         <View>
         <Modal 
               animationType="slide"
               visible={modalVisible}
               onRequestClose={()=>{setModalVisible(modalVisible)}}
               hasBackdrop={true}
               
               onBackdropPress={()=>{setModalVisible(modalVisible)}}
                transparent={false}
                
               >
                   <TouchableWithoutFeedback onPress={()=>setModalVisible(false)}>
                 <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.5)"}}>
                     <View style={{height:height*0.55,width:width*1,backgroundColor:"#ffffff",marginTop:height*0.45,borderTopLeftRadius:30,borderTopEndRadius:30,borderColor:'green',elevation:10}}>
                         <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                      <Image source={assets.close} style={{height:height*0.06,width:width*0.12,alignSelf:"flex-end"}}/>
                      </TouchableOpacity>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.wine_hd} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Buy This Wine</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>

                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.sponsor} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Sponsor Joshwines</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.follow} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Follow Joshwines</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.appbar_profile} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>View Joshwines' Profile</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.report} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Repost Stream</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      
                   </View>
                 </View>
                 </TouchableWithoutFeedback>
             </Modal>

         </View>
         </KeyboardAwareScrollView>
           </ImageBackground>
        </View>
    )
    
}
const styles=StyleSheet.create({
    back_btn:{
        height:20,
        width:40,
        marginLeft:width*0.07,
        resizeMode:'contain'
    },
    John_image:{
        marginTop:10,
        height:height*0.07,
        width:height*0.07,
        borderRadius:height*0.035,
        marginLeft:15
    },
    stream:{
        height:30,
        width:30,
        resizeMode:"contain",
        marginTop:25
    },
    stream_View:{
        alignSelf:"flex-end",
        marginRight:width*0.08,
        marginTop:height*0.25
    },
    TextInput_View:{
        marginHorizontal:width*0.07,
        flexDirection:'row',
        backgroundColor:"white",
        justifyContent:'space-between',
        marginTop:height*0.05,
        borderBottomRightRadius:30,
        borderTopRightRadius:30
    },
    textInput_style:{
        flex:1,
        width:width*0.5,
        paddingLeft:5,
        fontSize:16,
        fontFamily:"Nunito_Bold"
    },
    send_view:{
        height:height*0.065,
        width:width*0.2,
        backgroundColor:"#f056bd",
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },


})

export default SeeLiveStream1;