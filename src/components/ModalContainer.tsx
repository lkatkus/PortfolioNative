import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ModalContainer: React.FC<any> = ({ children, handleCloseModal }) => (
  <View
    style={{
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.4)',
    }}
  >
    <View
      style={{
        width: '100%',
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
      }}
    >
      {handleCloseModal && (
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={handleCloseModal}>
            <Ionicons name='ios-close' size={24} color='black' />
          </TouchableOpacity>
        </View>
      )}
      <ScrollView>{children}</ScrollView>
    </View>
  </View>
);

export default ModalContainer;
