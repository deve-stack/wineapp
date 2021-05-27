import React,{useState} from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, Modal, TouchableWithoutFeedback} from 'react-native'
import * as assets from "../../components/assets";
import { DrawerActions } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const{height,width}=Dimensions.get('window')

const data=[
    {
    id:"1",
    profile:assets.image3,
     Name:"Joshwines",
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
   },
   {
    id:"2",
    profile:assets.image3,
     Name:"Joshwines",
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
     rating:"9.5/10",
     text1:"Enatus voloplate quibusdom libero",
     text2:"provident eios! Neque quas Quia Parataur harum bitis ",
     text3:"non nihil audio quio et aut quibusdom ",
     read_more:"read more",
     text4:"non iusto atque nam molestae possimus",
     read_more:"Read More",
     text4:"Non iusto atque nam molistae possimus"
   }
  
]
const data1=[
    {
        image1:assets.grapes1,
        groups:"Grape Group",
        peoples:"8 people"
    },
    {
        image1:assets.wine_cup,
        groups:"Tasting Buddies",
        peoples:"14 people"
    },
    {
        image1:assets.grapes1,
        groups:"Grape Group",
        peoples:"8 people"
    }
]

const UserProfile=({navigation})=>{
    const[modalVisible,setModalVisible]=useState(false)
    const[showModal,setShowModal]=useState(false)

    return(
        <View style={{flex:1}}>
        <ScrollView>
        
           <Image source={assets.wine_room} style={{height:height*0.2,width:width*1}}/>
           <View style={{marginLeft:width*0.05,marginTop:height*-0.14}}>
           <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
           <Image source={assets.sidebar} style={{height:22,width:22,resizeMode:"contain"}}/>
           </TouchableOpacity>
           </View>
            <View style={{height:width*0.34,width:width*0.34,borderRadius:width*0.17,backgroundColor:"#c9c9c9",alignSelf:"center",marginTop:height*0.02,justifyContent:'center',alignItems:"center"}}>
             <TouchableOpacity onPress={()=>navigation.navigate("profileEmpty")}>
             <Image source={assets.image3} style={{height:width*0.34,width:width*0.34,borderRadius:width*0.17}}/>
             </TouchableOpacity>
             </View>
               <View style={{flexDirection:'row',alignSelf:"center",alignItems:"center"}}>
             <Text style={{fontFamily:"Nunito_ExtraBold",fontSize:width*0.05,marginLeft:5}}>Joshwines</Text>
             <Image source={assets.edit_profile} style={{height:15,width:15,resizeMode:"contain",marginLeft:10}}/>
             </View>
             <Text style={{textAlign:"center",fontSize:width*0.04,color:"#878484",fontFamily:"Nunito_Bold"}}>Loremzo Ipsumini</Text>
             <View style={{flexDirection:"row",height:height*0.08,width:width*1,backgroundColor:"#961F63",marginTop:height*0.03,alignItems:"center"}}>
                <View style={{flexDirection:'row',marginLeft:width*0.08}}>
                    <Image source={assets.profile_followers} style={{height:height*0.06,width:width*0.077,resizeMode:"contain"}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.02}}>
                        <Text style={{color:"white",fontSize:width*0.05,fontFamily:"Nunito_ExtraBold"}}>109</Text>
                        <Text style={{color:"white",fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Followers</Text>
                    </View>
                </View>
                <View style={{height:height*0.06,width:1,backgroundColor:"white",marginLeft:width*0.03}}/>

                <View style={{flexDirection:'row',marginLeft:width*0.04,alignItems:"center"}}>
                    <Image source={assets.sponsor_white} style={{height:height*0.046,width:width*0.072,resizeMode:"contain"}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.02}}>
                        <Text style={{color:"white",fontSize:width*0.05,fontFamily:"Nunito_ExtraBold"}}>16</Text>
                        <Text style={{color:"white",fontSize:width*0.03,fontFamily:"Nunito_ExtraBold",}}>Sponsors</Text>
                    </View>
                </View>
                <View style={{height:height*0.06,width:1,backgroundColor:"white",marginLeft:width*0.03}}/>

                <View style={{flexDirection:'row',marginLeft:width*0.04,alignItems:"center"}}>
                    <Image source={assets.rating_white} style={{height:height*0.055,width:width*0.07,resizeMode:"contain"}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.02}}>
                        <Text style={{color:"white",fontSize:width*0.05,fontFamily:"Nunito_ExtraBold"}}>54</Text>
                        <Text style={{color:"white",fontSize:width*0.03,fontFamily:"Nunito_ExtraBold"}}>Ratings</Text>
                    </View>
                </View>
             </View>
             <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.06,marginBottom:10}}>Active Groups</Text>
     
     <ScrollView 
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     style={{}}
     >
         <View style={{paddingHorizontal:width*0.04,flexDirection:"row"}}>
     {
         data1.map((item)=>(
             <View style={{}}>
                 <View style={{flexDirection:"column",height:width*0.4,width:width*0.4,margin:3,marginHorizontal:5,elevation:3,backgroundColor:"#ffffff",borderRadius:10}}>
                   <View>
                       <Image source={item.image1} style={{height:width*0.28,width:width*0.4,borderRadius:10}}/>
                   </View>
                   <View style={{height:width*0.12,width:width*0.4}}>
                   <Text style={{fontFamily:"Nunito_Black",textAlign:"center"}}>{item.groups}</Text>
                     <Text style={{fontFamily:"Nunito_Bold",textAlign:"center",color:"#8f8d8e"}}>{item.peoples}</Text>
                   </View>
                 </View>
              </View>   
         ))
     }
     </View>
     </ScrollView>
    
     <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.06}}>Followed Tags</Text>
        
        <View style={{flexDirection:'row',marginLeft:width*0.07,marginTop:height*0.015}}>
        <Image source={assets.plus_button} style={{height:70,width:70}}/>
        <View style={{flexDirection:'row',height:height*0.08,width:width*0.32,backgroundColor:"#961F63",justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,marginLeft:width*0.02}}>
             <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:18}}>Lorem</Text>
               <Image source={assets.close3x}/>
           </View>
           <View style={{flexDirection:'row',height:height*0.08,width:width*0.32,backgroundColor:"#961F63",justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,marginLeft:width*0.02}}>
             <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:18}}>Lorem</Text>
               <Image source={assets.close3x}/>
           </View>

          
        </View>

        <View style={{flexDirection:"row",marginLeft:width*0.07}}>
           <View style={{flexDirection:'row',height:height*0.08,width:width*0.32,backgroundColor:"#961F63",justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04}}>
             <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:18}}>Lorem</Text>
               <Image source={assets.close3x}/>
           </View>
           <View style={{flexDirection:'row',height:height*0.08,width:width*0.32,backgroundColor:"#961F63",justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,marginLeft:width*0.02}}>
             <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:18}}>Lorem</Text>
               <Image source={assets.close3x}/>
           </View>
           </View>
           <View style={{flexDirection:'row',height:height*0.08,width:width*0.32,backgroundColor:"#961F63",justifyContent:'space-evenly',alignItems:"center",borderRadius:height*0.04,marginLeft:width*0.07,marginTop:height*0.015}}>
             <Text style={{color:'white',fontFamily:"Nunito_Bold",fontSize:18}}>Lorem</Text>
               <Image source={assets.close3x}/>
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
                    <View style={{height:12,width:10,backgroundColor:"#961F63",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>>6</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>8</Text>
                    <View style={{height:40,width:10,backgroundColor:"#961F63",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>7</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>18</Text>
                    <View style={{height:95,width:10,backgroundColor:"#961F63",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>8</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>16</Text>
                    <View style={{height:75,width:10,backgroundColor:"#961F63",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>9</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>22</Text>
                    <View style={{height:120,width:10,backgroundColor:"#961F63",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>10</Text>
                </View>

            </View>
         <View style={{flexDirection:"column",marginLeft:width*0.13,marginTop:height*0.03}}>
             <View style={{flexDirection:"row"}}>
            <View style={{height:height*0.032,width:width*0.18,backgroundColor:'#961F63',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Zinfandel</Text>
                </View>
               
                <View style={{height:height*0.032,width:width*0.1,backgroundColor:'#961F63',borderRadius:10,justifyContent:"center",alignItems:"center",marginLeft:10}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Red</Text>
                </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                <View style={{height:height*0.032,width:width*0.22,backgroundColor:'#961F63',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Champaigne</Text>
                </View>
                <View style={{height:height*0.032,width:width*0.1,backgroundColor:'#961F63',marginLeft:10,borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Dry</Text>
                </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                <View style={{height:height*0.032,width:width*0.12,backgroundColor:'#961F63',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Lorem</Text>
                </View>
                <View style={{height:height*0.032,width:width*0.12,backgroundColor:'#961F63',marginLeft:10,borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Ipsum</Text>
                </View>
                </View>
                <View style={{height:height*0.032,width:width*0.16,marginTop:10,backgroundColor:'#961F63',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.032}}>Earthy</Text>
                </View>
                </View>
            </View>
            <Text style={{marginLeft:width*0.07,marginTop:height*0.02,fontSize:width*0.035}}>Enatus voloplate quibusdom libero provident eios! </Text>
            <Text style={{marginLeft:width*0.07,fontSize:width*0.035}}>Neque quas Quia Parataur harum bitis non nihil.</Text>
            <Text style={{marginLeft:width*0.07,fontSize:width*0.035,marginBottom:height*0.02}}>Odio quio et aut quibusdom.</Text>
            <View>
            {
                data.map((item)=>(
                    
                    <View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={item.profile} style={{height:40,width:40,borderRadius:20,marginLeft:width*0.05}}/>
                        <View>
                            <Text style={{marginLeft:width*0.02,fontFamily:"Nunito_ExtraBold",color:"#545253"}}>{item.Name}</Text>
                            <Text style={{marginLeft:width*0.02,color:"#7d797b"}}>{item.time}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                            <Image source={item.overflow} style={{height:5,width:25,marginLeft:width*0.5}}/>
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
                        <View style={{flexDirection:"row",alignItems:"center",marginLeft:width*0.05,marginTop:height*0.025}}>
                            <View style={{height:height*0.03,width:width*0.15,borderColor:"#de1b8c",borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                                <Text style={{fontSize:16,color:"#de1b8c",fontFamily:"Nunito_Bold"}}>{item.rating}</Text>
                                </View>
                            <Text style={{marginLeft:width*0.02}}>{item.text1}</Text>
                         </View>
                         <Text style={{marginLeft:width*0.05}}>{item.text2}</Text>
                         <View style={{flexDirection:"row"}}>
                         <Text style={{marginLeft:width*0.05}}>{item.text3}</Text>
                         <Text style={{marginLeft:width*0.05,fontSize:16,color:"#de1b8c",fontFamily:"Nunito_Bold"}}>{item.read_more}</Text>
                         </View>
                         <View style={{flexDirection:"row",marginLeft:width*0.05,alignItems:"center",marginTop:height*0.01,marginBottom:height*0.04}}>
                         <Image source={item.profile} style={{height:16,width:16,borderRadius:8}}/>
                             <Text style={{marginLeft:width*0.01,color:"#919090"}}>{item.text4}</Text>
                             <Image source={item.like_icon} style={{height:16,width:16,marginLeft:width*0.03}}/>
                             <Text style={{marginLeft:width*0.02,color:"#919090"}}>{item.likes}</Text>
                             </View>
                    </View>
                  
                ))
            }
            </View>

            <View>
         <Modal 
               animationType="slide"
               visible={modalVisible}
               onRequestClose={()=>{setModalVisible(modalVisible)}}
               hasBackdrop={true}
               
               onBackdropPress={()=>{setModalVisible(modalVisible)}}
                transparent={true}
                
               >
                 <View style={{flex:1}}>
                     <View style={{height:height*0.4,width:width*1,backgroundColor:"#ffffff",marginTop:height*0.6,borderTopLeftRadius:30,borderTopEndRadius:30,borderColor:'green',elevation:10}}>
                         <TouchableOpacity onPress={()=>setModalVisible(true)}>
                      <Image source={assets.close} style={{height:height*0.07,width:width*0.14,alignSelf:"flex-end"}}/>
                      </TouchableOpacity>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.share} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Share Post</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>

                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.edit} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Edit Post</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      
                      <TouchableOpacity onPress={()=>{setShowModal(!showModal),setModalVisible(!modalVisible)}}>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.trash} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Delete Post</Text>
                      </View>
                      </TouchableOpacity>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      
                   </View>
                 </View>
             </Modal>
        </View>

        <View style={{backgroundColor:"#BFC9CA"}}>
            <Modal
            animationType='slide'
            visible={showModal}
            onRequestClose={()=>{setShowModal(!showModal)}}
            hasBackdrop={true}
            onBackdropPress={()=>{setShowModal(!showModal)}}
             transparent={true}
             
            >
                <TouchableWithoutFeedback onPress={()=>setShowModal(false)}>
                <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.4)"}}>
                   <View style={{height:height*0.3,width:width*0.7,backgroundColor:"#ffffff",marginLeft:width*0.15,marginTop:height*0.3,borderRadius:15}}>
                       <View style={{marginLeft:width*0.58,marginTop:height*0.01}}>
                       <TouchableOpacity onPress={()=>setShowModal(false)}>
                      <Image source={assets.close} style={{height:35,width:35}}/>
                      </TouchableOpacity>
                      </View>
                      <Text style={{fontSize:height*0.03,textAlign:"center",marginTop:height*0.03,fontFamily:"Nunito_Bold"}}>Delete Post?</Text>
                      <View style={{flexDirection:"row",marginTop:height*0.08,marginHorizontal:width*0.05,justifyContent:"space-around"}}>
                          <View style={{height:height*0.06,width:width*0.2,borderWidth:1,borderColor:"#5e5959",borderRadius:25,justifyContent:"center",alignItems:"center"}}>
                              <Text style={{fontSize:16,color:"#5e5959"}}>Back</Text>
                          </View>
                          <View style={{height:height*0.06,width:width*0.33,backgroundColor:"#ed8a8a",borderRadius:25,justifyContent:"center",alignItems:"center",fontFamily:"Nunito_Bold"}}>
                              <Text style={{fontSize:16,color:"white",fontFamily:"Nunito_Bold"}}>Delete</Text>
                          </View>
                      </View>
                   </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            </View>
            </ScrollView>
            <View style={{marginLeft:width*0.76,marginTop:-170,paddingBottom:20}}>
           <View  style={{height:height*0.09,width:height*0.09,backgroundColor:"#cf55ae",borderRadius:15,elevation:3,justifyContent:"center",alignItems:"center",margin:3}}>
            <Image source={assets.arrow_to_top}   style={{height:35,width:25,resizeMode:"contain"}}/>
          </View>
        </View>
       
        </View>
       
    )
}
export default UserProfile;