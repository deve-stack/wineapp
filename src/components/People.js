import React from "react";
import { View,Text,ScrollView, TouchableOpacity,  Image ,Dimensions,StyleSheet,FlatList} from "react-native";
import * as assets from './assets'
const {height,width}=Dimensions.get('window')
const People=()=>{

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
            btn_text:"Follow",
            path:assets.path3x,
            profile:assets.follower_hd,
            image1:assets.userprofile_accent
        }
    ]

    const renderItem=({item}) =>(
        <View style={{marginHorizontal:2}}>
        <View style={{height:width*0.41,width:width*0.41,margin:5,elevation:5,backgroundColor:"white",borderRadius:10}}>
                   <View style={{flexDirection:"row"}}>
                       <Image source={item.image1} style={{height:width*0.2,width:width*0.1,borderTopLeftRadius:10}}/>
                       <Image source={item.userImage} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06,marginTop:width*0.02,marginLeft:width*-0.05}}/>
                       <View style={{flexDirection:"column",marginLeft:5,marginTop:height*0.01}}>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>{item.userName}</Text>
                           <Text style={{fontSize:width*0.03,fontFamily:"Nunito_Bold",color:"#b3afaf"}}>{item.name}</Text>
                           <View style={{flexDirection:"row",alignItems:"center"}}>
                               <Image source={item.profile} style={{height:12,width:12,resizeMode:"contain"}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>{item.follower}</Text>
                               <Image source={item.path} style={{height:12,width:12,resizeMode:"contain",marginLeft:7}}/>
                               <Text style={{fontSize:width*0.035,fontFamily:"Nunito_Bold",color:"#8f2462",marginLeft:2}}>{item.following}</Text>
                           </View>
                       </View>
                   </View>

                   <View style={{height:height*0.065,width:width*0.25,justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:height*0.01,borderColor:item.btn_text=="Follow" ?"#e665b2": 'white',borderWidth:2,borderRadius:30}}>
                       <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.05,color:"#8a1654"}}>{item.btn_text}</Text>
                   </View>
                </View>
               
        </View>
    );


    return(
        <View>
            <Text style={styles.know_text}>People You May Know</Text>
            <View style={{marginHorizontal:width*0.03}}>
                      <FlatList 
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={Data}
                      keyExtractor={item=>item.id}
                  
                    renderItem={renderItem}
                      /> 
                     
                      </View>

            <Text style={styles.know_text1}>Popular Reviewers</Text>
               <View style={{marginHorizontal:width*0.03}}>
                      <FlatList 
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={Data}
                      keyExtractor={item=>item.id}
                  
                    renderItem={renderItem}
                      /> 
                     
                      </View>
            <Text style={styles.know_text1}>Streamers</Text>
                <View style={{marginHorizontal:width*0.03}}>
                      <FlatList 
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={Data}
                      keyExtractor={item=>item.id}
                  
                    renderItem={renderItem}
                      /> 
                     
                      </View>
        </View>
        
    )
}
const styles=StyleSheet.create({
    know_text:{
        color:"#470623",
        marginLeft:width*0.07,
        fontFamily:"Nunito_ExtraBold",
        marginTop:height*0.03
    },
    know_text1:{
        color:"#470623",
        marginLeft:width*0.07,
        fontFamily:"Nunito_ExtraBold",
        marginTop:height*0.05
    }
})
export default People;