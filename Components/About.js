import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// importing fonts 
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

// importing icons 
import logo from '../assets/logo-about.png';
import x from '../assets/close.png';


export default function aboutPage() {

    // fonts load
    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });


    // check if fonts are loaded
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (


            <View style={{ backgroundColor: '#32AFA9', height: '100%' }}>

                {/* THIS IS THE UPPER MENU CODE */}
                {/* <View style={styles.upperMenu}>
  <View style={styles.lineFlex}>
    <Image source={x}/>
  </View>
</View> */}
                {/* THIS IS THE UPPER MENU CODE */}

                <View style={styles.container}>
                    <Text style={{ fontFamily: 'Bold', fontSize: 25, color: 'white', marginBottom: 7 }}>Patient Progress</Text>
                    <Text style={{ fontFamily: 'Regular', fontSize: 20, marginBottom: 20 }}>Version 1.1.1</Text>
                    <Image source={logo} />
                    <Text style={{ fontFamily: 'Regular', fontSize: 20, color: 'white', marginTop: 15 }}>© 2020</Text>
                </View>

            </View>

        );
    }
};

// styles 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 18,
        marginRight: 18,
    },

    upperMenu: {
        width: '100%',
        height: 70,
        backgroundColor: '#32AFA9',
        // zIndex needed for iOS
        zIndex: 999,
        flexDirection: 'row',
        marginBottom: '43%'
    },

    line: {
        width: 23,
        height: 3,
        backgroundColor: 'black',
        marginBottom: 4
    },

    lineFlex: {
        marginTop: 29,
        marginLeft: 18

    },

    title: {
        marginTop: 50,
        marginLeft: 260
    },

    bodyTxt: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: 'Regular'
    },

    bodyTxtBold: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: 'Bold'
    },

    lineCont:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 17
    }


});








// import React from 'react';
// import { View, Text, StyleSheet} from 'react-native';


// const About = ({ navigation }) => {

//     return (
//         <View style={styles.container}>
//             <Text >
//                 This is About
//             </Text>
//         </View>
//     )
// }

// export default About;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#FFFFFF',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });