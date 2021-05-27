import React,{ useState } from "react";
import { 
    Text,
     View ,
     Dimensions, 
     Image,
     TouchableOpacity,
     ScrollView,
     FlatList,
     Modal,
     TextInput
    } from "react-native";
import * as assets from "../../components/assets";
import Wines from "../../components/Wines";
import People from "../../components/People";
import Live from "../../components/Live";
import Swipeable from 'react-native-gesture-handler/Swipeable';

const{height,width}=Dimensions.get('window')

const data=[
    {
        rating:"8.5/10",
        wine_image:assets.wine_image4,
        share:assets.share_colored,
        text1:"2017 Castello di",
        text2:"Amorosa La",
        text3:"Castellana",
        text4:"Reserve Super",
        text5:"Tuscan Blend",
        button_text:"More",
        text6:"15",
        text7:"People talking about this"
    },
    {
        rating:"7.5/10",
        wine_image:assets.wine_image4,
        share:assets.share_colored,
        text1:"2017 Castello di",
        text2:"Amorosa La",
        text3:"Castellana",
        text4:"Reserve Super",
        text5:"Tuscan Blend",
        button_text:"More",
        text6:"38",
        text7:"People talking about this"
    }
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



const SearchScreen=({navigation})=>{
    const[button,showButton]=useState("button1")
    const handleButton=(a)=>{
        showButton(a)
   }
    return(
        <View style={{flex:1,backgroundColor:"#e8e6e7"}}>
            {/* <ScrollView>
                <View> */}
             <View style={{marginLeft:width*0.07,marginRight:width*0.05,marginTop:height*0.06,flexDirection:'row'}}> 
             <TouchableOpacity onPress={()=>navigation.goBack() }>
                 <Image source={assets.btn_back}/> 
                 </TouchableOpacity>
                 <View style={{flexDirection:"row",height:height*0.07,width:width*0.7,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,marginTop:height*0.04,alignItems:"center",backgroundColor:"white",marginLeft:width*0.05,marginTop:height*-0.01}}>
            <Image source={assets.sidebar_search} style={{height:20,width:20,marginLeft:width*0.04}}/>
            <TextInput placeholder="Search" style={{marginLeft:width*0.05,fontSize:width*0.055,flex:1}}/>
            <View style={{marginRight:width*0.04}}>
            <Image source={assets.scan_camera} style={{height:27,width:27,resizeMode:"contain"}}/>
            </View>
            </View>
             </View>

             <View style={{marginTop:height*0.03,marginLeft:width*0.09,marginRight:width*0.15,flexDirection:"row",justifyContent:"space-between"}}>
                 <TouchableOpacity onPress={(a)=>handleButton('button1')}>
               <Text style={{fontFamily:button=="button1" ?"Nunito_ExtraBold":null ,color:button=="button1" ?"#f266ae":"#6e0a3b",fontSize:width*0.05}}>Popular</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={(a)=>handleButton('button2')}>
               <Text style={{fontFamily:button=="button2" ?"Nunito_ExtraBold":null,color:button=="button2" ?"#f266ae":"#6e0a3b",fontSize:width*0.05}}>Wines</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={(a)=>handleButton('button3')}>
               <Text style={{fontFamily:button=="button3" ?"Nunito_ExtraBold":null,color:button=="button3" ?"#f266ae":"#6e0a3b",fontSize:width*0.05}}>People</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={(a)=>handleButton('button4')}>
               <Text style={{fontFamily:button=="button4" ?"Nunito_ExtraBold":null,color:button=="button4" ?"#f266ae":"#6e0a3b",fontSize:width*0.05}}>Live</Text>
               </TouchableOpacity>
             </View>
             {
                 button=="button1" && 
                 
             <ScrollView>
               
             <View>
             <Text style={{fontFamily:"Nunito_ExtraBold",color:"#6e0a3b",fontSize:width*0.04,marginLeft:width*0.07,marginTop:height*0.04,marginBottom:height*0.01}}>Trending Wines</Text>
               <ScrollView horizontal={true} 
               showsHorizontalScrollIndicator={false}
               >
             <View style={{flexDirection:"row",marginLeft:10}}>
                 {
                     data.map((item)=>(
                         
                         <View style={{}}>
                             <View style={{flexDirection:'row',height:height*0.27,width:width*0.7,marginLeft:7,elevation:5,backgroundColor:"white",borderRadius:10}}>
                                 <View style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:"pink"}}>

                                    <Image source={item.wine_image} style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                    <View style={{height:height*0.03,width:width*0.15,backgroundColor:"white",marginTop:height*-0.26,marginLeft:width*0.02,justifyContent:"center",alignItems:"center",borderRadius:10,elevation:2}}>
                               <Text style={{fontFamily:"Nunito_ExtraBold",color:"#f266ae"}}>{item.rating}</Text>
                                 </View>
                                 </View>
                                 <View style={{height:height*0.27,width:width*0.35,borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:"#f2f2f2"}}>
                                     <Image source={item.share} style={{height:15,width:15,resizeMode:"contain",alignSelf:"flex-end",marginRight:10,marginTop:height*0.012}}/>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text1}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text2}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text3}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text4}</Text>
                                    <Text style={{fontFamily:"Nunito_ExtraBold",textAlign:"center",fontSize:width*0.035}}>{item.text5}</Text>
                                    <View style={{height:height*0.07,width:width*0.22,borderWidth:2,borderColor:"#f266ae",borderRadius:30,justifyContent:'center',alignItems:"center",alignSelf:"center",marginTop:height*0.02}}>
                                       <Text style={{color:"#f266ae",fontFamily:"Nunito_Bold",fontSize:16}}>More</Text>
                                    </View>
                                 </View>
                                 
                             </View>
                          
                             <View style={{flexDirection:'row',alignSelf:"center",marginTop:5,}}>
                             <Text style={{fontFamily:"Nunito_Bold"}}>{item.text6} </Text>
                             <Text style={{fontFamily:"Nunito_Bold",color:"#5c5a5a"}}>{item.text7}</Text>
                             
                             </View>
                             
                         </View>
                     ))
                 }
             </View>
             </ScrollView>
             
             <Text style={{fontFamily:"Nunito_ExtraBold",color:"#6e0a3b",marginLeft:width*0.07,fontSize:width*0.037,marginTop:height*0.03}}>Popular Posts</Text>
            

             <View>
            {
                data1.map((item)=>(
                    
                    <View>
                        <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                        <Image source={item.profile} style={{height:40,width:40,borderRadius:20,marginLeft:width*0.05}}/>
                        <View>
                            <Text style={{marginLeft:width*0.02,fontFamily:"Nunito_Bold",color:"#545253"}}>{item.Name}</Text>
                            <Text style={{marginLeft:width*0.02,color:"#7d797b"}}>{item.time}</Text>
                            </View>
                           
                        </View>
                        <View style={{alignSelf:"flex-end",marginRight:width*0.05,marginTop:height*-0.03}}>
                            <TouchableOpacity>
                        <Image source={item.overflow} style={{height:5,width:25}}/> 
                        </TouchableOpacity>
                        </View>

                        <Image source={item.wine_image} style={{height:height*0.4,width:width*0.9,marginLeft:width*0.05,borderRadius:30,marginTop:height*0.03}}/>
                      
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
                         <View style={{flexDirection:"row",marginLeft:width*0.05,alignItems:"center",marginTop:height*0.01,marginBottom:height*0.02}}>
                         <Image source={item.profile} style={{height:16,width:16,borderRadius:8}}/>
                             <Text style={{marginLeft:width*0.01,color:"#919090"}}>{item.text4}</Text>
                             <Image source={item.like_icon} style={{height:16,width:16,marginLeft:width*0.03}}/>
                             <Text style={{marginLeft:width*0.02,color:"#919090"}}>{item.likes}</Text>
                             </View>
                    </View>
                  
                ))
            }
            </View>
            </View>
           
            </ScrollView>
          
             }

           { button=="button2" &&
           <ScrollView>
           <View>
                <Wines/>
            </View>
            </ScrollView>
            }

            {button=="button3" &&
            
                <ScrollView>
                 <View>
                   <People/>
                 </View>
              </ScrollView>
              
           }

            {button=="button4" &&
           
             <ScrollView>
            <View>
                <Live/>
            </View>
            </ScrollView>
           
            }
        </View>
    )
}
export default SearchScreen;