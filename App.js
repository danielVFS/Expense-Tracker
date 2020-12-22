import "react-native-gesture-handler";
import React from "react";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

import { COLORS } from "./constants";

import Routes from "./routes";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      <Routes />
    </>
  );
}
