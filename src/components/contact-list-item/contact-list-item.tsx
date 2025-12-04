import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import type { ContactItem } from "@/src/services/file-service";
import styles from "./styles";

interface Props {
  contact: ContactItem;
  onPress: () => void;
}

export const ContactListItem: React.FC<Props> = ({ contact, onPress }) => {
  const initial = contact.name.charAt(0).toUpperCase();
  const hasPhoto = !!contact.photo && contact.photo.trim().length > 0;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {hasPhoto ? (
        // thumbnail image
        <Image source={{ uri: contact.photo }} style={styles.avatar} />
      ) : (
        // grey circle with initial
        <View style={styles.avatar}>
          <Text style={styles.avatarInitial}>{initial}</Text>
        </View>
      )}

      <View style={styles.textContainer}>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
