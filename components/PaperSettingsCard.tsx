import * as React from 'react';
import {Card, Text, Switch, useTheme} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fontScaling from '../utils/fontScaling';
import {hp, wp} from '../utils/screenSizes';

const PaperSettingsCard = ({title, description, icon, status}) => {
  const theme = useTheme();
  const [isEnabled, setIsEnabled] = React.useState(status === 'on');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const iconSize = hp('3.5%');
  const fontSize = fontScaling(2);

  return (
    <Card
      style={{
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
      <Card.Content>
        <View style={styles.firstTextContainer}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              color={'black'}
              name={icon}
              size={iconSize}
              style={styles.cardIcon}
            />
          </View>
          <View style={styles.text}>
            {status !== 'none' ? (
              <Text
                variant="titleLarge"
                style={[
                  styles.title,
                  {
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontSize: fontScaling(3),
                  },
                ]}>
                {isEnabled ? 'Dark' : 'Light'}
              </Text>
            ) : (
              <Text
                variant="titleLarge"
                style={[
                  styles.title,
                  {
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontSize: fontScaling(3),
                  },
                ]}>
                {title}
              </Text>
            )}
          </View>
          {status !== 'none' && (
            <View style={styles.switchContainer}>
              <Switch
                value={isEnabled}
                onValueChange={toggleSwitch}
                color="#333"
              />
            </View>
          )}
        </View>
        <View style={styles.secondTextContainer}>
          <Text
            style={[
              styles.contentText,
              {
                color: '#555',
                fontFamily: 'Roboto',
                fontSize: fontSize,
              },
            ]}>
            {description}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  firstTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('0.5%'),
  },
  cardIcon: {
    marginRight: wp('2%'),
  },
  text: {
    flex: 1,
  },
  switchContainer: {
    marginLeft: 'auto',
  },
  secondTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: hp('0.5%'),
  },
  contentText: {
    width: '100%',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 40,
  },
});

export default PaperSettingsCard;
