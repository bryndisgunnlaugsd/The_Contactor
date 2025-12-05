import { StyleSheet } from "react-native";
import { white, black, lightGray, shadow, green5} from "@/src/styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: black,
  },

  formBlock: {
    marginBottom: 24,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 8,
  },

  imageButtons: {
    color: "black",
    fontSize: 15,
    fontWeight: "500",
  },

  input: {
    height: 52,
    borderRadius: 18,
    paddingHorizontal: 16,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },

  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    marginTop: 28,
    marginBottom: 28,
  },

  button: {
    flex: 1,
    height: 50,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },

  buttonLight: {
    backgroundColor: lightGray,
    shadowColor: shadow,
    shadowOpacity: 0.14,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },

  buttonGrey: {
    backgroundColor: green5,
    shadowColor: shadow,
    shadowOpacity: 0.14,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },

  buttonTextDark: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },

  iconLayout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    height: 52,
    borderRadius: 18,
    paddingHorizontal: 16,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  cameraIcon: {
    marginRight: 10,
    color: "#666",
  },
  photoLibrary: {
    marginRight: 10,
    color: "#666",
  },

  avatarImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 8,
  },
  avatarFallback: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#AFE9CF", // Default
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  avatarText: {
    fontSize: 52,
    fontWeight: "700",
    color: black,
  },

  deleteButtonCenter: {
    borderRadius: 25,
    backgroundColor: "#de4035",
    height: 40,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  deleteButton: {
    borderRadius: 25,
    backgroundColor: "#de4035",
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  deleteButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  }
});