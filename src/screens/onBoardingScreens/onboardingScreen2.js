import React from 'react'
import { View,Text ,ImageBackground,Dimensions,Image,TouchableOpacity,ScrollView} from 'react-native'
import * as assets from "../../components/assets";
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
const {height,width} = Dimensions.get('window');

import axios from "axios";
export default class  onboardingScreen2 extends React.Component{
  constructor(props){
    super(props);
    this.state={imageUrl:null}
  }
  componentDidMount (){   
    var data = new FormData();
    data.append('country', 'usa');
    data.append('city', 'new york');
    data.append('state', 'new york');
    data.append('latitude', '23.3433');
    data.append('longitude', '-76.2342');
    data.append('privacy_type',this.state.imageUrl);
   data.append('profile_pic',"");
    data.append('tastes', '1');
    data.append('tastes', '2');
    data.append('username',"heollo");

    console.log(data)
    axios({
        method:'put',
        url:'http://18.237.129.120:8000/api/user/47/account',
        data:data,
        headers: { "Content-Type": "multipart/form-data" },
    })
    .then (function (response){
        console.log("response is---------------- ",response.data)
       
    })
  .catch(function (error){
      console.log('error///////',error.message)
      alert(error.message)
  })
      
    }
  

  _pickImage = async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
          });
          console.log(result);
          let filename = result.uri.split('/').pop();
          let match = /\.(\w+)$/.exec(filename);
          let fileType = match ? `image/${match[1]}` : `image`;
      
          if (!result.cancelled) {
           
            this.setState({ imageUrl: result.uri, imagetype: fileType, name: `.${filename}` });
            console.log("image============",this.state.imageUrl)
          }s
        }
    
  render(){
    const {imageUrl} = this.state;
    return(
      <View style={{flex:1}}>
      <ImageBackground source={assets.gradient} style={{flex:1}}>
      <ScrollView>
        <View style={{marginBottom:20}}>
         <View style={{height:height*0.35,backgroundColor:'white',borderBottomEndRadius:50,borderBottomLeftRadius:50}}>
         <Text style={{fontSize:height*0.06,marginTop:height*0.07,marginLeft:'10%',color:'#540840',fontFamily:'Kanit_Bold'}}>Profile Picture</Text>
         <View style={{flexDirection:'row',marginHorizontal:'8%',marginTop:height*0.02}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <View style={{height:height*0.07,width:width*0.3,borderRadius:25,borderWidth:2,borderColor:'#961F63',flexDirection:'row',alignItems:'center'}}>
                  <Image source={assets.back_arrow_hd} style={{marginLeft:'14%',height:15,width:28,resizeMode:"contain"}}/>
                 <Text style={{fontSize:width*0.05,color:'#961F63',marginLeft:'5%',fontFamily:'Nunito_Bold'}}>Back</Text>
              </View>
              </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('onboardingScreen3')}>
              <View style={{height:height*0.07,width:width*0.47,borderRadius:25,flexDirection:'row',alignItems:'center',backgroundColor:'#C45FA5',marginLeft:width*0.03}}>
                   <Text style={{fontSize:width*0.05,color:'white',marginLeft:'10%',fontFamily:'Nunito_Bold'}}>Continue</Text>
                 <Image source={assets.arrow_forward} style={{marginLeft:'10%',width:40,height:20}}/>
              </View>
              </TouchableOpacity>
           </View>
           <Text style={{marginTop:height*0.02,marginLeft:"10%",fontFamily:"Nunito_SemiBold",fontSize:width*0.04}}>Upload a profile picture so other people</Text>
           <Text style={{marginLeft:"10%",fontFamily:"Nunito_SemiBold",fontSize:width*0.04}}>can recognize you.</Text>
         </View>
         <View style={{height:height*0.45}}>
             <View style={{height:200,width:200,backgroundColor:'white',borderRadius:100,justifyContent:'center',alignItems:"center",marginTop:height*0.05,alignSelf:"center",elevation:5,margin:5}}>
             <TouchableOpacity onPress={()=>this._pickImage()}>
                 <Image 
                 style={{height: imageUrl != null ? 200 : 45, width: imageUrl != null ? 200 :45,borderRadius:100,justifyContent:'center',alignItems:"center",marginTop:height*0.06,alignSelf:"center",margin:4,resizeMode:"contain"}}
                //  style={{height:40,width:40}}
                 source={imageUrl != null ? {uri: imageUrl} :assets.add_image3}
                  // source={assets.add_image3}
                  />
                 </TouchableOpacity>
                 <Text style={{fontSize:10,marginTop:10,color:"#706d6f"}}>Profile pictures should be</Text>
                 <Text style={{fontSize:10,color:"#706d6f"}}>no larger than 2MB.</Text>
              </View> 
              </View>
              <View style={{height:height*0.2,justifyContent:"flex-end"}}>
              <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",marginBottom:height*0.05}}>
      <Image source={assets.timeline_Inactive} style={{height:5,width:5}}/>
      <Image source={assets.timeline_Current} style={{marginLeft:10,height:15,width:15}}/>
      <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
      <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
      <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
      <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
     </View>
     </View>
         </View>
         </ScrollView>
      </ImageBackground>
  </View>

    );
  }
}











