import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Reusable component for the value bar
export const ValueBar = ({ label, value, barColor }) => {
    return (
        <View style={styles.row}>
            <View style={{flexDirection:'row', marginBottom:hp(1)}}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value.toFixed(1)}</Text>
            </View>
            <View style={styles.barContainer}>
                <View
                    style={[
                        styles.progressBar,
                        { width: `${(value / 5) * 100}%`, backgroundColor: barColor },
                    ]}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    row: {
      marginBottom:hp(2),
    },
    label: {
        flex: 1,
        fontSize: hp(2),
        fontWeight: '500',
        color: 'black',
    },
    barContainer: {
        flex: 4,
        height: hp(0.7),
        backgroundColor: '#eee',
        borderRadius: 4,
    },
    progressBar: {
        height: '100%',
        borderRadius: 4,
    },
    value: {
        fontSize: hp(2),
        color: 'black',
        fontWeight: '600',
    },
});


