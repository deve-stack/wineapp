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

const TopicInfo=({navigation})=>{
    return(
        <ScrollView>
        <View style={{flex:1}}>
           
          <Image source={assets.grapes1} style={{height:height*0.35,width:width*1}}/>
              
             <View style={{marginLeft:width*0.07,marginRight:width*0.05,justifyContent:"space-between",alignItems:"center",flexDirection:'row',marginTop:height*-0.3}}>
             <TouchableOpacity onPress={()=>navigation.goBack() }>
                <Image source={assets.arrow_white} style={{height:45,width:45,resizeMode:"contain"}}/>
                </TouchableOpacity>
                <Text style={{color:"white",fontFamily:"Nunito_ExtraBold",fontSize:width*0.05}}>Grapes: Merlot</Text>
                <Image source={assets.share1} style={{height:25,width:25,resizeMode:"contain"}}/>
             </View>

             <View style={{height:height*0.32,width:width*0.86,marginLeft:width*0.07,backgroundColor:"white",borderRadius:25,marginTop:height*0.12,elevation:5}}>
                <View style={{marginHorizontal:width*0.05}}>
                   <Text style={{fontSize:width*0.037,marginTop:height*0.02}}>Grapes nisi desurent illo aut. Repudiandea</Text>
                   <Text style={{fontSize:width*0.037,marginTop:3}}>neque quia id inventore sapiente qui. odio in</Text>
                   <Text style={{fontSize:width*0.037,marginTop:3}}>neque quia id inventore sapiente qui. odio in</Text>
                   <Text style={{fontSize:width*0.037,marginTop:3}}>reprehendit minima sit.</Text>
                   <Text style={{fontSize:width*0.037,marginTop:height*0.02}}>Grapes nisi desurent illo aut. Repudiandea</Text>
                   <Text style={{fontSize:width*0.037,marginTop:3}}>neque quia id inventore sapiente qui. odio in</Text>
                   <Text style={{fontSize:width*0.037,marginTop:3}}>neque quia id inventore sapiente qui. odio in</Text>
                   <Text style={{fontSize:width*0.037,marginTop:3}}>reprehendit minima sit.</Text>
                </View>
             </View>
             <Image source={assets.grapes1} style={{height:height*0.22,width:width*1,marginTop:height*0.05}}/>
             <Text style={{marginLeft:width*0.07,color:"#8c085a",fontFamily:"Nunito_Black",marginTop:height*0.05,fontSize:width*0.04}}>Top Wines</Text>
             <View>
             <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
             <View style={{flexDirection:"row",elevation:5,marginLeft:10,marginVertical:10}}>
                 {
                     data.map((item)=>(
                         
                         <View style={{elevation:5}}>
                             <View style={{flexDirection:'row',height:height*0.27,width:width*0.7,marginLeft:7,elevation:5}}>
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
            
        </View>
        </ScrollView>
    )
}
export default TopicInfo;