import React, {useState} from 'react';
import {
  Animated,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card, Text, Switch} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fontScaling from '../utils/fontScaling';
import {hp, wp} from '../utils/screenSizes';

const PaperSettingsCard = ({
  title,
  description,
  icon,
  status,
  onPress,
  notAnimated,
}) => {
  const [isEnabled, setIsEnabled] = useState(status === 'on');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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

  const AnimatedCard = (
    <Animated.View style={{transform: [{scale: scaleValue}]}}>
      <TouchableWithoutFeedback
        onPressIn={animateIn}
        onPressOut={animateOut}
        onPress={onPress}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.firstTextContainer}>
              <MaterialCommunityIcons
                color={'#333'}
                name={icon}
                size={iconSize}
                style={styles.cardIcon}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>
                  {status !== 'none' ? (isEnabled ? 'Dark' : 'Light') : title}
                </Text>
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
              <Text style={styles.contentText}>{description}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableWithoutFeedback>
    </Animated.View>
  );

  const StaticCard = (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.firstTextContainer}>
          <MaterialCommunityIcons
            color={'#333'}
            name={icon}
            size={iconSize}
            style={styles.cardIcon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {status !== 'none' ? (isEnabled ? 'Dark' : 'Light') : title}
            </Text>
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
          <Text style={styles.contentText}>{description}</Text>
        </View>
      </Card.Content>
    </Card>
  );

  return notAnimated ? StaticCard : AnimatedCard;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    borderWidth: 0,
    backgroundColor: '#fff',
    marginBottom: hp('1%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: '95%',
    alignSelf: 'center',
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
    fontSize: fontScaling(2.5),
    fontWeight: 'bold',
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
    color: '#555',
    fontFamily: 'Roboto',
    fontSize: fontScaling(1.5),
  },
});

export default PaperSettingsCard;
