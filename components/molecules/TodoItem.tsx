import React, {useState} from 'react';
import {View, Text, Pressable, Modal, Alert} from 'react-native';
import OptionsModal from '../atoms/OptionsModal';

const TodoItem = ({id, title, description, navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="flex-row justify-center items-center border-2 w-[80vw] p-2 bg-slate-200 rounded-lg m-2">
      <Text className="flex-1 text-lg">{title}</Text>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text className="text-xl">⋮</Text>
      </Pressable>
      <OptionsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={id}
        title={title}
        description={description}
        navigation={navigation}
      />
    </View>
  );
};

export default TodoItem;
