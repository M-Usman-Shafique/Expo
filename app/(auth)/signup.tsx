import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link, router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Signup() {
  const signup = () => {
    router.navigate("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>
      <View style={styles.form}>
        <CustomInput placeholder="Name" />
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Password" secureTextEntry />
        <CustomButton title="Sign Up" onPress={signup} />
      </View>
      <Link href="/" style={styles.link}>Go to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    gap: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  form: {
    gap: 12,
  },
  link: {
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#3b82f6",
  },
});