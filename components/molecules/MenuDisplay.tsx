import React, {useState} from 'react';
import {Menu, MenuItem} from 'react-native-material-menu';
import {ref} from '../pages/Navigation';
import GlobalButton from '../atoms/GlobalButton';
import {Modal, View, Text, Platform} from 'react-native';
import {removeTodoItem} from '../../feature/countTodoSlice';
import {useDispatch} from 'react-redux';

const MenuDisplay = ({id, showMenuText}: any) => {
  const [visible, setVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const dispatch = useDispatch<any>();

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const editAction = () => {
    if (ref.isReady()) {
      ref.navigate('AddTodo', {
        id: id,
        action: 'edit',
      });
    }
  };
  const deleteAction = () => {
    setVisible(false);
    setTimeout(
      () => setDeleteModalVisible(true),
      Platform.OS === 'ios' ? 400 : 0,
    );
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
              action={() => dispatch(removeTodoItem(id))}
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
