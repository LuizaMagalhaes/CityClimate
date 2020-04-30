import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {

  return (
    <View style={{ ...style.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 0.32,
    backgroundColor: 'white',
    elevation: 4,
    padding: 12,
    borderRadius: 12
  }
});

export default Card;