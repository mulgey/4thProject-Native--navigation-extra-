import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

// components
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* her bir "Drawer.Screen" için belirlenen ortak özellikleri burada screenOptions içerisine toparladık */}
      <Drawer.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: "#C567E9" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#EEC1FF",
          drawerActiveTintColor: "#A700E7",
          drawerStyle: { backgroundColor: "#EEEEEE" },
        }}
      >
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel: "Users' Place",
            drawerIcon: ({ color }) => (
              // "color" property "drawerActiveTintColor" daki değeri aşağı taşır
              <Ionicons name="home" color={color} size={18} />
            ),
          }}
        />
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Guyz!",
            drawerIcon: ({ color, size }) => (
              // "color" property "drawerActiveTintColor" daki değeri aşağı taşır
              // size için sayı vermeyip property olarak taşıyınca 18'den daha büyük oldu
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
