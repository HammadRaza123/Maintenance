import React, { useState } from 'react';
import {
  View, Text, StatusBar, Switch, ScrollView, TouchableOpacity, SafeAreaView,
  Linking, Share, Image, Platform, TouchableHighlight
} from 'react-native';
import styles from './Settings.styles';
import Header from '../../components/HeaderBasic/HeaderBasic.component'
import Colors from '../../utills/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { height } from 'react-native-dimension';
import { useSelector, useDispatch } from 'react-redux'
import { setHistoryActive, clearHistory, setLanguage } from '../../Redux/Actions/Configs'
import ModalDropdown from 'react-native-modal-dropdown';
import { androidAppLink, iosAppLink } from '../../utills/Configs'
const languages = [
  { key: 'tr', flag: require('../../assets/images/turkce.png'), language: "Turkce" },
  { key: 'de', flag: require('../../assets/images/deutsch.png'), language: "Deutsch" },
  { key: 'en', flag: require('../../assets/images/english.png'), language: "English" },
  { key: 'fr', flag: require('../../assets/images/francais.png'), language: "Francais" },
  { key: 'ar', flag: require('../../assets/images/arabic.jpg'), language: "العربية" },
]
export default function Login(props) {
  const languageJson = useSelector(state => state.Configs.languageJson.setting)
  const selectedLanguageName = useSelector(state => state.Configs.selectdLanguage)
  const selectedLanguage = languages[languages.findIndex(item => item.key == selectedLanguageName)]
  const dispatch = useDispatch()
  const stateHistoryActive = useSelector(state => state.Configs.isHistoryActive)
  const [isHistoryActive, setIsHistoryActive] = useState(stateHistoryActive)
  const [isDownloadProductImage, setIsDownloadProductImage] = useState(false)
  const [ispushNotificationsDeactivated, setIspushNotificationsDeactivated] = useState(true)
  const toggleSwitch = (identifier) => {
    if (identifier == 'history') {
      dispatch(setHistoryActive(!isHistoryActive))
      setIsHistoryActive(!isHistoryActive)
    }
    else if (identifier == 'download')
      setIsDownloadProductImage(!isDownloadProductImage)
    else if (identifier == 'pushNoti')
      setIspushNotificationsDeactivated(!ispushNotificationsDeactivated)
  }
  const navigate = (screenName) => {
    props.navigation.navigate(screenName)
  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Hey, checkout HallalCheck App\n\nAndroid: https://www.halalcheck.net/v2/ \n IOS: https://www.halalcheck.net/v2/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const renderRow = (option, index, isSelected) => {
    return (
      <TouchableHighlight underlayColor={Colors.gray}>
        <View style={styles.languageOptionContainer}>
          <Image source={option.flag} style={styles.flagImage} />
          <Text>{option.language}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  const onDropDownSelection = (index, value) => {
    dispatch(setLanguage({ language: value.key }))
  }
  return (
    <>
      <SafeAreaView backgroundColor={Colors.primaryBlue} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar barStyle={"light-content"} backgroundColor={Colors.primaryBlue} />
          <Header title={languageJson.setting} hideBackIcon />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
              <Text style={styles.settingHead}>{languageJson.basicSetting}</Text>
              <ModalDropdown
                options={languages}
                renderRow={renderRow}
                onSelect={onDropDownSelection}
                dropdownStyle={styles.dropDown}>
                <View style={styles.languageContainer}>
                  <View style={styles.row}>
                    <Image source={selectedLanguage.flag} style={styles.flagImage} />
                    {/* <Feather name={"globe"} color={Colors.primaryBlue} size={height(3)} /> */}
                    <Text style={styles.settingTitleText}>{languageJson.language}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.settingTitleText}>{selectedLanguage.language}</Text>
                    <AntDesign name={"caretdown"} color={Colors.primaryBlue} size={height(2)} />
                  </View>
                </View>
              </ModalDropdown>
              {/* <View style={styles.languageContainer}>
                <Text style={styles.settingTitleText}>Country</Text>
                <AntDesign name={"caretdown"} color={Colors.primaryBlue} size={height(2)} />
              </View> */}
              <View style={styles.languageContainer}>
                <Text style={styles.settingTitleText}>{languageJson.activeHistory}</Text>
                <Switch
                  trackColor={{ false: "#767577", true: Colors.opacitiveBlue }}
                  thumbColor={isHistoryActive ? Colors.primaryBlue : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => toggleSwitch('history')}
                  value={isHistoryActive}
                />
              </View>
              <TouchableOpacity style={styles.languageContainer} onPress={() => dispatch(clearHistory())}>
                <Text style={styles.settingTitleText}>{languageJson.deleteHistory}</Text>
              </TouchableOpacity>
              <View style={styles.languageContainer}>
                <Text style={styles.settingTitleText}>{languageJson.downloadProductImage}</Text>
                <Switch
                  trackColor={{ false: "#767577", true: Colors.opacitiveBlue }}
                  thumbColor={isDownloadProductImage ? Colors.primaryBlue : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => toggleSwitch('download')}
                  value={isDownloadProductImage}
                />
              </View>
              <View style={styles.languageContainer}>
                <Text style={styles.settingTitleText}>{languageJson.deactivatePushNotification}</Text>
                <Switch
                  trackColor={{ false: "#767577", true: Colors.opacitiveBlue }}
                  thumbColor={ispushNotificationsDeactivated ? Colors.primaryBlue : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => toggleSwitch('pushNoti')}
                  value={ispushNotificationsDeactivated}
                />
              </View>
              <Text style={styles.settingHead}>{languageJson.advanceSetting}</Text>
              <TouchableOpacity style={styles.languageContainer}
                onPress={() => navigate("Help")}>
                <Text style={styles.settingTitleText}>{languageJson.help}</Text>
                <Entypo name={"chevron-right"} color={Colors.primaryBlue} size={height(3)} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.languageContainer}
                onPress={() => navigate("AboutUs")}>
                <Text style={styles.settingTitleText}>{languageJson.aboutHalalCheck}</Text>
                <Entypo name={"chevron-right"} color={Colors.primaryBlue} size={height(3)} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.languageContainer}
                onPress={() => navigate("Feedback")}>
                <Text style={styles.settingTitleText}>{languageJson.sendFeedback}</Text>
                <Entypo name={"chevron-right"} color={Colors.primaryBlue} size={height(3)} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.languageContainer}
                onPress={() => navigate("Newsletter")}>
                <Text style={styles.settingTitleText}>{languageJson.NewsLetter}</Text>
                <Entypo name={"chevron-right"} color={Colors.primaryBlue} size={height(3)} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.languageContainer}
                onPress={onShare}>
                <Text style={styles.settingTitleText}>{languageJson.recommendHalalCheck}</Text>
                <Entypo name={"chevron-right"} color={Colors.primaryBlue} size={height(3)} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.languageContainer} onPress={() =>
                Linking.openURL(Platform.OS == 'android' ? androidAppLink : iosAppLink)}>
                <Text style={styles.settingTitleText}>{languageJson.rateOurApp}</Text>
                <Entypo name={"chevron-right"} color={Colors.primaryBlue} size={height(3)} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.languageContainer}
                onPress={() => navigate("License")}>
                <Text style={styles.settingTitleText}>{languageJson.license}</Text>
                <Entypo name={"chevron-right"} color={Colors.primaryBlue} size={height(3)} />
              </TouchableOpacity>
              <View style={styles.followContainer}>
                <View style={styles.followHeadContainer}>
                  <Text style={styles.settingTitleText}>{languageJson.followUsOnSocialMedia}</Text>
                  {/* <Entypo name={"chevron-down"} color={Colors.primaryBlue} size={height(3)} /> */}
                </View>
                <View style={styles.followBodyContainer}>
                  <TouchableOpacity style={styles.fbIconContainer} onPress={() =>
                    Linking.openURL("https://www.facebook.com/HalalCheck")}>
                    <Entypo name={"facebook-with-circle"} color={Colors.backgroundWhite} size={height(4)} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.instaIconContainer} onPress={() =>
                    Linking.openURL("https://www.instagram.com/halalcheck.official/")}>
                    <AntDesign name={"instagram"} color={Colors.backgroundWhite} size={height(4)} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.twitterIconContainer} onPress={() =>
                    Linking.openURL("https://twitter.com/Halal_Check")}>
                    <Entypo name={"twitter-with-circle"} color={Colors.backgroundWhite} size={height(4)} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.youtubeIconContainer} onPress={() =>
                    Linking.openURL("https://www.youtube.com/channel/UCmqwp3SrmAqIMMQqfDJ-5Pw")}>
                    <Entypo name={"youtube"} color={Colors.backgroundWhite} size={height(4)} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};