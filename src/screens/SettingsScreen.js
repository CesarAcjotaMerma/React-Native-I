import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

export default function SettingsScreen(props) {

    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }

    return (
        <View>
            <Text>Estamos en SetingScreen</Text>
            <Text>Estamos en SetingScreen</Text>
            <Text>Estamos en SetingScreen</Text>
            <Text>Estamos en SetingScreen</Text>
            <Text>Estamos en SetingScreen</Text>
            <Text>Estamos en SetingScreen</Text>
            <Text>Estamos en SetingScreen</Text>
            <Button onPress={() => goToPage("Home")} title="Ir a Home"/>
        </View>
    )
}
