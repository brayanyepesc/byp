import React, { useCallback } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/Themed";
import useCryptoStore from "../zustand/store";
import { Crypto } from "../types/general";
import { Icon } from "../utils/Icon";

const FavoriteItem: React.FC<{
  crypto: Crypto;
  onToggle: (crypto: Crypto) => void;
}> = ({ crypto, onToggle }) => (
  <TouchableOpacity style={styles.cryptoItemContainer}>
    <Text style={styles.cryptoName}>
      {crypto.name} ({crypto.symbol})
    </Text>
    <TouchableOpacity onPress={() => onToggle(crypto)}>
      <Icon name="heart" color="#2f95dc" />
    </TouchableOpacity>
  </TouchableOpacity>
);

const Favorites: React.FC = () => {
  const { favorites, toggleFavorite } = useCryptoStore();

  const handleToggleFavorite = useCallback(
    (crypto: Crypto) => {
      toggleFavorite(crypto);
    },
    [toggleFavorite]
  );

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FavoriteItem crypto={item} onToggle={handleToggleFavorite} />
          )}
        />
      ) : (
        <Text style={styles.emptyText}>
          Aún no tienes criptomonedas favoritas, ¿qué esperas para agregar una?
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cryptoItemContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: "#f6f6f6",
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cryptoName: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
});

export default Favorites;
