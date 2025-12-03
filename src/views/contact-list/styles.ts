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
    },
    addButtonContainer: {
        //Tekið úr Toodler
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    addButton: {
        //Tekið úr Toodler
        fontSize: 28,
        color: "#000",
        fontWeight: "300",
        textAlign: "center",
        lineHeight: 28,
    },

}
)