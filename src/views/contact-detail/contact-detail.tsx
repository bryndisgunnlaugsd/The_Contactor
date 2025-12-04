// app/contact-detail/index.tsx (or whatever the route file is)

import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ContactDetail } from "@/src/components/contact-detail/contact-detail";
import { loadContact, type ContactData } from "@/src/services/file-service";

import styles from "./styles";

export function ContactDetailView() {
  const router = useRouter();
  const { fileName } = useLocalSearchParams<{ fileName: string }>();

  const [contact, setContact] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!fileName) {
      setError("No contact selected.");
      setLoading(false);
      return;
    }

    const fetchContact = async () => {
      try {
        const data = await loadContact(String(fileName));
        setContact(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load contact.");
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [fileName]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error || !contact) {
    return (
      <View style={styles.center}>
        <Text>{error ?? "Contact not found."}</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <ContactDetail
        contact={contact}
        onEdit={() => router.push(`/edit-contact?fileName=${fileName}`)}
        onCall={() => {
          if (contact.phoneNumber) {
            Linking.openURL(`tel:${contact.phoneNumber}`);
          }
        }}
      />
    </SafeAreaView>
  );
}
