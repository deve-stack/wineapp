import React,{useState} from 'react'
import { View ,Text,ImageBackground,Image,TouchableOpacity,TextInput,Dimensions, ScrollView, Modal} from 'react-native'
import * as assets from "../../components/assets";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const{height,width}=Dimensions.get('window')



const ProfileFollowing=({navigation})=>{
    const[value,setValue]=useState('button1')
    const changeButton=(item)=>{
        setValue(item)
    }
    
    return(
        <View style={{flex:1}}>
             <TouchableOpacity onPress={()=>navigation.goBack() }>
          <Image source={assets.btn_back} style={{marginTop:height*0.05,marginLeft:width*0.05}}/>
          </TouchableOpacity>
          <Text style={{textAlign:"center",fontSize:width*0.065,fontFamily:"Nunito_ExtraBold",marginTop:height*-0.03}}>Profile</Text> 
           <View style={{marginHorizontal:width*0.12,justifyContent:'space-between',marginTop:height*0.03,flexDirection:"row",marginBottom:10}}>
              <TouchableOpacity onPress={(item)=>changeButton('button1')}>
               <Text style={{
                   fontSize:width*0.045,fontFamily:value=="button1"?"Nunito_ExtraBold":"Nunito_SemiBold",color:value=="button1"?"#f266ae":"#6e0a3b",textDecorationLine:value=="button1"?"underline":"none"}}>Following</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={(item)=>changeButton('button2')}>
               <Text style={{fontSize:width*0.045,fontFamily:value=="button2"?"Nunito_ExtraBold":"Nunito_SemiBold",color:value=="button2"?"#f266ae":"#6e0a3b",textDecorationLine:value=="button2"?"underline":"none"}}>Followers</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={(item)=>changeButton('button3')}>
               <Text style={{fontSize:width*0.045,fontFamily:value=="button3"?"Nunito_ExtraBold":"Nunito_SemiBold",color:value=="button3"?"#f266ae":"#6e0a3b",textDecorationLine:value=="button3"?"underline":"none"}}>Sponsors</Text>
               </TouchableOpacity>
           </View>

           
           <ScrollView>
            {value=='button1' && 
           <View>
               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.03}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Vesta.Moore</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                  </View>
                  <Text style={{color:"#949494",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Unfollow</Text>

               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>
             <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.022}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Everardo.OConne</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#949494",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Unfollow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.022}}>
                  <Image source={assets.image3} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Stacey8</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#949494",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Unfollow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.022}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Annisa.Pacocha7</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#949494",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Unfollow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.022}}>
                  <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Zackery78</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#949494",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Unfollow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.022}}>
                  <Image source={assets.image3} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Annisa.Pacocha7</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#949494",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Unfollow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.022}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Everardo.OConne</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#949494",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Unfollow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginVertical:height*0.03}}/>
               </View>
            }

            {
                value=="button2" && 
                <View>
                    <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.03}}>
                    <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                    <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Cecile.Ernser</Text>
                     <Text style={{fontSize:width*0.036,color:"#8f8f8f",fontFamily:"Nunito_SemiBold"}}>requests to follow you.</Text>
                     </View>
                    </View>

                    <View style={{flexDirection:"row",marginTop:height*0.01,marginLeft:width*0.25}}>
                         <View style={{height:height*0.07,width:width*0.2,borderRadius:30,borderWidth:2,borderColor:"#757474",justifyContent:"center",alignItems:"center"}}>
                             <Text style={{color:"#757474",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Deny</Text>
                         </View>
                         <View style={{height:height*0.07,width:width*0.45,borderRadius:30,backgroundColor:"#cf55ae",justifyContent:"center",alignItems:"center",marginLeft:width*0.05}}>
                             <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Accept</Text>
                         </View>
                     </View>
                     <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.02}}/>

                     <View style={{flexDirection:"row",marginLeft:width*0.07,marginTop:height*0.02}}>
                    <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                    <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Frederick_Dicki5</Text>
                     <Text style={{fontSize:width*0.036,color:"#8f8f8f",fontFamily:"Nunito_SemiBold"}}>requests to follow you.</Text>
                     </View>
                    </View>

                    <View style={{flexDirection:"row",marginTop:height*0.01,marginLeft:width*0.25}}>
                         <View style={{height:height*0.07,width:width*0.2,borderRadius:30,borderWidth:2,borderColor:"#757474",justifyContent:"center",alignItems:"center"}}>
                             <Text style={{color:"#757474",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Deny</Text>
                         </View>
                         <View style={{height:height*0.07,width:width*0.45,borderRadius:30,backgroundColor:"#cf55ae",justifyContent:"center",alignItems:"center",marginLeft:width*0.05}}>
                             <Text style={{color:"white",fontFamily:"Nunito_Bold",fontSize:width*0.05}}>Accept</Text>
                         </View>
                     </View>
                     <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>

                     <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Everardo.OConne</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#cf55ae",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Follow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Everardo.OConne</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#cf55ae",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Follow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Everardo.OConne</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#6e0a3b",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_SemiBold"}}>Following</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Everardo.OConne</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#cf55ae",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Follow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.03}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.015}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Everardo.OConne</Text>
                     <View style={{flexDirection:'row',alignItems:"center"}}>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain"}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>109</Text>
                         <Image source={assets.follower_hd} style={{height:12,width:12,resizeMode:"contain",marginLeft:10}}/>
                         <Text style={{color:"#b84084",fontSize:width*0.04,fontFamily:"Nunito_Bold",marginLeft:3}}>46</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#6e0a3b",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_SemiBold"}}>Following</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginVertical:height*0.03}}/>
                </View>
            }

              {
                value=="button3" && 
                <View>
                    <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.03}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Neque</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <Text style={{color:"#8f8f8f",marginLeft:5}}>3 months</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#cf55ae",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Follow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.03}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image3} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Isobel.Kozey</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <Text style={{color:"#8f8f8f",marginLeft:5}}>3 months</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#cf55ae",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Follow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.03}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Carol47</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <Text style={{color:"#8f8f8f",marginLeft:5}}>3 months</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#6e0a3b",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_SemiBold"}}>Following</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.03}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image4} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Sigurd37</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <Text style={{color:"#8f8f8f",marginLeft:5}}>3 months</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#cf55ae",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_Bold"}}>Follow</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.03}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image3} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Gabriel6</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <Text style={{color:"#8f8f8f",marginLeft:5}}>3 months</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#6e0a3b",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_SemiBold"}}>Following</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.03}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Everardo.OConne</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <Text style={{color:"#8f8f8f",marginLeft:5}}>3 months</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#6e0a3b",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_SemiBold"}}>Following</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.03}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image3} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Gabriel6</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <Text style={{color:"#8f8f8f",marginLeft:5}}>3 months</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#6e0a3b",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_SemiBold"}}>Following</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginTop:height*0.04}}/>

               <View style={{flexDirection:'row',alignItems:"center",marginLeft:width*0.07,marginTop:height*0.02}}>
                  <Image source={assets.image2} style={{height:width*0.12,width:width*0.12,borderRadius:width*0.06}}/>
                  <View style={{flexDirection:"column",marginLeft:10}}>
                     <Text style={{fontSize:width*0.055,fontFamily:"Nunito_Bold"}}>Isobel.Kozey</Text>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                         <Image source={assets.clock} style={{height:15,width:15}}/>
                         <Text style={{color:"#8f8f8f",marginLeft:5}}>3 months</Text>
                     </View>
                    </View>
                 </View>
               <Text style={{color:"#6e0a3b",textAlign:"right",marginRight:width*0.05,marginTop:height*-0.05,fontSize:width*0.052,fontFamily:"Nunito_SemiBold"}}>Following</Text>
               <View style={{height:1,width:width*0.9,backgroundColor:"#bfbfbf",marginLeft:width*0.05,marginVertical:height*0.03}}/>
                </View>
            }

           </ScrollView>
        </View>
    )
}
export default ProfileFollowing;