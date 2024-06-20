import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import fontScaling from '../utils/fontScaling';
import {hp, wp} from '../utils/screenSizes';
import PaperDetailsCard from '../components/PaperDetailsCard';
import data from '../utils/data.json';

export default function Details() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <IconButton
            icon="arrow-left"
            size={hp('3.5%')}
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          />
          <Text style={styles.title}>Fazer o almoço</Text>
          <Text style={styles.subtitle}>Details</Text>
        </View>
        <View style={styles.cardContainer}>
          <PaperDetailsCard
            icon={'silverware-fork-knife'}
            status={'done'}
            description={'description'}
            type={'food'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    padding: wp('2%'),
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp('8%'),
    paddingBottom: hp('4%'),
    position: 'relative',
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
  backButton: {
    position: 'absolute',
    top: hp('1.5%'),
    left: -12,
  },
  cardContainer: {
    flex: 1,
    paddingBottom: hp('3%'),
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
});
