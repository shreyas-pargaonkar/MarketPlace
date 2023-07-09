import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);

  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };
  return (
    <View>
      <ScrollView>
        {/* Image */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to Cart Button*/}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
      {/* Navigation Icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 34, fontWeight: "500", marginBottom: 10 },
  price: { fontSize: 16, fontWeight: "500", letterSpacing: 1.3 },
  description: {
    fontSize: 18,
    marginVertical: 10,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "500", fontSize: 16 },
});

export default ProductDetailsScreen;
