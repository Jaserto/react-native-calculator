import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    texto:String;
    color?:String;
    ancho?: boolean;
    accion: ( numeroTexto: string ) => void

}

export const BotonCalc = ({texto,color='#9B9B9B', ancho=false, accion }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => accion( texto ) }
        >
        <View style={{ 
            ...styles.boton,
            backgroundColor: color,
            width: (ancho) ? 160 : 70
           
        }}>
                   <Text style={{...styles.botonTexto, color: (color === '#9B9B9B') ? 'black': 'white'}}>
                       {texto}
                   </Text>
               </View>
               </TouchableOpacity>
    )
}
