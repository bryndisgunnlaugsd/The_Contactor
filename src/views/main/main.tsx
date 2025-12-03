import { Animated, Text, TouchableOpacity, View, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import styles from "./styles";
import { useRouter } from "expo-router";

export function Main() {

    const router = useRouter();

    const logoScale = useRef(new Animated.Value(0.5)).current;
    const logoOpacity = useRef(new Animated.Value(1)).current;
    const buttonOpacity = useRef(new Animated.Value(0)).current;
    const buttonScale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.spring(logoScale, {
                toValue: 1,
                useNativeDriver: true,
            }),
            Animated.delay(300),
            Animated.timing(buttonOpacity, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const handlePress = () => {
        router.push("/contact-list");
    };

    const handlePressIn = () => {
        Animated.spring(buttonScale, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(buttonScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.Image
                style={[
                    styles.image,
                    {
                        opacity: logoOpacity,
                        transform: [{ scale: logoScale }],
                    },
                ]}
                source={require("../../../assets/images/contactor.png")}
            />
        
            <Animated.View
                style={{
                    opacity: buttonOpacity,
                    transform: [{ scale: buttonScale }],
                }}
            >
                <TouchableOpacity
                    onPress={handlePress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}