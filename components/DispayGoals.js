import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

// This component is used to display the list of goals
const DispayGoals = (props) => {

    // Get the list of goals from the props
    const data = props.getGoalsObject;

    function deleteItem(index) {
        
    }

    // Render the list of goals in a scrollable view
    return (
        <View style={styles.GoalsContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    // Map through the list of goals and render each goal in a separate view
                    data.map((data, index) => (
                        <TouchableOpacity onPress={deleteItem(index)} key={index} style={styles.GoalstextContainer}>
                            <Text style={{ fontSize: 18, color: 'white' }}>{data}</Text>
                        </TouchableOpacity>
                    )
                    )
                }
            </ScrollView>
        </View>
    )
}

// Export the component
export default DispayGoals;

// Styles for the component
const styles = StyleSheet.create({
    GoalsContainer: {
        width: '100%',
        flex: 1,
    },
    GoalstextContainer: {
        width: '100%',
        height: 40,
        backgroundColor: 'green',
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'center'
    }
})