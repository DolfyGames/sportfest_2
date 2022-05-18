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

      <div className="klassenkontainer">
        {/** Klassen anzeigen + knopf für das hinzufügen von klassen und das
        einland von json datein oder so */
        /** Klassen anzeigen, nach
        klassenstuffen listen klassen einer Klassenstufe nebeneinander,
        klassenstufen unter einenander */
        /** über all einen knopf für das laden
  von json listen oder so **/}
        <Schuelerlst/>
      </div>
    </View>
  );
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default Schuelerlisten;

var Schuelerlst = () => {
  var klassen = schueler.klassenstufen.map((x) => {
    var klassenstufen = (
      <div key={x} className="klassenstufe">
        <Text>{x.klassenstufe}</Text>
        {x.klassen.map((y) => {
          var klassen_ = (
            <div key={y}className="klasse">
              <Text>{y.klasse}</Text>
            </div>
          );
          return klassen_;
        })}
      </div>
    );
    return klassenstufen;
  });
  return klassen;
};
