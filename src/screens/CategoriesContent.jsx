import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoriesContent = ({navigation}) => {
  const handleHome = () => {
    if (navigation) {
      navigation.navigate('Home');
    }
  };
  const handleCategories = () => {
    if (navigation) {
      navigation.navigate('category');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HD Wallpaper</Text>
      <View style={styles.Toggle}>
        <TouchableOpacity onPress={handleHome}>
          <Text style={styles.NonActiveToggle}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCategories}>
          <Text style={styles.ActiveToggle}>CATEGORIES</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categories}>
      <TouchableOpacity onPress={handleHome}>
        <Image source={require('../../assets/cat1.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHome}>
        <Image source={require('../../assets/cat2.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHome}>
        <Image source={require('../../assets/cat3.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHome}>
        <Image source={require('../../assets/cat4.png')} />
      </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131521",
    paddingTop: 60,
  }, title: {
    textAlign: "center",
    fontSize: 25,
    color: "#FFF",
  },
  Toggle: {
    flexDirection: "row",
    gap: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#1D2031",
  },
  ActiveToggle: {
    color: "#FFF",
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
    paddingBottom: 10
  },
  NonActiveToggle: {
    color: "#ccc",
    fontSize: 20,
    paddingBottom: 10
  }, categories: {
    height: "100%"
  }
});
export default CategoriesContent;
