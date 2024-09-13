import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Modal, TextInput, Button, TouchableOpacity} from 'react-native';
import { RadioButton, IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useFormContext } from '../context/FormProvider';
import PaperTaskCard from '../components/PaperTaskCard';
import { hp, wp } from '../utils/screenSizes';

export default function Home() {
  const { tasks, addTask, removeTask} = useFormContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState({
    icon: '',
    title: '',
    status: 'todo',
    description: '',
    type: 'food',
  });

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <PaperTaskCard
      icon={item.icon}
      title={item.title}
      status={item.status}
      description={item.description}
      type={item.type}
      onPress={() => navigation.navigate('Details', { taskId: item.id })} 
    />
  );

  const handleAddTask = () => {
    addTask(newTask);
    setModalVisible(false);
    setNewTask({
      icon: '',
      title: '',
      status: 'todo',
      description: '',
      type: 'food',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
        <IconButton
                icon="plus"
                iconColor='white'
                size={hp('6%')}
                onPress={() => setModalVisible(true)}
                style={styles.addButton}
              />
      <View style={styles.textContainer}>
        <Text style={styles.title}>HELMET ON</Text>
        <Text style={styles.subtitle}>Your Battle Plan for Productivity</Text>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: wp('2%'), gap: 10 }}
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add New Task</Text>
          <TextInput
            placeholder="Title"
            style={styles.input}
            value={newTask.title}
            onChangeText={(text) => setNewTask({ ...newTask, title: text })}
          />
          <TextInput
            placeholder="Description"
            style={styles.input}
            value={newTask.description}
            onChangeText={(text) => setNewTask({ ...newTask, description: text })}
          />
          <TextInput
            placeholder="Icon"
            style={styles.input}
            value={newTask.icon}
            onChangeText={(text) => setNewTask({ ...newTask, icon: text })}
          />
          <RadioButton.Group
            onValueChange={(value) => setNewTask({ ...newTask, type: value })}
            value={newTask.type}
          >
            <RadioButton.Item label="Food" value="food" />
            <RadioButton.Item label="Exercise" value="exercise" />
            <RadioButton.Item label="Code" value="code" />
          </RadioButton.Group>
          <Button title="Add Task" onPress={handleAddTask} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E8E8E8',
    padding: 5,
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: hp('8%'),
    paddingBottom: hp('4%'),
  },
  addButton: {
    zIndex: 10,
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#333',
    fontSize: wp('9%'),
  },
  subtitle: {
    textAlign: 'center',
    marginTop: hp('0.5%'),
    fontFamily: 'Roboto',
    color: '#444',
    fontSize: 18,
  },
  cardContainer: {
    flex: 1,
    paddingBottom: hp('3%'),
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});
