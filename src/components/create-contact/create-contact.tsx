import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";

type CreateContactCopmProps = {};

function formatPhone(digits: string): string {
    const onlyDigits = digits.replace(/\D/g, "");

    if (onlyDigits.length <= 3) {
        return onlyDigits;
    }

    if (onlyDigits.length <= 7) {
        return `${onlyDigits.slice(0, 3)} ${onlyDigits.slice(3)}`;
    }

    return onlyDigits;
}

export function CreateContactComp() {
    const router = useRouter();
    const [phoneDigits, setPhoneDigits] = useState("");

    const handlePhoneChange = (text: string) => {
        const digits = text.replace(/\D/g, "");
        setPhoneDigits(digits);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create New Contact</Text>

            <View style={styles.formBlock}>
                <Text style={styles.label}>Contact Name</Text>
                <TextInput
                placeholder="Enter contact name"
                placeholderTextColor="#999"
                style={styles.input}
                />
            </View>

            <View style={styles.formBlock}>
                <Text style={styles.label}>Contact Phone Number</Text>
                <TextInput
                placeholder="Enter phone number"
                placeholderTextColor="#999"
                style={styles.input}
                keyboardType="number-pad"
                value={formatPhone(phoneDigits)}
                onChangeText={handlePhoneChange}
                />
            </View>
        </View>
    );
}