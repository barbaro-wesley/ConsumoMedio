import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
    const [Km, setKm] = useState('');
    const [litros, setLitros] = useState('');
  
    const calculaConsumoMedio = () => {
      if (Km && litros) {
        const media = parseFloat(Km) / parseFloat(litros); 
        navigation.navigate('Result', { media }); 
      } else {
        alert('Informe todos os dados');
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Quilometragem (km):</Text>
        <TextInput 
          keyboardType="numeric"
          value={Km}
          style={styles.input}
          onChangeText={setKm} // Corrigido de 'onChange' para 'onChangeText'
        />
  
        <Text style={styles.label}>Quantidade de combustível (L):</Text>
        <TextInput 
          keyboardType="numeric"
          value={litros}
          style={styles.input}
          onChangeText={setLitros} // Corrigido de 'onChange' para 'onChangeText'
        />
        <Button title="Calcular" onPress={calculaConsumoMedio} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      },
      label: {
        fontSize: 18,
        marginBottom: 10,
      },
      input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
      },
   
})