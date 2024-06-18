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
import data from '../utils/data.json'; // Ensure this path is correct
import fontScaling from '../utils/fontScaling';
import {hp, wp} from '../utils/screenSizes';

export default function Home() {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Details')}>
      <PaperCard
        icon={item.icon}
        title={item.title}
        status={item.status}
        description={item.description}
        type={item.type}
      />
    </TouchableHighlight>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>HELMET ON</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* <IconButton
          icon={() => (
            <MaterialCommunityIcons
              color={'#333'}
              name={'restart'}
              size={wp('7%')}
            />
          )}
          size={hp('3%')}
        /> */}
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
    paddingTop: hp('12%'),
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
    fontSize: fontScaling(5),
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
