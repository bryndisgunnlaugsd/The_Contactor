import { CameraView, useCameraPermissions } from "expo-camera";
import * as Linking from "expo-linking";
import React, { useEffect, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface PhotoResult {
  uri: string;
  width: number;
  height: number;
}

interface CameraComponentProps {
  onPictureTaken: (photo: PhotoResult) => void;
  onClose: () => void;
}

export function CameraComponent({ onPictureTaken, onClose }: CameraComponentProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) return <Text>Loading...</Text>;

  if (!permission.granted) {
    return (
      <View style={{ padding: 20 }}>
        <Text style={styles.access}>
          Camera access is required.
        </Text>

        {permission.canAskAgain ? (
          <TouchableOpacity
            style={{ padding: 12 }}
            onPress={requestPermission}
          >
            <Text style={styles.permission}>
              Grant Permission
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ padding: 12 }}
            onPress={() => Linking.openSettings()}
          >
            <Text style={styles.permission}>
              Open Settings
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo) onPictureTaken(photo);
    }
  };

  return (
    <View style={styles.cameraContainer}>
      <CameraView ref={cameraRef} facing="back" style={styles.camera} />

      <TouchableOpacity style={styles.closeCamera} onPress={onClose}>
        <Text style={{ fontSize: 28, color: "white" }}>✖</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.shutterButton} onPress={takePicture}>
        <Text style={{ fontSize: 30 }}>📸</Text>
      </TouchableOpacity>
    </View>
  );
}
