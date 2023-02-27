import React from 'react';
import { View, TextInput, Text } from 'react-native';
import {styles} from './styles';

interface InputProps{
    origin: string;
    destiny: string;
}

export default function Inputs(){
    return(
        <View style={styles.container}>
            <View style={styles.containerModal}>
                <Text>OLA</Text>
            </View>
        </View>
    )
}