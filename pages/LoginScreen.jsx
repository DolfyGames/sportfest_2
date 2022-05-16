import React from "react";
import { View, Text, Button } from "react-native";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Admin Panel</Text>
      <TextField
        value={password}
        label="password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        title="Log in"
        onPress={() => {
          if (password == "password") {
            navigation.navigate("Home");
          }
        }}
      />
    </View>
  );
};

export default LoginScreen;
