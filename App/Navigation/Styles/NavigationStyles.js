import {StyleSheet, Platform} from 'react-native';
import {Colors, Metrics} from '../../Themes/';
import DeviceInfo from 'react-native-device-info';

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor,
    shadowRadius: 0,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  bgHeader: {
    height: Platform.OS == 'android' ? 60 : DeviceInfo.hasNotch() ? 90 : 65,
    width: Metrics.screenWidth,
  },
});

export const bgHeader = {
  height: Platform.OS == 'android' ? 60 : DeviceInfo.hasNotch() ? 90 : 65,
  width: Metrics.screenWidth,
};
