import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";

export function ContactDetail() {

    const router = useRouter();

    return (
        <View style={styles.container}>

            <Text> CONTACTS DETAIL component comes here</Text>

        </View>

    )
}