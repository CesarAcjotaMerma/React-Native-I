import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

export default function HomeScreen(props) {
    const { navigation } = props;

    const goToSettings = () => {
        navigation.navigate("Settings")
    }

    console.log(props)
    return (
        <View>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Button onPress={goToSettings} title="Ir a Ajustes"/>
        </View>
    )
}
