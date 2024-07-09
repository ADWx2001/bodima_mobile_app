import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView className="h-full">
      <StatusBar backgroundColor="#ffffff" style="dark" />
      
      <View className=" p-6 rounded-b-3xl shadow mt-0">
        <View className="items-center">
          <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/108501761?v=4' }} 
            className="w-24 h-24 rounded-full" 
          />
          <Text className="mt-4 text-2xl font-bold">Asanka Dilshan</Text>
          <Text className="text-orange-500">⚡ ADWx2001</Text>
        </View>

        <View className="mt-6">
          <Text className="text-gray-600">Phone</Text>
          <Text className="text-lg">+9470 119 4600</Text>
        </View>
        <View className="mt-2">
          <Text className="text-gray-600">Mail</Text>
          <Text className="text-lg">asanka@gmail.com</Text>
        </View>
      </View>

      <View className="mt-6 px-6">
        <View className="flex-row justify-between items-center py-4 border-b border-gray-200">
          <View className="flex-row items-center">
            <FontAwesome name="moon-o" size={24} color="black" />
            <Text className="ml-4 text-lg">Dark mode</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>

        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-gray-200">
          <View className="flex-row items-center">
            <FontAwesome name="credit-card" size={24} color="black" />
            <Text className="ml-4 text-lg">Cards</Text>
          </View>
          <FontAwesome name="angle-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-gray-200">
          <View className="flex-row items-center">
            <FontAwesome name="user" size={24} color="black" />
            <Text className="ml-4 text-lg">Profile details</Text>
          </View>
          <FontAwesome name="angle-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-gray-200">
          <View className="flex-row items-center">
            <FontAwesome name="cog" size={24} color="black" />
            <Text className="ml-4 text-lg">Settings</Text>
          </View>
          <FontAwesome name="angle-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
