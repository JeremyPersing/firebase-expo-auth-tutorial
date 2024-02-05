import { Button, StyleSheet } from "react-native";
import { router } from "expo-router";

import { Text, View } from "@/components/Themed";

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Landing Screen</Text>
      <Button title={"Login"} onPress={() => router.push("/login")} />
      <Button title={"Register"} onPress={() => router.push("/register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
