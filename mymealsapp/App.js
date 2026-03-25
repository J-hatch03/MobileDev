import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from "./Screens/CategoriesScreens";
import MealsOverviewScreen from "./Screens/MealsOverviewScreen";
import MealsDetailsScreen from "./Screens/MealsDetailsScreen";

const Stack = createNativeStackNavigator();

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
            name="MealsCategories" 
            component={CategoriesScreen} 
            options={{
              title: 'Meals Categories', 
            }} 
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealsDetails"
            component={MealsDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
