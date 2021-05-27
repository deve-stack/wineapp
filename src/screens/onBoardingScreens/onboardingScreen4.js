
import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView, FlatList,deviceWidth,deviceHeight } from 'react-native'
import * as assets from "../../components/assets";
import axios from "axios";
import MapView from 'react-native-maps';
import Modal from 'react-native-modal';
const { height, width } = Dimensions.get('window');
const showOptions = true
const showInput = true

export default class onboardingScreen4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: [],
      selectedArr: [],
      tag1: false, tag2: false, tag3: false,
      data_offset: 8,
      showOptions: "true",
      setShowInput: true,
      listdata: [],
      visibleModal: true,
      modalField: '',
      modalLabel: '',
      search: '',
      isLoading: true,
      reportcommentText:"",
    
    }
    this.arrayholder =[]

  }
  async componentDidMount() {
    this.getApiDataOverAll();

  }
  async getApiDataOverAll() {
    // this.setState({dataList:[]})

    const url = "http://18.237.129.120:8000/api/tastes?offset=" + this.state.data_offset + "&limit=12";

    fetch(url,
      {
        method: 'GET',
        headers: {}
      })
      .then(async (response) => response.text())
      .then(async (responseText) => {
        var dataobject = JSON.parse(responseText);
        console.log("response is---------------- ", dataobject.data)
        this.setState({ dataList: this.state.dataList.concat(dataobject.data) })
      }
      )
      .catch((error) => {
      })
  }
  async req(name) {

    var details = {
      'id': 0,
      'name': name,
    };
    console.log("data", this.state.dataList)
    this.state.dataList.push(details)
    this.setState({ modelVissible: false })

    console.log("data2", this.state.dataList)

  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) { const itemData = item.title ? item.title.toUpperCase() :
    ''.toUpperCase();
    const textData = text.toUpperCase(); return itemData.indexOf(textData) > -1;
    });
    this.setState({ dataSource: newData, search: text,
    });
    }
  async Tagging(event) {
  
      var ter = this.state.reportcommentText+event
      this.listing(ter)
    //  console.log('7777777',ter)
      //console.log("char",char)
    this.setState({ modelVissible: true })
    const { tagName } = this.state;
    console.log("MyEvent", event)
    if (event == "@" || event == "#") {
      this.setState({ tagName: event })
      this.setState({ tagModal: true })
      var e = "";


      // alert(tagName)
      //    if(this.state.commentText=="@"){
      //        this.setState({tagModal:false})
      //    }
    }
    else if (event == "Backspace") {
      // console.log("BACK", tagName)
      if (tagName == "@") {
        this.setState({ tagModal: true })
      }
      else {
        this.setState({ tagModal: false })
      }
      if (this.state.commentText1 == "") {
        this.setState({ tagModal: false })

      }


      // alert("yes")
    }
    else if (event !== "Backspace") {
      // alert("yes")
      var searchName = event
      //this.getTagUser(searchName)
    }
  }
  async onLoadMore() {
    if (this.state.dataList.length !== 0) {
      this.setState({ data_offset: this.state.data_offset + 2 });
      this.getApiDataOverAll();
    }
  }
  async onTagSelect(TAgName, id) {
    var arr = this.state.selectedArr;
    // console.log('dtdtdt', arr[id]);

    if (arr[id] == false || arr[id] == undefined) {
      arr[id] = true;
      this.setState({ selectedArr: arr });
      this['cmp_' + id].setNativeProps({

        style: { alignItems: "center", borderRadius: height * 0.05, backgroundColor: "#961F63", justifyContent: 'center', height: 50, marginTop: 20 }
      });
    }
    else {
      arr[id] = false;
      this.setState({ selectedArr: arr });
      this['cmp_' + id].setNativeProps({
        style: { backgroundColor: 'transparent' }
      });
    }
  }
  _onnavigate() {
    this.setState({ modelVissible: false });
    this.props.navigation.navigate("onboardingScreen5");
    alert("Data sucessfully saved")
  }
   async listing(ter) {
    const url = "http://18.237.129.120:8000/api/tastes?offset=0&limit=12&search[name]="+ter;
    fetch(url,
      {
        method: 'GET',
        headers: {}
      })
      .then(async (response) => response.text())
      .then(async (responseText) => {
        var dataobject = JSON.parse(responseText);
       console.log("response is----------listdatatat------ ", dataobject.data)
        this.setState({ listdata: dataobject.data })
       //  console.log('3445566778',this.state.listdata)
        // this.setState({ dataList: this.state.dataList.concat(dataobject.data) })
      }
      )
      .catch((error) => {
      })
  }
  render() {
    return (

      <View style={{ flex: 1 }}>
        <ScrollView>
          <ImageBackground source={assets.gradient} style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <View style={{ height: height * 0.39, backgroundColor: 'white', borderBottomEndRadius: 50, borderBottomLeftRadius: 50, }}>
                <Text style={{ fontSize: showOptions == true ? height * 0.06 : height * 0.04, marginTop: height * 0.07, marginLeft: '10%', color: '#540840', fontFamily: 'Kanit_Bold' }}>Your Tastes</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: '8%', marginTop: height * 0.02 }}>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <View style={{ height: height * 0.07, width: width * 0.3, borderRadius: 25, borderWidth: 2, borderColor: '#961F63', flexDirection: 'row', alignItems: 'center' }}>
                      <Image source={assets.back_arrow_hd} style={{ marginLeft: '14%', height: 15, width: 28, resizeMode: "contain" }} />
                      <Text style={{ fontSize: width * 0.05, color: '#961F63', marginLeft: '5%', fontFamily: 'Nunito_Bold' }}>Back</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this._onnavigate()}>
                    <View style={{ height: height * 0.07, width: width * 0.47, borderRadius: 25, flexDirection: 'row', alignItems: 'center', backgroundColor: '#C45FA5', marginLeft: width * 0.03 }}>
                      <Text style={{ fontSize: width * 0.05, color: 'white', marginLeft: '10%', fontFamily: 'Nunito_Bold' }}>Continue</Text>
                      <Image source={assets.arrow_forward} style={{ marginLeft: '10%', width: 40, height: 20 }} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={{ marginTop: height * 0.02, marginLeft: "10%", fontFamily: "Nunito_SemiBold", fontSize: width * 0.039, width: width * 0.75 }}>What tastes and characteristics do you prefer in wine? Select the ones that appeal to you and we will tailor your feed to include matching wines.</Text>

                </View>

              </View>
              <View style={{ height: height * 0.63, }}>

                <ScrollView>
                  <View style={{ marginTop: height * 0.03, alignItems: "center", flexDirection: "row", flexWrap: "wrap", alignSelf: "center", justifyContent: "space-evenly" }}>
                    {this.state.setShowInput == true ?
                      <View style={{ marginTop: height * 0.02 }}>
                        <TouchableOpacity onPress={() => this.setState({ setShowInput: false })}>
                          <Image source={assets.plus_button} style={{ height: 70, width: 70 }} />
                        </TouchableOpacity>
                      </View> :
                      <View style={{ height: height * 0.08, width: width * 0.28, backgroundColor: "#de57ac", borderRadius: height * 0.04, flexDirection: "row" }}>
                        <TextInput 
                        onChangeText={(text) => this.setState({ reportcommentText: text })}
                        onKeyPress={({ nativeEvent }) => { this.Tagging(nativeEvent.key)}} autoFocus style={{ flex: 1, padding: 10, color: "white" }} />
                        <Image source={assets.close3x} style={{ marginRight: 17, marginTop: 21, resizeMode: "contain" }} />
                      </View>
                    }
                   
                    <Modal
                      transparent={true}
                     
                      editable = {true}
            

                      
                      style={{ backgroundColor:"Transparent",marginTop:60,backgroundColor:"white",flex:1,}} transparent={true} deviceWidth={deviceWidth}
                      hasBackdrop={false} isVisible={this.state.modelVissible}  coverScreen={false}>
                    
                      {
                        this.state.listdata.map((item) => (
                        
                        
                            <View style={{
                           
                         }}>
                               
                                <Text onPress={() => { this.req(item.name) }} style={{ textAlign: "left", color: "#000", marginLeft: 20, borderTopRightRadius: 20, fontFamily: 'Nunito_Bold', color: "#A9A9A9",}}>{item.name}</Text>

                              
                             
                            </View>
                         
                        ))
                      }
                    </Modal>
             
                    {
                      this.state.dataList.map((item, index) => (
                        <TouchableOpacity ref={component => this['cmp_' + index] = component} onPress={() => { this.onTagSelect(item.name, index,) }}>
                          <View style={{ flexDirection: 'row', height: height * 0.08, width: width * 0.39, justifyContent: 'space-evenly', alignItems: "center", borderRadius: height * 0.04, borderWidth: 2, borderColor: "#fff", }}>
                            <Text style={{ color: 'white', fontFamily: "Nunito_Bold", fontSize: 18 }}>{item.name}</Text>
                            <Image source={assets.close3x} />
                          </View>
                        </TouchableOpacity>
                      ))}
                  </View>
                  <TouchableOpacity onPress={() => this.onLoadMore()}>
                    <Text style={{ color: "white", fontSize: 18, textAlign: "center", marginTop: height * 0.06, fontFamily: "Nunito_Bold", textDecorationLine: "underline" }}>More</Text>
                  </TouchableOpacity>
                </ScrollView>
                {/* <Modal style={{height:"50%",backgroundColor:"red"}}></Modal>  */}
              </View>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center", marginTop: showOptions == true ? height * -0.05 : height * 0.08 }}>
                <Image source={assets.timeline_Inactive} style={{ marginLeft: 10, height: 5, width: 5 }} />
                <Image source={assets.timeline_Inactive} style={{ marginLeft: 10, height: 5, width: 5 }} />
                <Image source={assets.timeline_Inactive} style={{ marginLeft: 10, height: 5, width: 5 }} />
                <Image source={assets.timeline_Current} style={{ marginLeft: 10, height: 15, width: 15 }} />
                <Image source={assets.timeline_Inactive} style={{ marginLeft: 10, height: 5, width: 5 }} />
                <Image source={assets.timeline_Inactive} style={{ marginLeft: 10, height: 5, width: 5 }} />
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    )
  }
}
