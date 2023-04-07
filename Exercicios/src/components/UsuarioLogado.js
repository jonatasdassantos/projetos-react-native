import React from "react"
import {Text} from "react-native"
import estilos from "./estilos"
import If from "./if"

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
          <If teste={usuario && usuario.nome && usuario.email}>
              <Text style={estilos.txtG}>
              Usuário Logado:
              </Text>
              <Text style={estilos.txtG}>
              {usuario.nome} - {usuario.email}
              </Text>
          </If>  
        </>
    )
}