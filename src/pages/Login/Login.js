import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import LottieView from 'lottie-react-native';

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
      <View style={styles.body_container}>
        <Input placeholder="Kullanıcı Adınızı Giriniz" />
        <Input placeholder="Şifrenizi Giriniz" />
        <Button text="Giriş Yap" />
      </View>
    </SafeAreaView>
  );
};

export default Login;
