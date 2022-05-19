import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
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
        <div className="infobar">
          <Text>Klassenstufen</Text> 
          <AddButton className="addButton"onPress={()=> {}}title="+"/>
        </div>
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
      <div key={x} className="klassenstufenkontainer">
        <Text>Klassenstufe: {x.klassenstufe}</Text>
        {x.klassen.map((y) => {
          var klassen_ = (
            <div key={y}className="klasse">
              <Text>{y.klasse}</Text>
            </div>
          );
          return klassen_;
        })}
        <AddButton className="addButton"onPress={()=> {}}title="+"/>
      </div>

    );
    return klassenstufen;
  });
  return klassen;
};


const AddButton = ({ className, onPress, title }) => (
  <div className={className}>
  <TouchableOpacity onPress={onPress}>
      <Text >{title}</Text>
  </TouchableOpacity>
  </div>
);