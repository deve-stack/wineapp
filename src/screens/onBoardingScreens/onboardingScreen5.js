import React from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, FlatList} from 'react-native'
import * as assets from "../../components/assets";
import * as Contacts from 'expo-contacts';
import {useEffect} from 'react'

const onboardingScreen5=({navigation})=>{
    const{height,width}=Dimensions.get('window')
    useEffect(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails],
          });
  
          if (data.length > 0) {
            const contact = data[0];
            console.log(contact);
          }
        }
      })();
    }, []);
    const Data=[
        {
            id:'1',
            userName:"Kate",
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
            userName:"John",
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
            userName:"David",
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
          userName:"Hank",
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
    const renderItem=({item}) =>(
        <View style={{}}>
        <View style={{height:height*0.25,width:width*0.5,backgroundColor:'white',marginTop:height*0.04,borderTopRightRadius:5,borderBottomEndRadius:5,borderBottomStartRadius:5,borderTopLeftRadius:10,elevation:5,margin:5}}>
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
    <Text style={{marginLeft:3,color:"#ab1a71"}}>{item.follower}</Text>
    <Image source={item.path} style={{marginLeft:10,height:15,width:15}}/>
    <Text style={{marginLeft:3,color:"#ab1a71"}}>{item.following}</Text>
    </View>
    <View style={{height:height*0.07,width:width*0.3,borderRadius:30,borderWidth:2,borderColor:item.btn_text=="Follow" ?"#C45FA5": 'white',justifyContent:"center",alignItems:"center",marginLeft:'20%',marginTop:height*0.035}}>
      <Text style={{fontSize:20,color:item.btn_text=="Follow"?"#C45FA5":'#7d0756',fontFamily:"Nunito_Bold"}}>{item.btn_text}</Text>
    </View>
        </View>
        </View>
    );
    return(
        <View style={{flex:1}}>
            <ImageBackground source={assets.gradient} style={{flex:1}}>
            <ScrollView>
          <View style={{marginBottom:20}}>
            <View style={{height:height*0.45,backgroundColor:'white',borderBottomEndRadius:50,borderBottomLeftRadius:50}}>
              <Text style={{fontSize:height*0.06,marginTop:height*0.07,marginLeft:'10%',color:'#540840',fontFamily:'Kanit_Bold'}}>Find Friends</Text>
              <View style={{flexDirection:'row',marginHorizontal:'8%',marginTop:height*0.02}}>
                  <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View style={{height:height*0.07,width:width*0.3,borderRadius:25,borderWidth:2,borderColor:'#961F63',flexDirection:'row',alignItems:'center'}}>
                        <Image source={assets.back_arrow_hd} style={{marginLeft:'14%',height:15,width:28,resizeMode:"contain"}}/>
                       <Text style={{fontSize:width*0.05,color:'#961F63',marginLeft:'5%',fontFamily:'Nunito_Bold'}}>Back</Text>
                    </View>
                    </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate('onboardingScreen7')}>
                    <View style={{height:height*0.07,width:width*0.47,borderRadius:25,flexDirection:'row',alignItems:'center',backgroundColor:'#C45FA5',marginLeft:width*0.03}}>
                         <Text style={{fontSize:width*0.05,color:'white',marginLeft:'10%',fontFamily:'Nunito_Bold'}}>Continue</Text>
                       <Image source={assets.arrow_forward} style={{marginLeft:'10%',width:40,height:20}}/>
                    </View>
                    </TouchableOpacity>
                 </View>
                 <Text style={{marginTop:height*0.02,marginLeft:"10%",fontFamily:"Nunito_SemiBold",fontSize:width*0.039}}>Connect to your contacts to find people you already know on WineZap.</Text>

                 {/* <Text style={{marginLeft:"10%",fontFamily:"Nunito_SemiBold",fontSize:width*0.039}}>dolorem tempore maiores. Rem odit eius</Text>
                 <Text style={{marginLeft:"10%",fontFamily:"Nunito_SemiBold",fontSize:width*0.039}}>tempore quia illum facere delectus.</Text> */}
                 <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center",marginTop:height*0.03,marginHorizontal:width*0.1}}>
                    <Image source={assets.profile1} style={{height:50,width:50,resizeMode:"contain"}}/>
                    <Image source={assets.facebook1} style={{height:50,width:50,resizeMode:"contain"}}/>
                    <Image source={assets.twitter1} style={{height:50,width:50,resizeMode:"contain"}}/>
                    <Image source={assets.message1} style={{height:50,width:50,resizeMode:"contain"}}/>
                 </View>
            </View>
            <View style={{height:height*0.45}}>
                <View>
                      <FlatList 
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={Data}
                      keyExtractor={item=>item.id}
                  
                    renderItem={renderItem}
                      /> 
                     
                      </View>
                      </View>
                      <View style={{height:height*0.1,justifyContent:"flex-end"}}>
                      <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",marginBottom:height*0.05}}>
            <Image source={assets.timeline_Inactive} style={{height:5,width:5}}/>
             <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            <Image source={assets.timeline_Current} style={{marginLeft:10,height:15,width:15}}/>
            <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
            </View>
            </View>
            </View>
            </ScrollView>
            </ImageBackground>
        </View>
    )
}
export default onboardingScreen5;