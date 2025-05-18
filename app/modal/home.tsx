import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

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
        onBackButtonPress={toggleModal}
        onSwipeComplete={toggleModal}
        swipeDirection="down"
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>This is a sliding modal.</Text>
          <Button title="Close Modal" onPress={toggleModal} />
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    height: SCREEN_HEIGHT * 0.5,
    backgroundColor: 'white',
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
  },
});