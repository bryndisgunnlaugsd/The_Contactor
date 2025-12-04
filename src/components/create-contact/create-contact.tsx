import { CameraComponent } from "@/src/components/Image/camera";
import { saveContact, type ContactData } from "@/src/services/file-service";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useImagePicker } from "../Image/imagepicker";
import { PhotoPreview } from "../Image/photopreview";
import styles from "./styles";


function FormatPhone(digits: string): string {
  const onlyDigits = digits.replace(/\D/g, "");

  if (onlyDigits.length <= 3) {
    return onlyDigits;
  }

  if (onlyDigits.length <= 7) {
    return `${onlyDigits.slice(0, 3)} ${onlyDigits.slice(3)}`;
  }

  return onlyDigits;
}

export function CreateContactComp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [photo, setPhoto] = useState<{ uri: string } | null>(null);

  const [showCamera, setShowCamera] = useState(false);

  const { pickImage } = useImagePicker((p) => p && setPhoto(p));

  const handlePhoneChange = (text: string) => {
    const digits = text.replace(/\D/g, "");
    setPhoneDigits(digits);
  };

  const handleSave = async () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      Alert.alert("Missing name", "Please enter a contact name.");

      return;
    }

    if (!phoneDigits) {
      Alert.alert("Missing phone number", "Please enter a phone number.");
      
      return;
    }

    const newContact: ContactData = {
      name: trimmedName,
      phoneNumber: FormatPhone(phoneDigits),
      photo: photo?.uri,
    };

    try {
      const fileName = await saveContact(newContact);

      router.push("/contact-list");
    } catch (e) {
      console.error("Failed to save contact:", e);
      Alert.alert("Error", "Could not save contact. Please try again.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create New Contact</Text>

      <View style={styles.formBlock}>
        <Text style={styles.label}>Contact Name</Text>
        <TextInput
          placeholder="Enter contact name"
          placeholderTextColor="#666"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.formBlock}>
        <Text style={styles.label}>Contact Phone Number</Text>
        <TextInput
          placeholder="Enter phone number"
          placeholderTextColor="#666"
          style={styles.input}
          keyboardType="number-pad"
          value={FormatPhone(phoneDigits)}
          onChangeText={handlePhoneChange}
        />
      </View>

      {!showCamera && (
        <TouchableOpacity
          style={styles.iconLayout}
          onPress={() => setShowCamera(true)}
        >
          <Text style={styles.cameraIcon}>📷</Text>
          <Text style={styles.imageButtons}>Add Photo</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.iconLayout} onPress={pickImage}>
        <Text style={styles.photoLibrary}>🖼️</Text>
        <Text style={styles.imageButtons}>Choose from Library</Text>
      </TouchableOpacity>

      {showCamera && (
        <CameraComponent
          onPictureTaken={(p) => {
            setPhoto(p);
            setShowCamera(false);
          }}
          onClose={() => setShowCamera(false)}
        />
      )}

      {photo && <PhotoPreview uri={photo.uri} />}

      <View style={styles.buttonsRow}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonLight]}
                    onPress={() => router.back()}
                >
                    <Text style={styles.buttonTextDark}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonGrey]}
                    onPress={handleSave}
                >
                    <Text style={styles.buttonTextDark}>Create</Text>
                </TouchableOpacity>
            </View>
    </ScrollView>
  );
}
