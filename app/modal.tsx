import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Linking, Pressable } from "react-native";
import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
  const openLinkedIn = () => {
    Linking.openURL("https://www.linkedin.com/in/brayan-yepesc/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola!</Text>
      <Text style={styles.subtitle}>
        Soy Brayan Yepes, Desarrollador de esta App
      </Text>
      <Pressable style={styles.button} onPress={openLinkedIn}>
        <Text style={styles.buttonText}>LinkedIn</Text>
      </Pressable>
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
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0072b1",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
