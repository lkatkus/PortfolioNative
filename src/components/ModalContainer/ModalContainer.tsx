import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { PixelBorders } from '@src/core';
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
      <PixelBorders />
      {handleCloseModal && (
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity onPress={handleCloseModal}>
            <View style={styles.closeButton}>
              <Ionicons name='ios-close' size={24} color={colors.black} />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.modalContentContainer}>{children}</View>
      </ScrollView>
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
    position: 'relative',
    maxHeight: '100%',
    maxWidth: 400,
    elevation: elevation.modal,
    backgroundColor: colors.white,
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
  },
  closeButton: {
    padding: sizing.m,
  },
  scrollContainer: {
    flexGrow: 0,
  },
  modalContentContainer: {
    paddingVertical: sizing.m,
    paddingHorizontal: sizing.xl,
    minWidth:'60%',
  },
});

export default ModalContainer;
