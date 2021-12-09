import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ModalContainerProps {
  isFullScreen?: boolean;
  withBackground?: boolean;
  handleCloseModal?: () => void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  handleCloseModal,
  isFullScreen = true,
  withBackground = true,
}) => (
  <View
    style={[
      styles.modalContainer,
      {
        flex: isFullScreen ? 1 : undefined,
        backgroundColor: withBackground ? 'rgba(255,255,255,0.4)' : undefined,
      },
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
    padding: 24,
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
