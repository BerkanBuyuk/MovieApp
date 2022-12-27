import {SafeAreaView, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GET} from '../Services/API';
import {SliderBox} from 'react-native-image-slider-box';
import {IMAGE_POSTER_URL} from '../config';
import Constants from '../Constants';

const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/discover/movie');
      setMovies(response.results);

      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.backdrop_path}`,
      );

      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setImages(backImages);
    };

    getMovies();
  }, []);

  return (
    <SafeAreaView>
      <SliderBox images={images} dotColor={Constants.secondaryColor} />
    </SafeAreaView>
  );
};

export default DiscoverMovies;
