import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    width: width(90),
    // height: height(89),
    paddingBottom: height(3)
  },
  settingHead: {
    fontSize: width(5),
    color: Colors.black,
    fontWeight: 'bold',
    marginVertical: height(1)
  },
  languageContainer: {
    width: '100%',
    borderColor: Colors.primaryBlue,
    borderWidth: 0.5,
    elevation: 2,
    shadowColor: Colors.primaryBlue,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    backgroundColor: Colors.backgroundWhite,
    borderRadius: width(2),
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: width(1.5),
    paddingVertical: height(0.5),
    marginVertical: height(0.5)
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  settingTitleText: {
    fontSize: width(4.8),
    marginHorizontal: width(2),
  },
  followContainer: {
    width: '100%',
    borderColor: Colors.primaryBlue,
    borderWidth: 0.5,
    elevation: 2,
    shadowColor: Colors.primaryBlue,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    backgroundColor: Colors.backgroundWhite,
    borderRadius: width(2),
    alignItems: "center",
    paddingHorizontal: width(1.5),
    paddingVertical: height(0.5),
    marginTop: height(0.5)
  },
  followHeadContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  followBodyContainer: {
    width: '80%',
    justifyContent: 'space-evenly',
    paddingVertical: height(1),
    flexDirection: 'row',
  },
  twitterIconContainer: {
    height: height(7.5),
    width: height(7.5),
    borderRadius: height(2),
    backgroundColor: Colors.twitterBack,
    alignItems: "center",
    justifyContent: 'center'
  },
  youtubeIconContainer: {
    height: height(7.5),
    width: height(7.5),
    borderRadius: height(2),
    backgroundColor: Colors.red,
    alignItems: "center",
    justifyContent: 'center'
  },
  instaIconContainer: {
    height: height(7.5),
    width: height(7.5),
    borderRadius: height(2),
    backgroundColor: Colors.instaBack,
    alignItems: "center",
    justifyContent: 'center'
  },
  fbIconContainer: {
    height: height(7.5),
    width: height(7.5),
    borderRadius: height(2),
    backgroundColor: Colors.fbBack,
    alignItems: "center",
    justifyContent: 'center'
  },
  dropDown: {
    width: width(90),
    height: height(25),
    // backgroundColor: 'blue',
    alignSelf: 'center',
    elevation: 7
  },
  languageOptionContainer: {
    flexDirection: 'row',
    height: height(5),
    width: width(90),
    alignSelf: 'center',
    alignItems:"center",
    justifyContent: 'space-between',
    paddingHorizontal: width(3),
    paddingVertical: height(0.5)
  },
  flagImage: {
    width: height(3),
    height: height(3),
    resizeMode: "contain"
  }
});
export default styles;
