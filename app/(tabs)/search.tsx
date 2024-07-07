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
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar backgroundColor="#ffffff" style="dark" />
      
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <View className="px-4 py-4 bg-gray-50">
          <View className="flex flex-row justify-center">
            
            <TouchableOpacity className="bg-secondary-100 rounded-full p-4 ml-2 items-center">
              <FontAwesome name="building" size={24} color="white"  />
              <Text className="text-white text-center">Hostels</Text>
            </TouchableOpacity>
          </View>
          
          <View className="mt-6 bg-white rounded-lg shadow p-4">
            <TextInput
              placeholder="Enter city or hostel name"
              className={`border rounded-lg p-2 mb-4 ${isFocused1 ? 'border-orange-500' : 'border-gray-300'}`}
              onFocus={() => setIsFocused1(true)}
              onBlur={() => setIsFocused1(false)}
              value={search}
              onChangeText={setSearch}
              
            />
            <TextInput
              placeholder="Date"
              className={`border rounded-lg p-2 mb-4 ${isFocused2 ? 'border-orange-500' : 'border-gray-300'}`}
              onFocus={() => setIsFocused2(true)}
              onBlur={() => setIsFocused2(false)}
              value={date}
              onChangeText={setDate}
            />
            <TextInput
              placeholder="Duration of staying"
              className={`border rounded-lg p-2 mb-4 ${isFocused3 ? 'border-orange-500' : 'border-gray-300'}`}
              onFocus={() => setIsFocused3(true)}
              onBlur={() => setIsFocused3(false)}
              value={nights}
              onChangeText={setNights}
            />
            <TextInput
              placeholder="How many persons"
              className={`border rounded-lg p-2 mb-4 ${isFocused4 ? 'border-orange-500' : 'border-gray-300'}`}
              onFocus={() => setIsFocused4(true)}
              onBlur={() => setIsFocused4(false)}
              value={guests}
              onChangeText={setGuests}
            />
            <TouchableOpacity className="bg-secondary-100 mt-5 rounded-xl min-h-[45px] justify-center items-center text-center">
              <Text className="text-white text-center">Search my hostel</Text>
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
