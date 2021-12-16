import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors, sizing, elevation } from '@src/constants';

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
        backgroundColor: withBackground ? colors.whiteOpaque : undefined,
      },
    ]}
  >
    <View style={styles.modal}>
      {handleCloseModal && (
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity onPress={handleCloseModal}>
            <View style={styles.closeButton}>
              <Ionicons name='ios-close' size={24} color={colors.black} />
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
    padding: sizing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    maxHeight: '100%',
    maxWidth: 400,
    borderWidth: 1,
    elevation: elevation.modal,
    borderColor: colors.black,
    backgroundColor: colors.white,
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
  },
  closeButton: {
    paddingBottom: 0,
    padding: sizing.m,
  },
  modalContentContainer: {
    flexGrow: 0,
    paddingVertical: sizing.m,
    paddingHorizontal: sizing.l,
  },
});

export default ModalContainer;
