import React from "react";
import { ScrollView, Text, Image, TouchableOpacity, FlatList, View, TextInput } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import Find from "../find";


export default function Login() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>

            <View style={styles.containerHeader}>
                <Image style={styles.img}
                source={require('../../assets/image/lock.png')}
              />
            </View>

            <View style={styles.form}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="email"
                    style={styles.input} />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    style={styles.input} />

                <TouchableOpacity style={styles.button}
                // onPress={ () => navigation.navigate('Find')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>    


            </View>

        </ScrollView>

    );
}