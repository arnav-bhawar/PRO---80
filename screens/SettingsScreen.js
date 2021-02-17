import React, {Component} from 'react';
import {Modal,View,StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert, FlatList} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
import customSidebarMenu from '../Components/CustomSideBarMenu.js';

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator
    },
    Settings: {
        screen:SettingScreen
    }
}, 
    { 
        contentComponent: customSidebarMenu
    },
    {
        initialRouteName: 'Home'
    
})
