import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import ToggleSwitch from "toggle-switch-react-native";


export const PlayCard = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <Text style={{ color: "#1B2620", fontWeight: '600', fontSize: hp(2) }}>Play With Friends</Text>
            <ToggleSwitch
                isOn={isEnabled}
                onColor="rgba(39, 122, 55, 1)"
                offColor="rgba(196, 196, 196, 1)"
                size="medium"
                onToggle={() => toggleSwitch()}
            />
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