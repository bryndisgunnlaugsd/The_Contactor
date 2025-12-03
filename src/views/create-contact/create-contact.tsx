import { CreateContactComp } from "@/src/components/create-contact/create-contact";
import { useRouter } from "expo-router";

export function CreateContact() {

    const router = useRouter();

    return (
        <CreateContactComp/>
    );
}