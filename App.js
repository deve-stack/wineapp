import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions, Settings} from 'react-native';
import * as assets from "./src/components/assets";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import DrawerContent from './src/components/DrawerContent'

import splashScreen1 from "./src/screens/splashScreens/splashScreen1";
import splashScreen2 from "./src/screens/splashScreens/splashScreen2";
import splashScreen3 from "./src/screens/splashScreens/splashScreen3";
import splashScreen4 from "./src/screens/splashScreens/splashScreen4";
import SignIn from "./src/screens/signIn/SignIn";
import ForgotPassword from "./src/screens/ForgotPassword/ForgotPassword";
import OtpVerification from "./src/screens/OtpVerification/OtpVerification"
import ResetPassword from "./src/screens/ResetPassword/ResetPassword"
import signUp from "./src/screens/signUp/signUP";
//onboarding screns
import onboardingScreen1 from "./src/screens/onBoardingScreens/onboardingScreen1";
import onboardingScreen2 from "./src/screens/onBoardingScreens/onboardingScreen2";
import onboardingScreen3 from "./src/screens/onBoardingScreens/onboardingScreen3";
import onboardingScreen4 from "./src/screens/onBoardingScreens/onboardingScreen4";
import onboardingScreen5 from "./src/screens/onBoardingScreens/onboardingScreen5";
import onboardingScreen6 from "./src/screens/onBoardingScreens/onboardingScreen6";
import onboardingScreen7 from "./src/screens/onBoardingScreens/onboardingScreen7";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ChatScreen from "./src/screens/ChatScreen/ChatScreen";
import UserProfile from "./src/screens/UserProfile/UserProfile";
import NotificationScreen1 from "./src/screens/NotificationScreen/NotificationScreen1";
import NotificationScreen2 from "./src/screens/NotificationScreen/NotificationScreen2";

import ArticleScreen from "./src/screens/ArticleScreen/ArticleScreen";
//post screens 
import NewPost from "./src/screens/PostScreens/NewPost";
import PostDetail from "./src/screens/PostScreens/PostDetail";
import EditScreen from "./src/screens/PostScreens/EditScreen";
import WineRating from "./src/screens/PostScreens/WineRating";
import CommentScreen from "./src/screens/PostScreens/CommentScreen";
//Rating Screens
import ratingScreen1 from "./src/screens/RatingScreen/ratingScreen1";
import ratingScreen2 from "./src/screens/RatingScreen/ratingScreen2";
//live screens
import GoLive from './src/screens/GoLive/goLive';
import AllLive from './src/screens/GoLive/AllLive';
import SeeLiveStream from './src/screens/GoLive/SeeLiveStream';
import SeeLiveStream1 from './src/screens/GoLive/SeeLiveStream1';

import Sponsor from './src/screens/Sponsor/Sponsor';
import Checkout from './src/screens/Checkout/Checkout';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import GoToWines from './src/screens/GoToWines/GoToWines';
import searchForWine from './src/screens/GoToWines/searchForWine';
import scannedWines from './src/screens/GoToWines/scannedWines';
import ScanError from './src/screens/GoToWines/ScanError';
import scannedWines1 from './src/screens/GoToWines/scannedWines1';
import ProductRatings from "./src/screens/ProductRatings/ProductRatings";
import VintageList from './src/screens/VintageList/VintageList';
import RetailerList from './src/screens/RetailerList/RetailerList';
import TopicInfo from './src/screens/TopicInfo/TopicInfo';
import TopicInfo2 from './src/screens/TopicInfo/TopicInfo2';
import Producer from './src/screens/Producer/Producer';
import profileEmpty from './src/screens/UserProfile/profileEmpty';
import otherProfile from './src/screens/UserProfile/otherProfile';
import ProfileFollowing from './src/screens/UserProfile/ProfileFollowing';
import SettingScreen from './src/screens/SettingScreen/SettingScreen';
import AccountRecovery from './src/screens/SettingScreen/AccountRecovery';
import BlockedUsers from './src/screens/BlockedUsers/BlockedUsers';
import Notifications from './src/screens/SettingScreen/Notifications';
import AudioVideoAccessbility from './src/screens/SettingScreen/AudioVideoAccessbility';
import SettingSponsor from './src/screens/SettingScreen/SettingSponsor';
import FindContacts from './src/screens/SettingScreen/FindContacts';
import FAQscreen from './src/screens/SettingScreen/FAQ';
import SettingLegal from './src/screens/SettingLegal/SettingLegal';
import MessageChain from './src/screens/ChatScreen/MessageChain';
import NewMessage from './src/screens/ChatScreen/NewMessage';
import Account from './src/screens/SettingScreen/Account';
import Payment from './src/screens/SettingScreen/Payment';
import Privacy from './src/screens/SettingScreen/Privacy';
import GroupMessageChain from './src/screens/ChatScreen/GroupMessageChain';
import NewGroup from './src/screens/ChatScreen/NewGroup';
import AddGroupMember from './src/screens/ChatScreen/AddGroupMember';


