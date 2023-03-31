import { Settings, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home'
import Profile from '../Profile'
import Settingspage from '../Settings'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()
const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline'
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-list' : 'ios-list-outline'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={26} color={color} />
          },
          tabBarActiveTintColor: 'green',

          tabBarInactiveTintColor: 'Black',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{}} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settingspage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})
