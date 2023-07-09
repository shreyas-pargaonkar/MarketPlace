import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";

import { useSelector } from "react-redux";

const ProductScreen = ({navigation}) => {

  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Product Details", )}
          style={styles.imageContainer}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: { width: "50%", padding: 1 },
  image: { width: "100%", aspectRatio: 1 },
});

export default ProductScreen;