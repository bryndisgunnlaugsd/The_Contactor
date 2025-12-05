import { StyleSheet } from "react-native";
import { white, shadow } from "@/src/styles/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: white,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    shadowColor: shadow,
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },

  // outer circle – always 56x56, clips image
  avatarWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  // actual photo
  avatarImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  // fallback background + initial
  avatarFallback: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitial: {
    fontSize: 22,
    fontWeight: "600",
    color: shadow,
  },

  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
});
