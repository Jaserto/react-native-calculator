import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {
    return (
        <View>
           <Text style= { styles.resultado}>
              1,500.00
           </Text>
        </View>
    )
}
