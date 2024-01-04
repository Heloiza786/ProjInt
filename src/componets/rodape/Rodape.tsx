import React from 'react';
import { View, StyleSheet, Image, Text, } from 'react-native';
import IMAGEM1 from '../../../assets/rodape.jpg';

function Rodape() {
  return (
    <View style={styles.containerRodape}>
      <Text style={styles.textoRodape}>
        E-mail: info@paraisodospets.com{'\n'}
        Telefone: (21) 1234-5678{'\n'}
        Versão do Serviço: 3.0.1-alpha{'\n'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRodape: {
    backgroundColor: '#062D3E',
    padding: 10,
  },
  textoRodape: {
    color: '#FBBD08',
    fontSize: 16, // Ajuste conforme necessário
    textAlign: 'center',
    fontFamily: 'JosefinSans-Bold', // Substitua pelo nome da fonte que você está utilizando
  },
});

export default Rodape;

