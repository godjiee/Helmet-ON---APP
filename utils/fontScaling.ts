import {RFPercentage as rfperc} from 'react-native-responsive-fontsize';
import {PixelRatio} from 'react-native';
import {hp} from './screenSizes';
const fontScaling = (percent: number) => {
  return rfperc(
    percent /
      (PixelRatio.getFontScale() -
        (PixelRatio.getFontScale() - 1) * (hp('100%') / 1600)),
  );
};

export default fontScaling;
