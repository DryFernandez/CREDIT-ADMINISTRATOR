import { StatusBar } from "expo-status-bar";
import "nativewind";
import "./global.css";
import TabNavigator from "./TabNavigator";

export default function App() {
  return (
    <>
      <TabNavigator />
      <StatusBar style="auto" />
    </>
  );
}
