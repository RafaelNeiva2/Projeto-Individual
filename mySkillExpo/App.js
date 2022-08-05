import { StatusBar } from 'react-native';
import React from 'react';
import Find from './src/pages/find';

import  {NavigationContainer}  from '@react-navigation/native';
import  Routes  from './src/routes';

export default function App() {
  return (
    // <NavigationContainer>
    //   <StatusBar backgroundColor='#000' barStyle="light-content"/>
    //   <Routes/>
    // </NavigationContainer>
       <Find/>
  );
}


