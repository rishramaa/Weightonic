import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, fontType} from '../../assets/theme';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, LinearGradient} from 'react-native-svg';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    checkToken();
  }, []);
  const checkToken = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');

      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        const {userToken, expirationTime} = userData;

        if (userToken && expirationTime) {
          const currentTime = new Date().getTime();

          if (currentTime <= expirationTime) {
            setTimeout(() => {
              navigation.replace('MainApp');
            }, 1500);
          } else {
            setTimeout(() => {
              navigation.replace('Login');
            }, 1500);
          }
        } else {
          setTimeout(() => {
            navigation.replace('Login');
          }, 1500);
        }
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 1500);
      }
    } catch (error) {
      console.error('Error retrieving token data:', error);
      setTimeout(() => {
        navigation.replace('Login');
      }, 1500);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.topHalfCircle} />
      <View style={styles.circle} />
      <Text style={styles.logo}>WEIGHTONIC.</Text>
      <View style={styles.line} />
      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          Personalized Path to a Healthier Lifestyle!
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#A8DF8E',
    width: 300,
    marginBottom: 20,
    zIndex: 2,
  },
  logo: {
    fontSize: 30,
    fontFamily: 'Pjs-ExtraBold',
    color: '#A8DF8E',
    marginBottom: 24,
    zIndex: 2,
  },
  infoContainer: {
    alignItems: 'center',
    zIndex: 2,
  },
  info: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  topHalfCircle: {
    width: '70%',
    height: 30,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: '#A8DF8E',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
});
