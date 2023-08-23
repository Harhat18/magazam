import React from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, Text} from 'react-native';
import {API_URL} from '@env';
import ProductCard from '../../components/ProductCard/ProductsCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';

const Products = () => {
  const {data, loading, error} = useFetch(API_URL);

  const renderProduct = ({item}) => <ProductCard product={item} />;
  return <Loading />;
  // if (error) {
  //   return <Text>Bir Hata Oluştu : {error}</Text>;
  // }

  // if (loading) {
  //   return <Loading />;
  // }
  // return (
  //   <SafeAreaView>
  //     <FlatList data={data} renderItem={renderProduct} />
  //   </SafeAreaView>
  // );
};

export default Products;
