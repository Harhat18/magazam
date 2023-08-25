import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {API_PRODUCT_URL} from '@env';
import ProductCard from '../../components/ProductCard/ProductsCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error/Error';

const Products = ({navigation}) => {
  const {data, loading, error} = useFetch(API_PRODUCT_URL);

  const handleProductselect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductselect(item.id)} />
  );

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
