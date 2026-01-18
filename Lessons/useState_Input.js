import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function useState_Input() {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.main}>
      <Text>Şifrenizi giriniz </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 6 ? (
        <Text>Şifre en az 6 karakter olmalıdır!</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 100,
    margin: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

