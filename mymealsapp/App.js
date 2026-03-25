import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./Screens/CategoriesScreens";
import MealsOverviewScreen from "./Screens/MealsOverviewScreen";
import MealsDetailsScreen from "./Screens/MealsDetailsScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigatior() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#331a1a' },
        headerTintColor: 'white',
        sceneStyle: { backgroundColor: '#553939' },
        drawerContentStyle: { backgroundColor: '#331a1a' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#331a1a',
        drawerActiveBackgroundColor: '#917474',
        
      }}
    >
      <Drawer.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#331a1a' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#553939' },
          }}
        >
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigatior} 
            options={{ 
              headerShown: false,
            }} 
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
          />
          <Stack.Screen
            name="MealsDetails"
            component={MealsDetailsScreen}
            option={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
