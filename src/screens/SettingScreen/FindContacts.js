import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { useState } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList,Modal} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')

const FindContacts=({navigation})=>{
    const[showModal,setShowModal]=useState(false)
  
    const Data=[
        {
            id:'1',
            userName:"Janedoe123",
            userImage:assets.image2,
            name:"Jane Doe",
            follower:"109",
            following:"46",
            btn_text:"Follow",
            path:assets.path3x,
            profile:assets.follower_hd,
            image1:assets.userprofile_accent
        },
        {
            id:'2',
            userName:"Janedoe123",
            userImage:assets.image2,
            name:"Jane Doe",
            follower:"109",
            following:"46",
            btn_text:"Following",
            path:assets.path3x,
            profile:assets.follower_hd,
            image1:assets.userprofile_accent
        },
        {
            id:'3',
            userName:"Janedoe123",
            userImage:assets.image2,
            name:"Jane Doe",
            follower:"109",
            following:"46",
            btn_text:"Following",
            path:assets.path3x,
            profile:assets.follower_hd,
            image1:assets.userprofile_accent
        }
    ]

    

    return(
      <ScrollView>
        <View style={{flex:1,backgroundColor:""}}>
            <View style={{ flexDirection:"row",marginTop:height*0.07,marginLeft:width*0.07,alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image source={assets.btn_back} /> 
            </TouchableOpacity>
            <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,marginLeft:width*0.13}}>Find Contacts</Text>
            </View>
          <View style={{flexDirection:"row",height:height*0.07,width:width*0.82,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,marginTop:height*0.03,alignItems:"center",backgroundColor:"white",marginLeft:width*0.1}}>
            <Image source={assets.sidebar_search} style={{height:20,width:20,marginLeft:width*0.04}}/>
            <TextInput placeholder="Search" style={{marginLeft:width*0.05,fontSize:width*0.045,flex:1,fontFamily:'Nunito_Bold'}}/>
            
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:height*0.02}}>
                        <Image source={assets.profile1} style={{height:50,width:50,alignItems:"center",justifyContent:"center"}}/>
                        <Image source={assets.facebook1} style={{height:50,width:50,alignItems:"center",justifyContent:"center"}}/>
                         <Image source={assets.twitter1} style={{height:50,width:50,alignItems:"center",justifyContent:"center"}}/>
                        <Image source={assets.message1} style={{height:50,width:50,alignItems:"center",justifyContent:"center"}}/>
             </View>
            
            <View style={{flexDirection:"row",marginHorizontal:width*0.07,justifyContent:"space-between",marginTop:height*0.03}}>
                <View style={{height:width*0.41,width:width*0.41,margin:5,elevation:5,backgroundColor:"white",borderRadius:10}}>
                   <View style={{flexDirection:"row"}}>
                       <Image source={assets.userprofile_accent} style={{height:width*0.2,width:width*0.1,borderTopLeftRadius:10}}/>
                       <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06,marginTop:width*0.02,marginLeft:width*-0.05}}/>
                       <View style={{flexDirection:"column",marginLeft:5,marginTop:height*0.01}}>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Janedoe123</Text>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"#b3afaf"}}>Jane Doe</Text>
                           <View style={{flexDirection:"row",alignItems:"center"}}>
                               <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>109</Text>
                               <Image source={assets.path3x} style={{height:12,width:12,resizeMode:"contain",marginLeft:7}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>46</Text>
                           </View>
                       </View>
                   </View>

                   <View style={{height:height*0.07,width:width*0.25,borderWidth:2,borderColor:"#e851a9",borderRadius:30,justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:height*0.01}}>
                       <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.05,color:"#e851a9"}}>Follow</Text>
                   </View>
                </View>

                <View style={{height:width*0.41,width:width*0.41,margin:5,elevation:5,backgroundColor:"white",borderRadius:10}}>
                   <View style={{flexDirection:"row"}}>
                       <Image source={assets.userprofile_accent} style={{height:width*0.2,width:width*0.1,borderTopLeftRadius:10}}/>
                       <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06,marginTop:width*0.02,marginLeft:width*-0.05}}/>
                       <View style={{flexDirection:"column",marginLeft:5,marginTop:height*0.01}}>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Janedoe123</Text>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"#b3afaf"}}>Jane Doe</Text>
                           <View style={{flexDirection:"row",alignItems:"center"}}>
                               <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>109</Text>
                               <Image source={assets.path3x} style={{height:12,width:12,resizeMode:"contain",marginLeft:7}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>46</Text>
                           </View>
                       </View>
                   </View>

                   <View style={{height:height*0.07,width:width*0.25,borderWidth:2,borderColor:"#e851a9",borderRadius:30,justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:height*0.01}}>
                       <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.05,color:"#e851a9"}}>Follow</Text>
                   </View>
                </View>
                </View>

                <View style={{flexDirection:"row",marginHorizontal:width*0.07,justifyContent:"space-between",marginTop:height*0.01}}>
                <View style={{height:width*0.41,width:width*0.41,margin:5,elevation:5,backgroundColor:"white",borderRadius:10}}>
                   <View style={{flexDirection:"row"}}>
                       <Image source={assets.userprofile_accent} style={{height:width*0.2,width:width*0.1,borderTopLeftRadius:10}}/>
                       <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06,marginTop:width*0.02,marginLeft:width*-0.05}}/>
                       <View style={{flexDirection:"column",marginLeft:5,marginTop:height*0.01}}>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Janedoe123</Text>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"#b3afaf"}}>Jane Doe</Text>
                           <View style={{flexDirection:"row",alignItems:"center"}}>
                               <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>109</Text>
                               <Image source={assets.path3x} style={{height:12,width:12,resizeMode:"contain",marginLeft:7}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>46</Text>
                           </View>
                       </View>
                   </View>

                   <View style={{height:height*0.07,width:width*0.25,borderWidth:2,borderColor:"#e851a9",borderRadius:30,justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:height*0.01}}>
                       <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.05,color:"#e851a9"}}>Follow</Text>
                   </View>
                </View>

                <View style={{height:width*0.41,width:width*0.41,margin:5,elevation:5,backgroundColor:"white",borderRadius:10}}>
                   <View style={{flexDirection:"row"}}>
                       <Image source={assets.userprofile_accent} style={{height:width*0.2,width:width*0.1,borderTopLeftRadius:10}}/>
                       <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06,marginTop:width*0.02,marginLeft:width*-0.05}}/>
                       <View style={{flexDirection:"column",marginLeft:5,marginTop:height*0.01}}>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Janedoe123</Text>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"#b3afaf"}}>Jane Doe</Text>
                           <View style={{flexDirection:"row",alignItems:"center"}}>
                               <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>109</Text>
                               <Image source={assets.path3x} style={{height:12,width:12,resizeMode:"contain",marginLeft:7}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>46</Text>
                           </View>
                       </View>
                   </View>

                   <View style={{height:height*0.06,width:width*0.25,justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:height*0.01}}>
                       <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.05,color:"#8a1654"}}>Following</Text>
                   </View>
                </View>
                </View>

                <View style={{flexDirection:"row",marginHorizontal:width*0.07,justifyContent:"space-between",marginTop:height*0.01}}>
                <View style={{height:width*0.41,width:width*0.41,margin:5,elevation:5,backgroundColor:"white",borderRadius:10}}>
                   <View style={{flexDirection:"row"}}>
                       <Image source={assets.userprofile_accent} style={{height:width*0.2,width:width*0.1,borderTopLeftRadius:10}}/>
                       <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06,marginTop:width*0.02,marginLeft:width*-0.05}}/>
                       <View style={{flexDirection:"column",marginLeft:5,marginTop:height*0.01}}>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Janedoe123</Text>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"#b3afaf"}}>Jane Doe</Text>
                           <View style={{flexDirection:"row",alignItems:"center"}}>
                               <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>109</Text>
                               <Image source={assets.path3x} style={{height:12,width:12,resizeMode:"contain",marginLeft:7}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>46</Text>
                           </View>
                       </View>
                   </View>

                   <View style={{height:height*0.07,width:width*0.25,borderWidth:2,borderColor:"#e851a9",borderRadius:30,justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:height*0.01}}>
                       <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.05,color:"#e851a9"}}>Follow</Text>
                   </View>
                </View>

                <View style={{height:width*0.41,width:width*0.41,margin:5,elevation:5,backgroundColor:"white",borderRadius:10}}>
                   <View style={{flexDirection:"row"}}>
                       <Image source={assets.userprofile_accent} style={{height:width*0.2,width:width*0.1,borderTopLeftRadius:10}}/>
                       <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06,marginTop:width*0.02,marginLeft:width*-0.05}}/>
                       <View style={{flexDirection:"column",marginLeft:5,marginTop:height*0.01}}>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Janedoe123</Text>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"#b3afaf"}}>Jane Doe</Text>
                           <View style={{flexDirection:"row",alignItems:"center"}}>
                               <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>109</Text>
                               <Image source={assets.path3x} style={{height:12,width:12,resizeMode:"contain",marginLeft:7}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>46</Text>
                           </View>
                       </View>
                   </View>

                   <View style={{height:height*0.07,width:width*0.25,borderWidth:2,borderColor:"#e851a9",borderRadius:30,justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:height*0.01}}>
                       <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.05,color:"#e851a9"}}>Follow</Text>
                   </View>
                </View>
                </View>
           
        </View>
        
        </ScrollView>
    )
}
export default FindContacts;