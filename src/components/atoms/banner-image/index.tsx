import React, { FC } from 'react';
import { View, Image } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

interface IBannerImage {
  lottieSrc?: string;
  imageSrc?: string;
  animate?: boolean;
}

export const BannerImage: FC<IBannerImage> = ({
  lottieSrc,
  imageSrc,
  animate,
}) => {
  if (lottieSrc && animate) {
    return (
      <View style={styles.container}>
        <LottieView
          source={
            lottieSrc
              ? lottieSrc
              : require('../../../assets/lottie/bell_notification.json')
          }
          autoPlay
          style={styles.lottie}
        />
      </View>
    );
  } else if (imageSrc) {
    return (
      <View style={styles.container}>
        <Image
          source={
            imageSrc ? imageSrc : require('../../../assets/images/smile.jpg')
          }
          style={styles.image}
        />
      </View>
    );
  } else {
    return null;
  }
};
