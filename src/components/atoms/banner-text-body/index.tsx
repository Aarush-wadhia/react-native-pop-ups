import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IBannerTextBody {
  title: string;
  description: string;
}

export const BannerTextBody: FC<IBannerTextBody> = ({ title, description }) => (
  <View style={styles.textContainer}>
    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
      {title}
    </Text>
    <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
      {description}
    </Text>
  </View>
);
