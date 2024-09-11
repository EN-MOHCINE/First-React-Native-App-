import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';



export default function App1(props) {
    const  {name ,navigation } = props;
    const itemId = 120 // Get itemId from the route parameter
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello from app1 {name}</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details',{itemId})}
            />
        </View>
    );
}