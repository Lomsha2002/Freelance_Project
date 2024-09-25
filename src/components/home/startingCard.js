import React from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const StartingCard = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "#1B2620", fontWeight: '600', fontSize: hp(2) }}>Starting from</Text>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={{ fontWeight: "500", fontSize: hp(2), color:'#2A342E', marginRight:wp(2) }}>Hole 2</Text>
                <MaterialIcons name="edit" color="rgba(140, 149, 144, 1)" size={hp(2.5)}/>
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
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    }
});