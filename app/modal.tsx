import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Linking,
  Pressable,
  Animated,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { useRef } from "react";

export default function ModalScreen() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const openLinkedIn = () => {
    Linking.openURL("https://www.linkedin.com/in/brayan-yepesc/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola!</Text>
      <Text style={styles.subtitle}>
        Soy Brayan Yepes, Desarrollador de esta App
      </Text>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable
          style={styles.button}
          onPress={openLinkedIn}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.buttonText}>LinkedIn</Text>
        </Pressable>
      </Animated.View>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2d3436",
  },
  subtitle: {
    fontSize: 20,
    color: "#636e72",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0072b1",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
});
