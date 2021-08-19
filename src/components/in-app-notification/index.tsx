import React, {
  createContext,
  useContext,
  FC,
  useState,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import { Animated } from 'react-native';

import BannerView from '../organisms/banner-view';

const NotificationContext: any = createContext({
  setMessageInfo: () => {},
});

const Banner: FC = () => {
  const {
    info: { title, description, onClick, lottieSrc, render },
    displayNotification,
    duration,
    setDisplayNotification,
  } = useContext(NotificationContext);

  let notificationRef: any = useRef(null);

  const opacity = useMemo(() => new Animated.Value(0), []);
  const offset = useMemo(() => new Animated.Value(0), []);

  const notificationStyles = {
    opacity: opacity,
    transform: [
      {
        translateY: offset,
      },
    ],
  };

  useEffect(() => {
    if (displayNotification) {
      notificationRef.current.measure(
        (
          _x: any,
          _y: any,
          _width: any,
          height: any,
          _pageX: any,
          _pageY: any
        ) => {
          offset.setValue(height * -1);

          Animated.sequence([
            Animated.parallel([
              Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
              }),
              Animated.timing(offset, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
              }),
            ]),

            Animated.delay(duration - 500),

            Animated.parallel([
              Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
              }),
              Animated.timing(offset, {
                toValue: height * -1,
                duration: 300,
                useNativeDriver: false,
              }),
            ]),
          ]).start(() => setDisplayNotification(false));
        }
      );
    }
  }, [displayNotification, offset, opacity, duration, setDisplayNotification]);

  if (displayNotification) {
    console.log('rednder', render);
    return (
      <BannerView
        ref={notificationRef}
        notificationStyles={notificationStyles}
        title={title}
        description={description}
        onPress={onClick}
        lottieSrc={lottieSrc}
        render={render}
      />
    );
  } else return null;
};

export const NotificationProvider = ({ children }: { children: any }) => {
  const [info, setInfo] = useState({});
  const [displayNotification, setDisplayNotification] = useState(false);
  const { duration = 4000 } = useContext(NotificationContext);

  const setMessageInfo = (props: any) => {
    setInfo(props);
    setDisplayNotification(true);
  };

  return (
    <NotificationContext.Provider
      value={{
        setMessageInfo,
        displayNotification,
        info,
        duration,
        setDisplayNotification,
      }}
    >
      {children}
      <Banner />
    </NotificationContext.Provider>
  );
};

export const useBanner = () => {
  const { setMessageInfo } = useContext(NotificationContext);
  const toast = {
    show: setMessageInfo,
  };

  return toast;
};
