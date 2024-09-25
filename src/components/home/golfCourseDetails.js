import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const GolfCourseDetails = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:"flex-start"}}>
                <View>
                    <View style={{flexDirection:'row', marginBottom:hp(1), justifyContent:'flex-start', alignItems:'center'}}>
                        <FontAwesome6 name="location-dot" size={hp(2.5)} color="#FF6B29" />
                        <Text style={{marginLeft:wp(2), color:"rgba(27, 38, 32, 1)", fontSize:hp(1.75)}}>California Palms, USA</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:"flex-start", alignItems:'center'}}>
                        <Ionicons name="map" size={hp(2.2)} color="#007AFF" />
                        <Text style={{marginLeft:wp(2), color:"rgba(27, 38, 32, 1)", fontSize:hp(1.75)}}>9 km away</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: "rgba(254, 198, 38, 0.15)", flexDirection: 'row', width: wp(14), padding: wp(1), borderRadius: hp(2), justifyContent: 'space-around', alignItems: 'center' }}>
                    <AntDesign name="star" size={hp(2)} color="#FEC626" />
                    <Text style={{ color: "#2A342E" }}>4.3</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:hp(2)}}>
                <View style={{borderRightWidth:1, flex:1, justifyContent:'center', borderRightColor:'rgba(237, 236, 236, 1)'}}>
                    <Text style={{ color: "rgba(140, 149, 144, 1)", fontSize:hp(1.5) }}>Length</Text>
                    <Text style={{color:"rgba(60, 69, 63, 1)", fontWeight:'600', fontSize:hp(2)}}>7017 Yds</Text>
                </View>
                <View style={{borderRightWidth:1, flex:1, justifyContent:'center', alignItems:'center', borderRightColor:'rgba(237, 236, 236, 1)'}}>
                    <Text style={{ color: "rgba(140, 149, 144, 1)", fontSize:hp(1.5) }}>Rating/Slope</Text>
                    <Text style={{color:"rgba(60, 69, 63, 1)", fontWeight:'600', fontSize:hp(2)}}>72.0/129</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
                    <Text style={{ color: "rgba(140, 149, 144, 1)", fontSize:hp(1.5) }}>ScoreCard</Text>
                    <Text style={{color:"rgba(60, 69, 63, 1)", fontWeight:'600', fontSize:hp(2)}}>18 Holes</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: hp(1.5),
        padding: hp(2),
        marginBottom: hp(2),
        marginTop:hp(-1),
    }
});
