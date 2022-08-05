import React from "react";
import { View,Text, TextInput } from "react-native";
import styles from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Find(){
    return(
        <View style={styles.container}>
            <TextInput placeholder="Search" style={styles.input} />
            <View style={styles.card}>

            </View>
        </View>
    );
}