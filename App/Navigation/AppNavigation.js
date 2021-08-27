import { Profiler } from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Containers/HomeScreen/Home';
import LaunchScreen from '../Containers/LaunchScreen'
import Message from '../Containers/MessageScreen/Message';
import Notif from '../Containers/NotificationScreen/Notif';
import Plan from '../Containers/PlanScreen/Plan';
import Profile from '../Containers/ProfileScreen/Profile';
import HomeNavigation from './HomeNavigation';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeNavigation: {screen: HomeNavigation, navigationOptions: {header: null}},
  LaunchScreen: { screen: LaunchScreen },
  Home: {screen: Home},
  Plan: {screen: Plan},
  Profile: {screen: Profile},
  Message: {screen: Message},
  Notif: {screen: Notif}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
