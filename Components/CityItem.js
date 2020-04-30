import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from './Card';

const CityItem = (props) => {
  return (
    <Card style={style.card}>
      <View style={style.tela}>
        <View>
          <View style={style.firstLine}>
            <Text>{props.forecast.item.name}</Text>
          </View>
          <View style={style.secondLine}>
            <Text style={style.value}>
              <Image style={style.icon} source={require('../Icons/celsius.png')} />
              &nbsp;&nbsp;
                            Sensação térmica: {props.forecast.item.main.feels_like + " \u00B0" + "C"}
            </Text>
            <Text style={style.value}>
              <Image style={style.icon} source={require('../Icons/sunset.png')} />
              &nbsp;&nbsp;Hora do pôr do sol: {new Date(props.forecast.item.sys.sunset * 1000).toLocaleTimeString()}
            </Text>
            <Text style={style.value}>
              <Image style={style.icon} source={require('../Icons/sunrise.png')} />
              &nbsp;&nbsp;Hora do nascer do sol: {new Date(props.forecast.item.sys.sunrise * 1000).toLocaleTimeString()}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const style = StyleSheet.create({
  card: {
    marginBottom: 5
  },
  tela: {
    flexDirection: 'row',
  },
  icon: {
    width: 35,
    height: 35
  },
  firstLine: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  secondLine: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    flexWrap: 'wrap'
  },
  value: {
    marginHorizontal: 2,
  }
});

export default CityItem;