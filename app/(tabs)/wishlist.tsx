import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const WishlistScreen = () => {
  const wishes = [
    {
      id: 1,
      name: 'Tom Ford Cherry Eau De Parfum',
      price: '$300',
      status: 'Want',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Shur Shur Socks',
      price: '$50',
      status: 'Want',
      size: 'S',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      name: 'Prada Nylon Bag',
      price: '$1200',
      status: 'Got it',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 4,
      name: 'Macbook Pro 14',
      price: '$2300',
      status: 'Want',
      image: 'https://via.placeholder.com/100'
    }
  ];

  return (
    <SafeAreaView className="bg-gray-100 h-full">
      <StatusBar backgroundColor="#ffffff" style="dark" />
      <View className="flex-row justify-between items-center p-4 bg-white shadow">
        <FontAwesome name="arrow-left" size={24} color="black" />
        <Text className="text-xl font-bold">✨ BIRTHDAY WISHES ✨</Text>
        <Text className="text-blue-500">Edit</Text>
      </View>
      <View className="p-4">
        <Text className="text-center text-gray-500">Materialised: 1/5</Text>
        <View className="h-1 bg-gray-200 my-2">
          <View className="w-1/5 h-full bg-blue-500"></View>
        </View>
      </View>
      <ScrollView className="px-4">
        {wishes.map((wish) => (
          <View key={wish.id} className="flex-row justify-between items-center bg-white p-4 mb-4 rounded-lg shadow">
            <Image source={{ uri: wish.image }} className="w-16 h-16" />
            <View className="flex-1 ml-4">
              <Text className="text-lg font-bold">{wish.name}</Text>
              <Text className="text-gray-500">{wish.price}</Text>
              <Text className="text-gray-500">Status: {wish.status}</Text>
              {wish.size && <Text className="text-gray-500">Size: {wish.size}</Text>}
            </View>
            <Text className="text-blue-500">Check Shop <FontAwesome name="external-link" size={12} /></Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity className="bg-black p-4 rounded-full shadow absolute bottom-10 right-10">
        <Text className="text-white font-bold">+ Add Wish</Text>
      </TouchableOpacity>
      <View className="flex-row justify-between items-center p-4 bg-white shadow mt-4">
        <Text className="text-gray-500">Updated Just Now</Text>
        <Text className="text-gray-500">Created on 21/09/2023</Text>
      </View>
    </SafeAreaView>
  );
};

export default WishlistScreen;
