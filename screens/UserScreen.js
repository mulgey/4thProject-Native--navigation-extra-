import { View, Text, Button, StyleSheet } from "react-native";

// navigation prop, dosyamız bir "screen" olduğu için hazır olarak kullanılabildi
// navigation prop'a ait özelliklerden biri olan "toggleDrawer"ı kullandık
function UserScreen({ navigation }) {
  function çekmeceFonksiyonu() {
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Çekmeceyi açıver" onPress={çekmeceFonksiyonu} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
