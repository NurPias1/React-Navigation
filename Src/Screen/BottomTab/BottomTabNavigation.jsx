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
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Profile') {
              iconName = focused ? 'happy-outline' : 'happy'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={26} color={color} />
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'Black',
          tabBarInactiveBackgroundColor: '#32a1fd',
          tabBarActiveBackgroundColor: '#19507e',
         
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settingspage} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarBadge: 3 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})
