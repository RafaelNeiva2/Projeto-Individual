import React from "react";
import { ScrollView, Text, Image, TouchableOpacity, FlatList, View, TextInput } from "react-native";
import styles from "./style";

export default function Login() {

    return (
        <ScrollView style={styles.container}>

            <View style={styles.containerHeader}>
                <Text style={styles.message}> Bem-Vindo(a)</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="example@exaple.com"
                    style={styles.input} />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="*****"
                    style={styles.input} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>    


            </View>

        </ScrollView>

    );
}