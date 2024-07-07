import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants"; // Ensure this path is correct
import CustomButton from "@/components/customButton";

const Third = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <ScrollView>
        <View className="w-full items-center px-4 text-center min-h-[85vh] justify-around">
          <Image
            source={images.screenThree}
            className="w-72 h-72 mt-12"
            resizeMode="contain"
          />
          <Text className="text-lg font-semibold text-black text-center mt-4">
            Easily find your favourite meals nearby.
          </Text>
          <View className="flex-row items-center mt-4">
            <View className="w-2 h-2 bg-gray-400 rounded-full mx-1"></View>
            <View className="w-2 h-2 bg-gray-500 rounded-full mx-1"></View>
            <View className="w-2 h-2 bg-orange-400 rounded-full mx-1"></View>
          </View>
          <CustomButton
            title="Create an Account"
            handlePress={() => router.push('sign-up')}
            textStyles={undefined}
            containerStyle='w-full'
          />
          <Text className="text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-orange-500 font-semibold">
              Login
            </Link>
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Third