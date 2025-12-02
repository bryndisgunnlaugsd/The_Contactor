import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        //Tekið úr Toodler
        flex: 1,
        padding: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    button: {
        //Tekið úr Toodler
        marginTop: 30,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 32,
        paddingRight: 32,
        backgroundColor: "white",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
    }

}
)

