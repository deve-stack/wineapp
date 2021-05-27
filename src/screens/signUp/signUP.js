import React,{useState} from 'react'
import { Image, ImageBackground, ScrollView, Text, TextInput, View ,TouchableOpacity,Dimensions,ActivityIndicator,Alert} from "react-native";
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from "axios";
import * as Url from '../../Api/Url'

const  signUp=({navigation})=>{
    const[show,setShow]=useState(true)
    const[show1,setShow1]=useState(true)
    const{height,width}=Dimensions.get('window')
    const[first_name,setfirst_name]=useState('')
    const[last_name,setlast_name]=useState("")
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    const[cPassword,setcPassword]=useState("")
    const[warn,setWarn]=useState(false)
    const[emailWarn,setEmailWarn]=useState(false)
    const[passWarn,setpassWarn]=useState(null)
    const[matchpass,setMatchPass]=useState(false)
    const[indicator,setIndicator]=useState(false)


    const PasswordWarning=()=>{
        Password.length>=6 ? setpassWarn("Strong") : setpassWarn("Weak")
    }
    const signUpFn=()=>{
        //const{first_name,last_name,Email,Password,cPassword}=this.state;
        var reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
       if (first_name=="" || last_name=="" || Email=="" || Password=="" || cPassword=="") {
         alert('Please fill all the fields')
       }
      else if (reg.test(Email)!=true) {
        alert('Please fill valid Email')
       
      } 
    //    else if (Password.length<6) {
    //      setpassWarn("Weak")
    //     }
        else if(Password!= cPassword) {
             alert("Password mismatch")
        }
       
        
     else{
        setIndicator(true)
        var data = new FormData();
        data.append('first_name',first_name);
        data.append('last_name',last_name);
        data.append('email', Email);
        data.append('password',Password);
        data.append('confirm_password',cPassword);

        console.log(data)
        axios({
            method:'post',
            url:'http://18.237.129.120:8000/api/register',
            data:data,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then (function (response){
            console.log("response is---------------- ",response.data)
            if(response.data.status_code==400){
                alert(response.data.error_message)
                setIndicator(false)
            }
            else if (response.data.status_code==200){
                setIndicator(false)
                Alert.alert("",
                response.data.message,
                [
                  
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
                   <View style={{marginBottom:20}}>
                   <View style={{backgroundColor:"rgba(150,150,150,0.7)",borderBottomLeftRadius:50,borderBottomRightRadius:50}}>

               <View style={{height:height*0.72,borderBottomEndRadius:50,borderBottomLeftRadius:50}}>
                   <View style={{flexDirection:"row",marginTop:height*0.05,alignItems:'center',justifyContent:'space-around'}}>
                   <TouchableOpacity onPress={()=>navigation.goBack() }>
                  <Image source={assets.btn_back}/>
                  </TouchableOpacity>
                  <Image source={assets.WineZap_med} style={{resizeMode:"contain"}}/>
                  <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                  <Text style={{fontSize:height * 0.025,color:'#C45FA5',textDecorationLine:'underline'}}>Log In</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{marginHorizontal:'10%',marginTop:height*0.027}}>
                  <Text style={{fontSize:height*0.04,fontFamily:"Nunito_Light",color:"#531039"}}>Sign Up</Text>
                  <View style={{flexDirection:'row',marginTop:height*0.029}}>
                     <View style={{height:height*0.06,width:'45%',opacity:1,borderWidth:1,borderColor:"#bf6296",borderRadius:5,backgroundColor:'#c4c2c2',opacity:1}}>
                         <TextInput placeholder="First Name"                  
                         placeholderTextColor="#484a48"                     
                         value={first_name}                                                   
                         onChangeText={(first_name)=>setfirst_name(first_name)}                 
                         style={{flex:1,paddingLeft:20}}        
                         />                                                                  
                     </View>                                                             
                     <View style={{height:height*0.06,width:'45%',opacity:1,backgroundColor:'#c4c2c2',borderWidth:1,borderColor:"#bf6296",marginLeft:'10%',borderRadius:5}}>
                         <TextInput placeholder="Last Name"            
                        placeholderTextColor="#484a48"                            
                        value={last_name}                                           
                         onChangeText={(last_name)=>setlast_name(last_name)}         
                        style={{flex:1,paddingLeft:20}}                          
                         />                                                       
                     </View>                                                        
                  </View>                                                              
                    {warn!=false && <Text style={{marginTop:height*0.01,color:"#531039",fontFamily:"Nunito_SemiBold"}}>{warn}</Text>}
                  <View style={{height:height*0.06,width:'100%',opacity:1,backgroundColor:'#c4c2c2',borderWidth:1,borderColor:"#bf6296",marginTop:warn!=false? height*0.01:height*0.03,borderRadius:5}}>
                         <TextInput placeholder="Email Address"
                         placeholderTextColor="#484a48"
                         value={Email}
                         onChangeText={(Email)=>setEmail(Email)}
                         style={{flex:1,paddingLeft:20}}
                         />
                     </View>
                     {emailWarn!=false && <Text style={{marginTop:height*0.01,color:"#531039",fontFamily:"Nunito_SemiBold"}}>{emailWarn}</Text> }
                    
                     <View style={{height:height*0.06,width:'100%',opacity:1,backgroundColor:'#c4c2c2',borderWidth:1,borderColor:"#bf6296",marginTop:emailWarn!=false? height*0.01:height*0.03,borderRadius:5,flexDirection:"row",alignItems:'center'}}>
                         <TextInput placeholder="Password"
                         secureTextEntry={show}
                         placeholderTextColor="#484a48"
                         value={Password}
                         onChangeText={(Password)=>setPassword(Password)}
                         style={{flex:1,paddingLeft:20}}
                         onChange={()=>Password.length>=6 ? setpassWarn("Strong") : setpassWarn("Weak")}
                         />
                         {show==true?
                         <TouchableOpacity onPress={()=>setShow(false)}>
                         <Image source={assets.eye_off1} style={{height:22,width:25,marginRight:10,resizeMode:"contain"}}/>
                         </TouchableOpacity>:
                         <TouchableOpacity onPress={()=>setShow(true)}>
                         <Image source={assets.eye1} style={{height:22,width:25,marginRight:10,resizeMode:"contain"}}/>
                         </TouchableOpacity>}                                                        
                     </View>
                     {passWarn!=false  && <Text style={{marginLeft:width*0.66,color:"#1b9410",fontFamily:"Nunito_SemiBold",marginTop:height*0.01}}>{passWarn}</Text>}
                     <View style={{height:height*0.06,width:'100%',opacity:1,backgroundColor:'#c4c2c2',borderWidth:1,borderColor:"#bf6296",marginTop:passWarn!=false?height*0.01:height*0.03,borderRadius:5,flexDirection:"row",alignItems:'center'}}>
                         <TextInput placeholder="Confirm Password"
                         secureTextEntry={show1}
                         placeholderTextColor="#484a48"
                         value={cPassword}
                         onChangeText={(cPassword)=>setcPassword(cPassword)}
                         style={{flex:1,paddingLeft:15}}
                         />
                         {show1==true?
                         <TouchableOpacity onPress={()=>setShow1(false)}>
                         <Image source={assets.eye_off} style={{height:22,width:25,marginRight:10,resizeMode:"contain"}}/>
                         </TouchableOpacity>:
                         <TouchableOpacity onPress={()=>setShow1(true)}>
                         <Image source={assets.eye1} style={{height:22,width:25,marginRight:10,resizeMode:"contain"}}/>
                         </TouchableOpacity>}
                     </View>
                     {matchpass!=false && <Text>{matchpass}</Text> }
         <View style={{marginTop:height*0.03}}>
             <TouchableOpacity onPress={()=>signUpFn()}>
             <View style={{height:height*0.07,width:'100%',backgroundColor:"#961F63",borderRadius:28,justifyContent:"center",alignItems:'center',opacity:1}}>
                 {indicator==false?
                     <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:height*0.03}}>Sign Up</Text>
                 :<ActivityIndicator size={"large"} color="green" animating={indicator}/>}
             </View>
             </TouchableOpacity>
             </View>
             </View>
             </View>
               </View>
               <View style={{height:height*0.2}}>
                   <Text style={{color:'white',textAlign:'center',fontSize:height*0.03,marginTop:height*0.02,fontFamily:'Nunito_SemiBold'}}>Or continue with</Text>
                   <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:height*0.02,marginHorizontal:"20%",justifyContent:"space-between"}}> 
                   <Image source={assets.google4} style={{height:50,width:50,resizeMode:"contain"}}/>
                   <Image source={assets.facebook3} style={{height:50,width:50,resizeMode:"contain"}}/>
                   <Image source={assets.twitter3} style={{height:50,width:50,resizeMode:"contain"}}/>
                   </View>
              
               </View>
               </View>
               </ScrollView>
           </ImageBackground>
        </View>
    )
}
export default signUp;