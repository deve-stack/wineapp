import React from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, FlatList} from 'react-native'
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
        text7:"people talking about this"
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
        text7:"people talking about this"
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
   }
  
]

const Producer=({navigation})=>{
    return(
        <ScrollView>
        <View style={{flex:1}}>
           
          <Image source={assets.grapes1} style={{height:height*0.35,width:width*1}}/>
              
             <View style={{marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center",flexDirection:'row',marginTop:height*-0.3}}>
                <Image source={assets.arrow_white} style={{height:45,width:45,resizeMode:"contain"}}/>
                <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>Producer</Text>
                <Image source={assets.share1} style={{height:25,width:25,resizeMode:"contain"}}/>
             </View>

             <View style={{height:height*0.25,width:width*0.86,marginLeft:width*0.07,backgroundColor:"white",borderRadius:25,marginTop:height*0.12,elevation:5}}>
                <View style={{marginHorizontal:width*0.05}}>
                    <View style={{flexDirection:'row',marginTop:height*0.03,alignItems:"center"}}>
                        <Image source={assets.image3} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                        <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                            <Text style={{fontFamily:"Nunito_Black",fontSize:width*0.04}}>Kai-Simone Winery</Text>
                            <Text style={{fontFamily:"Nunito_Bold",fontSize:width*0.03,color:"#8a8a8a"}}>Champaigne, France</Text>
                        </View>
                    </View>
                   <Text style={{fontSize:width*0.037,marginTop:height*0.02}}>Grapes nisi desurent illo aut. Repudiandea</Text>
                   <Text style={{fontSize:width*0.037,marginTop:3}}>neque quia id inventore sapiente qui. odio in</Text>
                   <Text style={{fontSize:width*0.037,marginTop:3}}>neque quia id inventore sapiente qui. odio in</Text>
                   <Text style={{fontSize:width*0.037,marginTop:3}}>reprehendit minima sit.</Text>
                  
                </View>
             </View>
             
             <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.05,fontSize:width*0.04}}>Top Wines</Text>
             <View>
             <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
             <View style={{flexDirection:"row",marginLeft:10,marginVertical:10}}>
                 {
                     data.map((item)=>(
                         
                         <View style={{}}>
                             <View style={{flexDirection:'row',height:height*0.27,width:width*0.7,marginLeft:7,elevation:5,backgroundColor:"white",borderRadius:15}}>
                                 <View style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:"pink"}}>

                                    <Image source={item.wine_image} style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                    <View style={{height:height*0.03,width:width*0.15,backgroundColor:"white",marginTop:height*-0.26,marginLeft:width*0.02,justifyContent:"center",alignItems:"center",borderRadius:5,elevation:2}}>
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
                         </View>
                     ))
                 }
             </View>
             </ScrollView>
             </View>
             <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.03,fontSize:width*0.04}}>Location</Text>
              <Image source={assets.map_image} style={{height:height*0.2,width:width*1,marginTop:10}}/>
              <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.05,fontSize:width*0.04}}>People Say</Text>

              <View style={{marginTop:height*0.01}}>
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
                        <View style={{alignSelf:"flex-end",marginRight:width*0.05,marginTop:height*-0.02}}>
                        <TouchableOpacity onPress={()=>setModalVisible(true)}>
                            <Image source={item.overflow} style={{height:5,width:25}}/>
                            </TouchableOpacity>
                            </View>
                        <TouchableOpacity onPress={()=>navigation.navigate("PostDetail")}>
                        <Image source={item.wine_image} style={{height:height*0.4,width:width*0.9,marginLeft:width*0.05,borderRadius:30,marginTop:height*0.02}}/>
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
                         <View style={{flexDirection:"row",marginLeft:width*0.05,alignItems:"center",marginTop:height*0.01}}>
                         <Image source={item.profile} style={{height:16,width:16,borderRadius:8}}/>
                             <Text style={{marginLeft:width*0.01,color:"#919090"}}>{item.text4}</Text>
                             <Image source={item.like_icon} style={{height:16,width:16,marginLeft:width*0.03}}/>
                             <Text style={{marginLeft:width*0.02,color:"#919090"}}>{item.likes}</Text>
                             </View>
                            <View style={{height:3,width:width*1,backgroundColor:'#dedede',marginTop:height*0.015,marginBottom:height*0.02}}/>
                    </View>
                            
                ))
            }
            </View>
        <View style={{backgroundColor:"#dedede",marginTop:height*-0.02}}>
        <View style={{height:height*0.07,width:width*0.8,marginLeft:width*0.1,borderWidth:2,borderColor:"#e835b3",borderRadius:30,flexDirection:"row",alignItems:"center",backgroundColor:'#dedede',marginTop:height*0.01}}>
            <Image source={assets.appbar_message} style={{height:25,width:25,resizeMode:"contain",marginLeft:width*0.14}}/>
            <Text style={{color:"#e835b3",fontFamily:"Nunito_Bold",fontSize:width*0.05,marginLeft:width*0.05}}>All 45 Mentions</Text>
        </View>
        <View style={{marginTop:height*0.1}}/>
        </View>
        </View>
        </ScrollView>
    )
}
export default Producer;