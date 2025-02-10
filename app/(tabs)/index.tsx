import React, { useEffect, useState, useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "@/components/Themed";
import useCryptoStore from "../zustand/store";
import { Crypto } from "../types/general";
import CryptoDetails from "../components/CryptoDetails";

const CryptoItem: React.FC<{
  crypto: Crypto;
  onPress: (crypto: Crypto) => void;
}> = ({ crypto, onPress }) => (
  <TouchableOpacity
    style={styles.cryptoItemContainer}
    onPress={() => onPress(crypto)}
  >
    <Text style={styles.cryptoName}>
      {crypto.name} ({crypto.symbol})
    </Text>
    <Text style={styles.cryptoPrice}>
      ${crypto.price_usd}
      <Text style={styles.usdText}> USD</Text>
    </Text>
  </TouchableOpacity>
);

const CryptoList: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const { filteredCryptos, fetchCryptos, filterCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
  }, [fetchCryptos]);

  const openDetails = useCallback((crypto: Crypto) => {
    setSelectedCrypto(crypto);
    setShowDetails(true);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={filterCryptos}
        style={styles.cryptoSearch}
        placeholder={`Buscar criptomoneda (${filteredCryptos.length} disponibles)`}
      />
      <FlatList
        data={filteredCryptos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CryptoItem crypto={item} onPress={openDetails} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>
            No se encontraron criptomonedas.
          </Text>
        }
      />
      {selectedCrypto && (
        <CryptoDetails
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          selectedCrypto={selectedCrypto}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cryptoSearch: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    fontSize: 18,
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
  cryptoPrice: {
    fontSize: 16,
    color: "#0072b1",
  },
  usdText: {
    fontSize: 10,
    paddingLeft: 2,
  },
  emptyListText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
});

export default CryptoList;
