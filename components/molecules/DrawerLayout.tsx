import * as React from 'react';
import {Drawer} from 'react-native-drawer-layout';
import Headers from './Headers';
import GlobalButton from '../atoms/GlobalButton';
import useAuth from '../../hooks/useAuth';
import {ref} from '../pages/Navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function DrawerLayout({children}: any) {
  const [open, setOpen] = React.useState(false);
  const {signout}: any = useAuth();
  const action = async () => {
    await signout();
    if (ref.isReady()) {
      ref.popToTop();
      ref.replace('Login');
    }
  };
  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <SafeAreaView>
            <GlobalButton
              shape="box"
              size="sm"
              border={0}
              action={action}
              text="LogOut"
            />
          </SafeAreaView>
        );
      }}>
      <Headers onPress={() => setOpen(prevOpen => !prevOpen)} text="≡" />
      {children}
    </Drawer>
  );
}
