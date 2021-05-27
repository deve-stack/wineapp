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
     TouchableWithoutFeedback
    } from "react-native";
import * as assets from "../../components/assets";

const NewPost=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    const[showModal,setShowModal]=useState(false)

    return(
        <View style={{flex:1,backgroundColor:"#EFEFEF"}}>
            <View style={{height:height*0.37}}>
             <View style={{marginLeft:width*0.05,marginRight:width*0.03,flexDirection:"row",marginTop:height*0.05,alignItems:"center",justifyContent:"space-around"}}>
                
                <TouchableOpacity onPress={()=>navigation.navigate('tabNavigator')}>
               <Image source={assets.btn_back}/>
               </TouchableOpacity>
               <Text style={{fontSize:20,fontFamily:"Nunito_Bold",color:"#454444"}}>New Post</Text>
              <Text style={{fontSize:20,color:"#e64eab",fontFamily:"Nunito_Bold"}}>Publish</Text>
              
          </View>
          
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:"row",marginTop:height*0.05,marginLeft:10}}>
               <Image source={assets.wine_cup} style={{height:height*0.2,width:width*0.35,borderRadius:20}}/>
              
               <Image source={assets.delete_photo} style={{height:30,width:30,marginLeft:width*-0.1}} 
               />
               
              
               <Image source={assets.wine_image2} style={{height:height*0.2,width:width*0.35,borderRadius:20,marginLeft:width*0.05}}/>
               
               <Image source={assets.delete_photo} style={{height:30,width:30,marginLeft:width*-0.1}}/>
               
               <View style={{height:width*0.22,width:width*0.22,elevation:3,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:height*0.05,marginLeft:width*0.05,marginRight:20}}>
                   <Image source={assets.add_image} style={{height:50,width:50,resizeMode:"contain"}}/>
               </View>
               </View>
               </ScrollView>
            </View>
            <View style={{height:height*0.63,borderWidth:1,borderColor:"#de1b8c",borderTopLeftRadius:25,borderTopRightRadius:25}}>
                <View style={{paddingHorizontal:20}}>
                    
                    <Text style={{color:"#5c5a5a",marginTop:10,fontSize:width*0.042,fontFamily:"Nunito_SemiBold"}}>provident eios! 
                    <Text style={{color:"#5c5a5a",marginTop:10,fontSize:width*0.042,fontFamily:"Nunito_SemiBold"}}>provident eios! 
                    <Text style={{color:"#5c5a5a",marginTop:10,fontSize:width*0.042,fontFamily:"Nunito_SemiBold"}}> Quia Parataur harum bitis</Text>
                  </Text>
                  </Text>
                    
              <Text style={{color:"#5c5a5a",fontSize:width*0.042,fontFamily:"Nunito_SemiBold"}}>non nihil audio quio et aut quibusdom</Text>
              <Text style={{color:"#5c5a5a",fontSize:width*0.042,fontFamily:"Nunito_SemiBold"}}>non iusto atque nam molestae possimus</Text>
              </View>
              <View style={{flexDirection:"row",height:height*0.15,backgroundColor:"#fcefe8",alignItems:"center",marginTop:height*0.1}}>
              <TouchableOpacity onPress={()=>setShowModal(true)}>
                 <Image source={assets.close} style={{height:30,width:30,marginLeft:5}}/>
                 </TouchableOpacity>
                 <Image source={assets.wine_bottle} style={{height:80,width:80,marginTop:10,borderRadius:10}}/>
                 <View style={{flexDirection:'column',marginLeft:5}}>
                    <Text style={{fontFamily:"Nunito_Black",color:"#610b3f",fontSize:14}}>2017 castello di AMorasa La</Text>
                    <Text style={{fontFamily:"Nunito_Black",color:"#610b3f",fontSize:14}}>Castellana Reserve Super Tuscan</Text>
                    <Text style={{fontFamily:"Nunito_Black",color:"#610b3f",fontSize:14}}>Blend</Text>
                    <Text style={{fontFamily:"Nunito_Black",color:"#de1b8c",fontSize:16}}>8.6/10</Text>
                 </View>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:height*0.05}}>
              <TouchableOpacity onPress={()=>navigation.navigate('ratingScreen1')}>
                 <View style={{height:height*0.07,width:width*0.35,borderWidth:2,borderColor:"#e64eab",justifyContent:"center",alignItems:"center",borderRadius:25}}>
                     <Text style={{fontSize:16,color:"#e64eab",fontFamily:"Nunito_Bold"}}>Rate A Wine</Text>
                 </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('GoLive')}>
                 <View style={{height:height*0.07,width:width*0.25,borderWidth:2,borderColor:"#e64eab",justifyContent:"center",alignItems:"center",borderRadius:25}}>
                     <Text style={{fontSize:16,color:"#e64eab",fontFamily:"Nunito_Bold"}}>Go Live</Text>
                 </View>
                 </TouchableOpacity>
              </View>
            </View>

            <View style={{backgroundColor:"#BFC9CA"}}>
            <Modal
            animationType='fade'
            visible={showModal}
            onRequestClose={()=>{setShowModal(false)}}
            hasBackdrop={true}
            onBackdropPress={()=>{setShowModal(false)}}
             transparent={true}
             onDismiss={()=>setShowModal(false)}
            >
                <TouchableWithoutFeedback onPress={()=>setShowModal(false)}>
                <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.4)'}}>
                   <View style={{height:height*0.3,width:width*0.7,backgroundColor:"#ffffff",marginLeft:width*0.15,marginVertical:height*0.3,borderRadius:15}}>
                       <View style={{marginLeft:width*0.58,marginTop:height*0.01}}>
                       <TouchableOpacity onPress={()=>setShowModal(false)}>
                      <Image source={assets.close} style={{height:35,width:35}}/>
                      </TouchableOpacity>
                      </View>
                      <Text style={{fontSize:height*0.03,textAlign:"center",marginTop:height*0.03,fontFamily:"Nunito_Bold"}}>Discard Draft?</Text>
                      <View style={{flexDirection:"row",marginTop:height*0.08,marginHorizontal:width*0.05,justifyContent:"space-around"}}>
                          <View style={{height:height*0.06,width:width*0.2,borderWidth:1,borderColor:"#5e5959",borderRadius:25,justifyContent:"center",alignItems:"center"}}>
                              <Text style={{fontSize:16,color:"#5e5959"}}>Back</Text>
                          </View>
                          <View style={{height:height*0.06,width:width*0.33,backgroundColor:"#ed8a8a",borderRadius:25,justifyContent:"center",alignItems:"center",fontFamily:"Nunito_Bold"}}>
                              <Text style={{fontSize:16,color:"white",fontFamily:"Nunito_Bold"}}>Discard</Text>
                          </View>
                      </View>
                   </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            </View>
        </View>
    )
}
export default NewPost;