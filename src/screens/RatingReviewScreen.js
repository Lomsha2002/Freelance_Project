import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Ionicans from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ReviewCard } from "../components/review/reviewCard";
import { ValueBar } from "../components/review/barsCard";

const RatingReviewScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: hp(2) }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconDivStyle}><Ionicans name="chevron-back-outline" color="rgba(27, 38, 32, 1)" size={hp(3)} /></TouchableOpacity>
                <View></View>
                <View></View>
                <Text style={styles.title}>Rating and Reviews</Text>
                <View></View>
                <View></View>
                <View></View>
                <View></View>
            </View>
            <ScrollView>
                <View style={styles.body}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginRight: wp(2) }}>
                            <Text style={{
                                color: "#2A342E",
                                fontWeight: '600',
                                fontSize: hp(5)
                            }}>4.3</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp(25) }}>
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
                    <View style={{
                        marginTop: hp(2), borderBottomColor: 'rgba(237, 236, 236, 1)', borderBottomWidth: 1, paddingBottom:hp(2)
                    }}>
                        <ValueBar label="Value" value={3.7} barColor="#FF8954" />
                        <ValueBar label="Condition" value={4.7} barColor="#52955F" />
                        <ValueBar label="Difficulty" value={4.2} barColor="#6EA679" />
                    </View>
                    <View style={{
                        borderBottomColor: 'rgba(237, 236, 236, 1)',
                        borderBottomWidth: 1
                    }}><ReviewCard /></View>
                    <View style={{
                        borderBottomColor: 'rgba(237, 236, 236, 1)',
                        borderBottomWidth: 1
                    }}><ReviewCard /></View>
                    <View style={{
                        borderBottomColor: 'rgba(237, 236, 236, 1)',
                        borderBottomWidth: 1
                    }}><ReviewCard /></View>
                    <View style={{
                        borderBottomColor: 'rgba(237, 236, 236, 1)',
                        borderBottomWidth: 1
                    }}><ReviewCard /></View>
                    <View><ReviewCard /></View>
                </View>
            </ScrollView>
            <View style={{
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 5,
                shadowOpacity: 1.0, position: 'absolute', bottom: 0, width: wp(100), justifyContent: 'center', left: wp(0), right: wp(0), backgroundColor: 'rgba(255, 255, 255, 1)'
            }}>
                <TouchableOpacity style={{ margin: hp(2), backgroundColor: "rgba(233, 242, 235, 1)", padding: hp(2), justifyContent: 'center', alignItems: 'center', borderRadius: hp(4), borderColor: 'rgba(39, 122, 55, 1)', borderWidth: 1 }}><Text style={{ color: "rgba(39, 122, 55, 1)" }}>Write a review</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default RatingReviewScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(245, 244, 244, 1)",
        flex: 1,
        padding: hp(2),
    },
    iconDivStyle: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        justifyContent: "center",
        alignItems: 'center',
        height: hp(5),
        width: hp(5),
        borderRadius: hp(5)
    },
    title: {
        color: "#1B2620",
        fontWeight: '600',
        fontSize: hp(2.2)
    },
    body: {
        padding: hp(2),
        backgroundColor: "#FFFFFF",
        borderRadius: hp(2),
        marginTop: hp(2),
        marginBottom:hp(9),
    }
});
