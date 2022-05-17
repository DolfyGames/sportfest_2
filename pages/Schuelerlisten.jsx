import React from "react";
import { View, Text, Button } from "react-native";
import Style from "./styles.css";
import schueler from "../data/Schuelerliste.json";

const Schuelerlisten = ({ navigation }) => {
  return (
    <View>
      <div className="navbar">
        <Button
          title="Schülerlisten"
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

      <div>
        /** Klassen anzeigen + knopf für das hinzufügen von klassen und das einland von json datein oder so  */
        /** Klassen anzeigen, nach klassenstuffen listen klassen einer Klassenstufe nebeneinander, klassenstufen unter einenander  */
        /** über all einen knopf für das laden von json listen oder so  */
      </div>
    </View>
  );
};

export default Schuelerlisten;