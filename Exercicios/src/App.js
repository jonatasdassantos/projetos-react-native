import React from "react"
import { View, StyleSheet } from "react-native"

import UsuarioLogado from "./components/UsuarioLogado"

//import Familia from "./components/relacao/Familia"

//import Membro from "./components/relacao/Membro"
//import ParImpa from "./components/ParImpa"
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
        <UsuarioLogado usuario={{nome:'Jhom', email:'jhom@jhom.com'}}/>
        <UsuarioLogado usuario={{nome:'Maria'}}/>
        <UsuarioLogado usuario={{ email:'jhom@jhom.com'}}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/>
        
        { /*<Contador inicial={100} passo={10}/>
        <Familia>
            <Membro nome='Jonatas' sobrenome='Santos' />
            <Membro nome='Yasmin' sobrenome='Santos Silva' />
            <Membro nome='Renilda' sobrenome=' dos Santos Silva' />
            <Membro nome='Maria dulce' sobrenome='da Silva Silva' />
        </Familia>
        <ParImpa num={3}/>
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

