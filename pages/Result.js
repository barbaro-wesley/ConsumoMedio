import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
    const { media } = route.params;
  
    const classificarConsumo = (media) => {
      if (media > 12) return 'A - Excelente';
      if (media <= 12 && media > 10) return 'B - Muito Bom';
      if (media <= 10 && media > 8) return 'C - Bom';
      if (media <= 8 && media > 4) return 'D - Regular';
      return 'E - Ruim';
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Média de Consumo: {media.toFixed(2)} Km/L</Text>
        <Text style={styles.label}>Classificação: {classificarConsumo(media)}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 22,
    marginBottom: 10,
  },
});
