import React from 'react';
import {View, Text} from 'react-native';
import Banner from './Component/Pages/Banner';
import Products from './Component/Pages/Products';
import TopPrd from './Component/Pages/TopProduct';

const App = () => {
  return (
    <>
      <Banner />
      <TopPrd />
      <Products />
    </>
  );
};
export default App;
