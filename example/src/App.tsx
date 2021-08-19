import React, { FC } from 'react';

import { View, Button } from 'react-native';
import {
  ToastContextProvider,
  useToast,
  NotificationProvider,
  useBanner,
} from 'react-native-pop-ups';

export const App: FC = () => {
  return (
    <NotificationProvider>
      <ToastContextProvider>
        <Example />
      </ToastContextProvider>
    </NotificationProvider>
  );
};

const Example = () => {
  const toast = useToast();
  const notification = useBanner();

  return (
    <View style={{ flex: 1 }}>
      <Button title="Toast" onPress={() => toast.show({ message: 'Yo' })} />
      <Button
        title="Notification"
        onPress={() =>
          notification.show({
            title: 'Done',
          })
        }
      />
    </View>
  );
};

export default App;
