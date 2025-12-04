import { EditContactComp } from "@/src/components/edit-contact/edit-contact";
import { useRouter } from "expo-router";

export function EditContact() {

    const router = useRouter();

    return (
        <EditContactComp/>
    );
}