import React, {useState} from 'react'
import Filho from './Filho'
import { Text } from 'react-native'
import estilos from '../estilos'

export default props => {
    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('')

    function exibirValor(numero, texto) {
        setTexto(texto)
        setNum(numero)
    }

    return (
        <>
          <Text style={estilos.txtG}> {texto}{num}
          </Text>
          <Filho 
             min={1}
             max={60}
             funcao={exibirValor}
          />

        </>
    )
}