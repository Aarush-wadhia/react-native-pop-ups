import React, { createContext, useContext, FC, useState, useMemo } from 'react';
import { Animated, View, Text } from 'react-native';

import styles from './styles';

const ToastContext: any = createContext({
  setMessageInfo: () => {},
  dismissToast: () => {},
});

const Toast: FC = () => {
  const {
    info: { message, gravity = 'bottom' },
    displayToast,
  } = useContext(ToastContext);

  const getGravity = useMemo(() => toastGravity(gravity), [gravity]);

  if (displayToast && message && message?.length !== 0) {
    return (
      <Animated.View style={[styles.container, getGravity]}>
        <View style={styles.messageContainer}>
          <Text style={[styles.message]}> {message} </Text>
        </View>
      </Animated.View>
    );
  } else {
    return null;
  }
};

const toastGravity = (gravity: any) => {
  switch (gravity) {
    case 'bottom-right':
      return { bottom: 0, right: 0 };
    case 'bottom-left':
      return { bottom: 0, left: 0 };
    case 'top':
      return { top: 0 };
    case 'top-right':
      return { top: 0, right: 0 };
    case 'top-left':
      return { top: 0, left: 0 };
    default:
      return { bottom: 0 };
  }
};

export const ToastContextProvider = ({ children }: { children: any }) => {
  const [info, setInfo] = useState({});
  const [displayToast, setDisplayToast] = useState(false);

  const setMessageInfo = (props: any) => {
    setInfo(props);
    showToast();
  };

  const showToast = () => {
    const { span = 3000 }: any = info;
    setDisplayToast(true);
    if (!displayToast) {
      setTimeout(() => {
        setDisplayToast(false);
      }, span);
    }
  };

  const dismissToast = () => {
    if (displayToast) {
      setDisplayToast(false);
    }
  };

  return (
    <ToastContext.Provider
      value={{ setMessageInfo, info, displayToast, dismissToast }}
    >
      {children}
      <Toast />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const { setMessageInfo, dismissToast } = useContext(ToastContext);
  const toast = {
    show: setMessageInfo,
    dismiss: dismissToast,
  };

  return toast;
};
