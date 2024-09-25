import React from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";
import { Header } from "../components/home/header";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { PlayCard } from "../components/home/playWithFriends";
import { HandicapDetails } from "../components/home/handicapDetails";
import { GolfCourseDetails } from "../components/home/golfCourseDetails";
import { ReviewCard } from "../components/home/reviewCard";
import { StartingCard } from "../components/home/startingCard";
import { TeeCard } from "../components/home/teeCard";
import { SlideButton } from "../components/home/golfBtn";
import { AboutCard } from "../components/home/aboutCourse";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View style={styles.body}>
                    <GolfCourseDetails />
                    <PlayCard />
                    <StartingCard />
                    <TeeCard />
                    <HandicapDetails />
                    <AboutCard />
                    <ReviewCard navigation={navigation} />
                    <SlideButton navigation={navigation} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F4F4',
    },
    body: {
        padding: wp(4),
    }
});

export default HomeScreen;
