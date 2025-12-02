import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";

export function CreateContact() {

    const router = useRouter();

    return (
        <View style={styles.container}>

            <Text> CREATE CONTACT component comes here </Text>

        </View>

   
    )
}