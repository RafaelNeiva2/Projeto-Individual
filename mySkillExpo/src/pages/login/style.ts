import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#89B5AF"
    },
    containerHeader:{
        marginTop:"14%",
        marginBottom:'10%',
        paddingStart:'5%'

    },
    message:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    
    },
    form:{
        backgroundColor:"#DED9C4",
        flex:1,
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        marginHorizontal:'7%',
        height:290,
        borderRadius:10
        

    },
    title:{
        marginVertical:5,
        fontSize: 18,
        fontWeight: "bold",

    },
    input:{
        backgroundColor:"#fff",
        paddingStart:5,
        marginVertical:5,
        borderRadius:5
        
    },
    button:{
        backgroundColor:"#D0CAB2",
        width:90,
        padding:5,
        alignItems:'center',
        marginVertical:15,
        alignSelf:'center',
        borderRadius:10

    },
    buttonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        flex: 1,
        
    }

})