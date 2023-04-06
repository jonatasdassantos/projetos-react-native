import React from "react"
import { View, StyleSheet } from "react-native"

import ParImpa from "./components/ParImpa"
//import Diferenciar from "./components/Diferenciar"
//import ContadorV2 from './components/contador/ContadorV2'
//import Pai from "./components/indireta/Pai"
//import Pai from "./components/direta/Pai"
//import Contador from "./components/Contador"
//import Botao from "./components/Botao"
//import Titulo from "./components/Titulo"
//import Aleatorio from "./components/Aleatorio"
//import Minmax from "./components/Minmax"
//import CompPadrao, {Comp1,Comp2} from './components/Multi'
//import Primeiro from './components/primeiro'


export default () => (
    <View style={style.App}>
        <ParImpa num={3}/>
        { /*<Contador inicial={100} passo={10}/>
        <ContadorV2/>
        <Pai />
        <Pai/>
        <Contador/>
        
        <Botao/>
        <Titulo principal="Cadastro de Produtos" segundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    
    <Minmax min={3} max={20} />
    <Minmax min={1} max={30} />*/}
        {/* <CompPadrao />
    <Comp1 />
    <Comp2 />
<Primeiro /> */}
    </View>

)

const style = StyleSheet.create({
    App: {

        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

