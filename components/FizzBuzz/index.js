import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import { fizzbuzz } from "../../functions/fizzbuzz";

// create input field- number entry, held in state
// create button - onPress return result (also held state) from fizzbuzz function
// create text - render result from onPress

export default function RenderFizzBuzz() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function returnAnswer() {
    setResult(fizzbuzz(input));
  }

  return (
    <View>
      <Text>FizzBuzz Test</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="enter input number"
        onChange={handleChange}
        value={input}
      ></TextInput>
      <Button title="Click" onPress={returnAnswer}></Button>
      <Text>Your result is: {result}</Text>
    </View>
  );
}
