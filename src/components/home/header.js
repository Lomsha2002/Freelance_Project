import React from "react";
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicans from 'react-native-vector-icons/Ionicons';

export const Header = () => {
    return (
        <ImageBackground
            source={require('../../assets/golf_picture.png')} // Use imported local image
            style={styles.backgroundImage}
            resizeMode="stretch"
        >
            <View style={styles.content}>
                <TouchableOpacity style={styles.iconDivStyle}><Ionicans name="chevron-back-outline" color="white" size={hp(3)} /></TouchableOpacity>
                <TouchableOpacity style={styles.iconDivStyle}><Ionicans name="heart-outline" color="white" size={hp(3)} /></TouchableOpacity>
            </View>
            <Text style={{marginLeft:wp(4), marginBottom:hp(2), width:wp(60), color:"#FFFFFF", fontSize:hp(3), fontWeight:'700'}}>Newton Common Wealth Golf Course</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        // flex:1,
        marginBottom:hp(2),
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: hp(30),
        width: wp(100),
        paddingTop:hp(2),
        paddingHorizontal: wp(4)
    },
    iconDivStyle:{
        backgroundColor:"rgba(255, 255, 255, 0.3)",
        justifyContent:"center",
        alignItems:'center',
        height:hp(5),
        width:hp(5),
        borderRadius:hp(5)
    }
})
