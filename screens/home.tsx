import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import {IconButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import PaperTaskCard from '../components/PaperTaskCard';
import data from '../utils/data.json';
import fontScaling from '../utils/fontScaling';
import {hp, wp} from '../utils/screenSizes';

export default function Home() {
  const [hideCardInfo, setHideCardInfo] = useState(false);
  const navigation = useNavigation();

  const toggleHideCardInfo = () => {
    setHideCardInfo(prevState => !prevState);
  };

  const renderItem = ({item}) => (
    <PaperTaskCard
      icon={item.icon}
      title={item.title}
      status={item.status}
      description={item.description}
      type={item.type}
      hideCardInfo={hideCardInfo}
      onPress={() => navigation.navigate('Details')}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>HELMET ON</Text>
        <Text style={styles.subtitle}>Your Battle Plan for Productivity</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          icon={() => (
            <MaterialCommunityIcons
              color={'#333'}
              name={'apple-keyboard-control'}
              size={wp('7%')}
            />
          )}
          size={hp('3%')}
          onPress={toggleHideCardInfo}
        />
        <IconButton
          icon={() => (
            <MaterialCommunityIcons
              color={'#333'}
              name={'filter'}
              size={wp('7%')}
            />
          )}
          size={hp('3%')}
        />
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          contentContainerStyle={{paddingHorizontal: wp('2%'), gap: 10}}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
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
    paddingTop: hp('8%'),
    paddingBottom: hp('4%'),
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
    fontSize: fontScaling(5),
  },
  subtitle: {
    textAlign: 'center',
    marginTop: hp('0.5%'),
    fontFamily: 'Roboto',
    color: '#444',
    fontSize: fontScaling(1.8),
  },
  cardContainer: {
    flex: 1,
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
