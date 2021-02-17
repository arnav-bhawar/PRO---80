import React ,{Component} from 'react';
import{StyleSheet,View,Text,TouchableOpacity, TouchableHighlightBase} from 'react-native';
import {DrawerItems} from ' react-navigation-drawer'

import firebase from 'firebase';

export default class customSidebarMenu extends Component{
    render(){
        retirb(
            <View style = {{flex:1}}>
                <DrawerItems{...this.props}/>
                <View style = {{flex:1,justifyContent :'flex-end', paddingBot: 30}}>
                    <TouchableOpacity style = {{justifyContent: 'center', padding:10, height:30, width:'100%'}}
                    onpress = {()=>{
                        this.props.navigation.navigator('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1
    },
    drawerItemsContainer:{
        flex:0.8
    },
    logOutContainer : {
        flex: 0.2,
        justifyContent: 'flex-end',
        paddingButtom: 30
    },
    logOutButton:{
        height: 30,
        width:'100%',
        justifyContent: 'center',
        padding: 10
    },
    logOutText:{
        fontSize: 30,
        fontWeight:'bold'
    }
})