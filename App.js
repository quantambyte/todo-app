import { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import TodaysTasks from './components/TodaysTasks';

import { data } from './utils/data';

export default function App() {
  const [tasks, setTasks] = useState(data);
  const [newTask, onChangeNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask) {
      return;
    }
    setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
    onChangeNewTask('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter Task here'
          value={newTask}
          onChangeText={onChangeNewTask}
          style={styles.input}
        />
        <Pressable style={styles.addTaskButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
      </View>
      <View style={styles.taskContainer}>
        <TodaysTasks data={tasks} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8eaed',
    flex: 1,
    paddingTop: 60,
  },
  inputContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#55bcf6',
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  addTaskButton: {
    backgroundColor: '#55bcf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
