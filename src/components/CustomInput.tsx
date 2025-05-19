import { TextInput, StyleSheet, TextInputProps } from "react-native";

interface CustomInputProps extends TextInputProps {
    placeholder: string;
  }

export default function CustomInput({ placeholder, secureTextEntry, ...rest }: CustomInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      placeholderTextColor="#888"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f3f4f6",
    padding: 12,
    borderRadius: 8,
    borderColor: "#e5e7eb",
    borderWidth: 1,
    width: "100%",
    fontSize: 16,
  },
});
