import * as React from 'react';
import {Button, useTheme} from 'react-native-paper';
import fontScaling from '../../utils/fontScaling';
import {hp, wp} from '../../utils/screenSizes';

const PaperButton = ({label, color, icon, onPress, width, height}) => {
  const theme = useTheme();

  return (
    <Button
      icon={icon}
      onPress={onPress}
      rippleColor="transparent"
      style={{
        borderRadius: 8,
        backgroundColor: color || theme.colors.primary,
        justifyContent: 'center',
        width: width || wp('30%'),
        height: height || hp('7%'),
      }}
      labelStyle={{
        fontFamily: theme.fonts.semibold,
        fontSize: fontScaling(2),
        lineHeight: fontScaling(2.5),
      }}
      mode="contained">
      {label}
    </Button>
  );
};

export default PaperButton;
