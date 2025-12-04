import { Stack } from "expo-router";
import { Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-get-random-values";

export default function RootLayout() {

  return (
  <GestureHandlerRootView>
  <Stack
    screenOptions={{
      headerShown: true,
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
      headerTitle: () => (
          <Image
            source={require("@/assets/images/contactor.png")}
            style={{width: 184, height: 40}}
          />
        ),
      
    }}>
    <Stack.Screen
      name="index"
      options={{
        headerShown: false,
        title: "TheContactor",
      }}/>

    <Stack.Screen
      name="contact-list"
      options={{
        title: "",
        headerBackVisible: false,
        headerTitleAlign: "center",
      }}/>

    <Stack.Screen
      name="contact-detail"
      options={{
        headerShown: true,
        title: "Contact Detail",
      }}/>

    <Stack.Screen
      name="create-contact"
      options={{
        headerShown: true,
        title: "Create Contact",
      }}/>

      <Stack.Screen
      name="edit-contact"
      options={{
        headerShown: true,
        title: "Edit Contact",
      }}/>


  </Stack>
  </GestureHandlerRootView>
  );
}
