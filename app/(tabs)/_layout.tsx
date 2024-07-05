import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <>
      <View className="items-center justify-center p-1">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
      </View>

      <Text className={`${focused ? 'font-semibold' : 'font-pregular'} text-xs`} style={{color:color}}>
        {name}
      </Text>
    </>
  );
};

const TabsLayout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#535aef',
        tabBarInactiveTintColor:'#373A40',
        tabBarStyle:{
          backgroundColor:'#F5F7F8',
          borderTopWidth:1,
          borderTopColor:'#F6F5F2',
          height: 68,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.search}
              color={color}
              focused={focused}
              name="Search"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.booking}
              color={color}
              focused={focused}
              name="Booking"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Save",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.wishlist}
              color={color}
              focused={focused}
              name="Wishlist"
            />
          ),
        }}
      />

<Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              focused={focused}
              name="Profile"
            />
          ),
        }}
      />

    </Tabs>
  );
};

export default TabsLayout;
