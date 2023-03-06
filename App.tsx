import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Home from './src/screens/Home';

import Reactotron from 'reactotron-react-native';

console.tron = Reactotron
.configure()
.useReactNative()
.connect()

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Home />
    </>
  );
}