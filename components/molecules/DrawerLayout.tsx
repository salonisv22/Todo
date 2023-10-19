import * as React from 'react';
import {Pressable, Text} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import Headers from './Headers';

export default function DrawerLayout({children}: any) {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}>
      <Headers onPress={() => setOpen(prevOpen => !prevOpen)} text="≡" />
      {children}
    </Drawer>
  );
}
