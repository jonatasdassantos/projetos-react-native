import React from "react";
import {Text} from 'react-native'
import estilos from "./estilos";

export default (props) => 
     (
<Text style={estilos.txtG}>
    O valor {props.max} é maior que o valor de {props.min}
    
</Text>
)
