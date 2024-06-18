import * as React from 'react';
import {Button, Card, Text, useTheme} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import MaterialCommunityIcons
import fontScaling from '../utils/fontScaling';
import {hp, wp} from '../utils/screenSizes';

const PaperCard = ({title, status, description, type, icon}) => {
  const theme = useTheme();

  const iconSize = hp('3.5%'); // Icon size set to 24 for consistency
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
          </View>
        </View>
        <View style={styles.secondTextContainer}>
          <Text
            style={[
              styles.contentText,
              {
                color: 'black',
                fontFamily: 'Roboto',
                fontSize: fontSize,
              },
            ]}>
            {description}
          </Text>
          <Text
            style={[
              styles.contentText,
              {
                color: 'black',
                fontFamily: 'Roboto',
                fontSize: fontSize,
              },
            ]}>
            {status}
          </Text>
          <Text
            style={[
              styles.contentText,
              {
                color: 'black',
                fontFamily: 'Roboto',
                fontSize: fontSize,
              },
            ]}>
            {type}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  firstTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: hp('0.5%'),
  },
  cardIcon: {
    marginRight: wp('2%'),
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

export default PaperCard;
