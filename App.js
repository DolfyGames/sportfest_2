import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from "./pages/LoginScreen.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import SchuelerListen from "./pages/Schuelerlisten.jsx";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Schuelerlisten: SchuelerListen
  },
  {
    initialRouteName: "Schuelerlisten" // muss dann wieder Login werden
  }
);

export default createAppContainer(AppNavigator);
