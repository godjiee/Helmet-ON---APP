import * as React from 'react';
import {Button, Card, Text, useTheme} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fontScaling from '../utils/fontScaling';
import {hp, wp} from '../utils/screenSizes';

const PaperTaskCard = ({title, status, description, type, icon}) => {
  const theme = useTheme();

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
          {status.toLowerCase() === 'done' ? (
            <View style={[styles.statusPill, {backgroundColor: '#047857'}]}>
              <Text style={styles.statusPillText}>Done</Text>
            </View>
          ) : (
            <View style={[styles.statusPill, {backgroundColor: '#999'}]}>
              <Text style={styles.statusPillText}>To Do</Text>
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
          <View style={styles.typeTag}>
            <Text style={styles.typeTagText}>{type}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  firstTextContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items in the center vertically
    marginVertical: hp('0.5%'),
  },
  cardIcon: {
    marginRight: wp('2%'),
  },
  text: {
    flex: 1, // Allow text to take available space
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
  statusPill: {
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginLeft: wp('2%'), // Add margin to separate from the title
  },
  statusPillText: {
    color: 'white',
    fontWeight: 'bold',
  },
  typeTag: {
    backgroundColor: 'white', // Background color for the type tag
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: hp('1%'),
  },
  typeTagText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default PaperTaskCard;
