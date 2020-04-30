import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList, Keyboard, Text } from 'react-native';
import CityItem from './Components/CityItem';

export default function App() {

  const endPoint = "https://api.openweathermap.org/data/2.5/weather?lang=pt&units=metric&q=";
  const apiKey = 'd1e6fe98456f3898b3436b22dd0e67a1';

  const [city, setCity] = useState('');
  const [forecasts, setForecasts] = useState([]);
  const [error, setError] = useState(false)

  const catchCity = (city) => {
    setCity(city);
  }

  const getForecasts = () => {
    setForecasts([]);

    const target = endPoint + city + "&appid=" + apiKey;
    fetch(target)
      .then((dados) => dados.json())
      .then((dados) => {
        if (dados.cod && dados.cod == 200) {
          setError(false);
        } else {
          setError(true);
        }
        setForecasts([dados])
        Keyboard.dismiss()
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCity}
          placeholder="Pesquise uma cidade pelo nome"
          value={city}
          onChangeText={catchCity}
        />
        <Button title="Ok" onPress={getForecasts
        } />
      </View>
      {error ?
        <Text style={styles.errorMessage}>Cidade não encontrada</Text>
        :
        <FlatList
          data={forecasts}
          renderItem={
            forecast => (
              <CityItem forecast={forecast} />
            )
          }
        />

      }
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff'
  },
  nomeCity: {
    padding: 10,
    borderBottomColor: '#38323c',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  errorMessage: {
    color: 'red'
  }
});