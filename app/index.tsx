import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

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
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-black ">Hey there!!</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "blue" }}>
        Go to home
      </Link>
    </View>
  );
};

export default App;
