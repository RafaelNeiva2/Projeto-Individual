import React, { useState } from "react";
import { ScrollView, Text, Image, TouchableOpacity, FlatList, View, TextInput } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import {api} from '../../services/api';


export default function Login({navigation}) {
    const [dados, setDados] = useState({ nome:"",    email: "",     senha: ""   });
    
    const  Login= async() =>{
        const response = await api.post('login', dados);
    }
    return (
        <ScrollView style={styles.container}>

            <View style={styles.containerHeader}>
                <Image style={styles.img}
                source={require('../../assets/image/lock.png')}
              />
            </View>

            <View style={styles.form}>

            <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="name"
                    style={styles.input} 
                    onChangeText={(e) => setDados({ ...dados, nome: e })}/>

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="email"
                    style={styles.input}
                    onChangeText={(e) => setDados({ ...dados, email: e })}/>

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    style={styles.input} 
                    onChangeText={(e) => setDados({ ...dados, senha: e })}/>
                
                <View style={styles.botoes}>
                <TouchableOpacity style={styles.button}
                  onPress={ () => Login()} 
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.buttonEntrar}
                  onPress={ () => navigation.navigate("Find")}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity> 
                </View>  


            </View>

        </ScrollView>

    );
}