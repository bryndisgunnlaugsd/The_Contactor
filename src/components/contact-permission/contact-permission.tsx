import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import { Ionicons } from '@expo/vector-icons';
import { saveContact, ContactData, contactExists } from '../../services/file-service';
import styles from './styles';

interface ContactPermissionProps {
  visible: boolean;
  onClose: () => void;
  onImportComplete: () => void;
}

export function ContactPermission({ visible, onClose, onImportComplete }: ContactPermissionProps) {
  const [isImporting, setIsImporting] = useState(false);

  const requestContactsPermission = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      
      if (status === "granted") {
        await importContacts();
      } else {
        Alert.alert(
          "Permission Denied",
          "Unable to access contacts. Please enable contacts permission in your device settings.",
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error("Error requesting contacts permission:", error);
      Alert.alert("Error', 'Failed to request contacts permission");
    }
  };

  const importContacts = async () => {
    setIsImporting(true);
    try {
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.Name,
          Contacts.Fields.PhoneNumbers,
          Contacts.Fields.Image,
        ],
      });

      if (data.length > 0) {
        let importedCount = 0;
        let skippedCount = 0;
        
        // Import each contact
        for (const contact of data) {
          const name = contact.name || "Unknown";
          const phoneNumber = contact.phoneNumbers?.[0]?.number || "";
          const photo = contact.image?.uri;

          if (phoneNumber) {
            // Check if contact already exists by phone number
            const exists = await contactExists(phoneNumber);
            
            if (!exists) {
              const contactData: ContactData = {
                name,
                phoneNumber,
                photo,
              };

              try {
                await saveContact(contactData);
                importedCount++;
              } catch (error) {
                console.error("Failed to save contact ${name}:", error);
              }
            } else {
              skippedCount++;
            }
          }
        }

        // Show appropriate message
        if (importedCount > 0) {
          Alert.alert(
            "Import Complete",
            `Successfully imported ${importedCount} new contact${importedCount !== 1 ? 's' : ''}${
              skippedCount > 0 ? `\n${skippedCount} duplicate${skippedCount !== 1 ? 's' : ''} skipped` : ''
            }`,
            [
              {
                text: 'OK',
                onPress: () => {
                  onImportComplete();
                  onClose();
                },
              },
            ]
          );
        } else if (skippedCount > 0) {
          Alert.alert(
            'No New Contacts',
            'All contacts have already been imported.',
            [
              {
                text: 'OK',
                onPress: () => {
                  onClose();
                },
              },
            ]
          );
        } else {
          Alert.alert('No Contacts', 'No contacts with phone numbers found on your device');
        }
      } else {
        Alert.alert('No Contacts', 'No contacts found on your device');
      }
    } catch (error) {
      console.error('Error importing contacts:', error);
      Alert.alert('Error', 'Failed to import contacts');
    } finally {
      setIsImporting(false);
    }
  };

  const handleContinueWithoutSyncing = () => {
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Icon */}
          <View style={styles.iconContainer}>
            <Ionicons name="people-outline" size={60} color="#1EA165" />
          </View>

          {/* Title */}
          <Text style={styles.title}>Access your Contacts</Text>

          {/* Description */}
          <Text style={styles.description}>
            We need permission to access your contacts to display them in the app
          </Text>

          {/* Grant Access Button */}
          <TouchableOpacity
            style={styles.grantButton}
            onPress={requestContactsPermission}
            disabled={isImporting}
          >
            <Text style={styles.grantButtonText}>
              {isImporting ? 'Importing...' : 'Grant access'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Continue Without Syncing Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinueWithoutSyncing}
          disabled={isImporting}
        >
          <Text style={styles.continueButtonText}>
            Continue without syncing contacts
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}