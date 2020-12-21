import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { COLORS } from "./constants";

import Routes from "./routes";

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <Routes />
    </>
  );
}
