import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    navigation.navigate('Home');
    if ((email === "alaa@gmail.com") && (password === "123") && (navigation)) {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        "Invalid credentials",
        "Please enter a valid email or password.",
        [
          {
            text: "OK",
            onPress: () => console.log("OK pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
  };

  const handleSignUp = () => {
    if (navigation) {
      navigation.navigate('SignUp');
    }
  };

  const handleForgotPassword = () => {
    if (navigation) {
      navigation.navigate('ForgetPassword');
    }
  };

  return (
    <View style={styles.container}> 
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={{ width: 190, height: 168 }} />
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Don't have an account? Sign up here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#131521',
    width: '100%',
    padding: 25,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  loginText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#fff',
    fontSize: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#fff',
    fontSize: 14,
    paddingBottom: 2,
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#B7B7B7',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#DF1F5A',
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#B7B7B7',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
