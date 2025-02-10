import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import { Crypto } from "@/app/types/general";
import useCryptoStore from "../zustand/store";
import { Icon } from "../utils/Icon";

interface CryptoDetailsProps {
  showDetails: boolean;
  setShowDetails: (value: boolean) => void;
  selectedCrypto: Crypto;
}

export default function CryptoDetails(props: CryptoDetailsProps) {
  if (!props.selectedCrypto) return null;
  const { showDetails, setShowDetails, selectedCrypto } = props;
  const { favorites, toggleFavorite } = useCryptoStore();
  const isFavorite = favorites.some((fav: any) => fav.id === selectedCrypto.id);
  return (
    <Modal
      visible={showDetails}
      animationType="slide"
      onRequestClose={() => setShowDetails(false)}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{selectedCrypto.name}</Text>
        <Text>Price: ${selectedCrypto.price_usd}</Text>
        <Text>Symbol: {selectedCrypto.symbol}</Text>
        <TouchableOpacity onPress={() => toggleFavorite(selectedCrypto)}>
          <Text style={styles.favoriteButton}>
            {isFavorite ? (
              <Icon name="heart" color="#2f95dc" />
            ) : (
              <Icon name="heart" color="gray" />
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowDetails(false)}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  modalTitle: { fontSize: 24, marginBottom: 16 },
  favoriteButton: { marginTop: 20, color: "green" },
  closeButton: { marginTop: 20, color: "blue" },
});
