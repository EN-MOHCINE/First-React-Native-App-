import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'

export default function Details({route}) {

    const  {itemId} = route.params ;
    console.log(route.params) // will log the id of the application
  return (
    <View>
      <Text>
        show all details of the application {itemId}
      </Text>
    </View>
  )
}