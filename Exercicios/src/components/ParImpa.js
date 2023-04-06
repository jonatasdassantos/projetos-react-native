import React from 'react'
import { View, Text } from 'react-native'
import estilos from './estilos'

export default ({num = 0}) => {

    return(
        <View>
            <Text style={estilos.txtG}>O Resultado é:</Text>
            {num % 2 === 0
               ? <Text style={estilos.txtG}>Par</Text>
               : <Text style={estilos.txtG}>Impar</Text>
            }   
        </View>
    )
}