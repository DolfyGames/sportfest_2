import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from "./pages/LoginScreen.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import SchuelerListen from "./pages/SchuelerListen.jsx";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Schuelerlisten: SchuelerListen
  },
  {
    initialRouteName: "Home" // muss dann wieder Login werden
  }
);

export default createAppContainer(AppNavigator);
