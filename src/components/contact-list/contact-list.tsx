import React from "react";
import { View, TextInput, FlatList, ListRenderItem } from "react-native";
import type { ContactItem } from "@/src/services/file-service";
import { ContactListItem } from "@/src/components/contact-list-item/contact-list-item";
import styles from "./styles";

interface Props {
  contacts: ContactItem[];
  search: string;
  onSearchChange: (value: string) => void;
  onSelectContact: (contact: ContactItem) => void;
}

export const ContactList: React.FC<Props> = ({
  contacts,
  search,
  onSearchChange,
  onSelectContact,
}) => {
  const renderItem: ListRenderItem<ContactItem> = ({ item }) => (
    <ContactListItem contact={item} onPress={() => onSelectContact(item)} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        value={search}
        onChangeText={onSearchChange}
      />

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.file}
        renderItem={renderItem}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};