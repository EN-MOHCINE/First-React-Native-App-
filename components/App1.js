import React from 'react';
import { Text, View } from 'react-native';



export default function App1(props) {
    const  {name} = props;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello from app1 {name}</Text>
        </View>
    );
}