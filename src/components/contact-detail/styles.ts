import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // outer scroll container
  scroll: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },

  // hero image area
  heroContainer: {
    width: "100%",
    backgroundColor: "#E5E7EB",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heroFallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9CA3AF",
  },
  heroInitial: {
    fontSize: 64,
    fontWeight: "700",
    color: "#ffffff",
  },
  heroOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 56,
    alignItems: "center",
  },
heroName: {
  fontSize: 50,
  fontWeight: "800",
  color: "#ffffff",
  textShadowColor: "rgba(0,0,0,0.7)",
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 6,
},
  // body under the hero image
  body: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 40,
  },

  // phone "card"
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 13,
    color: "#6B7280",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  value: {
    fontSize: 17,
  },

  callButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#34C759",
    alignItems: "center",
    justifyContent: "center",
  },

  // Edit Contact button
  editButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },
  editButtonText: {
    fontSize: 17,
    fontWeight: "600",
  },
heroGradient: {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "65%",
},

});
