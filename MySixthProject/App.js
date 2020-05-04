import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo ={
    uri: "https://denverscholarship.org/wp-content/uploads/2016/11/CSU-Logo.png",
    width: 80,
    height: 80
  }

  return (
    <View style={styles.container}>
     <ImageBackground source={csuLogo} style={styles.image}>
       <Text style={styles.text}> CSU Logo</Text>
     </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  text:{
    color: ReactDOM,
    fontSize: 40,
    fontWeight: 'bold',
  }
});
