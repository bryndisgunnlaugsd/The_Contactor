import React from "react";
import { View, TextInput, FlatList, ListRenderItem, Text } from "react-native";
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
  // filter by search text
  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem: ListRenderItem<ContactItem> = ({ item, index }) => {
    const currentInitial = item.name.charAt(0).toUpperCase();
    const prev = filtered[index - 1];
    const prevInitial = prev?.name?.charAt(0).toUpperCase();
    const showInitial = index === 0 || currentInitial !== prevInitial;

    return (
      <View>
        {showInitial && (
          <Text style={styles.sectionHeader}>{currentInitial}</Text>
        )}
        <ContactListItem
          contact={item}
          onPress={() => onSelectContact(item)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search contacts..."
        style={styles.searchInput}
        value={search}
        onChangeText={onSearchChange}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.file}
        renderItem={renderItem}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
