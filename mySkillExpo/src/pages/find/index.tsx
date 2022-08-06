import React, {  useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import { api } from "../../services/api";
import styles from "./style";




interface contatos {
    id: number,
    nome: string,
    telefone: string,
    url: string
}


export default function Find() {
    const [contatos,setContatos] = useState([]);
    const[searchText, setSearchText]= useState('')
    const [list,setList] = useState(contatos)

    useEffect(() =>{
        api.get("contato").then(({data})=>{
            setContatos(data.contatos);
    
        });
        console.log(contatos)
    
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }
      ,[]);
        

    useEffect(() => {
        if (searchText === '') {
          setList(contatos);
        } else {
          setList(
            contatos.filter(
              (item) =>
                item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
            )
          );
        }
      }, [searchText]);

    
     

    return (
        <View style={styles.container}>

            <TextInput placeholder="Search" style={styles.input} 
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
              />
          {contatos?.map((contato)=>(<View style={styles.card}>
                <FlatList
                    data={list}
                    horizontal={false}
                    renderItem={({ item }) => {
                        return <TouchableOpacity style={styles.linguagens}>
                            <Image source={contato.url} style={styles.imgMenor} />
                            <View style={[{ position: "relative", paddingLeft: 10 }]}>
                                <Text style={styles.textNome}>
                                    {contato.nome}
                                </Text>
                                <Text style={styles.telefone}>
                                    {contato.telefone}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    }
                    }
                    keyExtractor={item => item.id}
                />

            </View>))}
            
        </View>
    );
}