// const onboardingScreen2=({navigation})=>{
//     const{height,width}=Dimensions.get('window');
//     const[imageUrl,setImageurl]=useState(null);


//     _pickImage = async () => {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [1, 1],
//         quality: 1
//       });
//       console.log(result);ƒ
//       let filename = result.uri.split('/').pop();
//       let match = /\.(\w+)$/.exec(filename);
//       let fileType = match ? `image/${match[1]}` : `image`;
  
//       if (!result.cancelled) {
//         setImageurl(result.uri)
//         this.setState({ imageUrl: result.uri, imagetype: fileType, name: `.${filename}` });
//       }
//     }

//     return(
//         <View style={{flex:1}}>
//             <ImageBackground source={assets.gradient} style={{flex:1}}>
//             <ScrollView>
//               <View style={{marginBottom:20}}>
//                <View style={{height:height*0.35,backgroundColor:'white',borderBottomEndRadius:50,borderBottomLeftRadius:50}}>
//                <Text style={{fontSize:height*0.06,marginTop:height*0.07,marginLeft:'10%',color:'#540840',fontFamily:'Kanit_Bold'}}>Profile Picture</Text>
//                <View style={{flexDirection:'row',marginHorizontal:'8%',marginTop:height*0.02}}>
//                   <TouchableOpacity onPress={()=>navigation.goBack()}>
//                     <View style={{height:height*0.07,width:width*0.3,borderRadius:25,borderWidth:2,borderColor:'#961F63',flexDirection:'row',alignItems:'center'}}>
//                         <Image source={assets.back_arrow_hd} style={{marginLeft:'14%',height:15,width:28,resizeMode:"contain"}}/>
//                        <Text style={{fontSize:width*0.05,color:'#961F63',marginLeft:'5%',fontFamily:'Nunito_Bold'}}>Back</Text>
//                     </View>
//                     </TouchableOpacity>
//                   <TouchableOpacity onPress={()=>navigation.navigate('onboardingScreen3')}>
//                     <View style={{height:height*0.07,width:width*0.47,borderRadius:25,flexDirection:'row',alignItems:'center',backgroundColor:'#C45FA5',marginLeft:width*0.03}}>
//                          <Text style={{fontSize:width*0.05,color:'white',marginLeft:'10%',fontFamily:'Nunito_Bold'}}>Continue</Text>
//                        <Image source={assets.arrow_forward} style={{marginLeft:'10%',width:40,height:20}}/>
//                     </View>
//                     </TouchableOpacity>
//                  </View>
//                  <Text style={{marginTop:height*0.02,marginLeft:"10%",fontFamily:"Nunito_SemiBold",fontSize:width*0.04}}>Upload a profile picture so other people</Text>
//                  <Text style={{marginLeft:"10%",fontFamily:"Nunito_SemiBold",fontSize:width*0.04}}>can recognize you.</Text>
//                </View>
//                <View style={{height:height*0.45}}>
//                    <View style={{height:200,width:200,backgroundColor:'white',borderRadius:100,justifyContent:'center',alignItems:"center",marginTop:height*0.05,alignSelf:"center",elevation:5,margin:5}}>
//                    <TouchableOpacity onPress={()=>_pickImage()}>
//                        <Image 
//                        source={imageUrl != null ? {uri: imageUrl} :assets.add_image3}
//                         // source={assets.add_image3}
//                         />
//                        </TouchableOpacity>
//                        <Text style={{fontSize:10,marginTop:10,color:"#706d6f"}}>Profile pictures should be</Text>
//                        <Text style={{fontSize:10,color:"#706d6f"}}>no larger than 2MB.</Text>
//                     </View> 
//                     </View>
//                     <View style={{height:height*0.2,justifyContent:"flex-end"}}>
//                     <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",marginBottom:height*0.05}}>
//             <Image source={assets.timeline_Inactive} style={{height:5,width:5}}/>
//             <Image source={assets.timeline_Current} style={{marginLeft:10,height:15,width:15}}/>
//             <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
//             <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
//             <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
//             <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
//            </View>
//            </View>
//                </View>
//                </ScrollView>
//             </ImageBackground>
//         </View>
//     )
// }
// export default onboardingScreen2;