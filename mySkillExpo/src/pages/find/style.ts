import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#2e2e2e"
    },
    input:{
        backgroundColor:"#fff",
        paddingStart:10,
        paddingVertical:3,
        marginTop:50,
        marginBottom:25,
        marginHorizontal:30,
        borderRadius:18,
        
    },
    card:{
        

    },
    linguagens:{
        backgroundColor:"#cccccc90",
        margin:10,
        height:60,
        width:330,
        flexDirection:'row',
        borderRadius:10,
        alignSelf:'center',
        padding:6,
        marginVertical:15,
        

    },
    imgMenor:{
        width:50,
        height:50,
        borderRadius:30

    },
    textNome:{
       fontSize:18,
       fontWeight: 'bold',
       color: "#333",

    },
    telefone:{
        fontStyle:'italic'
        
    }


})