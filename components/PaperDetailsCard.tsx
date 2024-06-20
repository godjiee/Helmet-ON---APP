import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Animated, Text} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fontScaling from '../utils/fontScaling';
import {hp, wp} from '../utils/screenSizes';

const CustomSwitch = ({isOn, onToggle}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#D0E2F2', '#D0F2E2'],
  });

  return (
    <TouchableOpacity
      style={[styles.switchContainer, {backgroundColor}]}
      onPress={onToggle}>
      <Text style={[styles.switchText, {color: isOn ? '#047857' : '#999'}]}>
        {isOn ? 'done' : 'todo'}
      </Text>
      <Text style={[styles.switchText, {color: isOn ? '#999' : '#047857'}]}>
        {isOn ? 'todo' : 'done'}
      </Text>
    </TouchableOpacity>
  );
};

const PaperDetailsCard = ({status, description, type, icon}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Status:</Text>
          <View
            style={[
              styles.statusPill,
              {
                backgroundColor:
                  status.toLowerCase() === 'done' ? '#047857' : '#999',
              },
            ]}>
            <Text style={styles.statusPillText}>{status}</Text>
          </View>
          <CustomSwitch isOn={isSwitchOn} onToggle={onToggleSwitch} />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Description:</Text>
          <Text style={styles.infoText}>{description}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Type:</Text>
          <Text style={styles.typeTagText}>{type}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginVertical: hp('2%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: '#fff',
    padding: wp('3%'),
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  icon: {
    marginRight: wp('3%'),
  },
  statusContainer: {},
  infoTitle: {
    color: '#333',
    fontFamily: 'Roboto',
    fontSize: fontScaling(2.5),
    fontWeight: 'bold',
  },
  infoText: {
    color: '#555',
    fontFamily: 'Roboto',
    fontSize: fontScaling(2),
    marginTop: hp('0.5%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: hp('2%'),
  },
  button: {
    backgroundColor: '#047857',
    paddingHorizontal: wp('10%'),
  },
  statusPill: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginLeft: wp('2%'),
  },
  statusPillText: {
    color: 'white',
    fontWeight: 'bold',
  },
  typeTag: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginLeft: wp('2%'),
  },
  typeTagText: {
    color: '#333',
    fontWeight: 'bold',
  },
  divider: {
    marginVertical: hp('1%'),
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
  },
  switchText: {
    fontWeight: 'bold',
    fontSize: fontScaling(2.5),
    marginHorizontal: 5,
  },
});

export default PaperDetailsCard;
