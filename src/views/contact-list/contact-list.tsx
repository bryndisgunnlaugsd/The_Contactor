import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";
import { ContactList } from "@/src/components/contact-list/contact-list";
import type { ContactItem } from "@/src/services/file-service";
//Read data
import { getAllContacts } from "@/src/services/file-service";

// DUMMY DATA FOR TESTING
const dummyContactsUnsorted = [
  { name: "Arnar Máni Steinsen", type: "contact", file: "arnar.json" },
  { name: "Arngrímur Esra Árnason", type: "contact", file: "arngrimur.json" },
  { name: "Bryndís Gunnlaugsdóttir", type: "contact", file: "bryndis.json" },
  { name: "Dagur Smári Sigvaldason", type: "contact", file: "dagur.json" },
] satisfies ContactItem[];

export const dummyContacts = [...dummyContactsUnsorted].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export function Contacts() {
  const router = useRouter();

  //Dummy data
  // const [contacts] = useState<ContactItem[]>(DUMMY_CONTACTS);
  // const [search, setSearch] = useState("");

  // REAL DATA FROM FILE SYSTEM
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [search, setSearch] = useState("");

    useEffect(() => {
        (async () => {
        const data = await getAllContacts();
        setContacts(data);
        })();
    }, []);

  const handleSelectContact = (contact: ContactItem) => {
    router.push({
      pathname: "/contact-detail",
      params: { fileName: contact.file },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header row with title + plus button */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>My Contacts</Text>

        <TouchableOpacity
          style={styles.addButtonContainer}
          onPress={() => router.push("/create-contact")}
        >
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Contact list */}
      <ContactList
        contacts={contacts}
        search={search}
        onSearchChange={setSearch}
        onSelectContact={handleSelectContact}
      />
    </View>
  );
}
