import React from "react";
import { View, Text, Button } from "react-native";
import Style from "./styles.css";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <div className="navbar">
        <Button
          title="Schüler Listen"
          onPress={() => navigation.navigate("Schuelerlisten")}
        />
        <Button
          title="Disziplinen"
          onPress={() => navigation.navigate("Disziplinen")}
        />
        <Button
          title="Bewertung"
          onPress={() => navigation.navigate("Bewertung")}
        />
        <Button
          title="Auswertung"
          onPress={() => navigation.navigate("Auswertung")}
        />
      </div>
    </View>
  );
};

export default HomeScreen;
