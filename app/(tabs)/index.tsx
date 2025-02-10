import {
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import useCryptoStore from "../zustand/store";
import { Crypto } from "../types/general";
import CryptoDetails from "../components/CryptoDetails";

export default function CryptoList() {
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const { filteredCryptos, fetchCryptos, filterCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
  }, [fetchCryptos]);

  const openDetails = (crypto: Crypto) => {
    setSelectedCrypto(crypto);
    setShowDetails(true);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        onChangeText={filterCryptos}
        style={styles.cryptoSearch}
        placeholder="Buscar criptomoneda"
      />
      <FlatList
        data={filteredCryptos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cryptoItemContainer}
            onPress={() => openDetails(item)}
          >
            <Text style={{ fontSize: 16 }}>
              {item.name} ({item.symbol})
            </Text>
            <Text style={{ fontSize: 16, color: "#0072b1" }}>
              ${item.price_usd}
              <Text style={{ fontSize: 8, paddingLeft: 2 }}>USD</Text>
            </Text>
          </TouchableOpacity>
        )}
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
}

const styles = StyleSheet.create({
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
