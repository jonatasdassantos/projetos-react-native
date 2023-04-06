import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import estilos from '../estilos'

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[estilos.txtG, style.DisplayText]}>
            {props.num}
            </Text>
        </View>
        
    )
}

const style = StyleSheet.create({
    Display: {
       backgroundColor: '#000',
       padding: 20,
       width: 300,
    },
    DisplayText: {
        color: '#fff'
    }
})