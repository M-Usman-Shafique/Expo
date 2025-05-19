import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function ModalPage() {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={toggleModal} />
      <Modal
        isVisible={open}
        onBackdropPress={toggleModal}
        useNativeDriver
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modalWrapper}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Sliding Centered Modal.</Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalWrapper: {
    justifyContent: 'center',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 30,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 12,
  },
});
