import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Details({ route, navigation }) {
    const { itemId } = route.params ? route.params : { itemId: 0 };
    console.log(route.params); // will log the id of the application

    return (
        <View>
            <Text>
                show all details of the application {itemId}
                <Button title="toggle" onPress={() => navigation.toggleDrawer()} />
                <Button title="toggle" onPress={() => navigation.jumpTo("Home")} />
            </Text>
        </View>
    );
}