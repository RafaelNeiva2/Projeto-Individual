import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#2e2e2e"
    },
    img:{
        width: 150,
        height: 150,
        alignSelf:'center',
        borderRadius:200
        
       
    },
    containerHeader:{
        marginTop:"14%",
        paddingStart:'5%'

    },
    message:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#92B4EC",
        
        
        
    
    },
    form:{
        backgroundColor:"#F2EBE9",
        flex:1,
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        marginHorizontal:'7%',
        marginTop:75,
        height:400,
        borderRadius:10,
        

    },
    title:{
        marginVertical:10,
        fontSize: 18,
        fontWeight: "bold",
       

    },
    input:{
        backgroundColor:"#fff",
        paddingStart:10,
        paddingVertical:3,
        marginVertical:5,
        borderRadius:10,
        
        
    },
    botoes:{
        flexDirection: 'row', 
        justifyContent:'center',
        marginTop:15,

    },
    button:{
        backgroundColor:"#92B4EC",
        width:90,
        padding:7,
        alignItems:'center',
        marginVertical:25,
        marginRight:20,
        alignSelf:'center',
        borderRadius:10

    },
    buttonEntrar:{
        backgroundColor:"#3B9AE1",
        width:90,
        padding:7,
        alignItems:'center',
        marginVertical:25,
        alignSelf:'center',
        borderRadius:10

    },
    buttonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight:'600'
    },

    

})