import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign:'right',
        justifyContent: 'flex-end'
    },
    calculadoraContainer:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
     fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    resultadoPeque:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign:'right',
       
    },
    boton: {
        height: 70,
        width: 70,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
});

