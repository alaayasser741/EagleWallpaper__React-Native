import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator,StyleSheet } from 'react-native';


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // This is an example of how to navigate to the Login screen after a delay
    const timeout = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/bigLogo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      <Text style={styles.text}>Created By MU Students</Text>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131521',
  },
  logo: {
    width: 480,
    height: 410,
    resizeMode: 'contain',
  },
  loader: {
    marginTop: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default SplashScreen;
