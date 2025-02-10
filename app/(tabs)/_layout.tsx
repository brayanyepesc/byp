import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Link, Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Icon } from "../utils/Icon";

const TabLayout: React.FC = () => {
  const colorScheme = useColorScheme() ?? "light";
  const activeTintColor = Colors[colorScheme].tint;
  const textColor = Colors[colorScheme].text;

  const renderHeaderRight = () => (
    <Link href="/modal" asChild>
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name="info-circle"
            size={25}
            color={textColor}
            style={[styles.headerIcon, { opacity: pressed ? 0.5 : 1 }]}
          />
        )}
      </Pressable>
    </Link>
  );

  const screenOptions = {
    tabBarActiveTintColor: activeTintColor,
    headerShown: useClientOnlyValue(false, true),
  };

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Criptomonedas",
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
          headerRight: renderHeaderRight,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Mis favoritas",
          tabBarIcon: ({ color }) => <Icon name="heart" color={color} />,
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 15,
  },
});

export default TabLayout;
