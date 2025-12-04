import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import styles from "./styles";
import { useRouter } from "expo-router";
import { ContactPermission } from "../../components/contact-permission/contact-permission";

export function Main() {
    const router = useRouter();
    const [showPermissionModal, setShowPermissionModal] = useState(false);

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

        // Show permission modal after animation completes
        setTimeout(() => {
            setShowPermissionModal(true);
        }, 1000);
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

    const handleImportComplete = () => {
        console.log('Contacts imported successfully');
    };

    const handleClosePermissionModal = () => {
        setShowPermissionModal(false);
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

            {/* Contact Permission Modal */}
            <ContactPermission
                visible={showPermissionModal}
                onClose={handleClosePermissionModal}
                onImportComplete={handleImportComplete}
            />
        </View>
    );
}