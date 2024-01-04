import { StatusBar } from 'expo-status-bar';
import { Image,ImageBackground, StyleSheet, Text, View} from 'react-native';
import{ SafeAreaView } from 'react-native-safe-area-context';
import bullets from '../../services/bullets';
import Bullets from '../../componets/bullets/Bullets';
import ImageFundoBullets from '../../../assets/images.jpg';
import ImagesPets from '../../../assets/Group.jpg';

import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-screens';
import { FontAwesome } from '@expo/vector-icons'; 





export default function Header() {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <View style={styles.headerTopElements}>
        {/* <FontAwesome name="user-circle-o" size={24} color="black" /> */}
        {/* <Text> Esse é um teste tela </Text> */}
        <Image source={ImagesPets} style={styles.backgroundImage} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: 700,
    height: 200,
    marginLeft: 'auto',
    marginRight: 10,
    // flex: 1,
    // resizeMode: 'cover',
    // position: 'absolute',
    // width: '100%',
    // height: '400%',
    // zIndex: -1,
  },
  searchBar: {
    marginVertical: 10,
  },
  headerTopElements: {
    marginVertical: 10,
  },
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

      
  


