/* eslint-disable no-undef */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Images from '../Themes/Images';
import Home from '../Containers/HomeScreen/Home';
import Message from '../Containers/MessageScreen/Message';
import Profile from '../Containers/ProfileScreen/Profile';
import Notif from '../Containers/NotificationScreen/Notif';
import Plan from '../Containers/PlanScreen/Plan';

export default (HomeNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        tabBarLabel: ({tintColor}) => (
          <Text style={[styles.label, {color: tintColor}]}>
            Home
          </Text>
        ),
      },
    },
    Message: {
      screen: Message,
      navigationOptions: {
        header: null,
        tabBarLabel: ({tintColor}) => (
          <Text style={[styles.label, {color: tintColor}]}>
            Inbox
          </Text>
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
        tabBarLabel: ({tintColor}) => (
          <Text style={[styles.label, {color: tintColor}]}>
            Profil
          </Text>
        ),
      },
    },
    Plan: {
        screen: Plan,
        navigationOptions: {
          header: null,
          tabBarLabel: ({tintColor}) => (
            <Text style={[styles.label, {color: tintColor}]}>
              Profil
            </Text>
          ),
        },
    },
    Notif: {
        screen: Notif,
        navigationOptions: {
          header: null,
          tabBarLabel: ({tintColor}) => (
            <Text style={[styles.label, {color: tintColor}]}>
              Profil
            </Text>
          ),
        },
      },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName, params} = navigation.state;
        let icon;
        let badgeNotif = false;
        if (routeName === 'Home') {
          icon = Images.home
        } else if (routeName === 'Message') {
          icon = Images.notif
        } else if (routeName === 'Plan') {
          icon = Images.plan
        } else if (routeName === 'Notif') {
          icon = Images.notif
        } else if (routeName === 'Profile') {
          icon = Images.profile
        }

        return (
          <View style={{width: 24, height: 24}}>
            <Image
              source={icon}
              style={{width: 24, height: 24, alignSelf: 'center'}}
            />
          </View>
        );
      },
    }),
    tabBarOptions: {
      inactiveTintColor: '#929292',
      activeTintColor: '#06668F',
      style: {
        backgroundColor: '#FFFFFF',
        width: '100%',
      },
      labelStyle: {
        color: 'black',
      },
    },
  },
  // eslint-disable-next-line prettier/prettier
));
const styles = {
  label: {
    textAlign: 'center',
    fontSize: 12,
  },
};
