import React from 'react';
import { View, Button, StyleSheet,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const MainGameScreen = ({ navigation }) => {
   
    return (
        <View style={styles.container}>
         <Text> main game screeen </Text>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
    },
});

export default MainGameScreen ;