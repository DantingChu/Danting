import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {
  function getFullName(fname, mName, lName){
    return fname + " " + mName + " " +lName;
  }
  return (
      <Text>
        {"\n\n\n\n\n\n\n"}
      Hello, I am a student in CIS 340! {"\n"}
      My full name is{getFullName("Danting", " ", "Chu")}{"\n"}
      </Text>
  );
}