const drawerNavigator=()=>{
  const Drawer=createDrawerNavigator();
  const{height,width}=Dimensions.get('window')
  return(
      <Drawer.Navigator
       drawerContent={()=><DrawerContent/>}
        drawerStyle={{borderTopRightRadius:25,borderBottomEndRadius:25,}}
       >
        <Drawer.Screen name="tabNavigator" component={tabNavigator}/>
        {/* <Drawer.Screen name="GoToWines" component={GoToWines}/>
        <Drawer.Screen name="UserProfile" component={UserProfile}/>
        <Drawer.Screen name="ChatScreen" component={ChatScreen}/> */}
      </Drawer.Navigator>
  )
}

const tabNavigator=()=>{
  const tab=createBottomTabNavigator();
  const{height,width}=Dimensions.get('window')
  return(
    <tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focused})=>{
          let icon;
          let icon1;
          let icon2;
          let icon3;
          if(route.name==="HomeScreen"){
               icon=focused?assets.Home_filled_hd
               :assets.Home_hd
          }
           else if(route.name==="GoToWines") {
               icon1=focused?assets.WineCup_Active
           :assets.WineCup
           }
          else if(route.name==="UserProfile") {
                 icon2=focused?assets.user_profile_active
                 :assets.user_profile
             }
             else if(route.name==="ChatScreen") {
              icon3=focused?assets.chat_Active
              :assets.chat
          }
           return(
               <View>
               <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                 <Image source={icon} style={{ height:25,width:25}}/>
                 <Image source={icon1} style={{ height:25,width:18}}/>
                 <Image source={icon2} style={{ height:25,width:25}}/>
                 <Image source={icon3} style={{ height:25,width:25}}/>
                 </View>
              </View>
               
           )
       }
       })
    }
   tabBarOptions={{
       activeTintColor: 'green',
       inactiveTintColor: 'white',
       showLabel:false,
       keyboardHidesTabBar:true,
       style:{height:55,paddingHorizontal:50},
       labelStyle:{}
           }}
    >
      <tab.Screen name="HomeScreen" component={HomeScreen}/>
      <tab.Screen name="GoToWines" component={GoToWines}/>
      <tab.Screen name="UserProfile" component={UserProfile}/>
      <tab.Screen name="ChatScreen" component={ChatScreen}/>
    </tab.Navigator>
  )
}

