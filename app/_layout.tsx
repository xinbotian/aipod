import { StyleSheet, Text, View } from "react-native";
import { Slot } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <Text> Header </Text>
      <Slot />
      <text> Footer </text>
    </>
  )
}

export default RootLayout