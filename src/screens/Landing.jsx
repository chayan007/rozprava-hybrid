import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
// import splash from "../assets/splash.gif";

export default function LandingPage() {
  return (
      <WebView
      originWhitelist={['*']} 
      source={{  uri: 'https://github.com/facebook/react-native' }} style={{ marginTop: 20 }} />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
