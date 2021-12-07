import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ModalContainerProps {
  withBackground?: boolean;
  handleCloseModal?: () => void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  handleCloseModal,
  withBackground = true,
}) => (
  <View
    style={[
      styles.modalContainer,
      { backgroundColor: withBackground ? 'rgba(255,255,255,0.4)' : undefined },
    ]}
  >
    <View style={styles.modal}>
      {handleCloseModal && (
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity onPress={handleCloseModal}>
            <Ionicons name='ios-close' size={24} color='black' />
          </TouchableOpacity>
        </View>
      )}
      <ScrollView>{children}</ScrollView>
    </View>
  </View>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 32,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  modal: {
    maxHeight: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    elevation: 10,
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
  },
});

export default ModalContainer;
