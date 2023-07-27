import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen2 from '../Screens/Screen2';
import Screen1 from '../Screens/Screen1';
import Screen3 from '../Screens/Screen3';
import Screen4 from '../Screens/Screen4';
import Screen5 from '../Screens/Screen5';
import Screen6 from '../Screens/Screen6';
import Screen from '../Screens/Screen';
import Screen7 from '../Screens/Screen7';
import Calculator from '../Screens/Calculator';
import CalculatorApp from '../Screens/CalculatorApp';
// import Screen6 from '../Screens/Screen6';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen
          name="Screen7"
          component={Screen7}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen6"
          component={Screen6}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen5"
          component={Screen5}
          options={{headerShown: false}}
        /> */}

        {/* <Stack.Screen
          name="CalculatorApp"
          component={CalculatorApp}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen"
          component={Screen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
