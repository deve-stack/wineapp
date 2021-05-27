import React,{useState} from 'react'
import { View,Text,ImageBackground,Dimensions,TouchableOpacity,Image,TextInput,StyleSheet,ScrollView,Picker} from 'react-native'
import * as assets from "../../components/assets";
import MapView from 'react-native-maps';
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
const{height,width}=Dimensions.get('window')
export default class onboardingScreen3 extends React.Component{
  constructor(props){
    super(props);
  this.state = {
      mapRegion: null,
      hasLocationPermissions: false,
      locationResult: null,
      selected:"",
      selected1:"",
      user:"",
      updateUser : (user) => {
        this.setState({ user: user })
     }   
    };
  }
  componentDidMount() {
  }

  // handleMapRegionChange = (mapRegion) => {
  //   this.setState({ mapRegion });
  // };
  // async getLocationAsync() {
  //   const { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status === "granted") {
  //     this.setState({ hasLocationPermissions: true });
  //      const location = await Location.getCurrentPositionAsync({});
  //     this.setState({ locationResult: JSON.stringify(location) });
  //     this.setState({
  //       mapRegion: {
  //         latitude: location.coords.latitude,
  //         longitude: location.coords.longitude,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421,
  //       },
  //     });
  //   } else {
  //     alert("Location permission not granted");
  //   }
  // }

  render(){
    const [selectedValue] = ("java");
    const[ setSelectedValue ]=("java");
    const [selectedValue1] = ("java");
    const[ setSelectedValue1 ]=("java")
    return(
      <View style={{flex:1}}>
      <ImageBackground  style={{flex:1}}>
      <ScrollView>
        <View style={{marginBottom:20}}>
      <View style={{height:height*0.6,backgroundColor:'white',}}>
      <Text style={{fontSize:height*0.06,marginTop:height*0.07,marginLeft:'10%',color:'#540840',fontFamily:'Kanit_Bold'}}>Location</Text>
      <View style={{flexDirection:'row',marginHorizontal:'8%',marginTop:height*0.02}}>
      <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <View style={{height:height*0.07,width:width*0.3,borderRadius:25,borderWidth:2,borderColor:'#961F63',flexDirection:'row',alignItems:'center'}}>
                  <Image source={assets.back_arrow_hd} style={{marginLeft:'14%',height:15,width:28,resizeMode:"contain"}}/>
                 <Text style={{fontSize:width*0.05,color:'#961F63',marginLeft:'5%',fontFamily:'Nunito_Bold'}}>Back</Text>
              </View>
              </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('onboardingScreen4')}>
              <View style={{height:height*0.07,width:width*0.47,borderRadius:25,flexDirection:'row',alignItems:'center',backgroundColor:'#C45FA5',marginLeft:width*0.03}}>
                   <Text style={{fontSize:width*0.05,color:'white',marginLeft:'10%',fontFamily:'Nunito_Bold'}}>Continue</Text>
                 <Image source={assets.arrow_forward} style={{marginLeft:'10%',width:40,height:20}}/>
              </View>
            </TouchableOpacity>
           </View>
           <Text style={{marginTop:height*0.02,marginLeft:"10%",fontFamily:"Nunito_SemiBold",fontSize:width*0.04,width:width*0.75}}>Let us know where you are located so we can tailor content for you.</Text>
           <View style={{flexDirection:"row",marginHorizontal:'10%',marginTop:height*0.02}}>
           <View style={{height:height*0.075,width:'60%',backgroundColor:'white',borderWidth:0.7,borderColor:"#de1b8c",borderRadius:5,marginTop:height*0.02,flexDirection:'row',alignItems:"center"}}>
           <Image source={assets.Us_flag3} style={{marginLeft:'5%'}}/>
           <Picker
        selectedValue={this.state.selected}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({selected: itemValue})
        }
      >
        <Picker.Item label="Canada" value="java" />
        <Picker.Item label="America" value="js" />
      </Picker>
               </View>
               <View style={{height:height*0.075,width:'35%',backgroundColor:'white',borderWidth:0.7,borderColor:"#de1b8c",marginLeft:'5%',borderRadius:5,marginTop:height*0.02,flexDirection:'row',alignItems:"center"}}>
           
               
               <Picker
        selectedValue={this.state.selected1}
        style={{ height: 50, width: 110}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({selected1: itemValue})
        }
      >
        <Picker.Item label="State1" value="java" />
        <Picker.Item label="State2" value="js" />
      </Picker>
               </View>
               </View>
               <View style={{marginTop:height*0.04,marginLeft:width*0.2}}>
               <View style={{height:height*0.08,width:width*0.6,borderRadius:height*0.04,borderColor:"#d957a7",borderWidth:2,flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
               <Image source={assets.location3} style={{}}/>
               <Text onPress={()=>this.getLocationAsync()} style={{color:"#ed5fb6",fontSize:18,marginLeft:'5%',fontFamily:'Nunito_Bold'}}>Locate Me</Text>
               </View>
               </View>
      </View>
      <View style={{height:230,width:270}}>
      <MapView
          style={styles.mapStyle}
          region={this.state.mapRegion}
          onRegionChange={this.handleMapRegionChange}
        />      
       </View>
      <View style={{height:height*0.4,justifyContent:"flex-end"}}>
    
      <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center",marginBottom:height*0.05}}> 
      <Image source={assets.timeline_Inactive} style={{height:5,width:5}}/>
       <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
      <Image source={assets.timeline_Current} style={{marginLeft:10,height:15,width:15}}/>
      <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
      <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
      <Image source={assets.timeline_Inactive} style={{marginLeft:10,height:5,width:5}}/>
     </View>
      </View>
      </View>
      </ScrollView>
      </ImageBackground>
  </View>
    )
  }
}


const styles=StyleSheet.create({

  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
    
})