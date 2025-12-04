import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 40,
  },

  // Avatar styles
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

  // Name & phone
  name: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 6,
  },
  phone: {
    fontSize: 20,
    color: "#333",
    marginBottom: 24,
  },

  // Green call button
  callButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#9be79d",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },

  // Edit Contact button
  editButton: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  editButtonText: {
    fontSize: 18,
    fontWeight: "600",
  },
});