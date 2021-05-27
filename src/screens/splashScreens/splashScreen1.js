import React from "react";
import { View,Text,StyleSheet,ScrollView, TouchableOpacity, ImageBackground, Image ,Dimensions} from "react-native";
import * as assets from '../../components/assets'
const {height,width}=Dimensions.get('window')
import Swiper from 'react-native-swiper'

const splashScreen1=({navigation})=>{
    
    return(
        <View style={{flex:1}}>
            <Swiper loop={false} showsPagination={false} >
            <ImageBackground source={assets.splash1} style={{flex:1}}>
            <ScrollView style={{flex:1}}>
            <View style={{}}>
            <View style={{height:height*0.1,justifyContent:'flex-end',alignItems:'flex-end'}}>
             <Text style={styles.login_Text}>Log In</Text>
            </View>
            <View style={{height:height*0.6,flexDirection:"row",marginTop:height*0.07}}>
                 <View>
                 <Image source={assets.image1} style={{height:height*0.61,width:80,resizeMode:"contain",marginLeft:width*0.07}}/>
                 </View>
                 <View style={{flexDirection:'column',marginTop:height*0.19,marginLeft:width*-0.1}}> 
                 <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>Lorem</Text>
             <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>ipsum dolor</Text>
             <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>sit amet</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>Rem praesentium dicta</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>delectus nostrum totam eos ex</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>blanditiis. Sit amet, consetetur.</Text>
                 </View>
            </View>
             
          <View style={{}}>
              <TouchableOpacity onPress={()=>navigation.navigate('signUp')}>
           <View style={{marginHorizontal:width*0.1,backgroundColor:'#961F63',height:55,borderRadius:25,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:'white',fontSize:20,fontFamily:"Nunito_Bold",letterSpacing:1}}>Get Started</Text>
           </View>
           </TouchableOpacity>
           <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",marginTop:height*0.03}}>
            <Image source={assets.timeline_Current} style={{height:15,width:15}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
           </View>

         </View>
        </View>
         </ScrollView>
         </ImageBackground>
         
        <View style={{flex:1}}>
            <ImageBackground source={assets.splash2} style={{flex:1}}>
            <ScrollView style={{flex:1}}>
                <View style={{}}>
            <View style={{height:height*0.1,justifyContent:'flex-end',alignItems:'flex-end'}}>
             <Text style={styles.login_Text}>Log In</Text>
            </View>
            
            <View style={{height:height*0.6,flexDirection:"row",marginTop:height*0.07}}>
                 <View>
                 <Image source={assets.image1} style={{height:height*0.61,width:80,resizeMode:"contain",marginLeft:width*0.07}}/>
                 </View>
                 <View style={{flexDirection:'column',marginTop:height*0.19,marginLeft:width*-0.1}}> 
                 <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>Lorem</Text>
             <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>ipsum dolor</Text>
             <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>sit amet</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>Rem praesentium dicta</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>delectus nostrum totam eos ex</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>blanditiis. Sit amet, consetetur.</Text>
                 </View>
            </View>
          <View style={{}}>
              <TouchableOpacity onPress={()=>navigation.navigate('signUp')}>
           <View style={{marginHorizontal:width*0.1,backgroundColor:'#961F63',height:55,borderRadius:25,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:'white',fontSize:20,fontFamily:"Nunito_Bold",letterSpacing:1}}>Get Started</Text>
           </View>
           </TouchableOpacity>
           <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",marginTop:height*0.03}}>
            
            <Image source={assets.timeline_Inactive} style={{height:5,width:5}} />
            <Image source={assets.timeline_Current} style={{marginLeft:10,height:15,width:15}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
           </View>

         </View>
         </View>
         </ScrollView>
         </ImageBackground>
        </View>
        <View style={{flex:1}}>
            <ImageBackground source={assets.splash4} style={{flex:1}}>
            <ScrollView style={{flex:1}}>
            <View style={{}}> 
            <View style={{height:height*0.1,justifyContent:'flex-end',alignItems:'flex-end'}}>
             <Text style={styles.login_Text}>Log In</Text>
            </View>
            
            <View style={{height:height*0.6,flexDirection:"row",marginTop:height*0.07}}>
                 <View>
                 <Image source={assets.image1} style={{height:height*0.61,width:80,resizeMode:"contain",marginLeft:width*0.07}}/>
                 </View>
                 <View style={{flexDirection:'column',marginTop:height*0.19,marginLeft:width*-0.1}}> 
                 <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>Lorem</Text>
             <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>ipsum dolor</Text>
             <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>sit amet</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>Rem praesentium dicta</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>delectus nostrum totam eos ex</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>blanditiis. Sit amet, consetetur.</Text>
                 </View>
            </View>
          <View style={{}}>
              <TouchableOpacity onPress={()=>navigation.navigate('signUp')}>
           <View style={{marginHorizontal:width*0.1,backgroundColor:'#961F63',height:55,borderRadius:25,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:'white',fontSize:20,fontFamily:"Nunito_Bold",letterSpacing:1}}>Get Started</Text>
           </View>
           </TouchableOpacity>
           <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",marginTop:height*0.03}}>
            
            <Image source={assets.timeline_Inactive} style={{height:5,width:5}} />
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Current} style={{marginLeft:10,height:15,width:15}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
           </View>

         </View>
        </View>
         </ScrollView>
         </ImageBackground>
        </View>
        <View style={{flex:1}}>
            <ImageBackground source={assets.splash3} style={{flex:1}}>
            <ScrollView style={{flex:1}}>
                
            <View style={{}}>
            <View style={{height:height*0.1,justifyContent:'flex-end',alignItems:'flex-end'}}>
             <Text style={styles.login_Text}>Log In</Text>
            </View>
            
            <View style={{height:height*0.6,flexDirection:"row",marginTop:height*0.07}}>
                 <View>
                 <Image source={assets.image1} style={{height:height*0.61,width:80,resizeMode:"contain",marginLeft:width*0.07}}/>
                 </View>
                 <View style={{flexDirection:'column',marginTop:height*0.19,marginLeft:width*-0.1}}> 
                 <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>Lorem</Text>
             <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>ipsum dolor</Text>
             <Text style={{fontSize:width*0.11,fontFamily:"Kanit_ExtraBold",color:'white'}}>sit amet</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>Rem praesentium dicta</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>delectus nostrum totam eos ex</Text>
             <Text style={{color:'white',fontFamily:"Nunito_Black"}}>blanditiis. Sit amet, consetetur.</Text>
                 </View>
            </View>
          <View style={{}}>
              <TouchableOpacity onPress={()=>navigation.navigate('signUp')}>
           <View style={{marginHorizontal:width*0.1,backgroundColor:'#961F63',height:55,borderRadius:25,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:'white',fontSize:20,fontFamily:"Nunito_Bold",letterSpacing:1}}>Get Started</Text>
           </View>
           </TouchableOpacity>
           <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",marginTop:height*0.03}}>
            
            <Image source={assets.timeline_Inactive} style={{height:5,width:5}} />
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
           
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Current} style={{marginLeft:10,height:15,width:15}}/>
           </View>

         </View>
        </View>
         </ScrollView>
         </ImageBackground>
        </View>
         </Swiper>
        </View>
       
    )
}
const styles=StyleSheet.create({
    login_Text:{
        color:"#C45FA5",
        marginRight:"5%",
        textDecorationLine:'underline',
       fontFamily:'Nunito_Bold',
       fontSize:height*0.025
    },
 
  })

export default splashScreen1;