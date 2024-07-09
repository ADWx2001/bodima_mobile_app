import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Modal, Button, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

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

const locations = [
  'New York, USA',
  'San Francisco, USA',
  'Chicago, USA',
  'Miami, USA',
  'Dallas, USA',
  'Los Angeles, USA',
];


const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Los Angeles, USA');
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await fetch('https://locatesrilanka.herokuapp.com/cities');
      const data = await response.json();
      setLocations(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching locations:', error);
      setLoading(false);
    }
  };

  const filteredLocations = locations.filter(location => 
    location.toLowerCase().includes(search.toLowerCase())
  );

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setModalVisible(false);
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar backgroundColor="#ffffff" style="dark" />

      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <TouchableOpacity onPress={() => setModalVisible(true)} className="px-4">
          <Text className="text-gray-500">Current Location</Text>
          <Text className="text-xl font-bold">{selectedLocation}</Text>
        </TouchableOpacity>

        <View className="flex-row items-center px-4 mt-4">
          <TextInput
            placeholder="Search Dorm"
            className={`border rounded-lg p-2 ml-2 flex-1 ${isFocused2 ? 'border-orange-500' : 'border-gray-300'}`}
              onFocus={() => setIsFocused2(true)}
              onBlur={() => setIsFocused2(false)}
          />
          <TouchableOpacity className="ml-2 p-2 border border-gray-300 rounded-lg">
            <FontAwesome name="sliders" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="px-4 mt-4">
          <Image
            source={require('../../assets/hero.jpg')}
            className="w-full h-40 rounded-lg"
            resizeMode="cover"
          />
          <View className="absolute inset-0 justify-center items-center mt-3">
            <Text className="text-white text-lg font-bold left-6 top-5">Find Your Perfect</Text>
            <Text className="text-white text-3xl font-bold left-10 top-5"> Dorm With Us</Text>
            <TouchableOpacity className="bg-white py-2 px-4 rounded-full mt-5">
              <Link href='search'>
                <Text className="text-primary">Get Started</Text>
              </Link>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-white bg-opacity-50">
          <View className="w-5/6 bg-gray-50 rounded-lg p-3">
            <Text className="text-xl font-bold mb-4">Select Location</Text>
            <TextInput
              placeholder="Search Location"
              className={`border rounded-lg p-2 mb-4 ${isFocused ? 'border-orange-500' : 'border-gray-300'}`}
              value={search}
              onChangeText={setSearch}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {loading ? (
              <ActivityIndicator size="large" color="0000ff"/>):(
            <ScrollView>
              {filteredLocations.map((location, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleLocationSelect(location)}
                  className="py-2"
                >
                  <Text>{location}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
              )}
            <TouchableOpacity onPress={() => setModalVisible(false)} className="bg-secondary-100 mt-5 rounded-xl min-h-[45px] justify-center items-center text-center">
              <Text className='text-white font-psemibold text-md'>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};



export default Home

