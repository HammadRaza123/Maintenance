import { StyleSheet } from 'react-native';
import { width } from 'react-native-dimension';

const styles = StyleSheet.create({

  mainViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center'
  },
  headingText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: width(4)
  },
  textValue: {
    textAlign: 'center',
    fontSize: width(4)
  }
});
export default styles;
