import { Image } from "expo-image";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { brand } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const route = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = () => {
    if (!data.email.trim()) {
      Alert.alert("Validation", "Please enter your email address.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      Alert.alert("Validation", "Please enter a valid email address.");
      return;
    }
    if (!data.password) {
      Alert.alert("Validation", "Please enter your password.");
      return;
    }
    if (data.password.length < 6) {
      Alert.alert("Validation", "Password must be at least 6 characters.");
      return;
    }
    if (data.password !== data.confirmPassword) {
      Alert.alert("Validation", "Passwords do not match.");
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.keyboardView}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.loginText}>Sign up</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="menna@domain.com"
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              accessibilityLabel="Email address"
              value={data.email}
              onChangeText={(email) => setData({ ...data, email })}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Create a password</Text>
            <View style={styles.passwordContainer}>
              <Ionicons
                name={passwordVisible ? "eye" : "eye-off"}
                size={24}
                color={brand.darkText}
                accessibilityLabel={
                  passwordVisible ? "Hide password" : "Show password"
                }
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
              <TextInput
                placeholder="must be 8 characters"
                secureTextEntry={!passwordVisible}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                autoComplete="password"
                accessibilityLabel="Password"
                value={data.password}
                onChangeText={(password) => setData({ ...data, password })}
                style={styles.passwordInput}
              />
            </View>
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <Ionicons
                name={passwordVisible ? "eye" : "eye-off"}
                size={24}
                color={brand.darkText}
                accessibilityLabel={
                  passwordVisible ? "Hide password" : "Show password"
                }
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
              <TextInput
                placeholder="repeat password"
                secureTextEntry={!passwordVisible}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                autoComplete="password"
                accessibilityLabel="Password"
                value={data.confirmPassword}
                onChangeText={(confirmPassword) =>
                  setData({ ...data, confirmPassword })
                }
                style={styles.passwordInput}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.loginSocialLine}>
            <Text style={styles.loginSocialDivider}>___________________</Text>
            <Text style={styles.loginSocialText}>Or Register with</Text>
            <Text style={styles.loginSocialDivider}>___________________</Text>
          </View>
          <View style={styles.socialsContainer}>
            <TouchableOpacity style={styles.btnSocial}>
              <Image
                source={require("../../assets/images/face.png")}
                style={styles.btnSocialImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSocial}>
              <Image
                source={require("../../assets/images/google.png")}
                style={styles.btnSocialImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSocial}>
              <Image
                source={require("../../assets/images/apple.png")}
                style={styles.btnSocialImage}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: brand.darkText,
              textAlign: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            Already have an account?{" "}
            <TouchableOpacity onPress={() => route.push("/login")}>
              <Text
                style={{
                  color: brand.primary,
                  fontWeight: "600",
                  marginBottom: -4,
                  marginLeft: 4,
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logo: {
    width: 160,
    height: 160,
    marginHorizontal: "auto",
  },
  loginText: {
    fontSize: 30,
    fontWeight: "bold",
    color: brand.darkText,
    marginTop: -20,
    marginBottom: 12,
  },
  label: {
    color: brand.darkText,
  },
  form: {
    width: "100%",
    marginTop: 20,
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: brand.border,
    borderRadius: 10,
    height: 56,
    paddingHorizontal: 16,
  },
  passwordContainer: {
    borderWidth: 1,
    borderColor: brand.border,
    borderRadius: 10,
    height: 56,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
  },
  loginButton: {
    backgroundColor: brand.primary,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 32,
    width: "100%",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  loginSocialLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 36,
  },
  loginSocialText: {
    color: brand.darkText,
    textAlign: "center",
  },
  loginSocialDivider: {
    color: "#D8DADC",
    marginTop: -8,
  },
  socialsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 24,
  },
  btnSocial: {
    width: 56,
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: brand.border,
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  btnSocialImage: {
    width: 24,
    height: 24,
  },
});
