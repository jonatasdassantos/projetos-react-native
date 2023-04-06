import React from "react"
import { Text } from "react-native"
import estilos from "../estilos"

export default props => {
    
    return (
       <Text style={estilos.txtG}>
        {props.nome} {props.sobrenome}
       </Text>
    )
}