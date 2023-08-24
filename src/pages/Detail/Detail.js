import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch/useFetch';
import {API_URL} from '@env';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading';

const Detail = ({route}) => {
  const {id} = route.params;
  // console.log(id);

  const {loading, data, error} = useFetch(`${API_URL}/${id}`);
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default Detail;
