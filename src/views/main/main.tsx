import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import * as Contacts from "expo-contacts";
import { ContactPermission } from "../../components/contact-permission/contact-permission";
import styles from "./styles";

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

        // after animation, check contacts permission
        const timer = setTimeout(async () => {
            try {
                const { status } = await Contacts.getPermissionsAsync();

                if (status === "granted") {
                    // already granted before → don't show modal
                    setShowPermissionModal(false);
                } else {
                    // not granted yet → show permission modal
                    setShowPermissionModal(true);
                }
            } catch (e) {
                console.warn("Failed to check contacts permission", e);
                // if something goes wrong, fail open and just hide modal
                setShowPermissionModal(false);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [logoScale, buttonOpacity]);

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
        console.log("Contacts imported successfully");
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