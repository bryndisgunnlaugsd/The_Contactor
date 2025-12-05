// src/components/contact-detail/contact-detail.tsx

import type { ContactData } from "@/src/services/file-service";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import styles from "./styles";

interface Props {
  contact: ContactData;
  onEdit?: () => void;
  onCall?: () => void;
}

const { height } = Dimensions.get("window");
const heroHeight = height * 0.6;

export const ContactDetail: React.FC<Props> = ({
  contact,
  onEdit,
  onCall,
}) => {
const initial = contact.name.charAt(0).toUpperCase();

const rawPhoto = contact.photo;
const hasPhoto = typeof rawPhoto === "string" && rawPhoto.length > 0;

const photoUri =
  hasPhoto && !rawPhoto.startsWith("file://")
    ? `file://${rawPhoto}`
    : rawPhoto || undefined;

  return (
    <ScrollView style={styles.scroll} bounces>
      {/* HERO IMAGE AREA */}
      <View style={[styles.heroContainer, { height: heroHeight }]}>
        
        {/* Color gradient */}
        <LinearGradient
          colors={[
            "rgba(19,150,83)",   // dark green
            "rgba(55,185,106)",  // mid green
            "rgba(166,235,96)",
          ]}
          locations={[0, 0.4, 1]}
          style={styles.heroGradient}
        />
        {/* Photo on top if it exists */}
        <Image source={{ uri: photoUri }} style={styles.heroImage} />
        
        <View style={styles.heroOverlay}>
          <Text style={styles.heroName}>{contact.name}</Text>
        </View>
      </View>

      {/* BODY UNDER PHOTO */}
      <View style={styles.body}>
        {/* phone card */}
        {contact.phoneNumber ? (
          <View style={styles.card}>
            <View style={styles.row}>
              <View>
                <Text style={styles.label}>mobile</Text>
                <Text style={styles.value}>{contact.phoneNumber}</Text>
              </View>

              <TouchableOpacity
                style={styles.callButton}
                onPress={onCall}
                activeOpacity={0.8}
              >
                <Ionicons name="call" size={24} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {/* Edit Contact button */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={onEdit}
          activeOpacity={0.9}
        >
          <Text style={styles.editButtonText}>Edit Contact</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
