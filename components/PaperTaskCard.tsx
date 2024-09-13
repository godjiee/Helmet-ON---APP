import React, { useState, useRef, useEffect } from 'react';
import { Animated, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Card, Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { hp, wp } from '../utils/screenSizes';

const PaperTaskCard = ({ title, status, description, type, icon, onPress}) => {
  const iconSize = hp('3%');
  const scaleValue = new Animated.Value(1);

  const animateIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <TouchableWithoutFeedback onPressIn={animateIn} onPressOut={animateOut} onPress={onPress}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.firstTextContainer}>
              <MaterialCommunityIcons color={'#333'} name={icon} size={iconSize} style={styles.cardIcon} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
              </View>
              <View
                style={[
                  styles.statusPill,
                  {
                    backgroundColor: status.toLowerCase() === 'done' ? '#047857' : '#999',
                  },
                ]}
              >
                <Text style={styles.statusPillText}>{status}</Text>
              </View>
              
            </View>
            <View style={styles.secondTextContainer}>
              <Text style={styles.contentText}>{description}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    borderWidth: 0,
    backgroundColor: '#fff',
    marginBottom: hp('1%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: '95%',
    alignSelf: 'center',
    position: 'relative',
  },
  firstTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('0.5%'),
  },
  cardIcon: {
    marginRight: wp('3%'),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#333',
    fontFamily: 'Roboto',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  statusPill: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  statusPillText: {
    color: 'white',
    fontWeight: 'bold',
  },
  secondTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: hp('0.5%'),
  },
  contentText: {
    color: '#555',
    fontFamily: 'Roboto',
    fontSize: hp('1.5%'),
  },
  
});

export default PaperTaskCard;
