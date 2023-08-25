import React from 'react';
import {View, SafeAreaView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import {API_AUTH_URL} from '@env';

import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import LottieView from 'lottie-react-native';

import usePost from '../../hooks/usePost/usePost';

const Login = ({navigation}) => {
  const {data, error, loading, post} = usePost();

  function handleLogin(values) {
    post(API_AUTH_URL, values);
  }
  if (error) {
    Alert.alert('Magazada', 'Bir hata oluştu');
  }
  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Magazada', 'Kullanıcı Bulunamadı');
    } else {
      AsyncStorage.setItem('@USER', JSON.stringify(user));
      navigation.navigate('ProductsPage');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <View style={styles.animation_container}>
          <LottieView
            style={styles.animation}
            source={require('../../asests/login.json')}
            autoPlay
            loop
          />
        </View>
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı Adınızı Giriniz"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />

            <Input
              placeholder="Şifrenizi Giriniz"
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giriş yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};
