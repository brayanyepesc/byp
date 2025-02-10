import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import useCryptoStore from "../zustand/store";
import { Icon } from "../utils/Icon";

export default function Favorites() {
  const { favorites, toggleFavorite } = useCryptoStore();
  return (
    <View style={{ padding: 20 }}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cryptoItemContainer}>
              <Text style={{ fontSize: 16 }}>
                {item.name} ({item.symbol})
              </Text>
              <Text onPress={() => toggleFavorite(item)}>
                <Icon name="heart" color="#2f95dc" />
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No hay favoritos</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cryptoItemContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: "#f6f6f6",
    marginBottom: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
