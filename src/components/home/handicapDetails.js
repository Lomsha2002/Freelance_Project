import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


const data = [
    {
        title: "Handicap",
        value: "6.0",
    },
    {
        title: "Playing Handicap",
        value: "7",
    },
    {
        title: "Handicap Percentage",
        value: "100%",
    },
]

export const HandicapDetails = () => {
    return (
        <View style={styles.container}>
            {
                data.map((item, index) => (
                    <View key={index} style={styles.viewStyle}>
                        <Text style={{ fontWeight: "500", fontSize: hp(2), color:'#2A342E' }}>{item.title}</Text>
                        <Text style={{ fontWeight: "700", fontSize: hp(2), color:'#1B2620' }}>{item.value}</Text>
                    </View>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgba(255,255,255,1)',
        borderRadius: hp(1.5),
        marginBottom: hp(2),
    },
    viewStyle: {
        justifyContent: 'space-between',
        padding:hp(2),
        alignItems:'center',
        flexDirection: 'row',
        borderBottomColor:"rgba(245, 244, 244, 1)",
        borderBottomWidth:1,
    }
});