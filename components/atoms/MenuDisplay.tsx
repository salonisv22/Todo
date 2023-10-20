import React, {useState} from 'react';

import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {ref} from '../pages/Navigation';
import GlobalButton from './GlobalButton';
import {Modal, View, Text} from 'react-native';
import useTodo from '../../hooks/useTodo';

const MenuDisplay = ({id, title, description, showMenuText}: any) => {
  const [visible, setVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const {removeTodoItem}: any = useTodo();

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const editAction = () => {
    if (ref.isReady()) {
      ref.navigate('ViewEdit', {
        id: id,
        title: title,
        description: description,
        action: 'view',
      });
    }
  };
  const deleteAction = () => {
    setVisible(false);
    setDeleteModalVisible(true);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => {
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
      <Menu
        visible={visible}
        anchor={<Text onPress={showMenu}>{showMenuText}</Text>}
        onRequestClose={hideMenu}>
        <MenuItem onPress={editAction}>Edit</MenuItem>
        <MenuItem onPress={deleteAction}>Delete</MenuItem>
      </Menu>
    </View>
  );
};
export default MenuDisplay;
