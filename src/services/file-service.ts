import { Directory, File, Paths } from "expo-file-system";
import { v4 as uuidv4 } from "uuid";

const contactDirectory = new Directory(Paths.document, "contacts");

// Data stored inside each JSON file
export interface ContactData {
  name: string;
  phoneNumber: string;
  photo?: string;
}

export interface ContactItem {
  // what you need to show in the contact list
  name: string;
  type: "contact";
  file: string; // the actual filename: "<name>-<uuid>.json"
}

// Error handler
type ErrorHandler = (error: Error) => void;

// Generic wrapper for try/catch
const onException = async <T>(
  cb: () => T | Promise<T>,
  errorHandler?: ErrorHandler
): Promise<T> => {
  try {
    return await cb();
  } catch (err) {
    const error = err as Error;
    if (errorHandler) {
      errorHandler(error);
    } else {
      console.error("File service error:", error);
    }
    throw error;
  }
};

// Ensure the contacts folder exists in documentDirectory
const ensureContactDirectoryExists = async () => {
  if (!contactDirectory.exists) {
    contactDirectory.create(); // sync in the new API
  }
};

// ---- CHECK IF CONTACT EXISTS (by phone number) ----
export const contactExists = async (
  phoneNumber: string,
  errorHandler?: ErrorHandler
): Promise<boolean> => {
  return onException(async () => {
    await ensureContactDirectoryExists();

    const items = contactDirectory.list();
    const contactFiles = items.filter(
      (item) => item instanceof File
    ) as File[];

    // Check if any existing contact has the same phone number
    for (const file of contactFiles) {
      const content = await file.text();
      const data = JSON.parse(content) as ContactData;
      
      // Normalize phone numbers for comparison (remove spaces, dashes, etc)
      const normalizedExisting = data.phoneNumber.replace(/[\s\-\(\)]/g, '');
      const normalizedNew = phoneNumber.replace(/[\s\-\(\)]/g, '');
      
      if (normalizedExisting === normalizedNew) {
        return true;
      }
    }

    return false;
  }, errorHandler);
};


// ---- CREATE / SAVE CONTACT ----
export const saveContact = async (
  data: ContactData,
  errorHandler?: ErrorHandler
): Promise<string> => {
  return onException(async () => {
    await ensureContactDirectoryExists();

    const id = uuidv4(); // unique id part
    const fileName = `${data.name}-${id}.json`;

    const file = new File(contactDirectory, fileName);
    file.create();
    file.write(JSON.stringify(data));

    return fileName; // return the filename so you can store it or navigate with it
  }, errorHandler);
};

// ---- LOAD CONTACT (DETAIL SCREEN) ----
export const loadContact = async (
  fileName: string,
  errorHandler?: ErrorHandler
): Promise<ContactData> => {
  return onException(async () => {
    const file = new File(contactDirectory, fileName);
    const content = await file.text();
    return JSON.parse(content) as ContactData;
  }, errorHandler);
};

// ---- LIST ALL CONTACTS (FOR CONTACTS SCREEN) ----
export const getAllContacts = async (
  errorHandler?: ErrorHandler
): Promise<ContactItem[]> => {
  return onException(async () => {
    await ensureContactDirectoryExists();

    // Directory.list() is sync in the new API
    const items = contactDirectory.list();

    const contactFiles = items.filter(
      (item) => item instanceof File
    ) as File[];

    // load each file, but only expose list fields (name + filename)
    const contacts = await Promise.all(
      contactFiles.map(async (file): Promise<ContactItem> => {
        const data = await loadContact(file.name, errorHandler);
        return {
          name: data.name,
          type: "contact",
          file: file.name,
        };
      })
    );

    // sort alphabetically by name (ascending)
    contacts.sort((a, b) => a.name.localeCompare(b.name));

    return contacts;
  }, errorHandler);
};

// ---- UPDATE CONTACT (EDIT SCREEN) ----
// The assignment says the JSON file should be recreated after modifying the contact. :contentReference[oaicite:1]{index=1}
export const updateContact = async (
  oldFileName: string,
  updated: ContactData,
  errorHandler?: ErrorHandler
): Promise<string> => {
  return onException(async () => {
    await ensureContactDirectoryExists();

    // delete old file if it exists
    const oldFile = new File(contactDirectory, oldFileName);
    if (oldFile.exists) {
      oldFile.delete();
    }

    // create a new file with possibly new name + new uuid
    const newFileName = await saveContact(updated, errorHandler);
    return newFileName;
  }, errorHandler);
};
