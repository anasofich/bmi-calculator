import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [height, onChangeHeight] = useState("");
  const [weight, onChangeWeight] = useState("");
  const [bmi, setBMI] = useState("");

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);

    setBMI(bmiValue.toFixed(2));
  };

  const BMIResult = () => <View>{bmi !== null && <Text>Your BMI: {bmi}</Text>}</View>;

  return (
    <View style={styles.container}>
      <Text>BMI Calculator</Text>
      <TextInput style={styles.input} placeholder="Enter your height (cm)" onChangeText={onChangeHeight} value={height} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Enter your weight (kg)" onChangeText={onChangeWeight} value={weight} keyboardType="numeric" />
      <Button title="Calculate BMI" onPress={calculateBMI} />
      <BMIResult />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});
