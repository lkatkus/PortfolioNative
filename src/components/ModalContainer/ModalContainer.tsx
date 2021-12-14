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
            <View style={styles.closeButton}>
              <Ionicons name='ios-close' size={24} color='black' />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView style={styles.modalContentContainer}>{children}</ScrollView>
    </View>
  </View>
);

const styles = StyleSheet.create({
  modalContainer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    maxHeight: '100%',
    minWidth: 200,
    maxWidth: 400,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    elevation: 10,
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
  },
  closeButton: {
    padding: 8,
    paddingBottom: 0,
  },
  modalContentContainer: {
    flexGrow: 0,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default ModalContainer;
