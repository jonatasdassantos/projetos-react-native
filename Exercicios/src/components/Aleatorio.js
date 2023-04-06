import React from "react";
import { Text } from "react-native"
import estilos from "./estilos";



export default ({min,max}) => {
    const delta = max - min +1
    const aleatorio = parseInt(Math.random() * delta) + min

    return (
        <Text style={estilos.txtG}>
            O valor aleatorio é {aleatorio}
        </Text>
    )
}

