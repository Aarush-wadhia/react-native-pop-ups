import { requireNativeComponent, ViewStyle } from 'react-native';

type PopUpsProps = {
  color: string;
  style: ViewStyle;
};

export const PopUpsViewManager = requireNativeComponent<PopUpsProps>(
'PopUpsView'
);

export default PopUpsViewManager;
