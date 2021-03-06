import {PlatformColor} from 'react-native';

import {Colors, PlatformColorsAndroid, PlatformColorsIOS} from '@common/colors';
import {isIos} from '@common/const';

export function platformNativeColor(
  iosColor?: PlatformColorsIOS,
  androidColor?: PlatformColorsAndroid,
) {
  const selectedColor = isIos ? iosColor : androidColor;

  return selectedColor != null ? PlatformColor(selectedColor) : undefined;
}

export function platformLocalColor(iosColor?: Colors, androidColor?: Colors) {
  return isIos ? iosColor : androidColor;
}

export function plafromMixedColor(
  iosColor?: Colors | PlatformColorsIOS,
  androidColor?: Colors | PlatformColorsAndroid,
) {
  const selectedColor = isIos ? iosColor : androidColor;

  if (selectedColor != null) {
    return Object.values(Colors).includes(selectedColor as Colors)
      ? (selectedColor as Colors)
      : PlatformColor(selectedColor);
  } else {
    return undefined;
  }
}
