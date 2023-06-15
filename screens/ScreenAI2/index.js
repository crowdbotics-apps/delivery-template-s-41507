import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Feature 1: Lorem ipsum dolor sit amet.'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Feature 2: Consectetur adipiscing elit.'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Feature 3: Sed do eiusmod tempor incididunt.'
  }];

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.carousel}>
        <Image source={{
        uri: slides[currentSlide].image
      }} style={styles.image} />
        <Text style={styles.text}>{slides[currentSlide].text}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI4");
        }}><Text style={styles.buttonText}>Next</Text></Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  button: {
    backgroundColor: '#4b7bec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default OnboardingScreen;