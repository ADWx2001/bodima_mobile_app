import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Booking = () => {
  const trips = [
    {
      id: 1,
      train: 'Acela',
      time: '06:50 AM - 11:05 AM',
      duration: '4h 15m',
      from: 'Penn Station',
      to: 'South Station',
      transfers: '1 Transfers',
      price: '$115.00',
      label: 'Cheapest'
    },
    {
      id: 2,
      train: 'Amtrak',
      time: '02:40 AM - 07:53 AM',
      duration: '5h 13m',
      from: 'Penn Station',
      to: 'South Station',
      transfers: '0 Transfers',
      price: '$115.00',
      label: '2nd Cheapest'
    },
    {
      id: 3,
      train: 'Acela',
      time: '06:15 AM - 10:03 AM',
      duration: '3h 45m',
      from: 'Penn Station',
      to: 'Back Bay Station',
      transfers: '0 Transfers',
      price: '$152.00',
      label: 'Fastest'
    }
  ];

  return (
    <SafeAreaView className="bg-gray-100 h-full">
      <StatusBar backgroundColor="#ffffff" style="dark" />

      <View className="bg-blue-900 p-6 rounded-b-3xl shadow">
        <View className="flex-row justify-between items-center">
          <FontAwesome name="arrow-left" size={24} color="white" />
          <FontAwesome name="filter" size={24} color="white" />
        </View>
        <View className="mt-6">
          <Text className="text-gray-200">New York, NY</Text>
          <Text className="text-3xl font-bold text-white">NYP</Text>
          <FontAwesome name="train" size={24} color="white" />
          <Text className="text-gray-200">Boston, MA</Text>
          <Text className="text-3xl font-bold text-white">BBY</Text>
        </View>
        <View className="mt-4 flex-row justify-around">
          <Text className="text-gray-300">Oct 18</Text>
          <Text className="text-yellow-500">Oct 20</Text>
          <Text className="text-gray-300">Oct 21</Text>
          <Text className="text-gray-300">Oct 22</Text>
        </View>
      </View>

      <ScrollView className="mt-6 px-4">
        {trips.map((trip) => (
          <View key={trip.id} className="bg-white p-4 mb-4 rounded-lg shadow">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-bold">{trip.train}</Text>
              <Text className="text-green-500">{trip.label}</Text>
            </View>
            <Text className="mt-2 text-gray-600">{trip.time}</Text>
            <Text className="text-gray-600">{trip.duration}</Text>
            <View className="flex-row justify-between mt-2">
              <Text className="text-gray-600">{trip.from}</Text>
              <FontAwesome name="train" size={24} color="black" />
              <Text className="text-gray-600">{trip.to}</Text>
            </View>
            <Text className="mt-2 text-gray-600">{trip.transfers}</Text>
            <Text className="mt-4 text-lg font-bold">{trip.price}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Booking;
