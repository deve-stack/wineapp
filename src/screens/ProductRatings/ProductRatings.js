import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList} from "react-native";
import * as assets from '../../components/assets'

const {height,width}=Dimensions.get('window')
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

const ProductRatings=()=>{
    return(
        <ScrollView>
        <View style={{flex:1,}}>
            <Image source={assets.btn_back} style={{marginTop:height*0.07,marginLeft:width*0.07}}/> 
          <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.06,textAlign:"center",marginTop:height*-0.03}}>All Ratings</Text>
          <View style={{flexDirection:"row",height:height*0.07,width:width*0.82,borderWidth:0.7,borderColor:"#f266ae",borderRadius:5,marginTop:height*0.03,alignItems:"center",backgroundColor:"white",marginLeft:width*0.1}}>
            <Image source={assets.sidebar_search} style={{height:20,width:20,marginLeft:width*0.04}}/>
            <TextInput placeholder="Search Ratings" style={{marginLeft:width*0.05,fontSize:width*0.045,flex:1,fontFamily:'Nunito_Bold'}}/>
            
            </View>
            <Text style={{marginLeft:width*0.07,marginTop:height*0.04,fontFamily:"Nunito_Bold",color:"#6e6b6a"}}>Average Score</Text>
            <Text style={{marginLeft:width*0.07,color:"#f266ae",fontFamily:"Nunito_ExtraBold"}}>8.5/10</Text>
             <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.01,alignItems:"flex-end"}}>
                <View style={{flexDirection:"column",alignItems:"center"}}>
                    <Text style={{color:"#6e6b6a"}}>2</Text>
                    <View style={{height:15,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>>6</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>8</Text>
                    <View style={{height:35,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>7</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>18</Text>
                    <View style={{height:55,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>8</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>16</Text>
                    <View style={{height:45,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>9</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",marginLeft:width*0.05}}>
                    <Text style={{color:"#6e6b6a"}}>22</Text>
                    <View style={{height:75,width:10,backgroundColor:"#940f51",borderRadius:5}}/>
                    <Text style={{color:"#5e0833",fontFamily:"Nunito_Bold"}}>10</Text>
                </View>

            </View>
         <View style={{flexDirection:"column",marginLeft:25}}>
             <View style={{flexDirection:"row"}}>
            <View style={{height:height*0.035,width:width*0.2,backgroundColor:'#940f51',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Zinfandel</Text>
                </View>
               
                <View style={{height:height*0.035,width:width*0.12,backgroundColor:'#940f51',borderRadius:10,justifyContent:"center",alignItems:"center",marginLeft:10}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Red</Text>
                </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                <View style={{height:height*0.035,width:width*0.24,backgroundColor:'#940f51',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Champaigne</Text>
                </View>
                <View style={{height:height*0.035,width:width*0.12,backgroundColor:'#940f51',marginLeft:10,borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Dry</Text>
                </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                <View style={{height:height*0.035,width:width*0.16,backgroundColor:'#940f51',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Lorem</Text>
                </View>
                <View style={{height:height*0.035,width:width*0.16,backgroundColor:'#940f51',marginLeft:10,borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Ipsum</Text>
                </View>
                </View>
                <View style={{height:height*0.035,width:width*0.2,marginTop:10,backgroundColor:'#940f51',borderRadius:10,justifyContent:"center",alignItems:"center"}}> 
                   <Text style={{color:"white",fontFamily:"Nunito_Bold"}}>Earthy</Text>
                </View>
                </View>
            </View>

            <View style={{marginTop:20}}>
            {
                data1.map((item)=>(
                    
                    <View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={item.profile} style={{height:40,width:40,borderRadius:20,marginLeft:width*0.05}}/>
                        <View>
                            <Text style={{marginLeft:width*0.02,fontFamily:"Nunito_ExtraBold",color:"#545253"}}>{item.Name}</Text>
                            <Text style={{marginLeft:width*0.02,color:"#7d797b"}}>{item.time}</Text>
                            </View>
                           
                            <Image source={item.overflow} style={{height:5,width:25,marginLeft:width*0.5}}/>
                           
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

        </View>
        </ScrollView>
    )
}
export default ProductRatings;