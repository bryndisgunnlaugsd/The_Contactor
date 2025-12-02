import { Directory, File, Paths } from "expo-file-system";

const contactDirectory = new Directory(Paths.document, "contacts");

export interface ContactItem {
    name: string;
    type: "contact";
    file: string;
}

//Error handler
type ErrorHandler = (error: Error) => void;

const onException = async <T>(
    cb: () => T | Promise<T>,
    errorHandler?: ErrorHandler
): Promise <T | null> => {
    try {
        return await cb();
    } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err))

        if (errorHandler) {
            errorHandler(error);
        } else {
            console.error("File service error", error.message);
        }

        return null;
    }
};

const setupDirectory = async (): Promise<void> => {
    await onException(() => {
        if (!contactDirectory.exists){
            contactDirectory.create();
        }
    });
};

const loadContact = async (fileName: string): Promise<string> => {
    const result = await onException(() => {
        const file = new File(contactDirectory.uri, fileName);
        return file.base64();
    });

    if (result === null) {
        console.warn("Failed to load contact");
        return "";
    }

    return result;
};

export const addContact = async (contactLocation: string): Promise<ContactItem> => {
    await setupDirectory();

    const folderSplit = contactLocation.split("/");
    const fileName = folderSplit[folderSplit.length - 1]

    const sourceFile = new File(contactLocation)
    const destinationFile = new File(contactDirectory.uri, fileName);

    await onException(() => {
        sourceFile.copy(destinationFile);
    });

    const fileContent = await loadContact(fileName);

    return {
        name: fileName,
        type: "contact",
        file: fileContent,
    };
};

export const getAllContacts = async (): Promise<ContactItem[]> => {
    await setupDirectory();

    const items = await onException(() => contactDirectory.list());
    if (!items || items.length === 0) {
        return [];
    }

    const contactFiles = items.filter((item) => item instanceof File).map((item) => (item as File).name);
    
    return Promise.all(
        contactFiles.map(async (fileName: string): Promise<ContactItem> => {
        const fileContent = await loadContact(fileName);
        return {
            name: fileName,
            type: "contact",
            file: fileContent,
        };
        })
    );
};