import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableHighlight, // Import TouchableOpacity
} from 'react-native';
import {Button, IconButton, ActivityIndicator} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import PaperCard from '../components/PaperCard';
import PaperButton from '../components/PaperButton';
import settingsData from '../utils/settingsData.json'; // Ensure this path is correct
import fontScaling from '../utils/fontScaling';
import {hp, wp} from '../utils/screenSizes';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Godjie</Text>
        <Text style={styles.subtitle}>
          A better tomorrow starts with your hard work today
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    padding: 5,
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: hp('6%'),
    paddingBottom: hp('6%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: wp('2%'),
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#333',
    fontSize: fontScaling(4),
  },
  subtitle: {
    textAlign: 'center',
    marginTop: hp('0.5%'),
    fontFamily: 'Roboto',
    color: '#444',
    fontSize: fontScaling(1.5),
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    paddingBottom: hp('3%'),
  },
  navigateButton: {
    backgroundColor: '#0066CC',
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
