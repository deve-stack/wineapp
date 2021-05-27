import React,{useState} from "react";
import { View,Image, TextInput, Text, ScrollView, TouchableOpacity,ImageBackground,Dimensions,ActivityIndicator,Alert} from "react-native";
import * as assets from "../../components/assets";
import axios from "axios";
import * as Url from '../../Api/Url'
import { useNavigation } from "@react-navigation/native";
const SignIn=({})=>{
    const navigation=useNavigation();
    const {height,width}=Dimensions.get('window')
    const[show,setShow]=useState(true)
    const[email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const[showIndicator,setShowIndicator]=useState(false)

    const LoginFn=()=>{
        if (email=="" || Password=="") {
            alert("please fill email and Password")
        }
        else{
        setShowIndicator(true)
            var body = new FormData();
             body.append('email', email);
             body.append('password', Password);
            console.log('body ///',body)
            axios({
                method:'post',
                url:"http://18.237.129.120:8000/api/login",
                data:body,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response){
                console.log("Url//////",response)
                console.log("response",response);
                if(response.data.status_code==400){
                    alert(response.data.message)
                    setShowIndicator(false)
                    console.log('code///////////////////////',response.data.message)
                  }
                  else if (response.data.status_code==200){
                    setShowIndicator(false)
                    Alert.alert("",
                    response.data.message,
                    [
                      {text:"Cancel",onPress:()=>console.log("cancel pressed"),style:"cancel"},
                      {text:"OK" ,onPress:()=>navigation.navigate("onboardingScreen1")}
                    ])
                  }
            })
            .catch(function (error){
                console.log('error///////',error.message)
                alert(error.message)
            })
        }
    }
    return(
     <View style={{flex:1}}>
         <ImageBackground source={assets.splash1} style={{flex:1}}>
         <ScrollView>
             <View >
                 <View style={{marginBottom:30,backgroundColor:"rgba(150,150,150,0.7)",borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
         <View 
         style={{height:height*0.68,borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
         <TouchableOpacity onPress={()=>navigation.goBack() }>
         <Image source={assets.btn_back} style={{marginTop:height*0.07,marginLeft:width*0.07,height:height*0.02,width:width*0.1,resizeMode:"contain"}}/>
         </TouchableOpacity>
         <Image source={assets.WineZap_large} style={{alignSelf:'center',height:height*0.11,width:width*0.77,alignSelf:'center',resizeMode:"contain",opacity:1}}/>
         <View style={{marginTop:height*0.08,marginHorizontal:'10%'}}>
         <View style={{height:height*0.07,width:'100%',borderRadius:10,borderWidth:1,borderColor:'#bf6296',backgroundColor:'#c4c2c2'}}>
             <TextInput
             placeholder="Email or Username"
             value={email}
             onChangeText={(email)=>setEmail(email)}
             style={{flex:1,fontFamily:"Nunito_Bold",fontSize:width*0.042,marginLeft:15}}
             />
         </View>
         </View>
         <View style={{marginTop:height*0.04,marginHorizontal:'10%'}}>
         <View style={{height:height*0.07,width:'100%',borderRadius:10,borderWidth:1,borderColor:'#bf6296',backgroundColor:'#c4c2c2',flexDirection:"row"}}>
             <TextInput
             placeholder="Password"                      
             secureTextEntry={show}                  
             value={Password}                                
             onChangeText={(Password)=>setPassword(Password)}                                 
             style={{flex:1,fontFamily:"Nunito_Bold",fontSize:width*0.042,marginLeft:15}}               
             />                        
              {show==true?                            
                         <TouchableOpacity onPress={()=>setShow(false)}>                
                         <Image source={assets.eye_off1} style={{height:22,width:30,marginRight:10,marginTop:13}}/>
                         </TouchableOpacity>:
                         <TouchableOpacity onPress={()=>setShow(true)}>
                         <Image source={assets.eye1} style={{height:22,width:30,marginRight:10,marginTop:13}}/>
                         </TouchableOpacity>}
         </View>
         </View>
         <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
         <Text style={{marginLeft:'45%',marginTop:10,textDecorationLine:'underline',color:'#82085d',fontSize:18,letterSpacing:1}}>Forgot Password?</Text>
         </TouchableOpacity>
         <View style={{marginTop:height*0.06,marginHorizontal:'10%',opacity:1}}>
         <TouchableOpacity onPress={()=>LoginFn()}>
             <View 
             opacity={1.0}
             style={{height:55,width:'100%',backgroundColor:"#961F63",borderRadius:28,justifyContent:"center",alignItems:'center'}}>
                 
                {showIndicator==false ? 
                <Text style={{color:'white',fontWeight:'bold',fontSize:20,letterSpacing:1}}>Log In</Text>
                :
                 <ActivityIndicator size={'large'} color="green" animating={showIndicator}/>}
                 

             </View>
             </TouchableOpacity>
         </View>
         </View>
         </View>
         <View style={{height:height*0.3}}>
         <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:height*0.04,marginHorizontal:"20%",justifyContent:"space-between"}}> 
        <Image source={assets.google4} style={{height:50,width:50,resizeMode:"contain"}}/>
        <Image source={assets.facebook3} style={{height:50,width:50,resizeMode:"contain"}}/>
        <Image source={assets.twitter3} style={{height:50,width:50,resizeMode:"contain"}}/>
        </View>
        <Text style={{textAlign:'center',textDecorationLine:'underline',fontSize:20,marginTop:height*0.06,color:'white',fontFamily:"Nunito_Bold",letterSpacing:1}}
        onPress={()=>navigation.navigate('signUp')}
        >Sign Up</Text>
       
     </View>
     </View>
     </ScrollView>
     </ImageBackground>
     </View>
    )
}
export default SignIn;