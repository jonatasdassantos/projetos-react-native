import React from "react";
import { Text } from "react-native";
import estilos from "./estilos";

export default function() {
    return <Text style={estilos.txtG}>Comp #Oficial</Text>
}

export function Comp1 () {
    return <Text style={estilos.txtG}>Comp #01</Text>
}

export function Comp2 () {
    return <Text style={estilos.txtG}>Comp #02</Text>
}