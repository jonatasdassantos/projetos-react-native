import Reat, { useState } from 'react'
import { Text } from 'react-native'
import estilos from '../estilos'

import ContadorBotoes from './ContadorBotoes'
import ContadorDisplay from './ContadorDisplay'

export default props =>  {
    const  [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
        <Text style={estilos.txtG}>
             Contador
        </Text>
        <ContadorDisplay num={num} />
        <ContadorBotoes inc={inc} dec={dec} />
        </>
    )
}