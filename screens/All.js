import React from 'react'
import { StyleSheet, View, Text } from 'react-native';


export default function HomeScreen() {
    
    return (
        

        <View  >

            <View style={styles.container} >
            <Text style={styles.text} >
                All News
            </Text>
            </View>

            <View style={styles.flex}>
                <Text style={styles.title} >
                    Title
                </Text>
                <Text style={styles.date} >
                    Date
                </Text>
            </View>

            <View style={styles.description}>
                <Text style={styles.title} >
                    Description
                </Text>
            </View>

            
            <View style={styles.flex}>
                <Text style={styles.title} >
                    Title
                </Text>
                <Text style={styles.date} >
                    Date
                </Text>
            </View>

            <View style={styles.description}>
                <Text style={styles.title} >
                    Description
                </Text>
            </View>

            <View style={styles.flex}>
                <Text style={styles.title} >
                    Title
                </Text>
                <Text style={styles.date} >
                    Date
                </Text>
            </View>

            <View style={styles.description}>
                <Text style={styles.title} >
                    Description
                </Text>
            </View>

            <View style={styles.flex}>
                <Text style={styles.title} >
                    Title
                </Text>
                <Text style={styles.date} >
                    Date
                </Text>
            </View>

            <View style={styles.description}>
                <Text style={styles.title} >
                    Description
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
        fontSize: 40,
        
        
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        
    },
    title: {
        fontSize: 35
    },
    date: {
        fontSize: 35
    },
    description: {
        padding: 20,
    }
});
