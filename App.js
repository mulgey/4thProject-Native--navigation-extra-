import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// components
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name="User" component={UserScreen} />
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerStyle: { backgroundColor: "#cccccc" } }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
