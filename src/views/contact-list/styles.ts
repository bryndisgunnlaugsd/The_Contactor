import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3", // light grey background like mockup
        paddingHorizontal: 24,
        paddingTop: 60,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
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