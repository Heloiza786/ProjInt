

// import React, { useState, useEffect  } from "react";
// import { View, Text, TouchableOpacity, Button, StyleSheet, TextInput} from "react-native";
// import { StackNavigationEventMap } from "@react-navigation/stack";
// import axios from "axios";
// import apiUsuario from "../services/api";
//  import '../../../src/services/Rotas/apiUsuario';
// import { Link } from "@react-navigation/native";


// const ScreenCadastro = () =>{
//     const [nome, setName] = useState("");
//     const [sobrenome, setSobrenome] = useState("");
//     const [email, setEmail ] = useState("");
//     const [horario, setHorario] = useState("");
//     const [pelagem, setPelagem] = useState("");
//     const [especie, setEspecie] = useState("");
//     const [raca, setRaca] = useState("");  
// return(
// <View style={styles.container}>

// <Link to={'/cadastroScreens'} children={undefined}></Link>
    
//     <View style={styles.container}>
//     <TextInput onChangeText={newText => setName(newText)}placeholder="Nome" />
//     </View>

//     <View style={styles.container}>
//     <TextInput onChangeText={newText => setSobrenome(newText)}placeholder="Sobrenome" />
//     </View>

//     <View style={styles.container}>
//     <TextInput onChangeText={newText => setEmail(newText)}placeholder="Email" />
//     </View>

//     <View style={styles.container}>
//     <TextInput onChangeText={newText => setHorario(newText)}placeholder="Horario" />
//     </View>



//     <View style={styles.container}>
//     <TextInput onChangeText={newText => setPelagem(newText)}placeholder="Pelagem" />
//     </View>

//     <View style={styles.container}>
//     <TextInput onChangeText={newText => setEspecie(newText)}placeholder="Especie" />
//     </View>

//     <View style={styles.container}>
//     <TextInput onChangeText={newText => setRaca(newText)}placeholder="Raça" />
//     </View>


//     <TouchableOpacity
//       style={styles.button}
//       onPress= { postUser }>
//       <Text style={styles.buttonText}>Cadastrar</Text>
//     </TouchableOpacity>
//   </View>
// )};
// function dataUser(){
// return{
//     name: "",
//     lastName: "",
//     cpf: "",
//     email: "",
//     horario:"",
//     pelagem:"",
//     especie:"",
//     raca:"",

// }


// };
// function postUser(userData: any){
// axios.post("http://localhost:4000/api/user", userData)
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 24,
//       backgroundColor: '#eaeaea',
//     },input:{
//     // backgroundColor: 'red',
//     },containers:{

//     },label:{   

//     },button:{

//     },buttonText:{

//     }
// });


// export default ScreenCadastro;

