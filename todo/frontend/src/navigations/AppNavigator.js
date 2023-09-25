import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoListScreen from '../components/Todo/TodoListScreen';
import TodoFormScreen from '../components/Todo/TodoFormScreen';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="TodoForm" component={TodoFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
