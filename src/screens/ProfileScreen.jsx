import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleLogin = () => {
        if (navigation) {
            navigation.navigate('Login');
        }
    };
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Text style={styles.backButton}>&lt; Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
                <View style={{ width: 50 }} />
            </View>

            {/* User Profile */}
            <View style={styles.profileContainer}>
                <Image source={require('../../assets/profile.png')} style={styles.profilePicture} />
                <Text style={styles.profileName}>John Doe</Text>
            </View>

            {/* User Information */}
            <View style={styles.sectionContainer}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoValue}>johndoe@example.com</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoValue}>+1 (555) 555-1234</Text>
                </View>
            </View>
            <View style={{ marginTop: 30 }}>
                <View style={styles.box}>
                    <View style={styles.info}>
                        <Image source={require('../../assets/icon1.png')} style={styles.icon} />
                        <Text style={styles.textInfo}>My wishlist</Text>
                    </View>
                    <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
                </View>
                <View style={styles.box}>
                    <View style={styles.info}>
                        <Image source={require('../../assets/icon2.png')} style={styles.icon} />
                        <Text style={styles.textInfo}>About Us</Text>
                    </View>
                    <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
                </View>
                <View style={styles.box}>
                    <View style={styles.info}>
                        <Image source={require('../../assets/icon3.png')} style={styles.icon} />
                        <Text style={styles.textInfo}>Privacy policy</Text>
                    </View>
                    <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
                </View>
                <View style={styles.box}>
                    <View style={styles.info}>
                        <Image source={require('../../assets/icon4.png')} style={styles.icon} />
                        <Text style={styles.textInfo}>Contact Us</Text>
                    </View>
                    <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default ProfileScreen;
const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,

    }, info: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
    },
    icon: {
        width: 86,
        height: 86
    },
    arrow: {
        width: 12,
        height: 12,
    }, textInfo: {
        color: "white",
        fontSize: 20
    }
    , container: {
        flex: 1,
        backgroundColor: '#fff',
        backgroundColor: "#131521",
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    backButton: {
        fontSize: 14,
        color: '#fff',
        backgroundColor: "#DF1F5A",
        padding: 10,
        borderRadius: 50
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,

    },
    sectionContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    infoItem: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    }, infoLabel: {
        color: 'white',

    }, infoValue: {
        color: 'white',
        textAlign: "center",

    }, sectionTitle: {
        color: 'white',
    }, emptyMessage: {
        color: 'white',
    }, loginButton: {
        backgroundColor: '#DF1F5A',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal:30
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
