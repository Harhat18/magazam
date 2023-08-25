import {View, SafeAreaView, Alert} from 'react-native';
import {API_AUTH_URL} from '@env';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import LottieView from 'lottie-react-native';
import {Formik} from 'formik';

import usePost from '../../hooks/usePost/usePost';

const Login = ({navigation}) => {
  const {data, error, loading, post} = usePost();

  function handleLogin(values) {
    post(API_AUTH_URL, values);
  }
  if (error) {
    Alert.alert('Shopping', 'Bir hata oluştu');
  }
  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Shopping', 'Kullanıcı Bulunamadı');
    } else {
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
