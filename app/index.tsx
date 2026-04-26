import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("./../assets/images/logo.png")}
          placeholder={"not found"}
        />
        <Text style={styles.title}>Explore the app</Text>
        <Text style={styles.subtitle}>
          Now your finances are in one place and always under control
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.replace("/login")}
        >
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => router.replace("/signup")}
        >
          <Text style={styles.createAccountButtonText}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 320,
    height: 320,
  },
  title: {
    fontSize: 32,
    color: "#4D3E3E",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 17,
    textAlign: "center",
    maxWidth: 320,
    marginHorizontal: "auto",
    fontWeight: "300",
  },
  loginButton: {
    backgroundColor: "#46A56C",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 64,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  createAccountButton: {
    borderColor: "#46A56C",
    borderWidth: 1,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 16,
  },
  createAccountButtonText: {
    color: "#46A56C",
    fontSize: 16,
    fontWeight: "600",
  },
});
