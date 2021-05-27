import React from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, FlatList} from 'react-native'
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const{height,width}=Dimensions.get('window')

const SettingScreen=({navigation})=>{
    return(
        <ScrollView style={{flex:1,backgroundColor:"#EFEFEF"}}>
        <View style={{flex:1,backgroundColor:"#EFEFEF"}}>
        <View style={{flexDirection:"row",marginTop:height*0.07,marginLeft:width*0.07,alignItems:"center"}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
               <Image source={assets.btn_back}/>
               </TouchableOpacity>
            
            <View style={{alignSelf:"center",marginLeft:width*0.19}}>
            <Text style={{fontSize:width*0.062,fontFamily:"Nunito_Bold"}}>Settings</Text>
            </View>
            </View>
            <View style={{marginLeft:width*0.07,marginTop:height*0.06}}>
            <TouchableOpacity onPress={()=>navigation.navigate("AccountScreen")}>
            <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",color:"#636363"}}>Account</Text>
            </TouchableOpacity>
            </View>
            <View style={{height:2,width:width*0.75,backgroundColor:"#c2c0c0",marginVertical:height*0.02}}/>

            <View style={{marginLeft:width*0.07}}>
            <TouchableOpacity onPress={()=>navigation.navigate("PrivacyScreen")}>
            <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",color:"#636363"}}>Privacy</Text>
            </TouchableOpacity>
            </View>
            <View style={{height:2,width:width*0.75,backgroundColor:"#c2c0c0",marginVertical:height*0.02}}/>

            <TouchableOpacity onPress={()=>navigation.navigate("Notifications")}>
            <View style={{marginLeft:width*0.07}}>
            <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",color:"#636363"}}>Notifications</Text>
            </View>
            </TouchableOpacity>
            <View style={{height:2,width:width*0.75,backgroundColor:"#c2c0c0",marginVertical:height*0.02}}/>

            <TouchableOpacity onPress={()=>navigation.navigate("AudioVideoAccessbility")}>
            <View style={{marginLeft:width*0.07}}>
            <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",color:"#636363"}}>Video/Audio/Accessibility</Text>
            </View>
            </TouchableOpacity>

            <View style={{height:2,width:width*0.75,backgroundColor:"#c2c0c0",marginVertical:height*0.02}}/>

            <TouchableOpacity onPress={()=>navigation.navigate("SettingSponsor")}>
            <View style={{marginLeft:width*0.07}}>
            <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",color:"#636363"}}>People You Sponsor</Text>
            </View>
            </TouchableOpacity>

            <View style={{height:2,width:width*0.75,backgroundColor:"#c2c0c0",marginVertical:height*0.02}}/>

            <TouchableOpacity onPress={()=>navigation.navigate("FindContacts")}>
            <View style={{marginLeft:width*0.07}}>
            <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",color:"#636363"}}>Find Contacts</Text>
            </View>
            </TouchableOpacity>
            
            <View style={{height:2,width:width*0.75,backgroundColor:"#c2c0c0",marginVertical:height*0.02}}/>

            <TouchableOpacity onPress={()=>navigation.navigate("FAQscreen")}>
            <View style={{marginLeft:width*0.07}}>
            <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",color:"#636363"}}>FAQ</Text>
            </View>
            </TouchableOpacity>

            <View style={{height:2,width:width*0.75,backgroundColor:"#c2c0c0",marginVertical:height*0.02}}/>

            <TouchableOpacity onPress={()=>navigation.navigate("SettingLegal")}>
            <View style={{marginLeft:width*0.07}}>
            <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold",color:"#636363"}}>Legal</Text>
            </View>
            </TouchableOpacity>
            
            <View style={{marginTop:height*0.05}}/>
            <View style={{height:height*0.07,width:width*0.28,alignSelf:"center",justifyContent:"center",alignItems:"center",borderWidth:2,borderColor:'#783754',borderRadius:30}}>
               <Text style={{fontSize:width*0.045,fontFamily:"Nunito_Bold",color:"#783754"}}>Log Out</Text>
            </View>

        </View>
        </ScrollView>
    )
}
export default SettingScreen;