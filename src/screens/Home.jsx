import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const API_KEY = 'NNJGmive1TRr6mOB7DUoJHZS6btrCX0mWqd2oWZEZUQKvgj9znf0EgKZ';

const HomeScreen = ({navigation}) => {
    const [wallpapers, setWallpapers] = useState([])
    const [loadMore, setLoadMore] = useState(20);
    const [isDisable, setDisable] = useState(true);
    useEffect(() => {
        setDisable(false);
        fetch(`https://api.pexels.com/v1/search?query=wallpapers&per_page=${loadMore}`, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                setWallpapers(data.photos);
                setDisable(true);
                console.log(data.photos)
            })
            .catch(error => console.error(error));
    }, [loadMore]);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.wallpaperContainer}>
                <Image source={{ uri: item.src.medium }} style={styles.wallpaperImage} />
            </View>
        );
    };

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
                    <Text style={styles.ActiveToggle}>HOME</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCategories}>
                    <Text style={styles.NonActiveToggle}>CATEGORIES</Text>
                </TouchableOpacity>
            </View>
            <FlatList style={styles.gallery} data={wallpapers} renderItem={renderItem} />
            <TouchableOpacity style={styles.loginButton} onPress={() => { setLoadMore(loadMore + 10); }}>
                {isDisable === true ? <Text style={styles.loginButtonText}>More Wallpaper</Text> : <ActivityIndicator size="large" color="#fff" style={styles.loader} />}
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

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
    }, wallpaperContainer: {
        margin: 5,
        flex: 1,
        aspectRatio: 1,
        paddingHorizontal: 15,
    },
    wallpaperImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    }, loginButton: {
        backgroundColor: '#DF1F5A',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%',
    }, loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});