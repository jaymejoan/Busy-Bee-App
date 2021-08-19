import React from "react";
import { StyleSheet, Image, View } from "react-native";

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/beeLogo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcd95c",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 220,
  },
});

export default SplashScreen;
