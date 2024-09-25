import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicans from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


export const ReviewCard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom:hp(1) }}>
                <Text style={styles.title}>Reviews and Ratings</Text>
                <TouchableOpacity><Ionicans name="chevron-forward-outline" color="#8C9590" size={hp(2.2)} /></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.push('Rating')}>
                <View style={{ flexDirection: 'row', alignItems:'center' }}>
                    <View style={{marginRight:wp(2)}}>
                        <Text style={{
                            color: "#2A342E",
                            fontWeight: '600',
                            fontSize: hp(5)
                        }}>4.3</Text>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', width:wp(25)}}>
                            <AntDesign name="star" size={hp(2)} color="#FEC626" />
                            <AntDesign name="star" size={hp(2)} color="#FEC626" />
                            <AntDesign name="star" size={hp(2)} color="#FEC626" />
                            <AntDesign name="star" size={hp(2)} color="#FEC626" />
                            <AntDesign name="star" size={hp(2)} color="rgba(237, 236, 236, 1)" />
                        </View>
                        <Text style={{
                            color: "#5F6961",
                            fontSize: hp(2)
                        }}>Based on 234 rating</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: hp(1.5),
        padding: hp(2),
        marginBottom: hp(2)
    },
    title: {
        color: "#1B2620",
        fontWeight: '600',
        fontSize: hp(2)
    }
});