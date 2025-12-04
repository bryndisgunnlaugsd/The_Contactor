import { CameraComponent } from "@/src/components/Image/camera";
import { deleteContact, loadContact, updateContact, type ContactData } from "@/src/services/file-service";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { green1, green2, green3, green4, green5 } from "@/src/styles/colors";
import styles from "../create-contact/styles";
import { useImagePicker } from "../Image/imagepicker";

interface Props {
    fileName: string | null;
}

// Green scale for avatars
const AVATAR_COLORS: { [key: string]: string } = {
  "A": green5, "F": green5, "K": green5, "P": green5, "U": green5, "Z": green5,
  "B": green4, "G": green4, "L": green4, "Q": green4, "V": green4,
  "C": green3, "H": green3, "M": green3, "R": green3, "W": green3,
  "D": green2, "I": green2, "N": green2, "S": green2, "X": green2,
  "E": green1, "J": green1, "O": green1, "T": green1, "Y": green1,
};

function formatPhone(digits: string): string {
  const onlyDigits = digits.replace(/\D/g, "");

  if (onlyDigits.length <= 3) {
    return onlyDigits;
  }

  if (onlyDigits.length <= 7) {
    return `${onlyDigits.slice(0, 3)} ${onlyDigits.slice(3)}`;
  }

  return onlyDigits;
}

export function EditContactComp({ fileName }: Props) {

    const router = useRouter();

    const [showCamera, setShowCamera] = useState(false);

    const { pickImage } = useImagePicker((p) => p && setPhoto(p));

    const [name, setName] = useState("");
    const [phoneDigits, setPhoneDigits] = useState("");
    const [photo, setPhoto] = useState<{ uri: string } | null>(null);

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (!fileName) {
        Alert.alert("Error", "No contact to edit.");
        return;
        }

        loadContact(fileName)
        .then((contact) => {
            setName(contact.name);
            setPhoneDigits(contact.phoneNumber.replace(/\D/g, ""));
            setPhoto(contact.photo ? { uri: contact.photo } : null);
        })
        .catch((e) => {
            console.error(e);
            Alert.alert("Error", "Failed to load contact.");
        })
        .finally(() => setLoading(false));
    }, [fileName]);

    if (loading) {
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Loading contact...</Text>
        </View>
        );
    }

    const handlePhoneChange = (text: string) => {
        const digits = text.replace(/\D/g, "");
        setPhoneDigits(digits);
    };

     const handleUpdate = async () => {
        if (!fileName) {
        Alert.alert("Error", "Cannot save. Missing file.");
        return;
        }

        const trimmedName = name.trim();

        if (!trimmedName) {
        Alert.alert("Missing name", "Please enter a contact name.");
        return;
        }

        if (!phoneDigits) {
        Alert.alert("Missing phone number", "Please enter a phone number.");
        return;
        }

        const updatedContact: ContactData = {
        name: trimmedName,
        phoneNumber: formatPhone(phoneDigits),
        photo: photo?.uri,
        };

        try {
        // overwrite existing file
        await updateContact(String(fileName), updatedContact,);

        Alert.alert("Success", "Contact updated!");
        router.push("/contact-list");
        } catch (e) {
        console.error("Failed to update contact:", e);
        Alert.alert("Error", "Could not update contact. Please try again.");
        }
    };

    const handleDelete = async () => {
        Alert.alert(
            "Delete Contact",
            "Are you sure you want to delete this contact?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () => {
                        await deleteContact(String(fileName));
                        Alert.alert("Success", "Contact deleted!");
                        router.push("/contact-list");
                    }
                }
            ]
        );
    };

    const initial = name.charAt(0).toUpperCase();
    const avatarColor = AVATAR_COLORS[initial] || green4;

    return(
        <ScrollView style={styles.container}>

        {/* Avatar Section - Centered */}
        <View style={{ alignItems: "center", marginTop: -18, marginBottom: 20 }}>
        {photo?.uri ? (
            <Image source={{ uri: photo.uri }} style={styles.avatarImage} />
        ) : (
            <View style={[styles.avatarFallback, { backgroundColor: avatarColor }]}>
            <Text style={styles.avatarText}>
                {initial || "?"}
            </Text>
            </View>
        )}
        </View>

        <Text style={styles.title}>Edit Contact</Text>

        {/* Delete Button Below Title */}
        <TouchableOpacity style={styles.deleteButtonCenter} onPress={handleDelete}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>

        <View style={styles.formBlock}>
            <Text style={styles.label}>Contact Name</Text>
            <TextInput
            placeholder="Enter contact name"
            placeholderTextColor="#999"
            style={styles.input}
            value={name}
            onChangeText={setName}
            />
        </View>

        <View style={styles.formBlock}>
            <Text style={styles.label}>Contact Phone Number</Text>
            <TextInput
            placeholder="Enter phone number"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="number-pad"
            value={formatPhone(phoneDigits)}
            onChangeText={handlePhoneChange}
            />
        </View>

        {!showCamera && (
            <TouchableOpacity
            style={styles.iconLayout}
            onPress={() => setShowCamera(true)}
            >
            <Text style={styles.cameraIcon}>📷</Text>
            <Text style={styles.imageButtons}>Take new photo</Text>
            </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.iconLayout} onPress={pickImage}>
            <Text style={styles.photoLibrary}>🖼️</Text>
            <Text style={styles.imageButtons}>Choose new photo from Library</Text>
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

        <View style={styles.buttonsRow}>
            <TouchableOpacity
            style={[styles.button, styles.buttonLight]}
            onPress={() => router.back()}
            >
            <Text style={styles.buttonTextDark}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.button, styles.buttonGrey]}
            onPress={handleUpdate}
            >
            <Text style={styles.buttonTextDark}>Save Changes</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
}
