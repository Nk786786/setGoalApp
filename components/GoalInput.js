import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";



function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHanlder() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHanlder} color="#5e0acc" />
          </View>

          <View style={styles.button}>
          <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
         
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
   
    justifyContent: "center",
    alignItems: "center",
    padding:16,
  
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor:'#013088',
  },

  image:{
    width:100,
    height:100,
    margin:20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    width: "98%",
    padding: 16,
    color:'#120438',
    fontSize:22,
    borderRadius:6,
  },

  buttonContainer: {
    marginTop:16,
    flexDirection: "row",
  },
  button:{
    width:100,
    marginHorizontal:8,
  }
});

export default GoalInput;
