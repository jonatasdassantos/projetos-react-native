import React from "react";
import { Text } from "react-native"
import estilos from "./estilos";

export default props => 
    (
        <>
        <Text style={estilos.txtG}>{props.principal}</Text>
        <Text>{props.segundario}</Text>

        </>
    )
 