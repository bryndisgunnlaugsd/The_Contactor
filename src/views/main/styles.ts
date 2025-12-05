import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: 500,
        height: 450,
    },

    button: {
        marginBottom: 200,
        marginTop: -80,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: "#1EA165",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },

    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    }
});