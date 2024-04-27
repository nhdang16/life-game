import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { UserContext } from '../../store/UserContext';

const TimeBar = ({ duration, color, height, borderRadius }) => {
    const { time, setTime, age, setAge, plusAge } = useContext(UserContext);

    useEffect(() => {
        const increment = 100 / duration;
        const interval = setInterval(() => {
            setTime(prevProgress => {
                const newProgress = prevProgress + increment;
                return newProgress > 100 ? 100 : newProgress;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [duration]);

    useEffect(() => {
        if (time >= 100) {
            plusAge();
        }
    }, [time]);

    return (
        <View style={styles.container}>
            <View style={[styles.progressContainer, { height, borderRadius }]}>
                <View style={[styles.progressBar, { backgroundColor: color, width: `${time}%`, borderRadius }]} />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    progressContainer: {
        width: '100%',
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
    },
});

export default TimeBar;
