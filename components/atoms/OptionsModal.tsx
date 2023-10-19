import React, {useState} from 'react';
import {Modal, Alert, View, Text, Pressable} from 'react-native';
import GlobalButton from './GlobalButton';
import {useTheme} from '@react-navigation/native';
import useTodo from '../../hooks/useTodo';
import {ref} from '../pages/Navigation';

const OptionsModal = ({
  modalVisible,
  setModalVisible,
  id,
  title,
  description,
}: any) => {
  const {removeTodoItem}: any = useTodo();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setDeleteModalVisible(!deleteModalVisible);
        }}>
        <View className="flex-1 items-center justify-center">
          <View className="bg-gray-100 p-4">
            <Text>Are you sure you want to delete</Text>
            <GlobalButton
              size="md"
              text="Yes"
              shape="rd-box"
              border={0}
              action={() => removeTodoItem(id)}
            />
            <GlobalButton
              size="md"
              text="No"
              shape="rd-box"
              border={0}
              action={() => setDeleteModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View className="flex-1 items-center justify-center">
          <View className="bg-gray-100 p-4">
            <GlobalButton
              size="md"
              text="View"
              shape="rd-box"
              border={0}
              action={() => {
                setModalVisible(false);
                if (ref.isReady()) {
                  ref.navigate('ViewEdit', {
                    id: id,
                    title: title,
                    description: description,
                    action: 'view',
                  });
                }
              }}
            />
            <GlobalButton
              size="md"
              text="Edit"
              shape="rd-box"
              border={0}
              action={() => {
                setModalVisible(false);
                if (ref.isReady()) {
                  ref.navigate('ViewEdit', {
                    id: id,
                    title: title,
                    description: description,
                    action: 'edit',
                  });
                }
              }}
            />
            <GlobalButton
              size="md"
              text="Delete"
              shape="rd-box"
              border={0}
              action={() => {
                setModalVisible(false);
                setDeleteModalVisible(true);
              }}
            />
            <GlobalButton
              size="md"
              text="Exit"
              shape="rd-box"
              border={0}
              action={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OptionsModal;
