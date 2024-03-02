import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import ToDo from "./ToDo";

const TodoList = () => {
  const [title, setTitle] = useState("To Do List");
  const [text, setText] = useState();
  const [list, setList] = useState(["Hello world"]);

  //Add Item Mthod
  const addItem = () => {
    const updatedList = list;
    updatedList.push(text);
    setList(updatedList);
    setText("");
  };

  const deleteItem = (index) => {
    const updatedList = list.filter((todo) => todo !== index);
    setList(updatedList);
  };

  return (
    <View style={{ width: "80%", marginBottom: 60 }}>
      <Text style={[styles.algin, styles.font]}>{title}</Text>
      <ScrollView>
        {list.map((x, index) => (
          <ToDo key={index} item={x} index={index} delete={deleteItem} />
        ))}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button title="Add Item" onPress={addItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  algin: {
    alignSelf: "center",
  },
  font: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});

export default TodoList;
