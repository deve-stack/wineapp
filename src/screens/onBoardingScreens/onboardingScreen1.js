import React,{ useState,useEffect } from 'react'
import { View ,Text, ImageBackground,Dimensions, Image,TextInput,TouchableOpacity,StyleSheet, ScrollView, Alert} from 'react-native'
import * as assets from "../../components/assets";
import axios from "axios";
const onboardingScreen1=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    const[Username,setUser]=useState('')
    const[click,onClicks]=useState('')
    const[flag,setFlag]=useState(true)
    const[flag1,setFlag1]=useState(false)
    const[flag2,setFlag2]=useState(false)
    useEffect (() =>{
     
     
    var data = new FormData();
    data.append('country', 'usa');
    data.append('city', 'new york');
    data.append('state', 'new york');
    data.append('latitude', '23.3433');
    data.append('longitude', '-76.2342');
    data.append('privacy_type',click);
   data.append('profile_pic',"");
    data.append('tastes', '1');
    data.append('tastes', '2');
    data.append('username',Username);

    console.log(data)
    axios({
        method:'put',
        url:'http://18.237.129.120:8000/api/user/47/account',
        data:data,
        headers: { "Content-Type": "multipart/form-data" },
    })
    .then (function (response){
        console.log("response is---------------- ",response.data)
       
    })
  .catch(function (error){
      console.log('error///////',error.message)
      alert(error.message)
  })
      
    },[])



    return(
    
        <View style={{flex:1}}>
            <ImageBackground source={assets.gradient} style={{flex:1}}>
              <ScrollView>
              <View style={{marginBottom:20}}>
               <View style={{height:height*0.8,backgroundColor:'white',borderBottomEndRadius:50,borderBottomLeftRadius:50}}>
                 <Text style={{fontSize:height*0.06,marginTop:height*0.07,marginLeft:width*0.1,color:'#540840',fontFamily:'Kanit_Bold'}}>Account</Text>
                 <View style={{flexDirection:'row',marginHorizontal:width*0.1,marginTop:height*0.02,justifyContent:'space-between'}}>
                  <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View style={{height:height*0.07,width:width*0.3,borderRadius:25,borderWidth:2,borderColor:'#961F63',flexDirection:'row',alignItems:'center'}}>
                        <Image source={assets.back_arrow_hd} style={{marginLeft:'14%',height:15,width:28,resizeMode:"contain"}}/>
                       <Text style={{fontSize:width*0.05,color:'#961F63',marginLeft:'5%',fontFamily:'Nunito_Bold'}}>Back</Text>
                    </View>
                    </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate('onboardingScreen2')}>
                    <View style={{height:height*0.07,width:width*0.47,borderRadius:25,flexDirection:'row',alignItems:'center',backgroundColor:'#C45FA5'}}>
                         <Text style={{fontSize:width*0.05,color:'white',marginLeft:'10%',fontFamily:'Nunito_Bold'}}>Continue</Text>
                       <Image source={assets.arrow_forward} style={{marginLeft:'10%',width:40,height:20}}/>
                    </View>
                    </TouchableOpacity>
                 </View>
                 <Text style={{marginLeft:width*0.1,fontSize:width*0.04,marginTop:height*0.015,fontFamily:"Nunito_SemiBold"}}>Select a username for other people to call</Text>
                 <Text style={{marginLeft:width*0.1,fontSize:width*0.04,fontFamily:"Nunito_SemiBold"}}>you by. It can be your name, a favorite</Text>
                 <Text style={{marginLeft:width*0.1,fontSize:width*0.04,fontFamily:"Nunito_SemiBold"}}>wine, a pet, or anything else.</Text>
                 <View style={{height:height*0.07,width:'80%',backgroundColor:'white',borderWidth:0.7,borderColor:"#bf6296",marginHorizontal:width*0.1,borderRadius:5,marginTop:height*0.02}}>
                         <TextInput placeholder="Username"
                           value={Username}
                         onChangeText={(Username)=>setUser(Username)}
                        placeholderTextColor="#B1B1B1"
                         style={{flex:1,paddingLeft:width*0.29,fontFamily:"Nunito_Bold",fontSize:18}}
                         />
                     </View>
                     <Text style={{fontSize:width*0.042,textAlign:'center',color:'#936983',marginTop:height*0.015,fontFamily:"Nunito_Black"}}>Available!</Text>
                     <View style={{width:'92%',height:1,backgroundColor:'#736f71',opacity:0.3,marginLeft:'4%',marginTop:height*0.032}}/>
                     <Text style={{marginLeft:'5%',marginTop:height*0.012,fontSize:16,fontFamily:"Nunito_Black",color:"#B1B1B1"}}>Post Privacy</Text>
                     <View style={{flexDirection:'row',marginTop:height*0.015,marginLeft:width*0.1}}>
                     <View style={{flexDirection:'column'}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                           <Text style={{fontWeight:'bold'}}>Public</Text>
                         
                           {
                             flag == false &&
                             <TouchableOpacity  onPress={() => {setFlag(true),setFlag1(false),setFlag2(false)}}>
                             <Image
                            source={assets.radio_button1} style={{marginLeft:5}}/>
                            </TouchableOpacity>
                             
                           }
                           {
                             flag == true &&
                             <TouchableOpacity  onPress={() => {onClicks(1),setFlag(false)}}>
                             <Image
                            source={assets.radio_active1} style={{marginLeft:5}}/>
                            
                            </TouchableOpacity>
                           }
                           
                           </View>
                           <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.01}}>Your posts can</Text>
                           <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>be seen by</Text>
                           <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>anyone.</Text>
                         </View>
                         <View style={{flexDirection:'column',marginLeft:'5%'}}>
                           <View style={{flexDirection:"row",alignItems:'center'}}>
                         <Text style={{fontWeight:'bold'}}>Personal</Text>
                         {
                             flag1 == false &&
                             <TouchableOpacity  onPress={() => {setFlag1(true),setFlag(false),setFlag2(false)}}>
                             <Image
                            source={assets.radio_button1} style={{marginLeft:5}}/>
                            </TouchableOpacity>
                             
                           }
                           {
                             flag1 == true &&
                             <TouchableOpacity  onPress={() => {onClicks(2),setFlag1(false)}}>
                             <Image
                            source={assets.radio_active1} style={{marginLeft:5}}/>
                            
                            </TouchableOpacity>
                           }
                           
                        
                         </View>
                        
                           <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.01}}>Your posts can </Text>
                           <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>only be seen by </Text>
                           <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>people you </Text>
                           <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>follow and</Text>
                           <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>those who</Text>
                           <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>follow you. </Text>
                         </View>
                         <View style={{flexDirection:'column',marginLeft:'5%'}}>
                         <View style={{flexDirection:"row",alignItems:'center'}}>
                         <Text style={{fontWeight:'bold'}}>Private</Text>
                        
                         {
                             flag2 == false &&
                             <TouchableOpacity  onPress={() => {setFlag2(true),setFlag(false),setFlag1(false)}}>
                             <Image
                            source={assets.radio_button1} style={{marginLeft:5}}/>
                            </TouchableOpacity>
                             
                           }
                           {
                             flag2 == true &&
                             <TouchableOpacity  onPress={() => {onClicks(3),setFlag2(false)}}>
                             <Image
                            source={assets.radio_active1} style={{marginLeft:5}}/>
                            
                            </TouchableOpacity>
                           }
                           
                         </View>
                         <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.01}}>Your posts can</Text>
                         <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>only be seen by</Text>
                         <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>people you</Text>
                         <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>manually </Text>
                         <Text style={{color:"#C45FA5",fontSize:height*0.016,fontFamily:"Nunito_Bold",marginTop:height*0.003}}>approve.</Text>
                         </View>
                     </View>
               </View>
               <View style={{height:height*0.2,justifyContent:"flex-end"}}>
               <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginBottom:height*0.05}}>
            <Image source={assets.timeline_Current} style={{height:15,width:15}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
           </View>
               </View>
               </View>
               </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles=StyleSheet.create({
  privacyText:{
    
  }
})
export default onboardingScreen1;