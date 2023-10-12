import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

// This component is used to input and save goals
const InputGoals = (props) => {

    // This function is called when the user types in the input field
    function setGoalsOnChange(text) {
        props.setGoals(text);
    }

    // This function is called when the user clicks the "Add My Goals" button
    function saveGoals() {
        // Add the current goal to the list of goals
        props.setGoalsObj((goals) => [...goals, props.getGoals]);
        // Clear the input field
        props.setGoals('');
    }

    // Render the input field and button
    return (
        <View style={styles.inputContainer}>
            <View style={styles.input}>
                <TextInput value={props.getGoals} placeholder='Enter your goal' style={styles.inputText} onChangeText={setGoalsOnChange} />
            </View>
            <View>
                <TouchableOpacity setOpacityTo={6} style={styles.buttonContainer} onPress={saveGoals}>
                    <Text style={{ color: "white", fontSize: 18, textAlign: 'center' }}>Add My Goals</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

// Export the component
export default InputGoals;

// Styles for the component
const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 20,
        gap: 10,
    },
    input: {
        width: "100%",
        backgroundColor: "#fff",
        gap: 8,
        paddingHorizontal: 15,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 1 },
        elevation: 7,
    },
    inputText: {
        padding: 8,
        paddingHorizontal: 20,
        fontSize: 20,
        borderColor: "grey",
        color: 'grey'
    },
    buttonContainer: {
        width: '100%',
        padding: 10,
        paddingVertical: 15,
        backgroundColor: "green",
        paddingHorizontal: 15,
    }
})