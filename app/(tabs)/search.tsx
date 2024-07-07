import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Search = () => {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [nights, setNights] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <SafeAreaView className="bg-blue-500 h-full">
      <StatusBar backgroundColor="#3b82f6" style="light" />
      
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <View className="px-4 py-4">
          <View className="flex flex-row justify-center">
            <TouchableOpacity className="bg-blue-400 rounded-full p-4 mr-2">
              <FontAwesome name="globe" size={24} color="white" />
              <Text className="text-white text-center">Tours</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-yellow-500 rounded-full p-4 ml-2">
              <FontAwesome name="building" size={24} color="white" />
              <Text className="text-white text-center">Hotels</Text>
            </TouchableOpacity>
          </View>
          
          <View className="mt-6 bg-white rounded-lg shadow p-4">
            <TextInput
              placeholder="Enter city or hotel name"
              className="border border-gray-300 rounded-lg p-2 mb-4"
              value={search}
              onChangeText={setSearch}
            />
            <TextInput
              placeholder="Date"
              className="border border-gray-300 rounded-lg p-2 mb-4"
              value={date}
              onChangeText={setDate}
            />
            <TextInput
              placeholder="Nights"
              className="border border-gray-300 rounded-lg p-2 mb-4"
              value={nights}
              onChangeText={setNights}
            />
            <TextInput
              placeholder="Guests"
              className="border border-gray-300 rounded-lg p-2 mb-4"
              value={guests}
              onChangeText={setGuests}
            />
            <TouchableOpacity className="bg-yellow-500 rounded-lg p-4">
              <Text className="text-white text-center">Search hotels</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-white text-xl font-bold mt-8">Best summer holidays deals</Text>

          <ScrollView horizontal className="mt-4">
            <View className="bg-white rounded-lg shadow p-4 mr-4">
              <Image source={require('../../assets/dorm1.jpg')} className="w-40 h-24 rounded-lg" />
              <Text className="mt-2 font-bold">Kemer, Turkey</Text>
              <Text className="text-gray-500">from $395</Text>
            </View>
            <View className="bg-white rounded-lg shadow p-4 mr-4">
              <Image source={require('../../assets/dorm2.jpg')} className="w-40 h-24 rounded-lg" />
              <Text className="mt-2 font-bold">Hurghada, Egypt</Text>
              <Text className="text-gray-500">from $472</Text>
            </View>
            <View className="bg-white rounded-lg shadow p-4 mr-4">
              <Image source={require('../../assets/dorm3.jpg')} className="w-40 h-24 rounded-lg" />
              <Text className="mt-2 font-bold">Lanzarote, Spain</Text>
              <Text className="text-gray-500">from $702</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      
    </SafeAreaView>
  );
};

export default Search;
