import React from 'react'
import { Text, Platform } from 'react-native'
import estilos from './estilos'

export default _ => {
    if(Platform.OS === 'android') {
       return <Text style={estilos.txtG}>
            Android
        </Text>
    }else if (Platform.OS === 'ios') {
       return <Text style={estilos.txtG}>
            ios
        </Text>
    }else{
      return  <Text style={estilos.txtG}>
            Nem um dispositivo encontrado!!!
        </Text>

    }
}