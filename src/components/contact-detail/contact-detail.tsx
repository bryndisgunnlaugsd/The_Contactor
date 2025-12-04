// src/components/contact-detail/contact-detail.tsx

import type { ContactData } from "@/src/services/file-service";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  contact: ContactData;
  onEdit?: () => void;
  onCall?: () => void;
}

const { height } = Dimensions.get("window");
const HERO_HEIGHT = height * 0.6; 

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
<View style={[styles.heroContainer, { height: HERO_HEIGHT }]}>
  {photoUri ? (
    <Image source={{ uri: photoUri }} style={styles.heroImage} />
  ) : (
    <View style={styles.heroFallback}>
      <Text style={styles.heroInitial}>{initial}</Text>
    </View>
  )}

  <LinearGradient
    colors={[
      "rgba(0,0,0,0)",
      "rgba(0,0,0,0.5)",
      "rgba(0,0,0,0.95)",
    ]}
    locations={[0, 0.4, 1]}
    style={styles.heroGradient}
  />

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
