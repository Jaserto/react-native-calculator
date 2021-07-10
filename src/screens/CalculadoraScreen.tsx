import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {


    const [numero, setNumero] = useState('100');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0');
    }

    
    const btnDel = () => {
        let negativo = '';
        let numeroTemp = numero;
        if ( numero.includes('-') ) {
            negativo = '-';
            numeroTemp = numero.substr(1);
        }

        if ( numeroTemp.length > 1 ) {
            setNumero( negativo + numeroTemp.slice(0,-1) );
        } else {
            setNumero('0');
        }
    }


    const armarNumero = ( numeroTexto:string ) => {
        //No aceptar doble punto
        if(numero.includes('.')&& numeroTexto === '.') return;

        if(numero.startsWith('0') || numero.startsWith('-0')){

            //Punto decimal.
            if(numeroTexto === '.'){
                setNumero( numero + numeroTexto );

            } else if (numeroTexto === '0' && numero.includes('.') ){
                setNumero(numero + numeroTexto);

                //evaluar si es diferente de cero y no tiene un punto
            } else if(numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto);
                //evitar 0000.0
            } else if(numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            }

        }else{
            setNumero(numero + numeroTexto);
        }

      
    }
    

    const positivoNegativo = () => {
        if( numero.includes('-')){
            setNumero( numero.replace('-','') );
        }else{
            setNumero('-' + numero );
        }
    } 
    return (
        <View style={styles.calculadoraContainer}>
             <Text style= { styles.resultadoPeque}>
                 {numeroAnterior}
           </Text>
           <Text 
           style= { styles.resultado}
           numberOfLines={1}
           adjustsFontSizeToFit
           >
            {numero}
           </Text>

           <View style= {styles.fila}>
               <BotonCalc texto="C" accion={limpiar} />
               <BotonCalc texto="+/-" accion={positivoNegativo}/>
               <BotonCalc texto="del" accion={btnDel}/>
               <BotonCalc texto="/"  accion={limpiar} color="#FF9427" />
           </View>
           <View style= {styles.fila}>
               <BotonCalc texto="7" accion={armarNumero} />
               <BotonCalc texto="8" accion={armarNumero} />
               <BotonCalc texto="9" accion={armarNumero} />
               <BotonCalc texto="X" color="#FF9427" />
           </View>
           <View style= {styles.fila}>
               <BotonCalc texto="4" accion={armarNumero} />
               <BotonCalc texto="5" accion={armarNumero} />
               <BotonCalc texto="6" accion={armarNumero} />
               <BotonCalc texto="-" color="#FF9427" />
           </View>
           <View style= {styles.fila}>
               <BotonCalc texto="1" accion={armarNumero} />
               <BotonCalc texto="2" accion={armarNumero} />
               <BotonCalc texto="3" accion={armarNumero} />
               <BotonCalc texto="+" color="#FF9427" />
           </View>
           <View style= {styles.fila}>
               <BotonCalc texto="0" accion={armarNumero} ancho/>
               <BotonCalc texto="." accion={armarNumero} />
               <BotonCalc texto="=" color="#FF9427" />
           </View>
          
        </View>
    )
}
