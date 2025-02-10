import React, { useMemo } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../components/Themed";
import { Crypto } from "@/app/types/general";
import useCryptoStore from "../zustand/store";
import { Icon } from "../utils/Icon";

interface CryptoDetailsProps {
  showDetails: boolean;
  setShowDetails: (value: boolean) => void;
  selectedCrypto: Crypto;
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({
  showDetails,
  setShowDetails,
  selectedCrypto,
}) => {
  const { favorites, toggleFavorite } = useCryptoStore();

  const isFavorite = useMemo(
    () => favorites.some((fav: Crypto) => fav.id === selectedCrypto.id),
    [favorites, selectedCrypto.id]
  );

  const handleClose = () => setShowDetails(false);

  if (!selectedCrypto) return null;

  return (
    <Modal
      visible={showDetails}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{selectedCrypto.name}</Text>
        <Text style={styles.cryptoDetail}>
          Price: ${selectedCrypto.price_usd}
        </Text>
        <Text style={styles.cryptoDetail}>Symbol: {selectedCrypto.symbol}</Text>

        <TouchableOpacity onPress={() => toggleFavorite(selectedCrypto)}>
          <Icon name="heart" color={isFavorite ? "#2f95dc" : "gray"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cryptoDetail: {
    fontSize: 18,
    marginVertical: 4,
    color: "#555",
  },
  closeButton: {
    marginTop: 30,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CryptoDetails;