const App=()=>{
  const stack=createStackNavigator();
  let [fontsLoadd]=useFonts({
    "Nunito_Bold":require('././src/assets/fonts/Nunito-Bold.ttf'),
    "Nunito_Light":require('././src/assets/fonts/Nunito-Light.ttf'),
    "Nunito_SemiBold":require('././src/assets/fonts/Nunito-SemiBold.ttf'),
    "Nunito_Black":require('././src/assets/fonts/Nunito-Black.ttf'),
    "Nunito_Italic":require('././src/assets/fonts/Nunito-Italic.ttf'),
    "Nunito_ExtraBold":require('././src/assets/fonts/Nunito-ExtraBold.ttf'),
    "Nunito_Regular":require('././src/assets/fonts/Nunito-Regular.ttf'),
    "Kanit_ExtraBold":require('././src/assets/fonts/Kanit-ExtraBold.ttf'),
    "Kanit_Bold":require('././src/assets/fonts/Kanit-Bold.ttf'),
  })
  
  if(fontsLoadd){
    return(
      <NavigationContainer>
        <stack.Navigator 
        initialRouteName="onboardingScreen4"
        screenOptions={{headerShown:false,headerTintColor:"white"}}
        >
          <stack.Screen name="splashScreen1" component={splashScreen1}/>
          <stack.Screen name="splashScreen2" component={splashScreen2}/>
          <stack.Screen name="splashScreen3" component={splashScreen3}/>
          <stack.Screen name="splashScreen4" component={splashScreen4}/>
          <stack.Screen name="SignIn" component={SignIn}/>
          <stack.Screen name="ForgotPassword" component={ForgotPassword}/>
          <stack.Screen name="OtpVerification" component={OtpVerification}/>
          <stack.Screen name="ResetPassword" component={ResetPassword}/>
          <stack.Screen name="signUp" component={signUp}/>
          
          
          <stack.Screen name="onboardingScreen1" component={onboardingScreen1}/>
          <stack.Screen name="onboardingScreen2" component={onboardingScreen2}/>
          <stack.Screen name="onboardingScreen3" component={onboardingScreen3}/>
          <stack.Screen name="onboardingScreen4" component={onboardingScreen4}/>
          <stack.Screen name="onboardingScreen5" component={onboardingScreen5}/>
          <stack.Screen name="onboardingScreen6" component={onboardingScreen6}/>
          <stack.Screen name="onboardingScreen7" component={onboardingScreen7}/>

          <stack.Screen name="drawerNavigator" component={drawerNavigator}/>
          {/* <stack.Screen name="tabNavigator" component={tabNavigator}/> */}
          <stack.Screen name="NotificationScreen1" component={NotificationScreen1}/>
          <stack.Screen name="NotificationScreen2" component={NotificationScreen2}/>
          <stack.Screen name="DrawerContent" component={DrawerContent}/>

          <stack.Screen name="ArticleScreen" component={ArticleScreen}/>
          <stack.Screen name="NewPost" component={NewPost}/>
          <stack.Screen name="EditScreen" component={EditScreen}/>
          <stack.Screen name="WineRating" component={WineRating}/>
          <stack.Screen name="ratingScreen1" component={ratingScreen1}/>
          <stack.Screen name="ratingScreen2" component={ratingScreen2}/>
          <stack.Screen name="GoLive" component={GoLive}/>
          <stack.Screen name="PostDetail" component={PostDetail}/>
          <stack.Screen name="CommentScreen" component={CommentScreen}/>
          <stack.Screen name="AllLive" component={AllLive}/>
          <stack.Screen name="SeeLiveStream" component={SeeLiveStream}/>
          <stack.Screen name="SeeLiveStream1" component={SeeLiveStream1}/>
          <stack.Screen name="Sponsor" component={Sponsor}/>
          <stack.Screen name="Checkout" component={Checkout}/>
          <stack.Screen name="SearchScreen" component={SearchScreen}/>
          <stack.Screen name="GoToWines" component={GoToWines}/>
          <stack.Screen name="searchForWine" component={searchForWine}/>
          <stack.Screen name="scannedWines" component={scannedWines}/>
          <stack.Screen name="ScanError" component={ScanError}/>
          <stack.Screen name="scannedWines1" component={scannedWines1}/>
          <stack.Screen name="ProductRatings" component={ProductRatings}/>
          <stack.Screen name="VintageList" component={VintageList}/>
          <stack.Screen name="RetailerList" component={RetailerList}/>
          <stack.Screen name="TopicInfo" component={TopicInfo}/>
          <stack.Screen name="TopicInfo2" component={TopicInfo2}/>
          <stack.Screen name="Producer" component={Producer}/>
          <stack.Screen name="profileEmpty" component={profileEmpty}/>
          <stack.Screen name="otherProfile" component={otherProfile}/>
          <stack.Screen name="ProfileFollowing" component={ProfileFollowing}/>
          <stack.Screen name="SettingScreen" component={SettingScreen}/>
          <stack.Screen name="AccountScreen" component={Account}/>
          <stack.Screen name="PaymentMethod" component={Payment}/>
          <stack.Screen name="AccountRecovery" component={AccountRecovery}/>
          <stack.Screen name="PrivacyScreen" component={Privacy}/>
          <stack.Screen name="BlockedUsers" component={BlockedUsers}/>
          <stack.Screen name="Notifications" component={Notifications}/>
          <stack.Screen name="AudioVideoAccessbility" component={AudioVideoAccessbility}/>
          <stack.Screen name="SettingSponsor" component={SettingSponsor}/>
          <stack.Screen name="FindContacts" component={FindContacts}/>
          <stack.Screen name="FAQscreen" component={FAQscreen}/>
          <stack.Screen name="SettingLegal" component={SettingLegal}/>
          <stack.Screen name="MessageChain" component={MessageChain}/>
          <stack.Screen name="NewMessage" component={NewMessage}/>
          <stack.Screen name="GroupMessageChain" component={GroupMessageChain}/>
          <stack.Screen name="NewGroup" component={NewGroup}/>
          <stack.Screen name="AddGroupMember" component={AddGroupMember}/>
          
        </stack.Navigator>
      </NavigationContainer>
      )
  }
 else 
 return null;
  
}
export default App;
