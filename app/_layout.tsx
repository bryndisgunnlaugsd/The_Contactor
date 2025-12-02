import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
      }
      
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
        headerShown: true,
        title: "Contacts",
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


  </Stack>
  </GestureHandlerRootView>
  );
}
