import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicans from 'react-native-vector-icons/Ionicons';

export const TeeCard = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "#1B2620", fontWeight: '600', fontSize: hp(2), marginBottom:hp(2) }}>Starting Tee</Text>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', width:wp(37)}}>
                    <View style={{ backgroundColor: 'rgba(27, 38, 32, 1)', height: hp(2.5), width: hp(2.5), borderRadius: hp(0.5), justifyContent:'center', alignItems:'center' }}><Text style={{color:'white'}}>B</Text></View>
                    <Text style={{ fontWeight: "500", fontSize: hp(2), color:'#2A342E' }}>Black (6707 m)</Text>
                </View>
                <View>
                    <TouchableOpacity><Ionicans name="chevron-forward-outline" color="#8C9590" size={hp(2.2)} /></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: hp(2),
        borderRadius: hp(1.5),
        marginBottom: hp(2),
    }
});