import {View, SafeAreaView, Text} from 'react-native';
import React from 'react';
import DiscoverMovies from './Components/DiscoverMovies';
import Styles from "./Styles"

const Home = () => {
  return (
    <SafeAreaView style={Styles.sectionBg}>
      <DiscoverMovies />
    </SafeAreaView>
  );
};

export default Home;
