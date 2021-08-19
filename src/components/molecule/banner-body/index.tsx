import React, { FC, memo } from 'react';
import { SafeAreaView } from 'react-native';

import { BannerImage } from '../../atoms/banner-image';
import { BannerTextBody } from '../../atoms/banner-text-body';

import styles from './styles';

interface IBannerBody {
  title: string;
  description: string;
  lottieSrc?: string;
  imageSrc?: string;
  animate?: boolean;
}

const BannerBody: FC<IBannerBody> = (props: any) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <BannerImage lottieSrc={props.lottieSrc} animate={props.animate} />
        <BannerTextBody title={props.title} description={props.description} />
      </SafeAreaView>
    </>
  );
};

export default memo(BannerBody);
