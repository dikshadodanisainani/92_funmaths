import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ChapterScreen from '../screens/ChapterScreen';
import HomeScreen from '../screens/HomeScreen'
import CustomSideDrawer  from './CustomSideDrawer';

export const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen : {
    screen : HomeScreen
    },
    ChapterScreen:{
        screen:ChapterScreen
    }
  },
  {
    contentComponent:CustomSideDrawer
  },
  {
    initialRouteName : 'HomeScreen'
  })