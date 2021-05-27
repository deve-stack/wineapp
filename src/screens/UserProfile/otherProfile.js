import React,{useState} from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, Modal, TouchableWithoutFeedback} from 'react-native'
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const{height,width}=Dimensions.get('window')

const data=[
    {
    id:"1",
    profile:assets.image4,
     Name:"Loremipsum",
     time:"30 min ago",
     overflow:assets.overflow,
     wine_image:assets.wine_cup,
     like_icon:assets.like,
     likes:"20",
     comment_icon:assets.comment,
     comment:"8",
     share_icon:assets.share,
     repost_icon:assets.repost,
     repost:"12",
     rating:"8.5/10",
     text1:"Enatus voloplate quibusdom libero",
     text2:"provident eios! Neque quas Quia Parataur harum bitis ",
     text3:"non nihil audio quio et aut quibusdom ",
     read_more:"read more",
     text4:"non iusto atque nam molestae possimus",
     read_more:"Read More",
     text4:"Non iusto atque nam molistae possimus"
   }
]

const otherProfile=({navigation})=>{
    const[modalVisible,setModalVisible]=useState(false)
    const[showModal,setShowModal]=useState(false)

    return(
        <View>
        <ScrollView>
        <View style={{flex:1}}>
           <Image source={assets.wine_room} style={{height:height*0.2,width:width*1}}/>
           <View style={{marginTop:height*-0.12,marginLeft:width*0.06}}>
           
               <View style={{height:50,width:50,borderRadius:25}}>
               <TouchableOpacity onPress={()=>navigation.goBack() }>
          <Image source={assets.arrow_white} style={{height:20,width:50,resizeMode:"contain"}}/>
          </TouchableOpacity>
          </View>
         
          </View>

          <Text style={{textAlign:"center",color:"white",fontFamily:'Nunito_ExtraBold',fontSize:width*0.05,marginTop:-50}}>Loremipsum</Text>
            <View style={{height:width*0.34,width:width*0.34,borderRadius:width*0.17,backgroundColor:"#c9c9c9",alignSelf:"center",marginTop:height*0.02,justifyContent:'center',alignItems:"center"}}>
            
             <Image source={assets.image4} style={{height:width*0.34,width:width*0.34,borderRadius:width*0.17}}/>
           
             </View>
              
             <Text style={{textAlign:"center",fontSize:width*0.04,color:"#696969",fontFamily:"Nunito_Bold",marginTop:5}}>Loremzo Ipsumini</Text>
             <View style={{flexDirection:"row",height:height*0.08,width:width*1,backgroundColor:"#961F63",marginTop:height*0.03,alignItems:"center"}}>
                <View style={{flexDirection:'row',marginLeft:width*0.08}}>
                    <Image source={assets.profile_followers} style={{height:height*0.06,width:width*0.075,resizeMode:"contain"}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.02}}>
                        <Text style={{color:"white",fontSize:width*0.05,fontFamily:"Nunito_ExtraBold"}}>109</Text>
                        <Text style={{color:"white",fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Followers</Text>
                    </View>
                </View>
                <View style={{height:height*0.06,width:1,backgroundColor:"white",marginLeft:width*0.03}}/>

                <View style={{flexDirection:'row',marginLeft:width*0.04,alignItems:"center"}}>
                    <Image source={assets.sponsor_white} style={{height:height*0.046,width:width*0.07,resizeMode:"contain"}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.02}}>
                        <Text style={{color:"white",fontSize:width*0.05,fontFamily:"Nunito_ExtraBold"}}>16</Text>
                        <Text style={{color:"white",fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Sponsors</Text>
                    </View>
                </View>
                <View style={{height:height*0.06,width:1,backgroundColor:"white",marginLeft:width*0.03}}/>

                <View style={{flexDirection:'row',marginLeft:width*0.04,alignItems:"center"}}>
                    <Image source={assets.rating_white} style={{height:height*0.05,width:width*0.07,resizeMode:"contain"}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.02}}>
                        <Text style={{color:"white",fontSize:width*0.05,fontFamily:"Nunito_ExtraBold"}}>54</Text>
                        <Text style={{color:"white",fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Ratings</Text>
                    </View>
                </View>
             </View>
             <View style={{flexDirection:"row",marginHorizontal:width*0.1,marginTop:height*0.03,justifyContent:"space-between"}}> 
                <View style={{height:height*0.07,width:width*0.45,backgroundColor:"#C45FA5",justifyContent:"center",alignItems:"center",borderRadius:30}}>
                    <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>Sponsor </Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("ProfileFollowing")}>
                <View style={{height:height*0.07,width:width*0.30,borderColor:"#C45FA5",borderWidth:2,justifyContent:"center",alignItems:"center",borderRadius:30}}>
                    <Text style={{color:"#C45FA5",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>Follow </Text>
                </View>
                </TouchableOpacity>
             </View>
     
           <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.06,marginBottom:10}}>Posts & Ratings</Text>
           <View style={{flexDirection:"row",height:height*0.07,width:width*0.82,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,marginTop:height*0.01,alignItems:"center",backgroundColor:"white",marginLeft:width*0.1}}>
            <Image source={assets.sidebar_search} style={{height:20,width:20,marginLeft:width*0.04}}/>
            <TextInput placeholder="Search Posts & Ratings" style={{marginLeft:width*0.05,fontSize:width*0.045,flex:1,fontFamily:'Nunito_Bold'}}/>
            
            </View>
            <View style={{flexDirection:"row",marginTop:height*0.025}}>
            <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.01,alignItems:"flex-end"}}>
                <View style={{flexDirection:"column",alignItems:"center"}}>
                    <Text style={{color:"#6e6b6a"}}>2</Text>
                    <View style={{height:12,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>>6</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>8</Text>
                    <View style={{height:40,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>7</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>18</Text>
                    <View style={{height:95,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>8</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>16</Text>
                    <View style={{height:75,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>9</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>22</Text>
                    <View style={{height:120,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>10</Text>
                </View>

            </View>
         <View style={{flexDirection:"column",marginLeft:width*0.13,marginTop:height*0.03}}>
             <View style={{flexDirection:"row"}}>
            <View style={{height:height*0.032,width:width*0.18,backgroundColor:'#940f51',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Zinfandel</Text>
                </View>
               
                <View style={{height:height*0.032,width:width*0.1,backgroundColor:'#940f51',borderRadius:10,justifyContent:"center",alignItems:"center",marginLeft:10}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Red</Text>
                </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                <View style={{height:height*0.032,width:width*0.22,backgroundColor:'#940f51',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Champaigne</Text>
                </View>
                <View style={{height:height*0.032,width:width*0.1,backgroundColor:'#940f51',marginLeft:10,borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Dry</Text>
                </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                <View style={{height:height*0.032,width:width*0.12,backgroundColor:'#940f51',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Lorem</Text>
                </View>
                <View style={{height:height*0.032,width:width*0.12,backgroundColor:'#940f51',marginLeft:10,borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Ipsum</Text>
                </View>
                </View>
                <View style={{height:height*0.032,width:width*0.16,marginTop:10,backgroundColor:'#940f51',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Earthy</Text>
                </View>
                </View>
            </View>
        
            <View style={{marginTop:height*0.03}}>
            {
                data.map((item)=>(
                    
                    <View style={{marginBottom:10}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={item.profile} style={{height:40,width:40,borderRadius:20,marginLeft:width*0.05}}/>
                        <View>
                            <Text style={{marginLeft:width*0.02,fontFamily:"Nunito_ExtraBold",color:"#545253"}}>{item.Name}</Text>
                            <Text style={{marginLeft:width*0.02,color:"#7d797b"}}>{item.time}</Text>
                            </View>
                            </View>
                            <View style={{alignSelf:"flex-end",marginRight:width*0.05,marginTop:height*-0.02}}>
                           <TouchableOpacity onPress={()=>setModalVisible(true)}>
                            <Image source={item.overflow} style={{height:5,width:25,}}/>
                            </TouchableOpacity>
                            </View>
                         <Image source={item.wine_image} style={{height:height*0.4,width:width*0.9,marginLeft:width*0.05,borderRadius:30,marginTop:height*0.02}}/>
                        <View style={{flexDirection:"row",alignItems:'center',marginTop:height*0.02}}>
                        <Image source={item.like_icon} style={{height:20,width:20,marginLeft:width*0.1}}/>
                        <Text style={{marginLeft:width*0.015,color:"#7d7a7c"}}>{item.likes}</Text>
                        <Image source={item.comment_icon} style={{height:20,width:20,marginLeft:width*0.07}}/>
                        <Text style={{marginLeft:width*0.015,color:"#7d7a7c"}}>{item.comment}</Text>
                        <Image source={item.repost_icon} style={{height:20,width:15,marginLeft:width*0.07}}/>
                        <Text style={{marginLeft:width*0.015,color:"#7d7a7c"}}>{item.repost}</Text>
                        <Image source={item.share_icon} style={{height:23,width:20,marginLeft:width*0.3}}/>
                        </View>
                       
                    </View>
                  
                ))
            }
            </View>

           
        </View>
        </ScrollView>

        <View >
         <Modal 
               animationType="slide"
               visible={modalVisible}
               onRequestClose={()=>{setModalVisible(modalVisible)}}
               hasBackdrop={true}
               
               onBackdropPress={()=>{setModalVisible(modalVisible)}}
                transparent={false}
               >
                   <TouchableWithoutFeedback onPress={()=>setModalVisible(false)}>
                 <View style={{flex:1,backgroundColor:"#c2c2c2"}}>
                     <View style={{height:height*0.65,width:width*1,backgroundColor:"#ffffff",marginTop:height*0.35,borderTopLeftRadius:30,borderTopEndRadius:30,elevation:20}}>
                         <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                      <Image source={assets.close} style={{height:height*0.07,width:width*0.14,alignSelf:"flex-end"}}/>
                      </TouchableOpacity>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.sponsor} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Sponsor Loremipsum</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>

                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.follow} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Follow Loremipsum</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.chat} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Message Loremipsum</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.add_group} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Add Loremipsum to group</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.block} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Block Loremipsum </Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.report} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Report Profile</Text>
                      </View>
                   </View>
                 </View>
                 </TouchableWithoutFeedback>
             </Modal>

         </View>
        </View>
    )
}
export default otherProfile;