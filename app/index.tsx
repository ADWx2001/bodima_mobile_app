import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import SignUp from "./(auth)/sign-up";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "../components/customButton";

const App = () => {
  return (
    // <SafeAreaView className="bg-primary h-full">
    //   {/* <Loader isLoading={loading} /> */}

    //   <ScrollView
    //     contentContainerStyle={{
    //       height: "100%",
    //     }}
    //   >
    //     <View className="w-full flex justify-center items-center h-full px-4">
    //       <Image
    //         source={images.logo}
    //         className="w-[130px] h-[84px]"
    //         resizeMode="contain"
    //       />

    //       <Image
    //         source={images.cards}
    //         className="max-w-[380px] w-full h-[298px]"
    //         resizeMode="contain"
    //       />

    //       <View className="relative mt-5">
    //         <Text className="text-3xl text-white font-bold text-center">
    //           Discover Endless{"\n"}
    //           Possibilities with{" "}
    //           <Text className="text-secondary-200">Aora</Text>
    //         </Text>

    //         <Image
    //           source={images.path}
    //           className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
    //           resizeMode="contain"
    //         />
    //       </View>

    //       <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
    //         Where Creativity Meets Innovation: Embark on a Journey of Limitless
    //         Exploration with Aora
    //       </Text>

    //       {/* <CustomButton
    //         title="Continue with Email"
    //         handlePress={() => router.push("/sign-in")}
    //         containerStyles="w-full mt-7"
    //       /> */}
    //       {/* <CustomButton
    //         title={"Continue with Email"}
    //         handlePress={undefined}
    //         containerStyles="w-full mt-7"
    //         textStyles={undefined}
    //         isLoading={undefined}
    //       /> */}
    //     </View>
    //   </ScrollView>

    //   <StatusBar backgroundColor="#161622" style="light" />
    // </SafeAreaView>
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4 text-center">
          <Image
            source={images.logo}
            className="w-72 h-72"
            resizeMode="contain"
          ></Image>
          <Text className="text-black text-lg font-psemibold text-center">
            Your dorm is few taps away from you!.
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {}}
            containerStyle="w-full mt-7"
            textStyles={undefined}
          />

          <CustomButton
            title="Continue with Google"
            handlePress={() => {}}
            containerStyle="w-full mt-3 bg-red-700"
            textStyles="text-white"
          />

          <Text className="text-xs text-grey-300 mb-0">test build v1</Text>
        </View>

        <StatusBar backgroundColor="#161622" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
