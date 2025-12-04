import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 32,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 32,
    color: "#000000",
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
  },

  input: {
    height: 52,
    borderRadius: 18,
    paddingHorizontal: 16,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    fontSize: 16,
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
    height: 56,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },

  buttonLight: {
    backgroundColor: "#EEF3FF",
  },

  buttonGrey: {
    backgroundColor: "#E5E5EA",
  },

  buttonTextDark: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },

  listPicker: {
    marginTop: 8,
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  listPickerItem: {
    paddingVertical: 6,
  },
  listPickerItemText: {
    fontSize: 14,
    color: "#111",
  },
  listPickerItemTextActive: {
    fontWeight: "700",
  },

  iconLayout: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height: 52,
    borderRadius: 18,
    paddingHorizontal: 16,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    fontSize: 16,
    
  },
  cameraIcon: {
    fontSize: 24,
    marginVertical: 10,
    marginRight:15,
  },
  photoLibrary: {
    fontSize: 24,
    marginVertical: 10,
    marginRight:15,
  },

  avatarImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },
  avatarFallback: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#f7d9dd",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  avatarText: {
      fontSize: 52,
      fontWeight: "700",
  },

  deleteButton: {
    borderRadius: 70,
    backgroundColor: "#de4035",
    height: 35,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },

  deleteButtonText: {
    color: "white",
    fontSize:14,
    fontWeight: "600",
  }


});
