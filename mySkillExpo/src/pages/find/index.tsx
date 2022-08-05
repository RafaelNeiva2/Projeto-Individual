import React, { useEffect,useState } from "react";
import { View,Text, TextInput } from "react-native";
import styles from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";
import SQL from "../../assets/image/postgresql.png";

export default function Find(){
    interface Linguagens {
        id: number,
        nome: string,
        url: string
    }

    const [searchText, setSearchText] = useState('');


    const [linguagens, setLinguagens] = useState([
        {
            id:'1',
            nome:'SQL',
            url : SQL
        }




    ]);

    const [list, setList] = useState(linguagens);

    // useEffect(() => {

    //     buscaListaLinguagens().then((res) => {
    //         setProdutos(res.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     }).finally(() => {

    //     })
    // }, [])

    useEffect(() => {
        if (searchText === '') {
            setList(linguagens);
        } else {
            setList(
                linguagens.filter(
                    (item) =>
                        item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            );
        }
    }, [searchText]);


    return(
        <View style={styles.container}>
            <TextInput placeholder="Search" style={styles.input} />
            <View style={styles.card}>
                

            </View>
        </View>
    );
}