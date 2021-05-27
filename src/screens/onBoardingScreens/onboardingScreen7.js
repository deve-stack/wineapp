import React from 'react'
import { View,Text ,ImageBackground,Dimensions,TouchableOpacity,Image,FlatList, ScrollView } from 'react-native'
import * as assets from "../../components/assets";

const onboardingScreen7=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    const Data=[
        {
            id:'1',
            userName:"Janedoe123",
            userImage:assets.image2,
            name:"Jane Dae",
            follower:"109",
            following:"46",
            btn_text:"Follow",
            path:assets.path3x,
            profile:assets.follower_hd,
            image1:assets.userprofile_accent
        },
        {
            id:'2',
            userName:"JohnBoeWine",
            userImage:assets.image3,
            name:"John Boe",
            follower:"109",
            following:"46",
            btn_text:"Follow",
            path:assets.path3x,
            profile:assets.follower_hd,
            image1:assets.userprofile_accent
        },
        {
            id:'3',
            userName:"janedoe",
            userImage:assets.image3,
            name:"Jane Dae",
            follower:"109",
            following:"46",
            btn_text:"Follow",
            path:assets.path3x,
            profile:assets.follower_hd,
            image1:assets.userprofile_accent
        }
    ]
    const renderItem=({item}) =>(
        <View style={{}}>
        <View style={{height:height*0.25,width:width*0.5,backgroundColor:'white',marginTop:height*0.02,borderTopRightRadius:5,borderBottomEndRadius:5,borderBottomStartRadius:5,borderTopLeftRadius:10,elevation:5,margin:5}}>
            <View style={{flexDirection:"row"}}>
                <Image source={item.image1}/>
                <Image source={item.userImage} style={{marginLeft:-35,marginTop:10,height:50,width:50,borderRadius:25}}/>
              <View style={{flexDirection:"column",marginTop:5,marginLeft:10}}>
                 <Text style={{fontSize:14,fontFamily:'Nunito_Bold'}}>{item.userName}</Text>
                 <Text style={{fontSize:12,color:"#a6a1a4"}}>{item.name}</Text>
              </View>
    </View>
    <View style={{flexDirection:"row",marginTop:height*-0.06,alignItems:"center"}}>
    <Image source={item.profile} style={{marginLeft:width*0.2,height:16,width:15}}/>
    <Text style={{marginLeft:5,fontFamily:"Nunito_Bold",color:"#ab1a71"}}>{item.follower}</Text>
    <Image source={item.path} style={{marginLeft:10,height:15,width:15}}/>
    <Text style={{marginLeft:5,fontFamily:"Nunito_Bold",color:"#ab1a71"}}>{item.following}</Text>
    </View>
    <View style={{height:height*0.075,width:width*0.3,borderRadius:30,borderWidth:2,borderColor:"#de1b8c",justifyContent:"center",alignItems:"center",marginLeft:'20%',marginTop:height*0.04}}>
      <Text style={{fontSize:20,color:"#de1b8c",fontFamily:"Nunito_Bold"}}>{item.btn_text}</Text>
    </View>
        </View>
        </View>
    );
    return(
        <View style={{flex:1}}>
           <ImageBackground source={assets.gradient} style={{flex:1}}>
           <View style={{height:height*0.38,backgroundColor:'white',borderBottomEndRadius:50,borderBottomLeftRadius:50}}>
            <Text style={{fontSize:height*0.06,marginTop:height*0.07,marginLeft:'10%',color:'#540840',fontFamily:'Kanit_Bold'}}>Almost there!</Text>
            <View style={{flexDirection:'row',marginHorizontal:'10%',marginTop:height*0.02}}>
               <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View style={{height:height*0.07,width:width*0.3,borderRadius:25,borderWidth:2,borderColor:'#961F63',flexDirection:'row',alignItems:'center'}}>
                        <Image source={assets.back_arrow_hd} style={{marginLeft:'14%',height:15,width:28,resizeMode:'contain'}}/>
                       <Text style={{fontSize:width*0.05,color:'#961F63',marginLeft:'5%'}}>Back</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('drawerNavigator')}>
                    <View style={{height:height*0.07,width:width*0.47,borderRadius:25,flexDirection:'row',alignItems:'center',marginLeft:width*0.03,backgroundColor:'#961F63'}}>
                        <Image source={assets.check} style={{height:25,width:25,marginLeft:"20%"}}/>
                         <Text style={{fontSize:width*0.05,color:'white',marginLeft:'10%',fontFamily:'Nunito_Bold'}}>Done</Text>
                       </View>
                    </TouchableOpacity>
                 </View>
                
                 <Text style={{marginTop:height*0.02,marginLeft:"10%",fontSize:width*0.04,width:width*0.7}}>Follow some interesting people on WineZap to get the best posts directly in your feed.</Text>
 
                 {/* <Text style={{marginLeft:"10%",fontSize:width*0.04}}>dolorem tempore maiores . Rem odit </Text>
                 <Text style={{marginLeft:"10%",fontSize:width*0.04}}>eius tempore quia illum facere delectus.</Text> */}
                 <Text style={{marginLeft:width*0.85,marginTop:height*-0.08,fontSize:height*0.035,color:"#C45FA5",fontFamily:"Nunito_Bold"}}>5/5</Text>
              
                 </View>
                 <ScrollView>
                 <View style={{height:height*0.62,marginBottom:50}}>
                  <Text style={{color:"white",marginTop:height*0.02,fontSize:width*0.043,marginLeft:"7%",fontFamily:"Nunito_ExtraBold"}}>Popular in your country</Text>
                  <View>
                      <FlatList 
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={Data}
                      keyExtractor={item=>item.id}
                  
                    renderItem={renderItem}
                      /> 
                     
                      </View>
                      <Text style={{color:"white",marginTop:height*0.04,fontSize:width*0.043,marginLeft:"7%",fontFamily:"Nunito_ExtraBold"}}>Popular in other countries</Text>
                      <View>
                      <FlatList 
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={Data}
                      keyExtractor={item=>item.id}
                  
                    renderItem={renderItem}
                      /> 
                     
                      </View>
                      <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",marginTop:height*-0.1}}>
            <Image source={assets.timeline_Inactive} style={{height:5,width:5}}/>
             <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Current} style={{marginLeft:10,height:15,width:15}}/>
           </View>
                 </View>
                 </ScrollView>
           </ImageBackground>
        </View>
    )
}
export default onboardingScreen7;