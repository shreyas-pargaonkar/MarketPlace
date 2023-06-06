import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductScreen from "./src/data/Screens/ProductScreen";
import ProductDetailsScreen from "./src/data/Screens/ProductDetailsScreen";
import ShoppingCart from "./src/data/Screens/ShoppingCart";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen />*/}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCart />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
