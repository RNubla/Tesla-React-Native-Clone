import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/';
import style from './styles';

const CarItem = (props) => {
  const {name, tagLine, image, tagLineCTA} = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine} <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={style.buttonsContainer}>
        <StyledButton
          type="primary"
          content={'Custom Order'}
          onPress={() => {
            console.warn('Custom Order Was Pressed');
          }}
        />
        <StyledButton
          type="secondary"
          content={'Existing Inventory'}
          onPress={() => {
            console.warn('Existing Inventory Was Pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
