import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export default function Appdynamic() {
            {/* Dynamic ui   */}
          
return (
    <View style={styles.box}>
        <Text style ={styles.Text}>
            Hello from  AppDynamic!
        </Text>
    </View>
    )

}

const  windowWidth = useWindowDimensions.width;
const  windowheight = useWindowDimensions.height;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    } ,
    Text :{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        
        color: 'dark'
    } ,
    box :{
        width : windowWidth / 500 ?"60%":"100%" ,
        height: windowheight / 600 ?"60%":"100%",
    }
}) ;