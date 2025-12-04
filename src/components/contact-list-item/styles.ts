import { StyleSheet } from "react-native";
import { white, mainGreen, shadow} from "@/src/styles/colors";

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
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: mainGreen, // default
    alignItems: "center",
    justifyContent: "center",   // center initial
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
