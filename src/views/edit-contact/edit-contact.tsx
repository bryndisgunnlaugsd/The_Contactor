import { EditContactComp } from "@/src/components/edit-contact/edit-contact";
import { useLocalSearchParams } from "expo-router";

export function EditContactView() {

    const { fileName } = useLocalSearchParams<{ fileName: string }>();


    return (
        <EditContactComp fileName={fileName ? String(fileName) : null}/>
    );
}