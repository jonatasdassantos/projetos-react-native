import React from "react"
import { Text } from "react-native"
import estilos from "../estilos"


export default props => {

    return(
        <>
          <Text style={estilos.txtG}>[Início]Membros da Familia</Text>
          {props.children}
          <Text style={estilos.txtG}>[Fim]Membros da Familia</Text>

        </>
    )
}