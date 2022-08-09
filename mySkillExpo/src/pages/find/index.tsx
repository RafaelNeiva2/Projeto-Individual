import React, {  useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";
import  api  from "../../services/api";
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
    const [list,setList] = useState([])

    useEffect(() =>{
        api.get('contato').then((response)=>{
            setContatos(response.data);
            setList(response.data);
        });
        console.log(contatos)
    
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }
      ,[]);
        

    useEffect(() => {
        if (searchText === '') {
           setList([...contatos]);
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
        <ScrollView style={styles.container}>
        <View >

            <TextInput placeholder="Search" style={styles.input} 
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
              />
           
            <View style={styles.card}>
                <FlatList
                    data={list}
                    horizontal={false}
                    renderItem={({ item }) => {
                        return <TouchableOpacity key={item.id} style={styles.linguagens}>
                            <Image source={{ uri: `${item.url}` }} style={styles.imgMenor} />
                            <View style={[{ position: "relative", paddingLeft: 10 }]}>
                                <Text style={styles.textNome}>
                                    {item.nome}
                                </Text>
                                <Text style={styles.telefone}>
                                    {item.telefone}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    }
                    }
                    keyExtractor={item => item.id}
                />

            </View>
            
             
        </View>
        </ScrollView>
    );
}