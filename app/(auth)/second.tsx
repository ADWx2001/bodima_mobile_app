import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants"; // Ensure this path is correct
import CustomButton from "@/components/customButton";

const Second = () => {
  return (
    <View>
      <Text>Second</Text>
    </View>
  )
}

export default Second