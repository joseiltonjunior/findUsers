import React from 'react';
import { StatusBar } from 'react-native';
import colors from './styles/themes/colors';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={colors.ColorBlackPrimary}
        barStyle="light-content"
      />
      <Routes />
    </>
  );
}
