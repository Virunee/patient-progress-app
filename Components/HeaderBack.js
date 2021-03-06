import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function HeaderBack({ title, navigation }) {

  const goBack = () => {
    navigation.navigate({});
  }

  let [fontsLoaded] = useFonts({
    'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (

      <View style={styles.header}>
        <Ionicons name='ios-arrow-back' onPress={goBack} size={35} style={styles.icon} />
        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: '100%',
    flexDirection: 'row',
    // shadowColor: 'grey',
    // shadowOffset: {
    //   width: 0,
    //   height: 4
    // },
    // shadowOpacity: 50,
    // shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'SemiBold',
    fontSize: 20,
    color: 'black',
  },
  icon: {
    position: 'absolute',
    left: 16,
  }
});
