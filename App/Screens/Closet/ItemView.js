import React, { useState } from 'react';
import { StyleSheet, Image, Button, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Metrics } from '../../Themes';

export default function ItemView({navigation}) {
    return (

        <View style={styles.container}>
        <View style={styles.itemView}>
          <Image source={require('../../Images/Closet/BackPack.png')}/>
              <Text style={styles.text1}>Stanford Backpack</Text>
              <Text style={styles.text2}>10 Credits</Text>
        </View>
        <View style={styles.transactionListing}>
          <Image source={require('../../Images/Closet/AidenBitmoji.png')}
           style={styles.bitmoji}/>
          <Text style={styles.text3}>Aiden is interested in this item!</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
            <View style={[styles.button1, {backgroundColor: '#A4DAA3'}]}>
                  <Text style={styles.text2}>Accept</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.button1, {backgroundColor: '#EB7F82'}]}>
                  <Text style={styles.text2}>Decline</Text>
            </View>
          </View>
        </View>
        <View style={styles.transactionListing}>
          <Image source={require('../../Images/Closet/TaylorBitmoji.png')}
           style={styles.bitmoji}/>
          <Text style={styles.text3}>Taylor is interested in this item!</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
            <View style={[styles.button1, {backgroundColor: '#A4DAA3'}]}>
                  <Text style={styles.text2}>Accept</Text>
            </View>
          </TouchableOpacity>
            <View style={[styles.button1, {backgroundColor: '#EB7F82'}]}>
                  <Text style={styles.text2}>Decline</Text>
            </View>
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
        justifyContent: "space-between",
    },
    itemView: {
      paddingTop: 15,
      marginLeft: 15,
      width: Metrics.screenWidth * .9,
      borderBottomWidth: 1,
      borderColor: '#C4C4C4',
    },
    transactionListing: {
        height: 150,
        width: Metrics.screenWidth * 0.9,
        borderBottomWidth: 1,
        borderColor: '#C4C4C4',
        flex: 1,
        flexDirection:'row',
        paddingTop: 10,
        marginLeft: 15,

    },
    buttonContainer: {
      height: 75,
      width: 580,
      marginLeft: 20,
      paddingTop: 20,
    },
    bitmoji: {
      width: 99,
      height: 100,
      marginTop: 15,
      resizeMode: 'contain',
    },
    button1: {
        height: 32,
        width: 97,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 15,
        justifyContent: 'center',
    },

    text1: {
      fontSize: 30,
    },
    text2: {
      fontSize: 15,
      paddingTop: 5,
      paddingBottom: 10,
    },
    text3: {
      fontSize: 16,
      width: 140,
      alignSelf: "center",
    },
})
