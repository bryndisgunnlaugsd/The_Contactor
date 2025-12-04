import type { ContactData } from "@/src/services/file-service";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  contact: ContactData;
  onEdit?: () => void;
  onCall?: () => void;
}

export const ContactDetail: React.FC<Props> = ({ contact, onEdit, onCall }) => {
  const initial = contact.name.charAt(0).toUpperCase();
  const hasPhoto = !!contact.photo && contact.photo.trim().length > 0;

  return (
    <View style={styles.container}>

      {/* Avatar */}
      {hasPhoto ? (
        <Image source={{ uri: contact.photo }} style={styles.avatarImage} />
      ) : (
        <View style={styles.avatarFallback}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>
      )}

      {/* Name */}
      <Text style={styles.name}>{contact.name}</Text>

      {/* Phone */}
      <Text style={styles.phone}>{contact.phoneNumber}</Text>

      {/* Call button */}
      <TouchableOpacity style={styles.callButton} onPress={onCall}>
        <Ionicons name="call-outline" size={26} color="black" />
      </TouchableOpacity>

      {/* Edit Contact button */}
      <TouchableOpacity style={styles.editButton} onPress={onEdit}>
        <Text style={styles.editButtonText}>Edit Contact</Text>
      </TouchableOpacity>

    </View>
  );
};