import { View, Text, StyleSheet, FlatList } from 'react-native';
import Task from '../Task';

const TodaysTasks = ({ data }) => {
  return (
    <>
      {data.length > 0 && (
        <View style={styles.taskContainer}>
          <Text style={styles.containerTitle}>Today's tasks 😭😭😭</Text>
        </View>
      )}
      <View style={styles.items}>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => <Task text={item.text} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.containerTitle}>No TODO's 🥳🥳🥳</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  containerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    margin: 30,
  },
});

export default TodaysTasks;
