import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Ionicans from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


export const ReviewCard = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View style={{ marginRight: wp(3), width: hp(6), height: hp(2) }}>
                        <Image style={{ width: hp(6), height: hp(6) }} source={require('../../assets/pic_url.png')} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Harvey Specter</Text>
                        </View>
                        <Text style={{
                            color: "#2A342E",
                            fontSize: hp(1.8)
                        }}><AntDesign name="star" size={hp(2)} color="#FEC626" /> 4.3</Text>
                    </View>
                </View>
                <View>
                    <Text style={{
                        color: "#2A342E",
                        fontSize: hp(1.8)
                    }}>Jan 12</Text>
                </View>
            </View>
            <View style={{ marginTop: hp(2) }}>
                <Text style={{
                    color: "#5F6961",
                    fontSize: hp(1.7)
                }}>Greenview Golf Club is a premier 18-hole golf course designed to offer a challenging and enjoyable experience for golfers of all skill levels. Nestled in the rolling hills of Golf City, the course features stunning views, well-maintained greens, and a variety of natural hazards.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: hp(1.5),
        marginBottom: hp(2),
        paddingTop: hp(2),
    },
    title: {
        color: "#1B2620",
        fontWeight: '600',
        fontSize: hp(2)
    }
});