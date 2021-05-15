import React, { useState } from 'react';
import { StyleSheet, Image, Button, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Metrics } from '../../Themes';

export default function ConfirmCredits({navigation}) {
    return (

        <View style={styles.container}>
        <ImageBackground style={styles.background} source={require('../../Images/Closet/BackgroundImage.png')}/>
        <View style={styles.confirm}>
            <Text style={styles.text1}>Your Item is Worth: </Text>
            <Text style={styles.text2}> 50 credits </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('My Closet')}>
            <View style={styles.button}>
            <Text style={styles.text3}> Add to Closet! </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Add Item')}>
            <Text style={styles.text4}> Maybe Later </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
        flex: 1,
        alignItems: "center"
    },
    background: {
        resizeMode: "stretch",
        height: 725,
        width: Metrics.screenWidth,
    },
    confirm: {
      marginTop: Metrics.screenHeight /4,
      position:"absolute",
      paddingTop: 10,
      backgroundColor: "#F5F5F5",
      height: 177,
      width:266,
      borderRadius: 50,
      alignItems: "center"
    },
    button:{
      backgroundColor: '#A4DAA3',
      borderRadius: 20,
      height: 40,
      width: 200,
      marginTop: 10,
      alignItems: "center",
      overflow: "hidden",
      justifyContent: "center",

    },
    text1: {
      fontSize: 20,
      alignSelf:"center",
    },
    text2: {
      fontSize: 20,
      margin: 10,
      fontWeight: "bold",
      alignSelf: "center"
    },
    text3: {
      fontSize: 20,
    },
    text4: {
      marginTop: 10,
      textDecorationLine: "underline",
    },
})
