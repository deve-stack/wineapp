import { Assets } from "@react-navigation/stack";
import React,{  } from "react";
import { Text, View,Image,Dimensions, TextInput, ScrollView, TouchableOpacity,FlatList} from "react-native";
import * as assets from '../../components/assets'
import { useNavigation } from "@react-navigation/native";

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
   }
]

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

const scannedWines1=({})=>{
    const navigation=useNavigation();
    return(
        <ScrollView>
        <View style={{flex:1}}>
            
            <View style={{marginLeft:width*0.07,marginTop:height*0.06,flexDirection:'row',alignItems:"center",justifyContent:"space-between",marginRight:width*0.05}}> 
            <TouchableOpacity onPress={()=>navigation.goBack() }>
               <Image source={assets.btn_back}/> 
               </TouchableOpacity>
                 <Image source={assets.share_colored} style={{height:20,width:20,resizeMode:'contain',marginLeft:width*0.07}}/> 
             </View>
           
               <View>
                 <View style={{flexDirection:"row",marginHorizontal:width*0.03,marginTop:height*0.035}}>
              <View style={{flexDirection:"column",width:width*0.47,height:height*0.43}}>
                 <Text style={{fontFamily:"Nunito_Black"}}>2017 Castello di </Text>
                 <Text style={{fontFamily:"Nunito_Black"}}>Amorosa La Castellana </Text>
                 <Text style={{fontFamily:"Nunito_Black"}}>Reserve Super Tuscan</Text>
                 <Text style={{fontFamily:"Nunito_Black"}}>Blend</Text>
                 <Text style={{marginTop:5,color:"#808080"}}>Kai-Simore Winery</Text>
                 <Text style={{color:"#808080",marginTop:7}}>Grapes</Text>
                 <Text style={{fontFamily:"Nunito_Black"}}>Cabernet savignon</Text>
                 <Text style={{color:"#808080",marginTop:7}}>ABV</Text>
                 <Text style={{fontFamily:"Nunito_Black"}}>14.5%</Text>
                 <Text style={{color:"#808080",fontSize:width*0.035,marginTop:7}}>2020 . 2018 . 2017 . 2016</Text>
                 <Text style={{color:"#808080",fontSize:width*0.035}}>2015 . 2013 . 2012</Text>
                 <Text style={{color:"#808080",fontSize:width*0.035}}>2011 . 2010 </Text>
              </View>
              <View style={{flexDirection:"column",width:width*0.47,height:height*0.43}}>
              <Image source={assets.wine_image4} style={{height:height*0.43,width:width*0.47,borderRadius:15}}/>
              <View style={{height:height*0.05,width:width*0.2,backgroundColor:"white",borderRadius:10,marginTop:height*-0.42,marginLeft:5,justifyContent:"center",alignItems:"center"}}> 
                <Text style={{color:"#b31764",fontFamily:"Nunito_Black",fontSize:width*0.05}}>8.5/10</Text>
              </View>
              </View>
           </View>

           <View style={{flexDirection:"row",marginHorizontal:width*0.22,justifyContent:"space-between",marginTop:height*0.02}}>
           <TouchableOpacity onPress={()=>navigation.navigate("RetailerList")}>
               <View style={{height:height*0.07,width:width*0.3,backgroundColor:'#e880d0',borderRadius:30,justifyContent:'center',alignItems:"center"}}>
                   <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>See Prices</Text>
               </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate("ProductRatings")}>
               <View style={{height:height*0.07,width:width*0.2,borderColor:'#e880d0',borderWidth:1.5,borderRadius:30,justifyContent:'center',alignItems:"center"}}>
                   <Text style={{color:"#e880d0",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Rate</Text>
               </View>
                </TouchableOpacity>
           </View>
           <Text style={{fontSize:width*0.03,marginLeft:width*0.25,marginTop:5,fontFamily:"Nunito_Bold",color:"#696969"}}>Arrives by 03/24</Text>
           <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:15,fontSize:width*0.04}}>People Taste</Text>

           <View style={{flexDirection:'row',marginVertical:10}}>
              <View style={{height:height*0.04,width:width*0.24,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:width*0.06,}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Cranberries</Text>
              </View>
              <View style={{height:height*0.04,width:width*0.17,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:7}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Cherries</Text>
              </View>
              <View style={{height:height*0.04,width:width*0.16,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:7}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Apples </Text>
              </View>
              <View style={{height:height*0.04,width:width*0.16,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:7}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Smokey</Text>
              </View>
           </View>

           <View style={{flexDirection:'row',}}>
              <View style={{height:height*0.04,width:width*0.16,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:width*0.06,}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Earthy</Text>
              </View>
              <View style={{height:height*0.04,width:width*0.17,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:7}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Sweet</Text>
              </View>
              <View style={{height:height*0.04,width:width*0.17,backgroundColor:'#8c085a',justifyContent:"center",alignItems:"center",borderRadius:10,marginLeft:7}}>
                  <Text style={{color:"white",fontFamily:"Nunito_Black",fontSize:width*0.035}}>Vanilla</Text>
              </View>
              
           </View>
           <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.06,fontSize:width*0.04}}>People Say</Text>

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

            <View style={{height:height*0.07,width:width*0.74,borderWidth:2,borderColor:"#961F63",flexDirection:"row",alignItems:"center",borderRadius:30,justifyContent:"center",alignSelf:"center"}}>
             <Image source={assets.appbar_message} style={{height:25,width:25,resizeMode:"contain"}}/>
             <Text style={{fontFamily:"Nunito_Bold",marginLeft:10,color:"#961F63",fontSize:width*0.05}}>All 506 Ratings</Text>
            </View>
            <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.1}}>Pair With</Text>

            <View style={{flexDirection:"row",marginHorizontal:width*0.07,justifyContent:"space-between",marginTop:10}}>
                <View style={{justifyContent:"center",alignItems:"center",height:width*0.27,width:width*0.27,backgroundColor:"#8c085a",borderRadius:15}}>
                    <Text style={{color:"white",fontFamily:"Nunito_ExtraBold"}}>Beef</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center",height:width*0.27,width:width*0.27,backgroundColor:"#8c085a",borderRadius:15}}>
                    <Text style={{color:"white",fontFamily:"Nunito_ExtraBold"}}>Pork</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center",height:width*0.27,width:width*0.27,backgroundColor:"#8c085a",borderRadius:15}}>
                    <Text style={{color:"white",fontFamily:"Nunito_ExtraBold"}}>Cheese</Text>
                </View>
            </View>

            </View>
            
            <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.08}}>About the Winery</Text>
            <Image source={assets.article_image} style={{height:height*0.2,width:width*0.94,marginLeft:width*0.03,borderRadius:20,marginTop:5}}/>
             <Text style={{marginTop:7,marginLeft:width*0.06,fontSize:width*0.037,color:"#575757"}}>Sit et nisi et deseruit illo oit. Repudiandea neque</Text>
             <Text style={{marginLeft:width*0.06,fontSize:width*0.037,color:"#575757"}}>quae id invertore sapintie quie . odio in suint qui</Text>
             <Text style={{marginLeft:width*0.06,fontSize:width*0.037,color:"#575757"}}>assumenda doloribus molestiae reprehenderit</Text>
             <Text style={{marginLeft:width*0.06,fontSize:width*0.037,color:"#575757"}}>minima sit.</Text>

             <View style={{flexDirection:"row",alignItems:"center",marginTop:15,marginLeft:width*0.25}}>
                 <Image source={assets.image3} style={{height:40,width:40,borderRadius:20}}/>
                 <View style={{flexDirection:'column',marginLeft:5}}>
                   <Text style={{fontFamily:"Nunito_Black",fontSize:width*0.038}}>Kai-Simone Winery</Text>
                   <Text style={{fontSize:width*0.03,color:"#575757"}}>Champaigne , France</Text>
                 </View>
             </View>
             <Text style={{color:"#de1b8c",textAlign:"center",fontFamily:"Nunito_ExtraBold",fontSize:width*0.045,marginTop:10}}>Read More</Text>
             <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.08}}>Similar</Text>

             <ScrollView horizontal={true} >
             <View style={{flexDirection:"row",elevation:5,marginLeft:10}}>
                 {
                     data.map((item)=>(
                         
                         <View style={{elevation:5,marginTop:10,marginBottom:30}}>
                             <View style={{flexDirection:'row',height:height*0.27,width:width*0.7,marginLeft:7,elevation:5}}>
                                 <View style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:"pink"}}>

                                    <Image source={item.wine_image} style={{height:height*0.27,width:width*0.35,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                                    <View style={{height:height*0.03,width:width*0.15,backgroundColor:"white",marginTop:height*-0.26,marginLeft:width*0.02,justifyContent:"center",alignItems:"center",borderRadius:5,elevation:2}}>
                               <Text style={{fontFamily:"Nunito_Bold",color:"#f266ae"}}>{item.rating}</Text>
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
        </ScrollView>
    )
}
export default scannedWines1;