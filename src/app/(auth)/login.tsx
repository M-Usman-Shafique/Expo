import CustomButton from '@/src/components/CustomButton'
import CustomInput from '@/src/components/CustomInput'
import { Link, router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Login() {
  const login = () => {
    router.navigate("/signup")
  }
  return (
    <View style={styles.container}> 
      <Text style={styles.heading}>Login</Text>
      <View style={styles.form}>
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Password" secureTextEntry />
        <CustomButton title="Login" onPress={login}/>
      </View>
      <Link href="/signup" style={styles.link}>Go to Signup</Link>
    </View>
  )
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