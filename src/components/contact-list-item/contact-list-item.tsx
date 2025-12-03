import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import type { ContactItem } from "@/src/services/file-service";
import styles from "./styles"


interface Props {
  contact: ContactItem;
  onPress: () => void;
}

export const ContactListItem: React.FC<Props> = ({ contact, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* optional thumbnail later */}
      {/* <Image source={{ uri: contact.photoUri }} style={styles.avatar} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
    </TouchableOpacity>
  );
};