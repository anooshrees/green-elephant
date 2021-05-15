import React, { useState } from 'react';
import { StyleSheet, Image, Button, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Metrics } from '../../Themes';

export default function ClosetOverview({navigation}) {
    return (

        <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('Add Item')}>
            <View style={styles.buttonContainer}>
              <Image source={require('../../Images/Closet/plusicon.png')}/>
            </View>
        </TouchableOpacity>
          <View style={styles.profile}>
                <Image source={require('../../Images/Closet/bitmoji2.png')}
                  style={styles.profileImage}/>
                <Text style={styles.text1}>Nicole Wood</Text>
                <Text style={styles.text2}>EVGR-A</Text>
                <Text style={styles.text3}>45 Credits</Text>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.rowItems}>
              <TouchableOpacity onPress={()=>navigation.navigate('Item View')}>
                <Image source={require('../../Images/Closet/closetrow1.png')}/>
              </TouchableOpacity>
            </View>
            <View style={styles.rowItems}>
                <Image source={require('../../Images/Closet/closetrow2.png')}/>
            </View>
            <View style={styles.rowItems}>
                <Image source={require('../../Images/Closet/closetrow3.png')}/>
            </View>
         </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
        flex: 1,
    },
    rowContainer: {
        flex: 1,
    },
    profile: {
      alignItems: 'center',
      paddingTop: 5,
    },
    text1: {
      fontSize: 30,
    },
    text2: {
      fontSize: 15,
      paddingTop: 5,
    },
    text3: {
      fontSize: 15,
      paddingTop: 5,
      fontWeight: "bold",
    },
    profileImage: {
        width: 145,
        height: 150,
        resizeMode: 'contain',
        alignItems: 'center'
    },
    rowItems: {
      flex: 1,
      width: Metrics.screenWidth,
      alignItems: 'center',
      marginBottom: 20,
    },

    buttonContainer: {
      top: 10,
      right: -5,
      height: 25,
      width: 50,
    }
})
