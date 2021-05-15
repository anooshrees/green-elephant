import React, { useState } from 'react';
import { StyleSheet, Image, Button, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Metrics } from '../../Themes';

export default function AddItem({navigation}) {
    return (

        <View style={styles.container}>

            <Text style={styles.text1}>Item Name: </Text>
            <TextInput style={styles.textInput}
              placeholder="Describe Your Item in 1-2 Words"
          />
          <Text style={styles.text1}>Describe Location: </Text>
          <TextInput style={styles.textInput}
            placeholder="Where is Your Item Located on Campus"
        />
          <Text style={styles.text1}>Upload Image: </Text>
              <Image source={require('../../Images/Closet/UploadImages.png')}/>

          <Text style={styles.text1}>Approximate Retail Value: </Text>
          <TextInput style={styles.textInput}
            placeholder="How much $ you spent"
            keyboardType= "number-pad"/>
          <Text style={styles.text1}>Item Condition: </Text>
          <TextInput style={styles.textInput}
              placeholder="Honesty is the Best Policy!"
            />
        <TouchableOpacity onPress={()=>navigation.navigate('Confirm Credits')}>
          <View style={styles.button}>
            <Text>Calculate Credits </Text>
          </View>
        </TouchableOpacity>
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
    button:{
      backgroundColor: '#63D4F9',
      borderRadius: 20,
      height: 40,
      width: 200,
      marginTop: 20,
      alignItems: "center",
      paddingTop: 10,
    },
    textInput: {
      width: "90%",
      height: 40,
      borderRadius: 20,
      backgroundColor: "#C4C4C4",
      padding: 15,

    },
    text1: {
      fontSize: 30,
      alignSelf: "flex-start",
      margin: 20,
    },
})
