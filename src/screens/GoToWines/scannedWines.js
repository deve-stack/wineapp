import { Assets } from "@react-navigation/stack";
import React,{ useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal, TouchableWithoutFeedback} from "react-native";
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
        text5:"2020 . 2019 . 2018 . 2016 . 2014",
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
        text5:"2020 . 2019 . 2018 . 2016 . 014",
        button_text1:"More",
        button_text2:"Prices",
    }
]

const scannedWines=({})=>{
    const navigation=useNavigation();
    const[showModal,setShowModal]=useState(false)
    return(
        <View style={{flex:1,backgroundColor:'#EFEFEF'}}>
            
            <View style={{marginLeft:width*0.07,marginTop:height*0.06,flexDirection:'row',alignItems:"center"}}> 
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back}/> 
            </TouchableOpacity>
                 <Text style={{fontSize:width*0.05,fontFamily:"Nunito_Bold",marginLeft:width*0.14}}>Scanned Wine</Text>
                 <Image source={assets.scan_camera} style={{height:25,width:25,resizeMode:'contain',marginLeft:width*0.07}}/> 
                 <TouchableOpacity onPress={()=>setShowModal(true)}>
                 <Image source={assets.share_colored} style={{height:25,width:25,resizeMode:'contain',marginLeft:width*0.07}}/>
                 </TouchableOpacity> 
             </View>
           
           <View style={{flexDirection:"row",marginHorizontal:width*0.05,marginTop:height*0.035}}>
              <View style={{flexDirection:"column",width:width*0.43,height:height*0.45}}>
                 <Text style={{fontFamily:"Nunito_Black"}}>2017 Castello di </Text>
                 <Text style={{fontFamily:"Nunito_Black"}}>Amorosa La Castellana </Text>
                 <Text style={{fontFamily:"Nunito_Black"}}>Reserve Super Tuscan</Text>
                 <Text style={{fontFamily:"Nunito_Black"}}>Blend</Text>
                 <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
                     <Image source={assets.flag_hd} style={{height:15,width:15,resizeMode:"contain"}}/>
                 <Text style={{color:"#808080",marginLeft:5,fontFamily:"Nunito_Bold",fontSize:width*0.035}}>Kai-Simore Winery</Text>
                 </View>
                 <Text style={{color:"#808080",marginTop:7}}>Grapes</Text>
                 <Text style={{fontFamily:"Nunito_Black"}}>Cabernet savignon</Text>
                 <Text style={{color:"#808080",marginTop:7,fontFamily:"Nunito_Bold"}}>ABV</Text>
                 <Text style={{fontFamily:"Nunito_Black"}}>14.5%</Text>
                 <Text style={{color:"#808080",fontSize:width*0.03,marginTop:7,fontFamily:"Nunito_Bold"}}>2020 . 2018 . 2017 . 2016 . </Text>
                 <Text style={{color:"#808080",fontSize:width*0.03,fontFamily:"Nunito_Bold"}}>2015 . 2013 . 2012 . 2011 . </Text>
                 <Text style={{color:"#808080",fontSize:width*0.03,fontFamily:"Nunito_Bold"}}>2011 . 2010 .  
                 <Text style={{color:"#c44ba0",fontSize:width*0.03,fontFamily:"Nunito_Bold"}}> 4 More</Text>
                 </Text>
              </View>
              <View style={{flexDirection:"column",width:width*0.45,height:height*0.43}}>
              <Image source={assets.wine_image4} style={{height:height*0.43,width:width*0.45,borderRadius:15}}/>
              <View style={{height:height*0.05,width:width*0.2,backgroundColor:"white",borderRadius:15,marginTop:height*-0.42,marginLeft:5,justifyContent:"center",alignItems:"center"}}> 
                <Text style={{color:"#b31764",fontFamily:"Nunito_Black",fontSize:width*0.05}}>8.5/10</Text>
              </View>
              </View>
           </View>

           <View style={{flexDirection:"row",marginHorizontal:width*0.18,justifyContent:"space-between"}}>
               <TouchableOpacity onPress={()=>navigation.navigate("scannedWines1")}>
               <View style={{height:height*0.07,width:width*0.37,backgroundColor:'#c44ba0',borderRadius:30,justifyContent:'center',alignItems:"center"}}>
                   <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>See Prices</Text>
               </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate("VintageList")}>
               <View style={{height:height*0.07,width:width*0.2,borderColor:'#e880d0',borderWidth:1.5,borderRadius:30,justifyContent:'center',alignItems:"center"}}>
                   <Text style={{color:"#e880d0",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Rate</Text>
               </View>
               </TouchableOpacity>
           </View>
           <Text style={{fontSize:width*0.03,marginLeft:width*0.25,marginTop:5,fontFamily:"Nunito_Bold",color:"#696969"}}>Arrives by 03/24</Text>
           <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.025}}>People Taste</Text>

           <View style={{flexDirection:'row',marginVertical:10}}>
              <View style={{height:height*0.04,width:width*0.24,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:width*0.06,}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Cranberries</Text>
              </View>
              <View style={{height:height*0.04,width:width*0.17,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:7}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Cherries</Text>
              </View>
              <View style={{height:height*0.04,width:width*0.16,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:7}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Apples </Text>
              </View>
              <View style={{height:height*0.04,width:width*0.16,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:7}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Smokey</Text>
              </View>
           </View>

           <View style={{flexDirection:'row',}}>
              <View style={{height:height*0.04,width:width*0.16,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:width*0.06,}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Earthy</Text>
              </View>
              <View style={{height:height*0.04,width:width*0.17,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:7}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Sweet</Text>
              </View>
              <View style={{height:height*0.04,width:width*0.17,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:7}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Vanilla</Text>
              </View>
              
           </View>
           <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.06}}>People Say</Text>

           <View>
             <Modal
             animationType="slide"
             visible={showModal}
             onRequestClose={()=>{setShowModal(showModal)}}
             hasBackdrop={true}
             
             onBackdropPress={()=>{setShowModal(showModal)}}
              transparent={true}
             >
                 <TouchableWithoutFeedback onPress={()=>setShowModal(false)}>
                 <View style={{flex:1,marginTop:5,elevation:5}}>
                   <View style={{height:height*0.74,marginTop:height*0.26,backgroundColor:"white",borderTopLeftRadius:20,borderTopRightRadius:20,elevation:5}}>
                   <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
                      <Image source={assets.close} style={{height:height*0.06,width:width*0.12,alignSelf:"flex-end"}}/>
                      </TouchableOpacity>
                    <View style={{marginHorizontal:width*0.1,flexDirection:"row",marginTop:height*0.025}}>
                      <Image source={assets.rating_black} style={{height:25,width:25,resizeMode:"contain"}}/>
                      <Text style={{fontSize:18,color:"#8f8d8e",fontFamily:"Nunito_Bold",marginLeft:width*0.05}}>Rate Wine</Text>
                      </View>
                      <View style={{height:0.7,width:width*0.9,backgroundColor:"#8f8d8e",marginHorizontal:width*0.05,marginVertical:height*0.025}}/>

                      <View style={{marginHorizontal:width*0.1,flexDirection:"row"}}>
                      <Image source={assets.chat} style={{height:25,width:25,resizeMode:"contain"}}/>
                      <Text style={{fontSize:18,color:"#8f8d8e",fontFamily:"Nunito_Bold",marginLeft:width*0.05}}>Send in Direct Message</Text>
                      </View>
                      <View style={{height:0.7,width:width*0.9,backgroundColor:"#8f8d8e",marginHorizontal:width*0.05,marginVertical:height*0.025}}/>

                      <View style={{marginHorizontal:width*0.1,flexDirection:"row"}}>
                      <Image source={assets.group} style={{height:25,width:25,resizeMode:"contain"}}/>
                      <Text style={{fontSize:18,color:"#8f8d8e",fontFamily:"Nunito_Bold",marginLeft:width*0.05}}>Send to Group</Text>
                      </View>
                      <View style={{height:0.7,width:width*0.9,backgroundColor:"#8f8d8e",marginHorizontal:width*0.05,marginVertical:height*0.025}}/>

                      <View style={{marginHorizontal:width*0.1,flexDirection:"row"}}>
                      <Image source={assets.follow_tags} style={{height:25,width:25,resizeMode:"contain"}}/>
                      <Text style={{fontSize:18,color:"#8f8d8e",fontFamily:"Nunito_Bold",marginLeft:width*0.05}}>Follow This Wine's Tags</Text>
                      </View>
                      <View style={{height:0.7,width:width*0.9,backgroundColor:"#8f8d8e",marginHorizontal:width*0.05,marginVertical:height*0.025}}/>

                      <View style={{marginHorizontal:width*0.1,flexDirection:"row"}}>
                      <Image source={assets.link} style={{height:25,width:25,resizeMode:"contain"}}/>
                      <Text style={{fontSize:18,color:"#8f8d8e",fontFamily:"Nunito_Bold",marginLeft:width*0.05}}>Copy Link</Text>
                      </View>
                      <View style={{height:0.7,width:width*0.9,backgroundColor:"#8f8d8e",marginHorizontal:width*0.05,marginVertical:height*0.02}}/>

                     <View style={{flexDirection:"row",justifyContent:"space-evenly",marginHorizontal:width*0.07}}>
                         <View style={{flexDirection:'column'}}>
                            <Image source={assets.share_message} style={{height:55,width:55,alignItems:"center",justifyContent:"center"}}/>
                            <Text style={{color:"#595959"}}>Messages</Text>
                         </View>
                         <View style={{flexDirection:'column'}}>
                            <Image source={assets.share_email} style={{height:55,width:55,alignItems:"center",justifyContent:"center"}}/>
                            <Text style={{marginLeft:10,color:"#595959"}}>Email</Text>
                         </View>
                         <View style={{flexDirection:'column'}}>
                            <Image source={assets.share_instagram} style={{height:55,width:55,alignItems:"center",justifyContent:"center"}}/>
                            <Text style={{color:"#595959"}}>Instagram</Text>
                         </View>
                         <View style={{flexDirection:'column'}}>
                            <Image source={assets.share_twitter} style={{height:55,width:55,alignItems:"center",justifyContent:"center"}}/>
                            <Text style={{marginLeft:5,color:"#595959"}}>Twitter</Text>
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
export default scannedWines;