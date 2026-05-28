//importa o react e o usestate
//UseState serve para criar valores que podem mudar na tela
import React, { useEffect, useState } from 'react';
//Importa componentes nativos do react native
import {
    View, //caixa / área da tela
    Text, //textos
    Button, //Botão
    StyleSheet, //estilo
    TextInput,
    TouchableOpacity // Botão customizável
} from 'react-native-web';


//componente principal APP
export default function Jogador2() {
    //Cria um estado (variavel php) chamado "pontos"
    //pontos = valor atual
    //setPontos = função para alterar o valor
    //0 = valor inicial
    const [pontos1, setPontos1] = useState(0);
    const [pontos2, setPontos2] = useState(0);
    const [nome1, setNome1] = useState('Jogador 1');
    const [nome2, setNome2] = useState('Jogador 2');
    const [lider, setLider] = useState('Empate');
    //executar alguma acao automaticamente
    //quando algo mudar
    //nesse caso:
    //-toda vez que os pontos / nome mudarem
    //-o codego entro de useEffect sera executado
    useEffect(() => {
        if (pontos1 > pontos2) {
            setLider(nome1);

        } else if (pontos2 > pontos1) {
            setLider(nome2);
        } else {
            setLider('Empate');
        }

    }, [pontos1, pontos2, nome1, nome2]);
    //Função para aumentar 1 ponto
    function aumentar1() {
        //Pega o valor auto e o soma +1
        setPontos1(pontos1 + 1);
    }
    function aumentar2() {
        setPontos2(pontos2 + 1);
    }

    //Função para diminuir 1 ponto
    function diminuir1() {
        //Pega o valor auto e subtrai -1
        if (pontos1 > 0) {
            setPontos1(pontos1 - 1);
        }
    }
    function diminuir2() {
        if (pontos2 > 0) {
            setPontos2(pontos2 - 1);
        }
    }

    //Função para resetar o contador
    function resetar() {
        //volta o valor para 0
        setPontos1(0);
        setPontos2(0);
        setLider('Empate');
    }

    //Tudo o que está no RETURN aparece na tela
    return (
        //View principal do APP
        <View style={styles.container}>
            {/*Título do APP*/}
            <Text style={styles.titulo}>
                🎮Contador Game - Modo 2 Jogadores
            </Text>
            <Text style={styles.lider}>
                🏆 Lider: {lider}
            </Text>
            {/* area dos Jogadores */}
            <View style={styles.areaJogadores}>
                {/* Jogador 1 */}
                <View style={styles.areaJogador}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome do Jogador 1'
                        placeholderTextColor='#999'
                        value={nome1}
                        onChangeText={setNome1}
                    />
                    <Text style={styles.nome}>{nome1}</Text>

                    <Text style={styles.pontos}>{pontos1}</Text>
                    {/*Área dos botões +1 e -1*/}
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity onPress={aumentar1} style={styles.botao}>
                            <Text style={styles.textoBotao}>+1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={diminuir1} style={styles.botao}>
                            <Text style={styles.textoBotao}>-1</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*Jogador 2 */}
                <View style={styles.areaJogador}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome do Jogador 1'
                        placeholderTextColor='#999'
                        value={nome2}
                        onChangeText={setNome2}
                    />
                    <Text style={styles.nome}>{nome2}</Text>
                    <Text style={styles.pontos}>{pontos2}</Text>
                    {/*Área dos botões +1 e -1*/}
                    <View style={styles.areaBotoes}>
                        <TouchableOpacity onPress={aumentar2} style={styles.botao}>
                            <Text style={styles.textoBotao}>+1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={diminuir2} style={styles.botao}>
                            <Text style={styles.textoBotao}>-1</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            {/*Mostra o valor dos pontos*/}
            <TouchableOpacity onPress={resetar} style={styles.botaoReset}>
                <Text style={styles.textoBotao}>Resetar</Text>
            </TouchableOpacity>
        </View>
    );
}

//área de estilos do APP
const styles = StyleSheet.create({
    //  Estilo da tela principal
    container: {
        //Ocupa a tela toda
        flex: 1,
        //cor de fundo
        backgroundColor: '#000000ff',
        //centraliza horizontalmente
        alignItems: 'center',
        //centraliza verticalmente
        justifyContent: 'center',
        //espaçamento interno
        padding: 20,
    },

    //estilo do título
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
        //tamanho gigante
        fontSize: 80,
        //cor branca
        color: '#ffffffff',
        //espaço abaixo
        marginBottom: 40,
        //negrito
        fontWeight: 'bold',
    },

    //área dos botões
    areaBotoes: {
        //deixa um botão ao lado do outro
        flexDirection: 'row',
        //espaço abaixo
        marginBottom: 20,
    },

    //estilo dos botões
    botao: {
        //cor do botão
        backgroundColor: '#00ff88',
        //espaçamento vertical
        paddingVertical: 15,
        //espaçamento horizontal
        paddingHorizontal: 30,
        //arredonda as bordas
        borderRadius: 12,
        //espaço entre botões
        marginHorizontal: 10,
    },

    //estilo do botão resetar
    botaoReset: {
        //cor vermelha
        backgroundColor: '#ff3b30',
        //espaçamento vestical
        paddingVertical: 15,
        //espaçamento horizontal
        paddingHorizontal: 40,
        //arredonda as bordas
        borderRadius: 12,
    },

    //estilo do texto dos botões
    textoBotao: {
        //tamanho das letras
        fontSize: 22,
        //cor preta
        color: '#000',
        //negrito
        fontWeight: 'bold',
    },

    // área de jogadores
    areaJogadores: {
        flexDirection: 'row',
        //espaço entre eles
        grap: 15,
    },

    areaJogador: {
        backgroundColor: '#000000ff',
        width: 230,
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
    },

    input: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },

    nome: {
        fontSize: 20,
        color: '#ff00d0ff',
        fontWeight: 'bold',
    },

    lider: {
        fontSize: 22,
        color: '#ff00d0ff',
        marginBottom: 20,
        fontWeight: 'bold',
    },


});
