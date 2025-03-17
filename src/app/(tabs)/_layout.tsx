import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        // tabBarInactiveTintColor: 'green',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Today',
          tabBarIcon: ({ color }) => (
            <Entypo name='news' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='newsPlus'
        options={{
          title: 'News+',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='cards' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='sports'
        options={{
          title: 'Sports',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='soccer-field'
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='audio'
        options={{
          title: 'Audio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='headphones' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='following'
        options={{
          title: 'Following',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='card-search'
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
