import React,{useState} from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, Modal} from 'react-native'
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Swipeout from 'react-native-swipeout';
import { DrawerActions } from "@react-navigation/native";
const{height,width}=Dimensions.get('window')

const ChatScreen=({navigation})=>{
    const[value,setValue]=useState('button1')
    const changeButton=(item)=>{
        setValue(item)
    }
    const swipeBtns = [
        {
          component: (
            <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:"#ff7d7d",
                  flex:1
                }}
            >
              <Image source={assets.trash2} style={{height:22,width:22,resizeMode:"contain"}}/>
            </View>
          ),
        },
        
      ];
    return(
        <View style={{flex:1}}>
             <View style={{flexDirection:"row",marginTop:height*0.06,alignItems:"center",marginHorizontal:width*0.05,justifyContent:"space-between"}}>
            <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Image source={assets.sidebar} style={{height:22,width:22,resizeMode:"contain"}}/>
                </TouchableOpacity>
                <Text style={{fontFamily:"Nunito_ExtraBold",fontSize:width*0.055}}>Messages</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("PrivacyScreen")}>
                <Image source={assets.setting_black} style={{height:28,width:28,resizeMode:"contain"}}/>
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal:width*0.17,justifyContent:'space-between',marginTop:height*0.03,flexDirection:"row",marginBottom:10}}>
              <TouchableOpacity onPress={(item)=>changeButton('button1')}>
               <Text style={{
                   fontSize:width*0.045,fontFamily:value=="button1"?"Nunito_ExtraBold":"Nunito_SemiBold",color:value=="button1"?"#f266ae":"#6e0a3b",textDecorationLine:value=="button1"?"underline":"none"}}>Direct</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={(item)=>changeButton('button2')}>
               <Text style={{fontSize:width*0.045,fontFamily:value=="button2"?"Nunito_ExtraBold":"Nunito_SemiBold",color:value=="button2"?"#f266ae":"#6e0a3b",textDecorationLine:value=="button2"?"underline":"none"}}>Mentions</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={(item)=>changeButton('button3')}>
               <Text style={{fontSize:width*0.045,fontFamily:value=="button3"?"Nunito_ExtraBold":"Nunito_SemiBold",color:value=="button3"?"#f266ae":"#6e0a3b",textDecorationLine:value=="button3"?"underline":"none"}}>Groups</Text>
               </TouchableOpacity>
           </View>

           {value=="button1" && 
               <View>
               <ScrollView>
               <View>

               <Swipeout 
                 right={swipeBtns}
                 style={{}}
                 autoClose='true'
                 backgroundColor= 'transparent'>
            <TouchableOpacity onPress={()=>navigation.navigate("MessageChain")}>
           <View style={{flexDirection:"row",marginTop:height*0.04,marginHorizontal:width*0.07,justifyContent:"space-between"}}>
              <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
              <View style={{flexDirection:"column",marginRight:width*0.05}}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontFamily:"Nunito_Black",color:"#611b3e"}}>Nequewine35</Text>
                      <Text style={{}}> . </Text>
                      <Text style={{fontFamily:"Nunito_SemiBold",color:"#adacac"}}>30 min ago</Text>
                  </View>
                  <Text style={{fontFamily:"Nunito_Black",color:"#919090",fontSize:width*0.037}}>Consequtor et inventore magni </Text>
                  <Text style={{fontFamily:"Nunito_Black",color:"#919090",fontSize:width*0.037,marginBottom:height*0.02}}>et voluptates repudiandea per...</Text>
              </View>
              
              <View style={{height:22,width:22,borderRadius:11,backgroundColor:"#942e61",marginTop:height*0.03,justifyContent:"center",alignItems:"center"}}>
                  <Text style={{color:"white"}}>2</Text>
              </View>
           </View>
           </TouchableOpacity>
           </Swipeout>

           <View style={{height:0.6,width:width*0.94,marginLeft:width*0.03,backgroundColor:"#8a8a8a",marginBottom:height*0.02}}/>
           
           <View style={{flexDirection:"row",marginHorizontal:width*0.07}}>
              <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontFamily:"Nunito_Black",color:"#611b3e"}}>Nequewine35</Text>
                      <Text style={{}}> . </Text>
                      <Text style={{fontFamily:"Nunito_SemiBold",color:"#adacac"}}>30 min ago</Text>
                  </View>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>Consequtor et inventore magni </Text>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>et voluptates repudiandea per...</Text>
              </View>
           </View>
          
           <View style={{height:0.6,width:width*0.94,marginLeft:width*0.03,backgroundColor:"#8a8a8a",marginVertical:height*0.02}}/>

           <View style={{flexDirection:"row",marginHorizontal:width*0.07}}>
              <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontFamily:"Nunito_Black",color:"#611b3e"}}>Nequewine35</Text>
                      <Text style={{}}> . </Text>
                      <Text style={{fontFamily:"Nunito_SemiBold",color:"#adacac"}}>30 min ago</Text>
                  </View>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>Consequtor et inventore magni </Text>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>et voluptates repudiandea per...</Text>
              </View>
           </View>
           <View style={{height:0.6,width:width*0.94,marginLeft:width*0.03,backgroundColor:"#8a8a8a",marginVertical:height*0.02}}/>

           <View style={{flexDirection:"row",marginHorizontal:width*0.07}}>
              <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontFamily:"Nunito_Black",color:"#611b3e"}}>Nequewine35</Text>
                      <Text style={{}}> . </Text>
                      <Text style={{fontFamily:"Nunito_SemiBold",color:"#adacac"}}>30 min ago</Text>
                  </View>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>Consequtor et inventore magni </Text>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>et voluptates repudiandea per...</Text>
              </View>
           </View>
           <View style={{height:0.6,width:width*0.94,marginLeft:width*0.03,backgroundColor:"#8a8a8a",marginVertical:height*0.02}}/>

           <View style={{flexDirection:"row",marginHorizontal:width*0.07}}>
              <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontFamily:"Nunito_Black",color:"#611b3e"}}>Nequewine35</Text>
                      <Text style={{}}> . </Text>
                      <Text style={{fontFamily:"Nunito_SemiBold",color:"#adacac"}}>30 min ago</Text>
                  </View>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>Consequtor et inventore magni </Text>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>et voluptates repudiandea per...</Text>
              </View>
           </View>
           <View style={{height:0.6,width:width*0.94,marginLeft:width*0.03,backgroundColor:"#8a8a8a",marginVertical:height*0.02}}/>

           <View style={{flexDirection:"row",marginHorizontal:width*0.07}}>
              <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontFamily:"Nunito_Black",color:"#611b3e"}}>Nequewine35</Text>
                      <Text style={{}}> . </Text>
                      <Text style={{fontFamily:"Nunito_SemiBold",color:"#adacac"}}>30 min ago</Text>
                  </View>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>Consequtor et inventore magni </Text>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>et voluptates repudiandea per...</Text>
              </View>
           </View>
           <View style={{height:0.6,width:width*0.94,marginLeft:width*0.03,backgroundColor:"#8a8a8a",marginVertical:height*0.02}}/>

           <View style={{flexDirection:"row",marginHorizontal:width*0.07}}>
              <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontFamily:"Nunito_Black",color:"#611b3e"}}>Nequewine35</Text>
                      <Text style={{}}> . </Text>
                      <Text style={{fontFamily:"Nunito_SemiBold",color:"#adacac"}}>30 min ago</Text>
                  </View>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>Consequtor et inventore magni </Text>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>et voluptates repudiandea per...</Text>
              </View>
           </View>
           <View style={{height:0.6,width:width*0.94,marginLeft:width*0.03,backgroundColor:"#8a8a8a",marginVertical:height*0.02}}/>

           <View style={{flexDirection:"row",marginHorizontal:width*0.07,marginBottom:20}}>
              <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontFamily:"Nunito_Black",color:"#611b3e"}}>Nequewine35</Text>
                      <Text style={{}}> . </Text>
                      <Text style={{fontFamily:"Nunito_SemiBold",color:"#adacac"}}>30 min ago</Text>
                  </View>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>Consequtor et inventore magni </Text>
                  <Text style={{fontFamily:"Nunito_SemiBold",color:"#919090",fontSize:width*0.037}}>et voluptates repudiandea per...</Text>
              </View>
           </View>
           </View>
           </ScrollView>

           <View style={{}}>
               <View style={{marginTop:height*-0.3,marginLeft:width*0.74}}>
           <TouchableOpacity onPress={()=>navigation.navigate("NewMessage")}>
           <Image source={assets.message_btn} style={{height:90,width:90}}/>
          
           </TouchableOpacity>
           </View>
        </View>
        </View>
        }

        {value=="button2" && 
            <ScrollView>
                <View style={{flexDirection:"row",marginTop:height*0.04}}>
                    <Image source={assets.image4} style={{height:width*0.13,width:width*0.13,borderRadius:width*0.065,marginLeft:width*0.07}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_ExtraBold",color:"#6e0a3b",fontSize:width*0.042}}>Nequewine35 </Text>
                            <Text style={{fontFamily:"Nunito_SemiBold",color:"#807e7e",fontSize:width*0.032}}>mentioned you 30 min ago</Text>
                        </View>
                        <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>Consequtor et inventore magni et voluptates.</Text>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#f266ae",fontSize:width*0.032}}>@joshwines </Text>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>lorem ipsum dolor sit amet.</Text>
                        </View>
                    </View>
                </View>
                <Text style={{textAlign:"right",fontFamily:"Nunito_Bold",marginRight:width*0.05,fontSize:width*0.045,marginTop:height*0.005,color:'#ba5489'}}>View</Text>
                <View style={{height:1,width:width*0.9,backgroundColor:"#bdbdbd",marginVertical:height*0.025,marginLeft:width*0.05}}/>

                <View style={{flexDirection:"row"}}>
                    <Image source={assets.image4} style={{height:width*0.13,width:width*0.13,borderRadius:width*0.065,marginLeft:width*0.07}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_ExtraBold",color:"#6e0a3b",fontSize:width*0.042}}>Nequewine35 </Text>
                            <Text style={{fontFamily:"Nunito_SemiBold",color:"#807e7e",fontSize:width*0.032}}>mentioned you 30 min ago</Text>
                        </View>
                        <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>Consequtor et inventore magni et voluptates.</Text>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#f266ae",fontSize:width*0.032}}>@joshwines </Text>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>lorem ipsum dolor sit amet.</Text>
                        </View>
                    </View>
                </View>
                <Text style={{textAlign:"right",fontFamily:"Nunito_Bold",marginRight:width*0.05,fontSize:width*0.045,marginTop:height*0.005,color:'#ba5489'}}>View</Text>
                <View style={{height:1,width:width*0.9,backgroundColor:"#bdbdbd",marginVertical:height*0.025,marginLeft:width*0.05}}/>

                <View style={{flexDirection:"row"}}>
                    <Image source={assets.image4} style={{height:width*0.13,width:width*0.13,borderRadius:width*0.065,marginLeft:width*0.07}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_ExtraBold",color:"#6e0a3b",fontSize:width*0.042}}>Nequewine35 </Text>
                            <Text style={{fontFamily:"Nunito_SemiBold",color:"#807e7e",fontSize:width*0.032}}>mentioned you 30 min ago</Text>
                        </View>
                        <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>Consequtor et inventore magni et voluptates.</Text>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#f266ae",fontSize:width*0.032}}>@joshwines </Text>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>lorem ipsum dolor sit amet.</Text>
                        </View>
                    </View>
                </View>
                <Text style={{textAlign:"right",fontFamily:"Nunito_Bold",marginRight:width*0.05,fontSize:width*0.045,marginTop:height*0.005,color:'#ba5489'}}>View</Text>
                <View style={{height:1,width:width*0.9,backgroundColor:"#bdbdbd",marginVertical:height*0.025,marginLeft:width*0.05}}/>

                <View style={{flexDirection:"row"}}>
                    <Image source={assets.image4} style={{height:width*0.13,width:width*0.13,borderRadius:width*0.065,marginLeft:width*0.07}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_ExtraBold",color:"#6e0a3b",fontSize:width*0.042}}>Nequewine35 </Text>
                            <Text style={{fontFamily:"Nunito_SemiBold",color:"#807e7e",fontSize:width*0.032}}>mentioned you 30 min ago</Text>
                        </View>
                        <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>Consequtor et inventore magni et voluptates.</Text>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#f266ae",fontSize:width*0.032}}>@joshwines </Text>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>lorem ipsum dolor sit amet.</Text>
                        </View>
                    </View>
                </View>
                <Text style={{textAlign:"right",fontFamily:"Nunito_Bold",marginRight:width*0.05,fontSize:width*0.045,marginTop:height*0.005,color:'#ba5489'}}>View</Text>
                <View style={{height:1,width:width*0.9,backgroundColor:"#bdbdbd",marginVertical:height*0.025,marginLeft:width*0.05}}/>

                <View style={{flexDirection:"row"}}>
                    <Image source={assets.image4} style={{height:width*0.13,width:width*0.13,borderRadius:width*0.065,marginLeft:width*0.07}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_ExtraBold",color:"#6e0a3b",fontSize:width*0.042}}>Nequewine35 </Text>
                            <Text style={{fontFamily:"Nunito_SemiBold",color:"#807e7e",fontSize:width*0.032}}>mentioned you 30 min ago</Text>
                        </View>
                        <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>Consequtor et inventore magni et voluptates.</Text>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#f266ae",fontSize:width*0.032}}>@joshwines </Text>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>lorem ipsum dolor sit amet.</Text>
                        </View>
                    </View>
                </View>
                <Text style={{textAlign:"right",fontFamily:"Nunito_Bold",marginRight:width*0.05,fontSize:width*0.045,marginTop:height*0.005,color:'#ba5489'}}>View</Text>
                <View style={{height:1,width:width*0.9,backgroundColor:"#bdbdbd",marginVertical:height*0.025,marginLeft:width*0.05}}/>

                <View style={{flexDirection:"row"}}>
                    <Image source={assets.image4} style={{height:width*0.13,width:width*0.13,borderRadius:width*0.065,marginLeft:width*0.07}}/>
                    <View style={{flexDirection:"column",marginLeft:width*0.03}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_ExtraBold",color:"#6e0a3b",fontSize:width*0.042}}>Nequewine35 </Text>
                            <Text style={{fontFamily:"Nunito_SemiBold",color:"#807e7e",fontSize:width*0.032}}>mentioned you 30 min ago</Text>
                        </View>
                        <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>Consequtor et inventore magni et voluptates.</Text>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#f266ae",fontSize:width*0.032}}>@joshwines </Text>
                            <Text style={{fontFamily:"Nunito_Bold",color:"#141414",fontSize:width*0.032}}>lorem ipsum dolor sit amet.</Text>
                        </View>
                    </View>
                </View>
                <Text style={{textAlign:"right",fontFamily:"Nunito_Bold",marginRight:width*0.05,fontSize:width*0.045,marginTop:height*0.005,color:'#ba5489'}}>View</Text>
                <View style={{height:1,width:width*0.9,backgroundColor:"#bdbdbd",marginVertical:height*0.025,marginLeft:width*0.05}}/>

            </ScrollView>
        }

        {
            value=="button3" &&
            <View>
            <ScrollView>
                <Swipeout right={swipeBtns}
                  autoClose='true'
                  backgroundColor= 'transparent'>
                <Text style={{marginTop:height*0.02,textAlign:'right',marginRight:width*0.05,fontFamily:"Nunito_SemiBold",color:"#a3a3a3"}}>30 min ago</Text>

                <TouchableOpacity onPress={()=>navigation.navigate("GroupMessageChain")}>
                <View style={{flexDirection:"row",marginTop:height*0.01,marginHorizontal:width*0.07,justifyContent:"space-between",alignItems:"center"}}>
              <Image source={assets.grapes3} style={{height:width*0.2,width:width*0.2,borderRadius:width*0.1}}/>
              <View style={{flexDirection:"column",marginRight:width*0.05}}>
                 <Text style={{fontFamily:"Nunito_ExtraBold",color:"#611b3e",fontSize:width*0.045}}>Zinthusiasts</Text>
                   <Text style={{fontFamily:"Nunito_Bold",color:"#3b3b3b",fontSize:width*0.03,marginTop:height*0.01}}>Nequewine35,Winelover5,Jogn8, </Text>
                  <Text style={{fontFamily:"Nunito_Bold",color:"#3b3b3b",fontSize:width*0.03}}>Sallysmith,TimeforWine</Text>
                  <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03,marginBottom:height*0.02}}>+8 others</Text>
                </View>
               <View style={{height:22,width:22,borderRadius:11,backgroundColor:"#942e61",justifyContent:"center",alignItems:"center"}}>
                  <Text style={{color:"white"}}>2</Text>
              </View>
           </View>
           </TouchableOpacity>
           </Swipeout>

           <View style={{height:0.6,width:width*0.9,marginLeft:width*0.05,backgroundColor:"#8a8a8a",marginBottom:height*0.02}}/>
           <Text style={{textAlign:'right',marginRight:width*0.05,fontFamily:"Nunito_SemiBold",color:"#a3a3a3"}}>30 min ago</Text>
            <View style={{flexDirection:"row",marginTop:height*0.01,marginHorizontal:width*0.07,alignItems:"center"}}>
              <Image source={assets.grapes3} style={{height:width*0.2,width:width*0.2,borderRadius:width*0.1}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.04}}>
                 <Text style={{fontFamily:"Nunito_ExtraBold",color:"#611b3e",fontSize:width*0.045}}>Zinthusiasts</Text>
                   <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03,marginTop:height*0.01}}>Nequewine35,Winelover5,Jogn8, </Text>
                  <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03}}>Sallysmith,TimeforWine</Text>
                  <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03}}>+8 others</Text>
                </View>
              </View>

              <View style={{height:0.6,width:width*0.9,marginLeft:width*0.05,backgroundColor:"#8a8a8a",marginVertical:height*0.02}}/>
           <Text style={{textAlign:'right',marginRight:width*0.05,fontFamily:"Nunito_SemiBold",color:"#a3a3a3"}}>30 min ago</Text>
            <View style={{flexDirection:"row",marginTop:height*0.01,marginHorizontal:width*0.07,alignItems:"center"}}>
              <Image source={assets.grapes3} style={{height:width*0.2,width:width*0.2,borderRadius:width*0.1}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.04}}>
                 <Text style={{fontFamily:"Nunito_ExtraBold",color:"#611b3e",fontSize:width*0.045}}>Zinthusiasts</Text>
                   <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03,marginTop:height*0.01}}>Nequewine35,Winelover5,Jogn8, </Text>
                  <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03}}>Sallysmith,TimeforWine</Text>
                  <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03}}>+8 others</Text>
                </View>
              </View>

              <View style={{height:0.6,width:width*0.9,marginLeft:width*0.05,backgroundColor:"#8a8a8a",marginVertical:height*0.02}}/>
           <Text style={{textAlign:'right',marginRight:width*0.05,fontFamily:"Nunito_SemiBold",color:"#a3a3a3"}}>30 min ago</Text>
            <View style={{flexDirection:"row",marginTop:height*0.01,marginHorizontal:width*0.07,alignItems:"center"}}>
              <Image source={assets.grapes3} style={{height:width*0.2,width:width*0.2,borderRadius:width*0.1}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.04}}>
                 <Text style={{fontFamily:"Nunito_ExtraBold",color:"#611b3e",fontSize:width*0.045}}>Zinthusiasts</Text>
                   <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03,marginTop:height*0.01}}>Nequewine35,Winelover5,Jogn8, </Text>
                  <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03}}>Sallysmith,TimeforWine</Text>
                  <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03}}>+8 others</Text>
                </View>
              </View>

              <View style={{height:0.6,width:width*0.9,marginLeft:width*0.05,backgroundColor:"#8a8a8a",marginVertical:height*0.02}}/>
           <Text style={{textAlign:'right',marginRight:width*0.05,fontFamily:"Nunito_SemiBold",color:"#a3a3a3"}}>30 min ago</Text>
            <View style={{flexDirection:"row",marginTop:height*0.01,marginHorizontal:width*0.07,alignItems:"center",marginBottom:20}}>
              <Image source={assets.grapes3} style={{height:width*0.2,width:width*0.2,borderRadius:width*0.1}}/>
              <View style={{flexDirection:"column",marginLeft:width*0.04}}>
                 <Text style={{fontFamily:"Nunito_ExtraBold",color:"#611b3e",fontSize:width*0.045}}>Zinthusiasts</Text>
                   <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03,marginTop:height*0.01}}>Nequewine35,Winelover5,Jogn8, </Text>
                  <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03}}>Sallysmith,TimeforWine</Text>
                  <Text style={{fontFamily:"Nunito_Bold",color:"#919090",fontSize:width*0.03}}>+8 others</Text>
                </View>
              </View>

           </ScrollView>

        <View style={{}}>
               <View style={{marginTop:height*-0.273,marginLeft:width*0.74}}>
           <TouchableOpacity onPress={()=>navigation.navigate("NewGroup")}>
           <Image source={assets.plus_button1} style={{height:90,width:90}}/>
          
           </TouchableOpacity>
           </View>
        </View>
             </View>
        }
        </View>
     
    )
}
export default ChatScreen;