import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import InputGoals from "./components/InputGoals";
import DispayGoals from "./components/DispayGoals";
import { useState } from 'react';

// This is the main component of the app
export default function App() {
  // Define state variables for the list of goals and the current goal input
  const [getGoals, setGoals] = useState('');
  const [getGoalsObject, setGoalsObj] = useState([]);

  // Log the list of goals to the console for debugging purposes
  console.log(getGoalsObject);

  // Render the input and display components
  return (
    <SafeAreaView style={styles.mainContainer}>
      <InputGoals setGoals={setGoals} setGoalsObj={setGoalsObj} getGoals={getGoals} />
      <DispayGoals getGoalsObject={getGoalsObject} setGoalsObj={setGoalsObj}/>
    </SafeAreaView>
  )
}

// Styles for the component
const styles = StyleSheet.create({
  mainContainer: {
    padding: 40,
    gap: 10,
    flex: 1,
  }
})