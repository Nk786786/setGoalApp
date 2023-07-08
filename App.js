import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import {StatusBar} from 'expo-status-bar';

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
  function addGoalHanlder(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [ 
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHanlder(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="red" onPress={startAddGoalHandler} />
      <GoalInput 
      visible={modalIsVisible}
      onAddGoal={addGoalHanlder}
      onCancel={endAddGoalHandler} />
      <View style={styles.goalsContaier}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHanlder}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );

}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a',
  },

  goalsContaier: {
    flex: 5,
  },
});
