import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loginPage"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Mağazam',
            headerStyle: {backgroundColor: '#2f4f4f'},
            headerTitleStyle: {color: '#fff', fontSize: 20},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Ürün Detay',
            headerStyle: {backgroundColor: '#2f4f4f'},
            headerTitleStyle: {color: '#fff', fontSize: 20},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
