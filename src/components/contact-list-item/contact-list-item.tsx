import type { ContactItem } from "@/src/services/file-service";
import { green1, green2, green3, green4, green5 } from "@/src/styles/colors";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  contact: ContactItem;
  onPress: () => void;
}

// Green scale for avatars (fallback)
const avatarColors: { [key: string]: string } = {
  A: green5, F: green5, K: green5, P: green5, U: green5, Z: green5,
  B: green4, G: green4, L: green4, Q: green4, V: green4,
  C: green3, H: green3, M: green3, R: green3, W: green3,
  D: green2, I: green2, N: green2, S: green2, X: green2,
  E: green1, J: green1, O: green1, T: green1, Y: green1,
};

export const contactListItem: React.FC<Props> = ({ contact, onPress }) => {
  const initial = contact.name.charAt(0).toUpperCase();

  const rawPhoto = contact.photo;
  const hasPhoto = typeof rawPhoto === "string" && rawPhoto.length > 0;

  // ✅ normalize to a proper file:// URI
  const photoUri =
    hasPhoto && !rawPhoto.startsWith("file://")
      ? `file://${rawPhoto}`
      : rawPhoto || undefined;

  const avatarColor = avatarColors[initial] || "#1EA165";

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.avatarWrapper}>
        {photoUri ? (
          // thumbnail image (fills the circle)
          <Image source={{ uri: photoUri }} style={styles.avatarImage} />
        ) : (
          // colored circle with initial
          <View
            style={[styles.avatarFallback, { backgroundColor: avatarColor }]}
          >
            <Text style={styles.avatarInitial}>{initial}</Text>
          </View>
        )}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
