import React, { forwardRef, memo } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

import BannerBody from '../../molecule/banner-body';

import styles from './styles';

interface IBannerView {
  notificationStyles: any;
  title: string;
  description: string;
  animate?: boolean;
  lottieSrc?: string;
  imageSrc?: string;
  onPress?: () => void;
  render?: any;
}

const BannerView = ({ ...props }: IBannerView, ref: any) => (
  <Animated.View
    style={[styles.notification, props.notificationStyles]}
    ref={ref}
  >
    <TouchableOpacity>
      {props.render ? <View>{props.render}</View> : <BannerBody {...props} />}
    </TouchableOpacity>
  </Animated.View>
);

export default memo(forwardRef(BannerView));
