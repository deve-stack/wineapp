import React,{ useState } from "react";
import { 
    Text,
     View ,
     Dimensions, 
     Image,
     TouchableOpacity,
     ScrollView,
     FlatList,
     RefreshControl,
     Modal,
     TouchableWithoutFeedback
    } from "react-native";
 //import Modal from 'react-native-modal';
import * as assets from "../../components/assets";
import { DrawerActions } from "@react-navigation/native";
import SearchScreen from "../SearchScreen/SearchScreen";

const HomeScreen=({navigation})=>{
    const[modalVisible,setModalVisible]=useState(false)

    const{height,width}=Dimensions.get('window')
    const data=[
        {id:"1", profile:assets.image2,userName:"Ephraim37"},
        {id:"2", profile:assets.image3,userName:"Juston43"},
        {id:"3", profile:assets.image2,userName:"Ephraim37"},
        {id:"4", profile:assets.image3,userName:"Justion43"},
        {id:"5", profile:assets.image2,userName:"Ephraim37"},
        {id:"6", profile:assets.image3,userName:"Juston43"},
        {id:"7", profile:assets.image2,userName:"Ephraim37"},
        {id:"8", profile:assets.image3,userName:"Juston43"},
        {id:"9", profile:assets.image2,userName:"Ephraim37"},
        {id:"10", profile:assets.image3,userName:"Juston43"},
    ]

const data1=[
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
   },
   {
    id:"3",
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
     rating:"8/10",
     text1:"Enatus voloplate quibusdom libero",
     text2:"provident eios! Neque quas Quia Parataur harum bitis ",
     text3:"non nihil audio quio et aut quibusdom ",
     read_more:"read more",
     text4:"non iusto atque nam molestae possimus",
     read_more:"Read More",
     text4:"Non iusto atque nam molistae possimus"
   }
]

