import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";

export function Contacts() {

    const router = useRouter();

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.addButtonContainer}
                onPress={() => router.push('/create-contact')}
                >

            <Text style={styles.addButton}>＋</Text>
            </TouchableOpacity>
            <Text> CONTACTS PAGE component comes here</Text>
            
            <TouchableOpacity
                onPress={() => router.push('/contact-detail')}
                style={styles.button}>

                <Text>CONTACT DETAIL SCREEN</Text>
            </TouchableOpacity>

        </View>


        
    )
}