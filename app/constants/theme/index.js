import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  darkBackground: '#121212',
  androidBlue: '#4a84f1',
};
export const SIZES = {
  // global sizes
  base: 8,
  radius1: 6,
  radius2: 12,
  padding: 15,
  // title sizes
  textFont: 14,
  pageTitle: 22,
  mainTitle: 36,
  largeTitle: 40,
  blockHeight: 54,
  blockWidth: 327,
  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 20,
  body4: 18,
  body5: 16,
  body6: 14,
  body7: 13,
  body8: 12,
  // font weights
  fontWeight0: '400',
  fontWeight1: '500',
  fontWeight2: '600',
  fontWeight3: '700',
  // app dimensions
  width,
  height,
};

export const POSITIONING = {
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  align: {
    alignItems: 'center',
  },
  justify: {
    justifyContent: 'center',
  },
};

export const DarkTheme = {
  flex: 1,
  backgroundColor: COLORS.darkBackground,
};