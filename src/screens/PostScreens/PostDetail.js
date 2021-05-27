import React from 'react'
import { useState } from 'react';
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, FlatList, Modal, TouchableWithoutFeedback} from 'react-native'
import * as assets from "../../components/assets";


const PostDetail=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    const[showModal,setShowModal]=useState(false)
    return(
        <ScrollView>
        <View>
             <View style={{flexDirection:'row',marginTop:height*0.04,marginHorizontal:width*0.07,alignItems:'center',justifyContent:"space-between"}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={assets.btn_back}/>
              </TouchableOpacity>
              <Text style={{fontSize:25,fontFamily:"Nunito_Bold"}}>Post</Text>
              <TouchableOpacity onPress={()=>setShowModal(true)}>
              <Image source={assets.overflow} style={{height:5,width:25,marginTop:height*0.03}}/>
              </TouchableOpacity>
          </View> 
           <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.03,marginHorizontal:width*0.07}}>
                <Image source={assets.image3} style={{height:40,width:40,borderRadius:20}}/>
            <View>
              <Text style={{marginLeft:width*0.02,fontFamily:"Nunito_ExtraBold",color:"#545253"}}>Joshwines</Text>
              <Text style={{marginLeft:width*0.02,color:"#7d797b"}}>30 min ago</Text>
            </View>
            </View>
            <Text style={{color:"#f056bd",fontSize:width*0.053,fontFamily:"Nunito_Bold",textAlign:"right",marginRight:width*0.06,marginTop:height*-0.037}}>Follow</Text>
       
         <Image source={assets.wine_cup} style={{height:height*0.3,width:width*0.87,marginLeft:width*0.07,borderRadius:30,marginTop:height*0.013}}/>
         <View style={{flexDirection:"row",alignItems:'center',marginTop:height*0.02}}>
                        <Image source={assets.like} style={{height:width*0.05,width:width*0.05,marginLeft:width*0.13,resizeMode:'contain'}}/>
                        <Text style={{marginLeft:width*0.015,color:"#7d7a7c",fontSize:width*0.035}}>16</Text>
                        <Image source={assets.comment} style={{height:width*0.05,width:width*0.05,marginLeft:width*0.07,resizeMode:'contain'}}/>
                        <Text style={{marginLeft:width*0.015,color:"#7d7a7c",fontSize:width*0.035}}>8</Text>
                        <Image source={assets.repost} style={{height:width*0.05,width:width*0.05,marginLeft:width*0.07,resizeMode:'contain'}}/>
                        <Text style={{marginLeft:width*0.015,color:"#7d7a7c",fontSize:width*0.035}}>12</Text>
                        <Image source={assets.share} style={{height:width*0.05,width:width*0.05,marginLeft:width*0.29,resizeMode:'contain',}}/>
         </View>
         <View style={{flexDirection:"row",marginHorizontal:width*0.07,marginTop:height*0.02}}>
            <View style={{height:height*0.03,width:width*0.15,borderWidth:1,borderColor:"#b30e66",borderRadius:10}}>
                <Text style={{color:"#b30e66",fontFamily:"Nunito_Bold",paddingLeft:5}}>8.5/10 </Text>
            </View>
            <Text style={{fontSize:width*0.036,color:"#5c5a5a",marginTop:2,fontFamily:"Nunito_SemiBold"}}> Enatus voloptate quibusdam libero</Text>
         </View>
         <View style={{marginHorizontal:width*0.07}}>
         <Text style={{fontSize:width*0.036,color:"#5c5a5a",marginTop:3,fontFamily:"Nunito_SemiBold"}}>provident eos! Neque quas quia paraitur harum bitis </Text>
         <View style={{flexDirection:"row"}}>
         <Text style={{fontSize:width*0.036,color:"#5c5a5a",marginTop:3,fontFamily:"Nunito_SemiBold"}}>non nihil. Odio quia et aut quibusdam li </Text>
         <Text style={{color:"#b30e66",fontFamily:"Nunito_Bold",marginTop:3}}>Read More</Text>
         </View>
         </View>
         <View style={{marginLeft:width*0.07,flexDirection:"row",alignItems:"center",marginVertical:5}}>
            <Image source={assets.image3} style={{height:20,width:20,borderRadius:10}}/>
            <Text style={{fontSize:width*0.03,marginLeft:5,color:"#696868"}}> Non iusto atque nam molestiae possimus. </Text>
            <Image source={assets.like} style={{height:15,width:15,marginLeft:5}}/>
            <Text style={{fontSize:width*0.03,marginLeft:2,color:"#696868"}}> 20</Text>
         </View>
         <View style={{backgroundColor:"#e3e3e3"}}>
         <View style={{marginHorizontal:width*0.07,flexDirection:'row',backgroundColor:"white",justifyContent:'space-between',marginTop:height*0.03,borderBottomRightRadius:30,borderTopRightRadius:30,borderTopLeftRadius:10,borderBottomStartRadius:10}}>
             <View>
            <TextInput placeholder="Leave a Comment" style={{flex:1,width:width*0.66,paddingLeft:10,fontSize:16,fontFamily:"Nunito_Bold"}}/>
            </View>
            <View style={{height:height*0.065,width:width*0.2,backgroundColor:"#f056bd",borderRadius:30,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:16}}>Post</Text>
            </View>
         </View>

         <View style={{flexDirection:'row',marginHorizontal:width*0.07,marginTop:height*0.03}}>
            <Image source={assets.image3} style={{height:40,width:40,borderRadius:20,marginTop:10}}/>
            <View style={{flexDirection:"column",marginLeft:10}}>
                <View style={{flexDirection:'row',alignItems:"center"}}>
                   <Text style={{fontSize:11,fontFamily:"Nunito_Bold"}}>Loremipsum </Text>
                   <Text style={{fontSize:11,fontFamily:"Nunito_Bold",color:"black",marginBottom:5}}> . </Text>
                   <Text style={{fontSize:11,color:"#636060"}}>30 min ago </Text>
                </View>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>Odio quia et aut @quibusdam li quibusdam </Text>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>libero provident eos! Neque quas quia </Text>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>paraitur harum debitis non nihil.</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("CommentScreen")}>
                <Text style={{color:"#f056bd",textDecorationLine:"underline",marginTop:10,fontFamily:"Nunito_SemiBold"}}>8 replies</Text>
                </TouchableOpacity>
            </View>
            <Image source={assets.like} style={{height:20,width:20,marginTop:height*0.055,marginLeft:10}}/>
            <Text style={{marginTop:height*0.06,color:"#999696",marginLeft:3,fontFamily:"Nunito_SemiBold"}}>16</Text>
         </View>
         <View style={{height:0.8,width:'90%',backgroundColor:"#858585",marginHorizontal:"5%",marginVertical:10}}/>

         <View style={{flexDirection:'row',marginHorizontal:width*0.07,marginTop:height*0.03}}>
            <Image source={assets.image3} style={{height:40,width:40,borderRadius:20,marginTop:10}}/>
            <View style={{flexDirection:"column",marginLeft:10}}>
            <View style={{flexDirection:'row',alignItems:"center"}}>
                   <Text style={{fontSize:11,fontFamily:"Nunito_Bold"}}>Loremipsum </Text>
                   <Text style={{fontSize:11,fontFamily:"Nunito_Bold",color:"black",marginBottom:5}}> . </Text>
                   <Text style={{fontSize:11,color:"#636060"}}>30 min ago </Text>
                </View>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>Odio quia et aut @quibusdam li quibusdam </Text>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>libero provident eos! Neque quas quia </Text>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>paraitur harum debitis non nihil.</Text>
                <Text style={{color:"#f056bd",textDecorationLine:"underline",marginTop:10,fontFamily:"Nunito_SemiBold"}}>Reply</Text>
            </View>
            <Image source={assets.like} style={{height:20,width:20,marginTop:height*0.055,marginLeft:10}}/>
            <Text style={{marginTop:height*0.06,color:"#999696",marginLeft:3,fontFamily:"Nunito_SemiBold"}}>16</Text>
         </View>
         <View style={{height:0.8,width:'90%',backgroundColor:"#858585",marginHorizontal:"5%",marginVertical:10}}/>

         <View style={{flexDirection:'row',marginHorizontal:width*0.07,marginTop:height*0.03}}>
            <Image source={assets.image3} style={{height:40,width:40,borderRadius:20,marginTop:10}}/>
            <View style={{flexDirection:"column",marginLeft:10}}>
            <View style={{flexDirection:'row',alignItems:"center"}}>
                   <Text style={{fontSize:11,fontFamily:"Nunito_Bold"}}>Loremipsum </Text>
                   <Text style={{fontSize:11,fontFamily:"Nunito_Bold",color:"black",marginBottom:5}}> . </Text>
                   <Text style={{fontSize:11,color:"#636060"}}>30 min ago </Text>
                </View>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>Odio quia et aut @quibusdam li quibusdam </Text>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>libero provident eos! Neque quas quia </Text>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>paraitur harum debitis non nihil.</Text>
                <Text style={{color:"#f056bd",textDecorationLine:"underline",marginTop:10,fontFamily:"Nunito_SemiBold"}}>8 replies</Text>
            </View>
            <Image source={assets.like} style={{height:20,width:20,marginTop:height*0.055,marginLeft:10}}/>
            <Text style={{marginTop:height*0.06,color:"#999696",marginLeft:3,fontFamily:"Nunito_SemiBold"}}>16</Text>
         </View>
         <View style={{height:0.8,width:'90%',backgroundColor:"#858585",marginHorizontal:"5%",marginVertical:10}}/>

         <View style={{flexDirection:'row',marginHorizontal:width*0.07,marginTop:height*0.03}}>
            <Image source={assets.image3} style={{height:40,width:40,borderRadius:20,marginTop:10}}/>
            <View style={{flexDirection:"column",marginLeft:10}}>
            <View style={{flexDirection:'row',alignItems:"center"}}>
                   <Text style={{fontSize:11,fontFamily:"Nunito_Bold"}}>Loremipsum </Text>
                   <Text style={{fontSize:11,fontFamily:"Nunito_Bold",color:"black",marginBottom:5}}> . </Text>
                   <Text style={{fontSize:11,color:"#636060"}}>30 min ago </Text>
                </View>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>Odio quia et aut @quibusdam li quibusdam </Text>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>libero provident eos! Neque quas quia </Text>
                <Text style={{fontSize:width*0.03,color:"#636060"}}>paraitur harum debitis non nihil.</Text>
                <Text style={{color:"#f056bd",textDecorationLine:"underline",marginTop:10,fontFamily:"Nunito_SemiBold"}}>8 replies</Text>
            </View>
            <Image source={assets.like} style={{height:20,width:20,marginTop:height*0.055,marginLeft:10}}/>
            <Text style={{marginTop:height*0.06,color:"#999696",marginLeft:3,fontFamily:"Nunito_SemiBold"}}>16</Text>
         </View>
         <View style={{height:0.8,width:'90%',backgroundColor:"#858585",marginHorizontal:"5%",marginVertical:10}}/>

         <View style={{flexDirection:'row',marginHorizontal:width*0.07,marginTop:height*0.03}}>
            <Image source={assets.image3} style={{height:40,width:40,borderRadius:20,marginTop:10}}/>
            <View style={{flexDirection:"column",marginLeft:10}}>
            <View style={{flexDirection:'row',alignItems:"center"}}>
                   <Text style={{fontSize:11,fontFamily:"Nunito_Bold"}}>Loremipsum </Text>
                   <Text style={{fontSize:11,fontFamily:"Nunito_Bold",color:"black",marginBottom:5}}> . </Text>
                   <Text style={{fontSize:11,color:"#636060"}}>30 min ago </Text>
                </View>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>Odio quia et aut @quibusdam li quibusdam </Text>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>libero provident eos! Neque quas quia </Text>
                <Text style={{fontSize:width*0.03,color:"#636060",fontFamily:"Nunito_SemiBold"}}>paraitur harum debitis non nihil.</Text>
                <Text style={{color:"#f056bd",textDecorationLine:"underline",marginTop:10,fontFamily:"Nunito_SemiBold"}}>8 replies</Text>
            </View>
            <Image source={assets.like} style={{height:20,width:20,marginTop:height*0.055,marginLeft:10}}/>
            <Text style={{marginTop:height*0.06,color:"#999696",marginLeft:3,fontFamily:"Nunito_SemiBold"}}>16</Text>
         </View>
         <View style={{height:0.8,width:'90%',backgroundColor:"#858585",marginHorizontal:"5%",marginVertical:10}}/>

         </View>

         <View>
             <Modal
             animationType="slide"
             visible={showModal}
             onRequestClose={()=>{setShowModal(!showModal)}}
             hasBackdrop={true}
             onBackdropPress={()=>{setShowModal(!showModal)}}
              transparent={false}
             style={{}}
             >
                <TouchableWithoutFeedback onPress={()=>setShowModal(false)}>
                 <View style={{backgroundColor:"rgba(237, 237, 237,1)"}}>
                   <View style={{height:height*0.6,marginTop:height*0.4,backgroundColor:"white",elevation:5,margin:3,borderTopLeftRadius:20,borderTopRightRadius:20}}>
                   <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
                      <Image source={assets.close} style={{height:height*0.06,width:width*0.12,alignSelf:"flex-end"}}/>
                      </TouchableOpacity>
                    <View style={{marginHorizontal:width*0.1,flexDirection:"row",marginTop:height*0.025}}>
                      <Image source={assets.chat} style={{height:25,width:25,resizeMode:"contain"}}/>
                      <Text style={{fontSize:18,color:"#8f8d8e",fontFamily:"Nunito_Bold",marginLeft:width*0.05}}>Send in Direct Message</Text>
                      </View>
                      <View style={{height:0.7,width:width*0.9,backgroundColor:"#8f8d8e",marginHorizontal:width*0.05,marginVertical:height*0.02}}/>

                      <View style={{marginHorizontal:width*0.1,flexDirection:"row",marginTop:height*0.025}}>
                      <Image source={assets.group} style={{height:25,width:25,resizeMode:"contain"}}/>
                      <Text style={{fontSize:18,color:"#8f8d8e",fontFamily:"Nunito_Bold",marginLeft:width*0.05}}>Send to Group</Text>
                      </View>
                      <View style={{height:0.7,width:width*0.9,backgroundColor:"#8f8d8e",marginHorizontal:width*0.05,marginVertical:height*0.02}}/>

                      <View style={{marginHorizontal:width*0.1,flexDirection:"row",marginTop:height*0.025}}>
                      <Image source={assets.link} style={{height:25,width:25,resizeMode:"contain"}}/>
                      <Text style={{fontSize:18,color:"#8f8d8e",fontFamily:"Nunito_Bold",marginLeft:width*0.05}}>Copy Link</Text>
                      </View>
                      <View style={{height:0.7,width:width*0.9,backgroundColor:"#8f8d8e",marginHorizontal:width*0.05,marginVertical:height*0.02}}/>

                     <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                         <View style={{flexDirection:'column'}}>
                            <Image source={assets.share_message} style={{height:60,width:60,alignItems:"center",justifyContent:"center"}}/>
                            <Text style={{color:"#595959"}}>Messages</Text>
                         </View>
                         <View style={{flexDirection:'column'}}>
                            <Image source={assets.share_email} style={{height:60,width:60,alignItems:"center",justifyContent:"center"}}/>
                            <Text style={{marginLeft:10,color:"#595959"}}>Email</Text>
                         </View>
                         <View style={{flexDirection:'column'}}>
                            <Image source={assets.share_instagram} style={{height:60,width:60,alignItems:"center",justifyContent:"center"}}/>
                            <Text style={{color:"#595959"}}>Instagram</Text>
                         </View>
                         <View style={{flexDirection:'column'}}>
                            <Image source={assets.share_twitter} style={{height:60,width:60,alignItems:"center",justifyContent:"center"}}/>
                            <Text style={{marginLeft:5,color:"#595959"}}>Twitter</Text>
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
export default PostDetail;