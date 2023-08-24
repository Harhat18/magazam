import {View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import LottieView from 'lottie-react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Login = () => {
  function handleLogin(values) {
    console.log(values);
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
        {({values, handleChange, handleSubmit}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı Adınızı Giriniz"
              value={values.username}
              onType={handleChange('username')}
            />

            <Input
              placeholder="Şifrenizi Giriniz"
              value={values.password}
              onType={handleChange('password')}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
