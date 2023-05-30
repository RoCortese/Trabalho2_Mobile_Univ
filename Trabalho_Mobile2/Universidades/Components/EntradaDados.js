import { StyleSheet, View,TextInput, Button, Text,Pressable} from 'react-native';
import {useState} from 'react';

export const EntradaDados = (props) => {

    const [universidade, attUniversidade] = useState(null);
    const [pais, attPais] = useState(null);

    return <View style={{flexDirection: "column", justifyContent: "center"}}>
                <TextInput style={styles.input} 
                            placeholder='Universidade'
                            onChangeText={attUniversidade}
                            value={universidade}/>
                
                <TextInput style={styles.input} 
                            placeholder='País'
                            onChangeText={attPais}
                            value={pais}/>

                <Pressable color={"aqua"} style={styles.button} onPress={ () => props.returnPesquisar(universidade,pais)}>
                    <Text style={styles.text}>PESQUISAR</Text>
                </Pressable>    
            </View>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        width: "90%",
        borderWidth: 1,
        padding: 10,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginHorizontal: 30,
        borderRadius: 15,
        elevation: 3,
        backgroundColor:"aqua",
      },
      text:{
        color: "black"
      }
})
