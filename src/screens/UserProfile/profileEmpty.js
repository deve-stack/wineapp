import React from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, FlatList} from 'react-native'
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import HomeScreen from '../HomeScreen/HomeScreen';

const{height,width}=Dimensions.get('window')

const profileEmpty=({navigation})=>{
    return(
        <ScrollView>
        <View style={{flex:1}}>
           <Image source={assets.wine_room} style={{height:height*0.2,width:width*1}}/>
           <Image source={assets.sidebar} style={{height:22,width:22,marginLeft:width*0.05,marginTop:height*-0.16}}/>

            <View style={{height:width*0.34,width:width*0.34,borderRadius:width*0.17,backgroundColor:"#c9c9c9",alignSelf:"center",marginTop:width*0.05,justifyContent:'center',alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.navigate('otherProfile')}>
             <Image source={assets.image2} style={{height:width*0.34,width:width*0.34,borderRadius:width*0.17}}/>
             </TouchableOpacity>
             </View>
               <View style={{flexDirection:'row',alignSelf:"center",alignItems:"center"}}>
             <Text style={{fontFamily:"Nunito_ExtraBold",fontSize:width*0.05,marginLeft:5}}>Joshwines</Text>
             <Image source={assets.edit_profile} style={{height:15,width:15,resizeMode:"contain",marginLeft:10}}/>
             </View>
             <Text style={{textAlign:"center",fontSize:width*0.04,color:"#878484",fontFamily:"Nunito_Bold"}}>Loremzo Ipsumini</Text>
             <View style={{flexDirection:"row",height:height*0.08,width:width*1,backgroundColor:"#961F63",marginTop:height*0.03,alignItems:"center"}}>
                <View style={{flexDirection:'row',marginLeft:width*0.08}}>
                    <Image source={assets.profile_followers} style={{height:height*0.06,width:width*0.075,resizeMode:"contain"}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.02}}>
                        <Text style={{color:"white",fontSize:width*0.05,fontFamily:"Nunito_ExtraBold"}}>0</Text>
                        <Text style={{color:"white",fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Followers</Text>
                    </View>
                </View>
                <View style={{height:height*0.06,width:1,backgroundColor:"white",marginLeft:width*0.03}}/>

                <View style={{flexDirection:'row',marginLeft:width*0.04,alignItems:"center"}}>
                    <Image source={assets.sponsor_white} style={{height:height*0.046,width:width*0.07,resizeMode:"contain"}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.02}}>
                        <Text style={{color:"white",fontSize:width*0.05,fontFamily:"Nunito_ExtraBold"}}>0</Text>
                        <Text style={{color:"white",fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Sponsors</Text>
                    </View>
                </View>
                <View style={{height:height*0.06,width:1,backgroundColor:"white",marginLeft:width*0.03}}/>

                <View style={{flexDirection:'row',marginLeft:width*0.04,alignItems:"center"}}>
                    <Image source={assets.rating_white} style={{height:height*0.05,width:width*0.07,resizeMode:"contain"}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.02}}>
                        <Text style={{color:"white",fontSize:width*0.05,fontFamily:"Nunito_ExtraBold"}}>0</Text>
                        <Text style={{color:"white",fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Ratings</Text>
                    </View>
                </View>
             </View>
             <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.06,marginBottom:10}}>Active Groups</Text>
            <View style={{height:width*0.45,width:width*0.45,margin:5,elevation:5,backgroundColor:"#f5f5f5",alignSelf:"center",justifyContent:"center",alignItems:"center",borderRadius:10}}>
               <Image source={assets.plus3x} style={{height:25,width:25,resizeMode:"contain"}}/>
               <Text style={{fontFamily:"Nunito_Black",fontSize:width*0.045,marginTop:5}}>New Group</Text>
            </View>
     <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.06}}>Followed Tags</Text>
        <Image source={assets.plus_button} style={{height:65,width:65,alignSelf:"center",marginTop:height*0.02}}/>
       
           <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.06,marginBottom:10}}>Posts & Ratings</Text>
           <View style={{flexDirection:"row",height:height*0.07,width:width*0.82,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,marginTop:height*0.01,alignItems:"center",backgroundColor:"white",marginLeft:width*0.1}}>
            <Image source={assets.sidebar_search} style={{height:20,width:20,marginLeft:width*0.04}}/>
            <TextInput placeholder="Search Posts & Ratings" style={{marginLeft:width*0.05,fontSize:width*0.045,flex:1,fontFamily:'Nunito_Bold'}}/>
            
            </View>
             <View style={{flexDirection:"row",marginTop:height*0.03}}>
            <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.01,alignItems:"flex-end"}}>
                <View style={{flexDirection:"column",alignItems:"center"}}>
                    <Text style={{color:"#6e6b6a"}}>0</Text>
                    <View style={{height:10,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>>6</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.057}}>
                    <Text style={{color:"#6e6b6a"}}>0</Text>
                    <View style={{height:10,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>7</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.057}}>
                    <Text style={{color:"#6e6b6a"}}>0</Text>
                    <View style={{height:10,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>8</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.057}}>
                    <Text style={{color:"#6e6b6a"}}>0</Text>
                    <View style={{height:10,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>9</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.057}}>
                    <Text style={{color:"#6e6b6a"}}>0</Text>
                    <View style={{height:10,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>10</Text>
                </View>

            </View>
         
            </View>
            <Text style={{marginLeft:width*0.07,marginTop:height*0.02,fontSize:width*0.035}}>Enatus voloplate quibusdom libero provident eios! </Text>
            <Text style={{marginLeft:width*0.07,fontSize:width*0.035}}>Neque quas Quia Parataur harum bitis non nihil.</Text>
            <Text style={{marginLeft:width*0.07,fontSize:width*0.035,marginBottom:height*0.02}}>Odio quio et aut quibusdom.</Text>
           <Text style={{textAlign:"center",fontFamily:"Nunito_Black",fontSize:width*0.05,marginTop:height*0.02,color:"#878686"}}>Nothing here yet!</Text>
           <Text style={{textAlign:"center",textDecorationLine:"underline",fontSize:width*0.05,color:"#a14273",marginTop:height*0.01,marginBottom:height*0.1,fontFamily:"Nunito_Bold"}}>Create a Post</Text>
        </View>
        </ScrollView>
    )
}
export default profileEmpty;