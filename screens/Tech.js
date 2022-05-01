import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


export default function TechScreen() {
    
    return (
        <View>

        <View style={styles.container} >

            <Text style={styles.text} >
                Tech
            </Text>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#00e5ff',
        border: '3px solid #00b8d4'
    },
    text: {
        fontSize: 30,
        
        
    }
});