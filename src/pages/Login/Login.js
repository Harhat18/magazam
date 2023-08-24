import {View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import LottieView from 'lottie-react-native';
import {Formik} from 'formik';

const Login = () => {
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
        onSubmit={formValues => console.log(formValues)}>
        {formik => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı Adınızı Giriniz"
              value={formik.values.username}
              onType={formik.handleChange('username')}
            />
            <Input
              placeholder="Şifrenizi Giriniz"
              value={formik.values.password}
              onType={formik.handleChange('password')}
            />
            <Button text="Giriş Yap" onPress={formik.handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
