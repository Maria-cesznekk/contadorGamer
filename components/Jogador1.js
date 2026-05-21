//Importa o React e o useState
//useState serve para criar valores quye pode mudar na tela
import React, { useState } from "react";
//Importar componentes nativos do react native
import {
  View, //caixa / área da tela
  Text, //textos
  Button,  //Botão
  StyleSheet, //Estilos
  TouchableOpacity //Botao custimzável
} from "react-native-web";

// Componente principal APP
export default function App() {
  //Cria uma esta chamado (variavel php) chamado 'pontos'
  //pontos = valor atual
  //setPontos = função para alterar o valor
  //0=valor inicial
  const [pontos, setPontos] = useState(0);
  //funcao para aumentar 1 ponto
  function aumentar() {
    //pega o valor auto e somar 1 ponto 
    setPontos(pontos + 1);
  }

  //funcao para diminuir 1 ponto
  function diminuir() {
    //pega o valor auto e subtrai -1
    setPontos(pontos - 1);
  }


  //funçao para resetar o contador
  function resetar() {
    //volta o valor para 0
    setPontos(0);
  }
  //tudo que esta no RETURN aparece na tela


  return (
    //View principal do APP
    <View style={styles.container}>
      {/*Titulo do APP*/}
      <Text style={styles.titulo}>
        🎮 Jogador 1
      </Text>
      {/*Mostra o valor dos pontos*/}
      <Text style={styles.pontos}>{pontos}</Text>
      {/*área dos botões +1 e -1*/}
      <View style={styles.areaBotoes}>
        <TouchableOpacity
          onPress={aumentar}
          style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={diminuir}
          style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity
        onPress={resetar}
        style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Resetar</Text>
      </TouchableOpacity>
    </View>

  );
}
// área de estilo do APP
const styles = StyleSheet.create({
  //estilo de tela principal
  container: {
    //ocupa a tela toda
    flex: 1,
    //cor de fundo
    backgroundColor: '#121212',
    //centraliza horizontalmente
    alignItems: 'center',
    //centraliza verticalmente
    justifyContent: 'center',
    //espaçamento interno 
    padding: 20,
  },

  //estilo de titulo
  titulo: {
    //tamanho da fonte
    fontSize: 32,
    //cor do texto
    color: '#ff00d0ff',
    //texto em negrito
    fontWeight: 'bold',
    //espaço abaixo
    marginBottom: 30,
  },

 //estilo dos pontos
  pontos: {
    //tamanha gigante
    fontSize: 80,
    //cor do texto
    color: '#ffffff',
    //espaço abaixo 
    marginBottom: 40,
    //texto em negrito 
    fontWeight: 'bold',
  },

  //area dos botões
  areaBotoes: {
    //deixa um botão ao lado do outro
    flexDirection: 'row',
    //espaço abaixo
    marginBottom: 20,
  },

  //estilo dos botoes + e -1
  botao: {
    //cor de texto
    backgroundColor: '#00ff88',
    //espaçamento  vertical
    paddingVertical: 15,
    //espaçamento horizontal
    paddingHorizontal: 30,
    //arredonda as bordas
    borderRadius: 12,
    //espaço entre botões
    marginHorizontal: 10,

  },
 //estilo do botao resetar
  botaoReset: {
    //cor vermelha
    backgroundColor: '#ff3b30',
    //espaçamentos
    paddingVertical: 15,
    paddingHorizontal: 40,
    //bordas arredondadas
    borderRadius: 12,

  },

  //estilo do texto dos botões
  textoBotao: {
    //tamanho da letra
    fontSize: 22,
    //cor do texto
    color: '#000',
    //negrito
    fontWeight: 'bold',
  },
});