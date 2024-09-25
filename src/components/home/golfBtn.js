import React, { useRef, useState } from 'react';
import {
    Animated,
    PanResponder,
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Get screen dimensions for dynamic width adjustments
const { width } = Dimensions.get('window');
const SLIDE_BUTTON_WIDTH = width * 0.9; // 80% of screen width

export const SlideButton = ({ navigation }) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [slideCompleted, setSlideCompleted] = useState(false);

    const resetSlider = () => {
        Animated.spring(pan, {
            toValue: { x: 0, y: 0 }, // Reset the position of the slider
            useNativeDriver: false,
        }).start(() => {
            setSlideCompleted(false); // Reset state to allow further sliding
        });
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
            onPanResponderRelease: (e, gestureState) => {
                if (gestureState.dx > SLIDE_BUTTON_WIDTH * 0.7) {
                    setSlideCompleted(true);
                    Animated.spring(pan, {
                        toValue: { x: SLIDE_BUTTON_WIDTH - 70, y: 0 },
                        useNativeDriver: false,
                    }).start(() => {
                            navigation.push('Rating');
                            resetSlider();
                        }
                    );
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start(

                    );
                }
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            <View style={styles.slideContainer}>
                <View style={styles.buttonBackground}>
                    <View></View>
                    <View></View>
                    <Text style={styles.buttonText}>Start Round</Text>
                    <Image
                        source={require('../../assets/arrows_btn.png')} // Golf ball image
                        style={styles.ballImage}
                    />
                </View>

                {!slideCompleted && (
                    <Animated.View
                        {...panResponder.panHandlers}
                        style={[styles.slidingBall, { transform: [{ translateX: pan.x }] }]}
                    >
                        <Image
                            source={require('../../assets/golf_ball.png')} // Golf ball image
                            style={styles.ballImage}
                        />
                    </Animated.View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideContainer: {
        width: SLIDE_BUTTON_WIDTH,
        height: 60,
        backgroundColor: 'rgba(39, 122, 55, 1)',
        borderRadius: 30,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: hp(2.5),
        fontWeight: '600',
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    slidingBall: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 70,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    ballImage: {
        width: hp(6),
        height: hp(6),
        borderRadius: 20,
    },
});

