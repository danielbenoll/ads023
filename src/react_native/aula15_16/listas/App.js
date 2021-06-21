import React from 'react';

import FlatListScreen from './components/FlatListScreen';
import SectionListScreen from './components/SectionListScreen';
import LoadingListScreen from './components/LoadingListScreen';

export default function App() {
  const opcao = 1;

  return (
    <>
      {(opcao == 1) && (<FlatListScreen />)}
      {(opcao == 2) && (<SectionListScreen />)}
      {(opcao == 3) && (<LoadingListScreen />)}
    </>
  );
}
