import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicans from 'react-native-vector-icons/Ionicons';

export const AboutCard = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>About Course</Text>
            <Text style={{
                color: "#5F6961",
                fontSize: hp(1.7),
                marginBottom:hp(2)
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis urna vitae ex tristique, at elementum justo sagittis. Nulla facilisi. Sed ac mi vel eros fringilla gravida. Donec vel mi vel justo dignissim tempor. Donec semper, metus in facilisis vestibulum, nulla tellus bibendum neque, a ullamcorper nunc neque at neque.
            </Text>
            <View style={styles.viewStyle}>
                <Text style={{ fontWeight: "500", fontSize: hp(2), color: '#2A342E' }}>Directions</Text>
                <TouchableOpacity><Ionicans name="chevron-forward-outline" color="#8C9590" size={hp(2.2)} /></TouchableOpacity>
            </View>
            <View style={styles.viewStyle}>
                <Text style={{ fontWeight: "500", fontSize: hp(2), color: '#2A342E' }}>Call <Text style={{color:"rgba(140, 149, 144, 1)", fontSize:hp(1.8)}}>  + 18 120 1223 132</Text></Text>
                <TouchableOpacity><Ionicans name="chevron-forward-outline" color="#8C9590" size={hp(2.2)} /></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        padding: wp(4),
        borderRadius: wp(2),
        marginBottom: hp(2),
        paddingBottom:0
    },
    title: {
        color: "#1B2620",
        fontWeight: '600',
        fontSize: hp(2),
        marginBottom: hp(2),
    },
    viewStyle: {
        justifyContent: 'space-between',
        paddingVertical:hp(2),
        alignItems:'center',
        flexDirection: 'row',
        borderTopColor:"rgba(245, 244, 244, 1)",
        borderTopWidth:1,
    }
});