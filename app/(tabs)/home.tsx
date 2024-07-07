import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const dummyData = {
  nearestLocations: [
    { id: '1', name: 'Exclusive Dormie', location: 'Wall Street 12G', price: '$350 /month', rating: 4.8, image: require('../../assets/dorm1.jpg') },
    { id: '2', name: 'Elegantos Guest', location: 'Highway 110W', price: '$450 /month', rating: 4.9, image: require('../../assets/dorm2.jpg') },
    { id: '3', name: 'Heartford Studio', location: 'Upstate 110W', price: '$450 /month', rating: 4.9, image: require('../../assets/dorm4.jpg') },
    { id: '4', name: 'Nothern Oasis', location: 'Highway Blvd', price: '$450 /month', rating: 4.9, image: require('../../assets/dorm3.jpg') },
  ],
  popularDorms: [
    { id: '3', name: 'Aesthetic Dormies', location: 'Loveboat Long 90', price: '$500 /month', rating: 4.7, image: require('../../assets/dorm3.jpg') },
  ],
};

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar backgroundColor="#ffffff" style="dark" />

      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <View className="px-4">
          <Text className="text-gray-500">Current Location</Text>
          <Text className="text-xl font-bold">Los Angeles, USA</Text>
        </View>

        <View className="flex-row items-center px-4 mt-4">
          <TextInput
            placeholder="Search Dorm"
            className="flex-1 border border-gray-300 rounded-lg p-2"
          />
          <TouchableOpacity className="ml-2 p-2 border border-gray-300 rounded-lg">
            <FontAwesome name="sliders" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="px-4 mt-4">
          <Image
            source={require('../../assets/dorm1.jpg')}
            className="w-full h-40 rounded-lg"
            resizeMode="cover"
          />
          <View className="absolute inset-0 justify-center items-center">
            <Text className="text-white text-lg font-bold">Find Your Perfect Dorm With Us</Text>
            <TouchableOpacity className="bg-white py-2 px-4 rounded-full mt-2">
              <Text className="text-primary">Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-4 mt-4">
          <Text className="text-lg font-bold">Nearest Location</Text>
          <FlatList
            horizontal
            data={dummyData.nearestLocations}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View className="mr-4 w-64 bg-white rounded-lg shadow p-4">
                <Image source={item.image} className="w-full h-32 rounded-lg" resizeMode="cover" />
                <Text className="mt-2 text-lg font-bold">{item.name}</Text>
                <Text className="text-gray-500">{item.location}</Text>
                <Text className="text-primary mt-2">{item.price}</Text>
                <Text className="text-yellow-500 mt-1">★ {item.rating}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View className="px-4 mt-4">
          <Text className="text-lg font-bold">Popular Dorm</Text>
          {dummyData.popularDorms.map(item => (
            <View key={item.id} className="w-full bg-white rounded-lg shadow p-4 mt-4">
              <Image source={item.image} className="w-full h-32 rounded-lg" resizeMode="cover" />
              <Text className="mt-2 text-lg font-bold">{item.name}</Text>
              <Text className="text-gray-500">{item.location}</Text>
              <Text className="text-primary mt-2">{item.price}</Text>
              <Text className="text-yellow-500 mt-1">★ {item.rating}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      
    </SafeAreaView>
  );
};



export default Home