const data2=[
    {
        profile:assets.image3,
        overflow:assets.overflow,
        like_icon:assets.like,
        likes:"20",
        comment_icon:assets.comment,
        comment:"8",
        share_icon:assets.share,
        repost_icon:assets.repost,
        repost:"12",
        name:'Wine Ethuist',
        date:"07/04/2021",
        article_image:assets.article_image,
        Article_Name:"Distinctio Omnis Magnam",
        more:"Read More",
        description:"A civil war in Yemen marked by foreign meddling has created an unparalleled humanitarian disaster with no end in sight  "
    },
    {
        profile:assets.image3,
        overflow:assets.overflow,
        name:'Wine Ethuist',
        like_icon:assets.like,
        likes:"20",
        comment_icon:assets.comment,
        comment:"8",
        share_icon:assets.share,
        repost_icon:assets.repost,
        repost:"12",
        date:"07/03/2021",
        article_image:assets.article_image,
        Article_Name:"Distinctio Omnis Magnam",
        more:"Read More",
        description:"A civil war in Yemen marked by foreign meddling has created an unparalleled humanitarian disaster with no end in sight  "
    },
    {
        profile:assets.image3,
        overflow:assets.overflow,
        name:'Wine Ethuist',
        like_icon:assets.like,
        likes:"20",
        comment_icon:assets.comment,
        comment:"8",
        share_icon:assets.share,
        repost_icon:assets.repost,
        repost:"12",
        date:"01/04/2021",
        article_image:assets.article_image,
        Article_Name:"Distinctio Omnis Magnam",
        more:"Read More",
        description:"A civil war in Yemen marked by foreign meddling has created an unparalleled humanitarian disaster with no end in sight  "
    }
]

    const renderItem=({item})=>(
        <View style={{marginLeft:width*0.025,flexDirection:"column",alignItems:"center"}}>
         
            <Image source={item.profile} style={{height:55,width:55,borderRadius:27.5,borderWidth:1,borderColor:"#de1b8c",}}/>
            <Text style={{fontSize:10,color:"#969093",fontFamily:"Nunito_Bold"}}>{item.userName}</Text>
       
        </View>
    )
    
    return(
        
        <View style={{flex:1}}>
            <ScrollView>
            <View style={{flexDirection:"row",marginTop:height*0.05,alignItems:"center",marginBottom:5,marginLeft:width*0.05,marginRight:width*0.07,justifyContent:"space-between"}}>
            <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Image source={assets.sidebar} style={{height:22,width:22,resizeMode:"contain"}}/>
                </TouchableOpacity>
                <Image source={assets.logo2x} style={{height:42,width:110,resizeMode:"contain"}}/>
                <TouchableOpacity onPress={()=>navigation.navigate("SearchScreen")}>
                <Image source={assets.sidebar_search} style={{height:22,width:22}}/>
                </TouchableOpacity>
            </View>
           
    
            <View>
            <View style={{flexDirection:"row",height:height*0.1,marginTop:height*0.01}}>
               <View style={{height:height*0.08,width:width*0.16,backgroundColor:"#961F63",borderRadius:15,marginLeft:width*0.05,alignItems:"center"}}>
                   <Text style={{color:'white',fontSize:16,textAlign:"center",marginTop:5,fontFamily:"Nunito_Bold"}}>Now Live</Text>
               </View>
             
               <View style={{}}>
                   <FlatList
                   horizontal
                   showsHorizontalScrollIndicator={false}
                   data={data}
                   keyExtractor={(item)=>item.id}
                   renderItem={renderItem}
                   />
               </View>
            </View>
         
            <View>
                <Text style={{textAlign:"center",color:"#540840",fontFamily:"Nunito_Bold"}}>Recommended</Text>
               
                <View style={{marginTop:height*0.015}}/>
                <View>
            {
                data1.map((item)=>(
                    
                    <View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={item.profile} style={{height:40,width:40,borderRadius:20,marginLeft:width*0.05}}/>
                        <View>
                            <Text style={{marginLeft:width*0.02,fontFamily:"Nunito_ExtraBold",color:"#545253"}}>{item.Name}</Text>
                            <Text style={{marginLeft:width*0.02,color:"#7d797b"}}>{item.time}</Text>
                            </View>
                        </View>
                        <View style={{alignSelf:"flex-end",marginRight:width*0.05,marginTop:height*-0.03}}>
                        <TouchableOpacity onPress={()=>setModalVisible(true)}>
                            <Image source={item.overflow} style={{height:5,width:25,}}/>
                            </TouchableOpacity>
                            </View>
                        <TouchableOpacity onPress={()=>navigation.navigate("PostDetail")}>
                        <Image source={item.wine_image} style={{height:height*0.4,width:width*0.9,marginLeft:width*0.05,borderRadius:30,marginTop:height*0.03}}/>
                        </TouchableOpacity>
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
                            <View style={{height:height*0.03,width:width*0.15,borderColor:"#821558",borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                                <Text style={{fontSize:16,color:"#821558",fontFamily:"Nunito_Bold"}}>{item.rating}</Text>
                                </View>
                            <Text style={{marginLeft:width*0.02}}>{item.text1}</Text>
                         </View>
                         <Text style={{marginLeft:width*0.05}}>{item.text2}</Text>
                         <View style={{flexDirection:"row"}}>
                         <Text style={{marginLeft:width*0.05}}>{item.text3} 
                         <Text style={{marginLeft:width*0.05,fontSize:16,color:"#821558",fontFamily:"Nunito_Bold"}}>{item.read_more}</Text>
                         </Text>
                        
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
                {
                    data2.map((item)=>(
                        <View>
                           <View style={{flexDirection:"row",alignItems:"center",marginTop:height*0.03}}>
                        <Image source={item.profile} style={{height:40,width:40,borderRadius:20,marginLeft:width*0.05}}/>
                        <View>
                            <Text style={{marginLeft:width*0.02,fontFamily:"Nunito_Bold",color:"#545253"}}>{item.name}</Text>
                            <Text style={{marginLeft:width*0.02,color:"#7d797b"}}>{item.date}</Text>
                            </View>
                           
                        </View>
                        <View style={{alignSelf:"flex-end",marginRight:width*0.05,marginTop:height*-0.03}}>
                        <TouchableOpacity onPress={()=>setModalVisible(true)}>
                            <Image source={item.overflow} style={{height:5,width:25,}}/>
                            </TouchableOpacity>
                            </View>
                        <TouchableOpacity onPress={()=>navigation.navigate("ArticleScreen")}>
                        <Image source={item.article_image} style={{height:height*0.25,width:width*0.9,marginLeft:width*0.05,borderRadius:30,marginTop:height*0.03}}/>
                        </TouchableOpacity>
                        <View style={{flexDirection:"row",alignItems:'center',marginTop:height*0.02}}>
                        <Image source={item.like_icon} style={{height:20,width:20,marginLeft:width*0.09}}/>
                        <Text style={{marginLeft:width*0.02}}>{item.likes}</Text>
                        <Image source={item.comment_icon} style={{height:20,width:20,marginLeft:width*0.07}}/>
                        <Text style={{marginLeft:width*0.02}}>{item.comment}</Text>
                        <Image source={item.repost_icon} style={{height:20,width:15,marginLeft:width*0.07}}/>
                        <Text style={{marginLeft:width*0.02}}>{item.repost}</Text>
                        <Image source={item.share_icon} style={{height:23,width:20,marginLeft:width*0.3}}/>
                        </View>
                        <Text style={{fontSize:16,fontFamily:"Nunito_ExtraBold",marginLeft:width*0.05,marginTop:height*0.015}}>{item.Article_Name}</Text>
                        <View style={{marginHorizontal:width*0.05}}>
                        <Text style={{color:"black",marginTop:5,fontFamily:"Nunito_Regular"}}>{item.description} 
                         <Text style={{color:"#821558",fontFamily:"Nunito_Bold",fontSize:width*0.04,marginLeft:5}}>{item.more}</Text>
                         </Text>
                        
                        </View>
                        </View>
                    ))
                }
            </View>
           </View>
            <View style={{marginBottom:height*0.1}}/>
            </View>
           
           
         <View style={{backgroundColor:"black",opacity:0.5}}>
         <Modal 
               animationType='slide'
               visible={modalVisible}
               transparent={false}
               onRequestClose={()=>{setModalVisible(false)}}
               onDismiss={()=>{setModalVisible(false)}}
               >
                   <TouchableWithoutFeedback onPress={()=>setModalVisible(false)}>
                 <View style={{flex:1,backgroundColor:"rgba(224,222,222,1)"}}>
                     
                     <View style={{height:height*0.7,width:width*1,backgroundColor:"#ffffff",marginTop:height*0.3,borderTopLeftRadius:30,borderTopEndRadius:30,borderColor:'green',elevation:5}}>
                         <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                      <Image source={assets.close} style={{height:height*0.07,width:width*0.14,alignSelf:"flex-end"}}/>
                      </TouchableOpacity>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.share} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Share Post</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>

                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.follow} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Follow Joshwines</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.chat} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Message Joshwines</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.add_group} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Add Joshwines to Group</Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.block} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Block Joshwines </Text>
                      </View>
                      <View style={{height:1,backgroundColor:"#c9c7c7",width:width*0.8,marginVertical:height*0.025,marginLeft:width*0.1}}/>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={assets.report} style={{height:25,width:25,marginLeft:width*0.08,resizeMode:"contain"}}/>
                        <Text style={{fontSize:18,marginLeft:width*0.08,color:"#7d7c7c",fontFamily:"Nunito_Bold"}}>Report Post</Text>
                      </View>
                   </View>
                 </View>
                 </TouchableWithoutFeedback>
             </Modal>

         </View>
         </ScrollView>

         <View style={{marginLeft:width*0.76,marginTop:-100,paddingBottom:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate("NewPost")}>
           <View  style={{height:height*0.09,width:height*0.09,backgroundColor:"#961F63",borderRadius:15,elevation:20,justifyContent:"center",alignItems:"center"}}>
            <Image source={assets.plus_white}   style={{height:25,width:25,}}/>
          </View>
          </TouchableOpacity>
          </View>

        </View>
        
    )
}
export default HomeScreen;