import React, { Component } from 'react'
import { useState,useRef } from 'react';
import { Image, Text, TextInput, View ,StyleSheet, ScrollView, ImageBackground, TouchableOpacity,Dimensions} from "react-native";
import * as assets from "../../components/assets";


export default class OtpVerification extends Component{
    
    constructor(props){
        super(props)
        this.state={
            otp1:'',
            otp2:'',
            otp3:'',
            otp4:'',
            
        }
    }
    render(){
        const{height,width}=Dimensions.get('window')
        return(
            <View style={{flex:1}}>
                <ImageBackground source={assets.gradient} style={{flex:1}}>
              <ScrollView>
                <View style={{marginBottom:20}}>
           <View style={{backgroundColor:'white',borderBottomStartRadius:50,borderBottomEndRadius:50}}>
               <TouchableOpacity onPress={()=>this.props.navigation.goBack() }>
               <Image source={assets.btn_back} style={{marginTop:height*0.07,marginLeft:width*0.07,height:height*0.02,width:width*0.1,resizeMode:"contain"}}/>
           </TouchableOpacity>
           <Text style={{fontSize:width*0.12,fontFamily:'Kanit_Bold',marginLeft:width*0.07,color:'#531039'}}>Verification</Text>
           <Text style={{marginLeft:width*0.07,marginTop:height*0.02,fontFamily:"Nunito_Bold",fontSize:width*0.042,color:"#232323"}}>We've sent a verification code to</Text>
           <Text style={{marginLeft:width*0.07,color:'#C45FA5',fontFamily:"Nunito_Bold",fontSize:width*0.042}}>abc@gmail.com</Text>
           <View style={{flexDirection:"row",justifyContent:'space-evenly',marginTop:height*0.04}}>
            <View style={styles.textInputView}>
            <TextInput 
            style={{flex:1,fontSize:25,color:'#a1286a',textAlign:"center"}} 
            maxLength={1}
            value={this.state.otp1}
            keyboardType={'numeric'}
            ref="input_1"
            placeholder="-"
            placeholderTextColor="#a1286a"
            onChangeText={otp1=>{this.setState({otp1:otp1})
             if(otp1) this.refs.input_2.focus();
            }}
           
            />
            </View>
            <View style={styles.textInputView}>
            <TextInput 
            style={{flex:1,fontSize:25,color:'#a1286a',textAlign:"center"}}
            maxLength={1}
            keyboardType={'numeric'}
            value={this.state.otp2}
            placeholder="-"
            placeholderTextColor="#a1286a"
            ref="input_2"
            onChangeText={otp2=>{this.setState({otp2:otp2})
                if(otp2) this.refs.input_3.focus();
                }}
            />
            </View>
            <View style={styles.textInputView}>
            <TextInput 
            style={{flex:1,fontSize:25,color:'#a1286a',textAlign:"center"}}
            maxLength={1}
            keyboardType={'numeric'}
            value={this.state.otp3}
            ref="input_3"
            placeholder="-"
            placeholderTextColor="#a1286a"
            onChangeText={otp3=>{this.setState({otp3:otp3})
                if(otp3) this.refs.input_4.focus();
                }}
            />
            </View>
            <View style={styles.textInputView}>
            <TextInput 
            style={{flex:1,fontSize:25,color:'#a1286a',justifyContent:"center",textAlign:"center"}}
            maxLength={1}
            value={this.state.otp4}
            keyboardType={'number-pad'}
            ref="input_4"
            placeholder="-"
            placeholderTextColor="#a1286a"
            onChangeText={otp4=>{this.setState({otp4:otp4})
                }}
            />
            </View>
           </View>
           <View style={{marginTop:height*0.05,marginHorizontal:'10%',marginBottom:height*0.06}}>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('ResetPassword')}>
             <View style={{height:55,width:'100%',backgroundColor:"#961F63",borderRadius:28,justifyContent:"center",alignItems:'center'}}>
                 <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:20,letterSpacing:1}}>Verify</Text>
             </View>
             </TouchableOpacity>
         </View>
           </View>
          
            <Text style={{marginTop:"10%",textAlign:'center',color:'white',fontSize:16}}>No message?</Text>
            <Text style={{marginTop:10,textAlign:'center',fontSize:20,textDecorationLine:'underline',color:'white',fontWeight:"bold",letterSpacing:1}}>Send Again</Text>
            </View>
           </ScrollView>
           </ImageBackground>
        </View>
        )
    }
}
const styles=StyleSheet.create({
    textInputView:{
        height:60,
        width:60,
        borderWidth:1.7,
        borderColor:"#540840",
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    }
})
