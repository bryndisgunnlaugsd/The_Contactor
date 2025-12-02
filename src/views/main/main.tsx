import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";

export function Main() {

    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text> LOADING PAGE comes here</Text>
            
            <TouchableOpacity
                onPress={() => router.push('/contact-list')}
                style={styles.button}>

                <Text>CONTACT SCREEN</Text>
            </TouchableOpacity>
        </View>

        
    )
}
