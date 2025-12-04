import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import type { ContactItem } from "@/src/services/file-service";
import styles from "./styles";
import { green1, green2, green3, green4, green5} from "@/src/styles/colors";


interface Props {
  contact: ContactItem;
  onPress: () => void;
}

// Green scale for avatars
const AVATAR_COLORS: { [key: string]: string } = {
  "A": green5, "F": green5, "K": green5, "P": green5, "U": green5, "Z": green5,
  "B": green4, "G": green4, "L": green4, "Q": green4, "V": green4,
  "C": green3, "H": green3, "M": green3, "R": green3, "W": green3,
  "D": green2, "I": green2, "N": green2, "S": green2, "X": green2,
  "E": green1, "J": green1, "O": green1, "T": green1, "Y": green1,
};

export const ContactListItem: React.FC<Props> = ({ contact, onPress }) => {
  const initial = contact.name.charAt(0).toUpperCase();
  const hasPhoto = !!contact.photo && contact.photo.trim().length > 0;
  const avatarColor = AVATAR_COLORS[initial] || '#1EA165';

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {hasPhoto ? (
        // thumbnail image
        <Image source={{ uri: contact.photo }} style={styles.avatar} />
      ) : (
        // colored circle with initial
        <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
          <Text style={styles.avatarInitial}>{initial}</Text>
        </View>
      )}

      <View style={styles.textContainer}>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
    </TouchableOpacity>
  );
};