import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from './ProductsCard.style';

const ProductCard = ({product, onSelect}) => {
  return (
    <Pressable onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{product.title} </Text>
          <Text style={styles.price}>{product.price} TL </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
